import theme from 'styles/theme'

declare global {
  type CustomBreakpoints = keyof typeof theme.breakpoints.values
}
