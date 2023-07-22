import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./ThemeSlice/ThemeSlice";


export const PortfolioStore = configureStore({
    reducer : {
        theme: ThemeSlice.reducer
    }
})

export type RootState = ReturnType<typeof PortfolioStore.getState>
export type AppDispatch = typeof PortfolioStore.dispatch