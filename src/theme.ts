import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: "#303030"
    },
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },
  },
});

export default theme;