import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const brand = {
  navy: '#0a2378',
  navyDeep: '#061a5c',
  royal: '#1240d6',
  blue: '#2563ff',
  sky: '#8fb5ff',
  ice: '#dbe7ff',
  cream: '#f8f6ee',
  paper: '#fffdf7',
  ink: '#0b1b4d',
  muted: '#47548a',
};

export const display = '"Barlow Condensed", system-ui, sans-serif';
export const body = '"Outfit", system-ui, sans-serif';
export const ease = 'cubic-bezier(.2,.8,.2,1)';

const heading = {
  fontFamily: display,
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 0.92,
  letterSpacing: '-0.01em',
};

let theme = createTheme({
  palette: {
    primary: { main: brand.royal, dark: brand.navy, contrastText: '#fff' },
    secondary: { main: brand.navy, contrastText: '#fff' },
    background: { default: brand.cream, paper: '#fff' },
    text: { primary: brand.ink, secondary: brand.muted },
  },
  shape: { borderRadius: 22 },
  breakpoints: { values: { xs: 0, sm: 600, md: 980, lg: 1240, xl: 1600 } },
  typography: {
    fontFamily: body,
    h1: { ...heading, fontSize: '7rem' },
    h2: { ...heading, fontSize: '4.8rem' },
    h3: { ...heading, fontSize: '1.8rem', lineHeight: 1 },
    h4: { ...heading, fontSize: '1.5rem', lineHeight: 1 },
    overline: { fontWeight: 600, letterSpacing: '0.28em', fontSize: '0.78rem', lineHeight: 1.6 },
    button: { fontWeight: 600, letterSpacing: '0.08em' },
    body1: { lineHeight: 1.65 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { overflowX: 'hidden', WebkitFontSmoothing: 'antialiased' },
        img: { maxWidth: '100%', display: 'block' },
        a: { color: 'inherit' },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: 'lg' } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '0.85rem 1.7rem',
          fontSize: '0.86rem',
          borderWidth: 2,
          transition: `all .35s ${ease}`,
          '& .MuiButton-endIcon': { transition: `transform .35s ${ease}` },
          '&:hover .MuiButton-endIcon': { transform: 'translateX(5px)' },
          '&:hover': { borderWidth: 2 },
        },
        outlined: { borderWidth: 2 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 500, borderWidth: 1.5 },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 22 } },
    },
    MuiTab: {
      styleOverrides: {
        root: { fontWeight: 600, letterSpacing: '0.06em', minHeight: 44 },
      },
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 2.6, breakpoints: ['sm', 'md', 'lg'] });
export default theme;
