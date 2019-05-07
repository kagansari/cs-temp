import {createGlobalStyle, css} from 'styled-components'

const breakpoint = 600

export const media = {
  mobile: (...args) => css`@media (max-width: ${breakpoint - 1}px) { ${css(...args)} }`,
  desktop: (...args) => css`@media (min-width: ${breakpoint}px) { ${css(...args)} }`
}

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.ui.header {
  font-family: 'Eurostile';
  font-size: 32px;
  letter-spacing: 1px;
}


// hide in mobile
.desktop {
  ${media.mobile` display: none !important; `}
}
// hide in desktop
.mobile {
  ${media.desktop` display: none !important; `}
}

// utility classes
.flex {
  display: flex;
  &.center { justify-content: center; }
  &.space-between { justify-content: space-between; }
  &.align-center { align-items: center; }
  &.align-start { align-items: flex-start; }
  &.align-stretch { align-items: stretch; }
}

`
