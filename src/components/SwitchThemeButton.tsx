import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, ThemeType } from "../hooks/useThemeMode";

const SwitchThemeButton = () => {
    const theme = useTheme();
    const [mode, setMode] = useContext(ColorModeContext);

    const switchTheme = (mode: ThemeType) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        console.log(mode, 'cd');
    }

    console.log(mode);
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={() => switchTheme(mode)} color="inherit">
            shdfahdv
        </IconButton>
      </Box>
    );
  };

export default SwitchThemeButton;
