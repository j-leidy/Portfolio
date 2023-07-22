import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../PortfolioStore"

interface ThemeState {
    showMainPage: boolean
}

const initialState: ThemeState = {
    showMainPage: false
}

export const PageSlice = createSlice({
    name: 'page',
    initialState,
    reducers : {
        setShowMainPage : (state,action) => {
            state.showMainPage = action.payload
        }
    }
})

export const {setShowMainPage} = PageSlice.actions;
export const selectShowMainPageState = (state:RootState) => state.page.showMainPage
export default PageSlice.reducer;