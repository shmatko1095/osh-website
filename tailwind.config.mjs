/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        muted: '#475569',
        line: '#dbeafe',
        skytrust: '#0ea5e9',
        skysoft: '#e0f2fe',
        heat: '#f97316',
        paper: '#f8fbff'
      },
      fontFamily: {
        heading: ['Rubik', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
