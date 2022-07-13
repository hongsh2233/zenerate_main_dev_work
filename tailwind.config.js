const em = (px) => `${px / 16}em`,
  rem = (px) => ({ [px]: `${px / 16}rem` }),
  px = (num) => ({ [num]: `${num}px` })
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }
const px0_20 = { ...Array.from(Array(21)).map((_, i) => `${i}px`) }
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{html,ts,js,vue}', './index.html'],
  theme: {
    screens: {
      base: { min: '', max: px(768) },
      md: { min: px(1024), max: px(768) },
      lg: { min: px(1024), max: '' },
    },
    fontSize: {
      44: [
        '44px',
        {
          letterSpacing: '0px',
          lineHeight: '1.3',
        },
      ],
      40: [
        '40px',
        {
          letterSpacing: '0px',
          lineHeight: '1.3',
        },
      ],
      38: [
        '38px',
        {
          letterSpacing: '0px',
          lineHeight: '1.3',
        },
      ],
      34: [
        '34px',
        {
          letterSpacing: '0px',
          lineHeight: '1.3',
        },
      ],
      32: [
        '32px',
        {
          letterSpacing: '0px',
          lineHeight: '1.5',
        },
      ],
      30: [
        '30px',
        {
          letterSpacing: '0px',
          lineHeight: '1.5',
        },
      ],
      26: [
        '26px',
        {
          letterSpacing: '0px',
          lineHeight: '1.2',
        },
      ],
      24: [
        '24px',
        {
          letterSpacing: '0px',
          lineHeight: '1.4',
        },
      ],
      22: [
        '22px',
        {
          letterSpacing: '0px',
          lineHeight: '1.2',
        },
      ],
      20: [
        '20px',
        {
          letterSpacing: '0px',
          lineHeight: '1.5',
        },
      ],
      18: [
        '18px',
        {
          letterSpacing: '0px',
          lineHeight: '1.5',
        },
      ],
      16: [
        '16px',
        {
          letterSpacing: '0px',
          lineHeight: '1.5',
        },
      ],
    },
    fontWeight: {
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
    },
    extend: {
      transitionProperty: {
        border: 'border',
      },
      flex: {
        2: '2 2 0%',
      },
      gridTemplateColumns: {
        base: 'repeat(24, minmax(0, 1fr))',
        sm: 'repeat(12, minmax(0, 1fr))',
        xs: 'repeat(4, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
        'ibm-condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
      },
      colors: {
        black: '#000729',
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#4D49F4',
          hover: '#4643E0',
          active: '#3E3BCB',
        },
        core: {
          50: '#ECEFFF',
          100: '#DCDFFF',
          200: '#C5CBFF',
          300: '#A4AEFF',
          400: '#7D8AFF',
          500: '#5C6DFF',
          700: '#3E3CCB',
        },
        gray: {
          50: '#F7F7F9',
          70: '#F2F2F5',
          100: '#ECEDF0',
          200: '#E3E3E8',
          250: '#DADBE1',
          300: '#D2D4DA',
          350: '#CBCDD2',
          // ---------------- gray-400: Caption Text ----------------
          400: '#B9BAC1',
          450: '#A6A9B0',
          500: '#8D9095',
          550: '#7E8186',
          600: '#6A6D73',
          650: '#5A5D63',
          // ---------------- gray-700: Sub Text ----------------
          700: '#484A4F',
          750: '#3D3F42',
          800: '#343538',
          850: '#2A2B2D',
        },
        red: {
          50: '#FFF3F4',
          200: '#FF9198',
          300: '#FF717A',
          400: '#FF4A55',
          500: '#EF333E',
        },
        blue: {
          200: '#B4CEFF',
          300: '#8CB4FF',
          400: '#6097FF',
          500: '#3D80FF',
        },
        mint: {
          200: '#9BFCF6',
          300: '#6AF3EB',
          400: '#30E9DD',
          500: '#36DCD2',
        },
        green: {
          200: '#8DFABF',
          300: '#63F4A6',
          400: '#1DD873',
          500: '#04C05A',
        },
        yellow: {
          200: '#FFD976',
          300: '#FFCA42',
          400: '#FFBB0D',
          500: '#FFA420',
        },
        purple: {
          50: '#F2EBFF',
          200: '#BF98FF',
          300: '#AD7BFF',
          400: '#9555FF',
          500: '#8032FF',
        },
        magenta: {
          200: '#FEAEFF',
          300: '#FD91FF',
          400: '#F26BF4',
          500: '#E950EC',
        },
        cyan: {
          200: '#8DDDFF',
          300: '#62D0FF',
          400: '#1CBBFF',
          500: '#0EAFF4',
        },
        buildinguse: {
          parking: '#B9BAC1',
          retail: '#F070F2',
          industrial: '#36DCD2',
          hotel: '#F97B5F',
          condo: '#864EFF',
          office: '#FFCC47',
          apartment: '#56CF78',
          ground: '#6A6D73',
        },
        doc: {
          blue: '#4646FE',
          black: '#231F20',
          gray: {
            50: '#F9F9F9',
            70: '#F2F2F5',
            500: '#9B9B9B',
            700: '#6F7073',
          },
        },
      },
      spacing: px0_200,
      padding: px0_200,
      borderRadius: px0_100,
      borderWidth: px0_20,
      fontSize: px0_100,
      lineHeight: px0_100,
      margin: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
      }),
      gap: px0_200,
      maxWidth: px0_200,
      minWidth: px0_200,
      minHeight: px0_200,
      boxShadow: {
        modal: '0px 5px 30px rgba(0, 0, 0, 0.3)',
        100: '0px 0px 8px rgba(0, 0, 0, 0.08)',
        200: '0px 0px 8px rgba(0, 0, 0, 0.18)',
        300: '0px 0px 6px rgba(0, 0, 0, 0.3)',
        400: '0px 0px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants: {
    extend: {
      // opacity: ['disabled'],
    },
  },
  plugins: [
    ({ addComponents, addVariant, theme }) => {
      addVariant('not-last', '&:not(:last-child)')
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-selected', '&:not(.selected)')
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
      addComponents({
        // ---------------- text ----------------

        '.text-24-semi-bold': {
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-22-semi-bold': {
          fontWeight: '600',
          fontSize: '22px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-20-semi-bold': {
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-20-medium': {
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-18-semi-bold': {
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-18-medium': {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-18-regular': {
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '1.25',
          letterSpacing: '0px',
        },
        '.text-16-semi-bold': {
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-16-medium': {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-16-regular': {
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-15-semi-bold': {
          fontWeight: '600',
          fontSize: '15px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-15-medium': {
          fontWeight: '500',
          fontSize: '15px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-14-semi-bold': {
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-14-medium': {
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-14-regular': {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-13-semi-bold': {
          fontWeight: '600',
          fontSize: '13px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-13-medium': {
          fontWeight: '500',
          fontSize: '13px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-13-regular': {
          fontWeight: '400',
          fontSize: '13px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-12-semi-bold': {
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-12-medium': {
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-12-regular': {
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-11-medium': {
          fontWeight: '500',
          fontSize: '11px',
          lineHeight: '1.40',
          letterSpacing: '-0.02em',
        },
        '.text-10-semi-bold': {
          fontWeight: '600',
          fontSize: '10px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-10-medium': {
          fontWeight: '500',
          fontSize: '10px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-10-regular': {
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '1.35',
          letterSpacing: '0px',
        },
        '.text-9-medium': {
          fontWeight: '500',
          fontSize: '9px',
          lineHeight: '1.40',
          letterSpacing: '-0.02em',
        },
        '.text-uppercase-button': {
          fontWeight: '600',
          lineHeight: '1.25',
          letterSpacing: '0.08rem',
        },
        '.dim-black-70': {
          background: 'rgba(0, 7, 41, 0.7)',
        },
        '.dim-black-20': {
          background: 'rgba(0, 7, 41, 0.2)',
        },
        '.dim-black-10': {
          background: 'rgba(0, 7, 41, 0.1)',
        },
        '.dim-black-5': {
          background: 'rgba(0, 7, 41, 0.05)',
        },
        '.dim-primary-10': {
          background: 'rgba(77, 73, 244, 0.1)',
        },
      })
    },
  ],
}
