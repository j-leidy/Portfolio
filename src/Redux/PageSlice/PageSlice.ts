import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../PortfolioStore"

interface PageState {
    showMainPage: boolean
}

const initialState: PageState = {
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