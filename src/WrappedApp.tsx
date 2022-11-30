import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useContext, useMemo } from "react";
import SwitchThemeButton from "./components/SwitchThemeButton";
import { ColorModeContext } from "./hooks/useThemeMode";
import getThemeModePalette from "./utils/theme";


const WrappedApp = () => {
    const [mode] = useContext(ColorModeContext);
    const theme = useMemo(() => createTheme(getThemeModePalette(mode)), [mode]);
    console.log(mode);
    console.log(theme);

    return (
    <ThemeProvider theme={theme}>
        <SwitchThemeButton />
        <span>xd</span>
     </ThemeProvider>
    )
};

export default WrappedApp;