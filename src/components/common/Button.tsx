interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const Button = ({ children, onClick, isActive }: ButtonProps) => {
  const className = isActive ? ' bg-[#413ea0] text-white' : '';

  return (
    <button type="button" onClick={onClick} className={` bg-white p-1 px-3 rounded-2xl ${className}`}>
      {children}
    </button>
  );
};

export default Button;
