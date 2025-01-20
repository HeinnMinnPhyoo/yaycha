import { useState, createContext, useContext } from "react";

import {
    CssBaseLine,
    ThemeProvider,
    createTheme,
} from "@mui/material";

import App from "./App";

const theme = createTheme({
    palette: {
        mode: "dark",
    }
})

const AppContent = createContext();

export function useApp() {
    return useContext(AppContent);
}

export default function ThemedApp() {
    const [showForm, setShowForm] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ showForm, setShowForm }}>
                <App />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    );
}
