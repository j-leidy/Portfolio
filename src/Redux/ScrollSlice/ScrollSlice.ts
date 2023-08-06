import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../PortfolioStore"

interface ScrollState {
    heroLocation: number,
    projectsLocation: number,
    experiencesLocation: number,
    degreesLocation: number
}

const initialState: ScrollState = {
    heroLocation: 0,
    projectsLocation: 0,
    experiencesLocation: 0,
    degreesLocation: 0
}

export const ScrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers : {
        setHeroLocation : (state,action) => {
            state.heroLocation = action.payload
        },
        setProjectsLocation : (state,action) => {
            state.projectsLocation = action.payload
        },
        setExperienceLocation : (state,action) => {
            state.experiencesLocation = action.payload
        },
        setDegreesLocation : (state,action) => {
            state.degreesLocation = action.payload
        }
    }
})

export const {setHeroLocation, setProjectsLocation, setExperienceLocation, setDegreesLocation} =  ScrollSlice.actions;
export const selectHeroLocation = (state:RootState) => state.scroll.heroLocation
export const selectProjectsLocation = (state:RootState) => state.scroll.projectsLocation
export const selectExperiencesLocation = (state:RootState) => state.scroll.experiencesLocation
export const selectDegreesLocation = (state:RootState) => state.scroll.degreesLocation
export default  ScrollSlice.reducer;