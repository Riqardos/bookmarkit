import './App.css';

import {  ColorModeThemeProvider } from './hooks/useThemeMode';
import WrappedApp from './WrappedApp';


const App = () => {
    return (
      <ColorModeThemeProvider >
        <WrappedApp />
      </ColorModeThemeProvider>
    );
  };

export default App;
