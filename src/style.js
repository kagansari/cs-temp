import {createGlobalStyle, css} from 'styled-components'

const breakpoint = 600

export const media = {
  mobile: (...args) => css`@media (max-width: ${breakpoint - 1}px) { ${css(...args)} }`,
  desktop: (...args) => css`@media (min-width: ${breakpoint}px) { ${css(...args)} }`
}

export const GlobalStyle = createGlobalStyle`

body {
  background-color: #F4F4F4;
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

.ui.grid {
  &.fluid { min-width: 100%; }
}
.ui.header {
  font-family: 'eurostile';
  font-size: 32px;
  letter-spacing: 1px;
}
.ui.label .icon {
  margin: 0;
}

.m0 {
  margin: 0 !important;
}
.danger {
  color: #EE2737;
}
.scroll-x {
  overflow-x: scroll;
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
