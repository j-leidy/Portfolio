import { DarkTheme, LightTheme } from "styled-components";
import {  blackAccent, defaultGradient, defaultGradientEnd, defaultGradientStart, defaultGradientVerticle, goldAccent, greenAccent, navBarDarkTheme, navBarLightTheme, offWhite, purpleGreenGradient, secondaryGradient } from "./ColorPallete";
import {customOptions} from "../Components/Particles/config/ParticlesConfig";
import TWITWhite from "../Icons/SetBW/TWITSETWhite.png";
import TWITBlack from "../Icons/SetBW/TWITSETBlack.png";
import IGWhite from "../Icons/SetBW/IGSETWhite.png";
import IGBlack from "../Icons/SetBW/IGSETBlack.png";
import LIWhite from "../Icons/SetBW/LISETWhite.png";
import LIBlack from "../Icons/SetBW/LISETBlack.png";
import GHWhite from "../Icons/SetBW/GHSETWhite.png";
import GHBlack from "../Icons/SetBW/GHSETBlack.png";
import FBWhite from "../Icons/SetBW/FBSETWhite.png";
import FBBlack from "../Icons/SetBW/FBSETBlack.png";

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
    particlesOptions: customOptions,
    socialIcons:[FBBlack,GHBlack,IGBlack,LIBlack,TWITBlack]
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
    particlesOptions: customOptions,
    socialIcons: [FBWhite,GHWhite,IGWhite,LIWhite,TWITWhite]
}


export {lightTheme,darkTheme};