/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#413ea0',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'system-ui'],
      },
    },
  },
  plugins: [],
};
