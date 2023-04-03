import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

let theme: Theme = createTheme({
  shape: {
    borderRadius: 0
  },
  typography: {
    fontSize: 12,
    allVariants: {
      wordBreak: 'break-word'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    }
  },
});

theme = responsiveFontSizes(theme);


export default theme
