module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    sm: { min: '640px', max: '767px' },
    // => @media (min-width: 640px and max-width: 767px) { ... }

    md: { min: '768px', max: '1023px' },
    // => @media (min-width: 768px and max-width: 1023px) { ... }

    lg: { min: '1024px', max: '1279px' },
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    xl: { min: '1280px', max: '1535px' },
    // => @media (min-width: 1280px and max-width: 1535px) { ... }

    '2xl': { min: '1536px' },
    // => @media (min-width: 1536px) { ... }
    extend: {
      screens: {
        xxxs: {
          min: '320px',
          max: '374px',
        },
        xxs: {
          min: '375px',
          max: '424px',
        },
        xs: {
          min: '425px',
          max: '639px',
        },
      },
      width: {
        15: '30%',
        97: '48rem',
        98: '23%',
        73: '17.5rem',
        74: '17rem',
        '1/3.1': '21%',
        '1/3.2': '22%',
        '1/3.3': '23%',
        '1/3.4': '24%',
        '1/3.5': '25%',
        '1/3.6': '26%',
        '1/3.7': '27%',
        '1/3.8': '28%',
        '1/3.9': '29%',
      },
      gap: {
        0.25: '2.5%',
        0.3: '3%',
        0.31: '3.1%',
        0.32: '3.2%',
        0.33: '3.3%',
        0.34: '3.4%',
        0.35: '3.5%',
        0.36: '3.6%',
        0.37: '3.7%',
        0.38: '3.8%',
        0.39: '3.9%',
      },
      padding: {
        'p-1': '1%',
        'p-2': '2%',
        'p-3': '3%',
        'p-4': '4%',
        'p-5': '5%',
        'p-6': '6%',
        'p-7': '7%',
        'p-8': '8%',
        'p-9': '9%',
        'p-10': '10%',
      },
    },
  },
  plugins: [],
};
