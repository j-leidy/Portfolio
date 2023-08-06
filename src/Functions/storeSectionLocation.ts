import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { setDegreesLocation, setExperienceLocation, setHeroLocation, setProjectsLocation } from "../Redux/ScrollSlice/ScrollSlice"



export const storeSectionLocation = (element : HTMLDivElement | null, dispatch: Dispatch<AnyAction> ) => {
    if(element){
        switch(element.id){
            case 'Hero' : {
                dispatch(setHeroLocation(element.getBoundingClientRect().top))
                break
            }
            case 'Projects' : {
                dispatch(setProjectsLocation(element.getBoundingClientRect().top))
                break
            }
            case 'Experiences' : {
                dispatch(setExperienceLocation(element.getBoundingClientRect().top))
                break
            }
            case 'Degrees' : {
                dispatch(setDegreesLocation(element.getBoundingClientRect().top))
                break
            }
        }
    }
}