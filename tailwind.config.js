/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'sidebar-dark-gray': '#333333', // Description 0
        'vscode-dark': '#1E1E1E',      // Description 1
        'gradient-start': 'rgba(6, 11, 40, 0.74)',    // Existing gradient start color
        'gradient-end': 'rgba(10, 14, 35, 0.71)',     // Existing gradient end color
        'navy-blue': '#1B263B',
        'red-gradient': '#f56565',      // Red color from your gradient (#f56565, Tailwind red-500)
        'blue-gradient': '#3182ce',     // Blue color from your gradient (#3182ce, Tailwind blue-600)
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #f56565, #3182ce)', // Your gradient
        'dark-blue-gradient': 'linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)',
        'red-gradient': 'linear-gradient(90deg, #EA0023 0%, #754DEA 100%)',
        'blue-fade-gradient': 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
        'gradient-red-purple': 'linear-gradient(90deg, rgba(234, 0, 35, 0.5) 0%, rgba(117, 77, 234, 0.5) 100%)',
        'custom-dark-gradient': 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
        'blue-linear': 'linear-gradient(180deg, #0075FF 0%, rgba(0, 117, 255, 0) 100%)',
      },
      spacing: {
        '32': '8rem',   // for logo dimensions
        '904': '904px',
        '1440': '1440px',
      },
      borderRadius: {
        '20': '20px',
        'md': '0.375rem',
        '[100px]': '100px',
      },
      maxWidth: {
        'md': '28rem',  // for form width
      },
      backdropBlur: {
        '56.5': '56.5px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
};