/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0B1120',
        navy: '#131C31',
        surface: '#1A2540',
        card: '#1E2D4D',
        accent: '#6C5CE7',
        'accent-light': '#A29BFE',
        cyan: '#00CEC9',
        amber: '#FDCB6E',
        'off-white': '#F8F9FC',
        muted: '#8899B4',
      },
    },
  },
  plugins: [],
};
