interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const Button = ({ children, onClick, isActive }: ButtonProps) => {
  const className = isActive ? 'bg-primary text-white' : 'bg-white text-black';

  return (
    <button type="button" onClick={onClick} className={`p-1 px-3 rounded-2xl ${className}`}>
      {children}
    </button>
  );
};

export default Button;
