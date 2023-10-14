const theme = {
  grid: {
    container: '130rem',
    padding: '2rem',
  },
  border: {
    radius: '2.4rem',
  },
  font: {
    family: {
      global:
        'Barlow, Work Sans, Roboto, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu,Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      barlow: 'Barlow',
      worksans: 'Work Sans',
    },
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '3.2rem',
      xxlarge: '4.8rem',
      huge: '6.4rem',
    },
  },
  colors: {
    colorType1: '#FFC66F',
    colorType2: '#582C83',
    colorType3: '#AB56FF',
    colorType4: '#30CC65',
    colorType5: '#63D3D9',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    modal: 30,
    alwaysOnTop: 99,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  breakpoints: {
    values: {
      xs: '360px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
}

export default theme;
