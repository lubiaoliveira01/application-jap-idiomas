import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  src: local(''), url('/static/fonts/barlow-v12-latin-regular.woff2') format('woff2'),
    url('/static/fonts/barlow-v12-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 500;
  src: local(''), url('/static/fonts/barlow-v12-latin-500.woff2') format('woff2'),
    url('/static/fonts/barlow-v12-latin-500.woff') format('woff');
}

@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  src: local(''), url('/static/fonts/barlow-v12-latin-600.woff2') format('woff2'),
    url('/static/fonts/barlow-v12-latin-600.woff') format('woff');
}

@font-face {
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  src: local(''), url('/static/fonts/barlow-v12-latin-700.woff2') format('woff2'),
    url('/static/fonts/barlow-v12-latin-700.woff') format('woff');
}

@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''), url('/static/fonts/work-sans-v17-latin-regular.woff2') format('woff2'),
    url('/static/fonts/work-sans-v17-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  src: local(''), url('/static/fonts/work-sans-v17-latin-500.woff2') format('woff2'),
    url('/static/fonts/work-sans-v17-latin-500.woff') format('woff');
}

@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''), url('/static/fonts/work-sans-v17-latin-600.woff2') format('woff2'),
    url('/static/fonts/work-sans-v17-latin-600.woff') format('woff');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: inherit;
  }
}

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family.global};
    font-size: ${theme.font.sizes.medium};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style-type: none;
  }
`}
`

export default GlobalStyles
