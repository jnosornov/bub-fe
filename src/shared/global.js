import css from 'styled-jsx/css'

const globalStyles = css.global`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`

export default globalStyles