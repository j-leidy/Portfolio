import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../PortfolioStore"
import { DarkTheme, LightTheme } from "styled-components"
import { darkTheme,lightTheme } from "../../Theme/Theme"
import { customOptions } from "../../Components/Particles/config/ParticlesConfig"

interface ThemeState {
    theme: LightTheme | DarkTheme
}

const initialState: ThemeState = {
    theme: lightTheme
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers : {
        swapTheme: (state) => {
            if(state.theme.colors.background === darkTheme.colors.background){
                state.theme = {
                    ...lightTheme,
                    particlesOptions: {
                        ...customOptions,
                        background:{
                            color:{value:lightTheme.colors.background},
                            image: "",
                            position: "50% 50%",
                            repeat: "no-repeat",
                            size: "cover"
                        }
                    }
                }
            }else if(state.theme.colors.background === lightTheme.colors.background){
                state.theme = {
                    ...darkTheme,
                    particlesOptions: {
                        ...customOptions,
                        background:{
                            color: {value:darkTheme.colors.background},
                            image: "",
                            position: "50% 50%",
                            repeat: "no-repeat",
                            size: "cover"
                        }
                    }
                }
            }
        }
    }
})

export const {swapTheme} = ThemeSlice.actions;
export const selectActiveTheme = (state:RootState) => state.theme.theme
export default ThemeSlice.reducer;