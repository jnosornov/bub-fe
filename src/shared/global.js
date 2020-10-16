import css from 'styled-jsx/css'

const globalStyles = css.global`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`

export default globalStyles