import React from "react";
import { ThemeProvider } from "styled-components";
import { MainPage } from "./Pages/MainPage";
import { selectActiveTheme } from "./Redux/ThemeSlice/ThemeSlice";
import { useAppSelector } from "./Hooks/Hooks";
function App() {
    const currentTheme = useAppSelector(selectActiveTheme);
    return (
        <ThemeProvider theme={currentTheme}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
