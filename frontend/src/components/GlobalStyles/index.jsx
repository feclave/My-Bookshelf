import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: 'Sour Gummy', sans-serif;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

button, input, select, textarea {
  font: inherit;
  color: inherit;
  border: none;
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}
`

export default GlobalStyle