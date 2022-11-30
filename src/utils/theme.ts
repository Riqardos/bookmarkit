import { PaletteMode } from '@mui/material';
import { amber, grey, deepOrange } from '@mui/material/colors';

const getThemeModePalette = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#e27900',
              secondary: grey[500],
            },
          }),
    },
  });

export default getThemeModePalette;