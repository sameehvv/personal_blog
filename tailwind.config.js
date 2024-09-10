module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              backgroundColor: '#e2e8f0', // Grey background for code blocks
              color: '#e3342f', // Red text for code
              padding: '2px 4px',
              borderRadius: '4px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
