import { DarkTheme, LightTheme } from "styled-components";
import {  blackAccent, darkBlueAccent, defaultGradient, defaultGradientEnd, defaultGradientStart, defaultGradientVerticle, goldAccent, greenAccent, navBarDarkTheme, navBarLightTheme, offWhite, purpleGreenGradient, secondaryGradient } from "./ColorPallete";
import {customOptions} from "../Components/Particles/config/ParticlesConfig";
import { BlackSocials, WhiteSocials } from "./ExtraConstants";

const lightTheme : LightTheme = {
    colors : {
        text:blackAccent,
        background:offWhite,
        backgroundOpposite: blackAccent,
        textOpposite:offWhite,
        accentMain:darkBlueAccent,
        accentOne:greenAccent,
        accentTwo:darkBlueAccent,
        accentThree: goldAccent,
        navBackground:navBarLightTheme,
        navBackgroundOpposite:navBarDarkTheme,
        UIAccent: darkBlueAccent
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
    particlesOptions: customOptions,
    socialIcons:BlackSocials
}

const darkTheme : DarkTheme = {
    colors : {
        text : offWhite,
        background: blackAccent,
        backgroundOpposite: offWhite,
        textOpposite: blackAccent,
        accentMain:darkBlueAccent,
        accentOne:greenAccent,
        accentTwo:defaultGradientEnd,
        accentThree: goldAccent,
        navBackground:navBarDarkTheme,
        navBackgroundOpposite: navBarLightTheme,
        UIAccent: darkBlueAccent
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
    particlesOptions: customOptions,
    socialIcons: WhiteSocials
}


export {lightTheme,darkTheme};