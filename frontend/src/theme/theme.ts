import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#7633FF',
      light: '#F4EFFF',
      dark: '#9764FF',
    },
    secondary: {
      main: '#5533FF3D',
      light: '#1414141F',
    },
    text: {
      primary: '#141414',
      secondary: '#D7D7D7',
    },
    info: {
      main: '#77767A',
      light: '#9F9DA3',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#E4D6FF',
      light: '#F8F9FA',
      contrastText: '#F3F2F5',
    },
    divider: '#E4E4E5',
  },

  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Gerbera',
    caption: {
      fontSize: '14px',
      lineHeight: '21px',
    },
    body1: {
      lineHeight: '32px',
      fontSize: '20px',
    },
    body2: {
      lineHeight: '24px',
      fontSize: '17px',
    },
    h1: {
      fontSize: '24px',
      lineHeight: '40px',
    },
    h5: {
      lineHeight: '18px',
      fontSize: '12px',
    },
    subtitle1: {
      lineHeight: '24px',
      fontSize: '16px',
    },
    overline: {
      lineHeight: '13.3px',
      fontSize: '14px',
    },
  },
})

export default theme
