import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./ThemeSlice/ThemeSlice";
import PageSlice from "./PageSlice/PageSlice";


export const PortfolioStore = configureStore({
    reducer : {
        theme: ThemeSlice.reducer,
        page: PageSlice
    }
})

export type RootState = ReturnType<typeof PortfolioStore.getState>
export type AppDispatch = typeof PortfolioStore.dispatch