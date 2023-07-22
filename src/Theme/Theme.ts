import { DarkTheme, LightTheme } from "styled-components";
import {  blackAccent, defaultGradient, defaultGradientEnd, defaultGradientStart, defaultGradientVerticle, goldAccent, navBarDarkTheme, navBarLightTheme, offWhite, purpleGreenGradient, secondaryGradient } from "./ColorPallete";


const lightTheme : LightTheme = {
    colors : {
        text:blackAccent,
        background:offWhite,
        backgroundOpposite: blackAccent,
        textOpposite:offWhite,
        accentMain:goldAccent,
        accentOne:defaultGradientStart,
        accentTwo:defaultGradientEnd,
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
    breakpoint : 900,
    particlesBackground : {
        color: '#fff',
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
}

const darkTheme : DarkTheme = {
    colors : {
        text : offWhite,
        background: blackAccent,
        backgroundOpposite: offWhite,
        textOpposite: blackAccent,
        accentMain:goldAccent,
        accentOne:defaultGradientStart,
        accentTwo:defaultGradientEnd,
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
    breakpoint: 900,
    particlesBackground : {
        color: '#000',
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
}


export {lightTheme,darkTheme};