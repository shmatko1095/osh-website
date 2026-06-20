/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#12111d',
        ink: '#2c2e2e',
        muted: '#5f6268',
        page: '#f7f7f5',
        stone: '#efefec',
        line: '#deded9',
        heat: '#f97316',
        'heat-hover': '#ea580c',
        'heat-dark': '#b93807',
        trust: '#0369a1'
      },
      fontFamily: {
        sans: ['Manrope Variable', 'system-ui', 'sans-serif'],
        heading: ['Manrope Variable', 'system-ui', 'sans-serif'],
        body: ['Manrope Variable', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(18, 17, 29, 0.08)'
      }
    }
  },
  plugins: []
};
