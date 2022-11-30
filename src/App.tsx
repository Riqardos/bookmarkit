import React, { useContext, useMemo } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import SwitchThemeButton from './components/SwitchThemeButton';
import getThemeModePalette from './utils/theme';
import { ColorModeContext, ColorModeThemeProvider } from './hooks/useThemeMode';


const App = () => {

    const [mode, setMode] = useContext(ColorModeContext);

    const theme = useMemo(() => createTheme(getThemeModePalette(mode)), [mode]);

  
    return (
      <ColorModeThemeProvider >
        <ThemeProvider theme={theme}>
           <SwitchThemeButton />
        </ThemeProvider>
      </ColorModeThemeProvider>
    );
  };

export default App;
