import type { Config } from 'tailwindcss';

const mirage = {
  '50': '#f4f6fb',
  '100': '#e8ecf6',
  '200': '#cbd8ec',
  '300': '#9db6dc',
  '400': '#6990c7',
  '500': '#4672b1',
  '600': '#345995',
  '700': '#2b4779',
  '800': '#273e65',
  '900': '#253555',
  '950': '#111827',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        diagonal: 'linear-gradient(45deg, #2b4779 0%, #253555 100%)',
      },
      colors: {
        mirage,
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '1rem',
        '4': '1.5rem',
        '5': '2rem',
        '6': '3rem',
      },
      screens: {
        sm: '48rem',
        md: '64rem',
        lg: '76rem',
        xl: '96rem',
        '2xl': '128rem',
      },
      boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      textColor: {
        primary: '#1fb6ff',
        secondary: '#7e5bef',
        danger: '#ff49db',
        success: '#13ce66',
        warning: '#ffc82c',
        info: '#8492a6',
        light: '#d3dce6',
        dark: '#273444',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};

export default config;
