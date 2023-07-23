import { DarkTheme, LightTheme } from "styled-components";
import {  blackAccent, defaultGradient, defaultGradientEnd, defaultGradientStart, defaultGradientVerticle, goldAccent, greenAccent, navBarDarkTheme, navBarLightTheme, offWhite, purpleGreenGradient, secondaryGradient } from "./ColorPallete";
import {customOptions} from "../Components/Particles/config/ParticlesConfig";


const lightTheme : LightTheme = {
    colors : {
        text:blackAccent,
        background:offWhite,
        backgroundOpposite: blackAccent,
        textOpposite:offWhite,
        accentMain:greenAccent,
        accentOne:defaultGradientStart,
        accentTwo:defaultGradientEnd,
        accentThree: goldAccent,
        navBackground:navBarLightTheme,
        navBackgroundOpposite:navBarDarkTheme
    },
    gradient : {
        default:defaultGradient,
        secondary:secondaryGradient,
        purpleGreen:purpleGreenGradient,
        gradientStart: defaultGradientStart,
        gradientEnd: defaultGradientEnd,
        defaultVerticle: defaultGradientVerticle
    },
    animationTime : {
        short: 0.5,
        medium: 2,
        long: 3,
    },
    breakpoint : 1000,
    particlesOptions: customOptions
}

const darkTheme : DarkTheme = {
    colors : {
        text : offWhite,
        background: blackAccent,
        backgroundOpposite: offWhite,
        textOpposite: blackAccent,
        accentMain:greenAccent,
        accentOne:defaultGradientStart,
        accentTwo:defaultGradientEnd,
        accentThree: goldAccent,
        navBackground:navBarDarkTheme,
        navBackgroundOpposite: navBarLightTheme
    },
    gradient : {
        default:defaultGradient,
        secondary:secondaryGradient,
        purpleGreen:purpleGreenGradient,
        gradientStart: defaultGradientStart,
        gradientEnd: defaultGradientEnd,
        defaultVerticle: defaultGradientVerticle
    },
    animationTime : {
        short: 0.5,
        medium: 2,
        long: 3,
    },
    breakpoint: 1000,
    particlesOptions: customOptions
}


export {lightTheme,darkTheme};