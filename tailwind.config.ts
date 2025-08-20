import type { Config } from 'tailwindcss';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        p: {
          DEFAULT: '#008BD0',
          '2': '#003B8D',
          '3': '#001736',
          '4': '#F7FCFF',
        },
        black: {
          DEFAULT: '#191919',
        },
        s: {
          DEFAULT: '#9CFFFA',
          100: '#EDF2F6',
        },
        t: {
          DEFAULT: '#011672 ',
        },
        blue: {
          DEFAULT: '#5b7bfb',
          100: '#8D7EFF70',
          200: '#35f3fb',
        },
        green: {
          DEFAULT: '#FF000073',
          100: '#EBF0E6',
          200: '#0ee5dc',
        },
      },
      boxShadow: {
        head: '0 10px 35px -3px rgba(0,0,0,0.1)',
        card: '0px 25px 70px 0px rgba(0, 0, 0, 0.07058823529411765)',
      },
      height: {
        450: '450px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'side-in-top': {
          '0%, 50%': { opacity: '0', transform: 'translatey(100px)' },
          '100%': { opacity: '1', transform: 'translatey(0px)' },
        },
        'side-in-right': {
          '0%, 50%': { opacity: '0', transform: 'translatex(1300px)' },
          '100%': { opacity: '1', transform: 'translatex(0px)' },
        },
        'side-in-left': {
          '0%, 50%': { opacity: '0', transform: 'translatex(-1300px)' },
          '100%': { opacity: '1', transform: 'translatex(0px)' },
        },
        'slide-in-from-right-bottom': {
          '0%, 30%': {
            opacity: '0',
            transform: 'translate(200000px , 200000px)',
          },
          '30%, 70%': { opacity: '0', transform: 'translate(50%,50%)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%)' },
        },
        blob: {
          '0%': {
            borderRadius: '50% 49%',
          },
          '15%': {
            borderRadius: '25% 30%%',
          },
          '30%': {
            borderRadius: '25% 30%',
          },
          '45%': {
            borderRadius: '30% 70%',
          },
          '50%': {
            borderRadius: '50% 30%%',
          },
          '65%': {
            borderRadius: '50% 30%',
          },
          '90%': {
            borderRadius: '25% 50%',
          },
          '100%': {
            borderRadius: '50% 48%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'side-in-right': 'side-in-right 0.5s ease-in-out',
        'side-in-left': 'side-in-left 0.5s ease-in-out',
        'side-in-top': 'side-in-top 0.2s ease-in-out',
        'slide-in-from-right-bottom': 'slide-in-from-right-bottom 0.5s linear',
        blob: 'blob 10s infinite linear',
      },
      backgroundImage: {
        'service-card': 'linear-gradient(180deg, #00000000 45%, #184341 100%)',
        'service-card-hover':
          'linear-gradient(180deg, #00000000 45%, #0A46E5 100%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
} satisfies Config;

export default config;
