import { CssBaseline, Typography } from '@mui/material';
import './App.css';
import SwitchThemeButton from './components/SwitchThemeButton';

import {  ColorModeThemeProvider } from './utils/ColorModeThemeProvider';


const App = () => {
    return (
      <ColorModeThemeProvider >
        <CssBaseline />
        <Typography color='yellow'>Hello.</Typography>
        <Typography color='orange'>Hello.</Typography>
        <Typography color='pink'>Hello.</Typography>
        <Typography color='azure'>Hello.</Typography>
        <Typography color='darkBlue'>Hello.</Typography>
        <Typography color='purple'>Hello.</Typography>
        <Typography color='green'>Hello.</Typography>
        <Typography color='lightGreen'>Hello.</Typography>
        <Typography color='red'>Hello.</Typography>
        <Typography color='lightGrey'>Hello.</Typography>
        <Typography color='primary.contrastText'>Hello.</Typography>
        <Typography color='primary.light'>Hello.</Typography>
        <Typography color='primary.main'>Hello.</Typography>
        <Typography color='primary.dark'>Hello.</Typography>
        <SwitchThemeButton />
      </ColorModeThemeProvider>
    );
  };

export default App;
