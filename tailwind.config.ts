import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'az-green': '#4E8F20',
        'az-green-deep': '#183A1D',
        'az-black': '#0A0A0A',
        'az-charcoal': '#151515',
        'az-offwhite': '#F5F5F0',
        'az-neutral': '#EAEAE5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
