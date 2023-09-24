/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "turquoise":"#00AB8E",
        "turquoiseHover":"#00C7A9",
      },
      fontFamily: {
        "space-grotesk": ["SpaceGrotesk"],
        inter: ["Inter"],
      },
      fontSize: {
        "category": "clamp(0.7rem, 1.3vw, 1rem);",
      }
    },
  },
  plugins: [],
}
