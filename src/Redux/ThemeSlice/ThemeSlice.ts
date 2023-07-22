import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../PortfolioStore"
import { DarkTheme, LightTheme } from "styled-components"
import { darkTheme,lightTheme } from "../../Theme/Theme"

interface ThemeState {
    theme: LightTheme | DarkTheme
}

const initialState: ThemeState = {
    theme: darkTheme
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers : {
        swapTheme: (state) => {
            if(state.theme.colors.background === darkTheme.colors.background){
                state.theme = {...lightTheme}
            }else if(state.theme.colors.background === lightTheme.colors.background){
                state.theme = {...darkTheme}
            }
        }
    }
})

export const {swapTheme} = ThemeSlice.actions;
export const selectActiveTheme = (state:RootState) => state.theme.theme
export default ThemeSlice.reducer;