import { createTheme } from '@mui/material/styles'

// Single source of truth for the design tokens — change colors/type here
// and it updates everywhere in the app.
const tokens = {
  bg: '#FAFAFD',
  surface: '#FFFFFF',
  ink: '#14162B',
  muted: '#64677E',
  rule: '#E7E7F0',
  // One accent per product — used consistently for that product everywhere
  violet: '#6C5CE7', // Litera One Compare
  amber: '#F2994A', // Admin Panel Centre
  teal: '#12B3A8', // Litera Design Systems
  raspberry: '#E5467A', // DeltaViewJS
}

const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: tokens.bg, paper: tokens.surface },
    text: { primary: tokens.ink, secondary: tokens.muted },
    primary: { main: tokens.violet },
    secondary: { main: tokens.raspberry },
    divider: tokens.rule,
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    h1: { fontFamily: '"Space Grotesk", ui-sans-serif, sans-serif', fontWeight: 600 },
    h2: { fontFamily: '"Space Grotesk", ui-sans-serif, sans-serif', fontWeight: 600 },
    h3: { fontFamily: '"Space Grotesk", ui-sans-serif, sans-serif', fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingLeft: 26, paddingRight: 26, paddingTop: 12, paddingBottom: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 500 },
      },
    },
  },
})

export default theme
export { tokens }
