import 'styled-components'
import { CustomISourceOptions } from '../Components/Particles/config/ParticlesConfig';
import { SocialIconsObject } from './ExtraConstants';

interface IBackground {
    color: string;
    image?: string;
    opacity?: number;
    position?: string;
    repeat?: string;
    size?: string;
}

declare module 'styled-components' {
    export interface LightTheme {
        colors : {
            text : string,
            background: string
            backgroundOpposite:string
            textOpposite:string
            accentMain:string
            accentOne: string
            accentTwo: string
            accentThree: string
            navBackground: string
            navBackgroundOpposite: string,
            UIAccent: string
        }
        gradient : {
            default : string
            secondary: string
            purpleGreen: string
            gradientStart: string
            gradientEnd:string
            defaultVerticle: string
        }
        animationTime : {
            short: number
            medium: number
            long: number
        }
        breakpoint: number,
        particlesOptions: CustomISourceOptions,
        socialIcons: SocialIconsObject
    }
}

declare module 'styled-components' {
    export interface DarkTheme {
        colors : {
            text : string,
            background : string
            backgroundOpposite:string
            textOpposite:string
            accentMain:string
            accentOne: string
            accentTwo: string
            accentThree: string
            navBackground: string
            navBackgroundOpposite: string
            UIAccent: string
        }
        gradient : {
            default : string
            secondary: string
            purpleGreen: string
            gradientStart: string
            gradientEnd:string
            defaultVerticle: string
        }
        animationTime : {
            short: number
            medium: number
            long: number
        }
        breakpoint: number,
        particlesOptions: CustomISourceOptions
        socialIcons: SocialIconsObject

    }
}


