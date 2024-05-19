import "styled-components";
import { CustomISourceOptions } from "../Components/Particles/config/ParticlesConfig";
import { SocialIconsObject } from "./ExtraConstants";

interface IBackground {
    color: string;
    image?: string;
    opacity?: number;
    position?: string;
    repeat?: string;
    size?: string;
}

interface Colors {
    text: string;
    background: string;
    backgroundOpposite: string;
    textOpposite: string;
    accentMain: string;
    accentOne: string;
    accentTwo: string;
    accentThree: string;
    navBackground: string;
    navBackgroundOpposite: string;
    UIAccent: string;
}

interface Gradients {
    default: string;
    secondary: string;
    purpleGreen: string;
    gradientStart: string;
    gradientEnd: string;
    defaultVerticle: string;
}

interface AnimationTimes {
    short: number;
    medium: number;
    long: number;
}

type ThemeType = {
    colors: Colors;
    gradient: Gradients;
    animationTime: AnimationTimes;
    breakpoint: number;
    particlesOptions: CustomISourceOptions;
    socialIcons: SocialIconsObject;
};

declare module "styled-components" {
    export interface LightTheme extends ThemeType, ThemeType {}
    export interface DarkTheme extends ThemeType, ThemeType {}
}
