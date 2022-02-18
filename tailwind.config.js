module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#393939',
        secondary: '#C4C4C4',
        inputs: '#1A1A1A',
      },
      backgroundImage: {
        profile: "url('/images/profile.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
