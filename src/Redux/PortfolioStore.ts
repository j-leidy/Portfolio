import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./ThemeSlice/ThemeSlice";
import {PageSlice} from "./PageSlice/PageSlice";
import { ScrollSlice } from "./ScrollSlice/ScrollSlice";


export const PortfolioStore = configureStore({
    reducer : {
        theme: ThemeSlice.reducer,
        page: PageSlice.reducer,
        scroll: ScrollSlice.reducer
    }
})

export type RootState = ReturnType<typeof PortfolioStore.getState>
export type AppDispatch = typeof PortfolioStore.dispatch