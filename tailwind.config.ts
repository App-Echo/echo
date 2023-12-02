import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '48rem',
      md: '64rem',
      lg: '76rem',
      xl: '96rem',
      '2xl': '128rem',
    },
    spacing: {
      '1': '0.4rem',
      '2': '0.8rem',
      '3': '1.2rem',
      '4': '1.6rem',
      '5': '2.4rem',
      '6': '3.2rem',
      '7': '4.8rem',
      '8': '5.4rem',
      '9': '6rem',
      '10': '6.4rem',
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '2.8rem',
      '4xl': '3.2rem',
      '5xl': '3.6rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        mirage: {
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
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        diagonal: 'linear-gradient(45deg, #2b4779 0%, #253555 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
