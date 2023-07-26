import {ISourceOptions} from "tsparticles-engine"
import { goldAccent, offWhite, purpleGreenGradientStart} from "../../../Theme/ColorPallete";

export type CustomISourceOptions = Omit<ISourceOptions,"style">

export const customOptions: CustomISourceOptions = {
    name: "custom options",
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
            },
        },
        color: {
            value: [purpleGreenGradientStart],
        },
        shape: {
            type: "triangle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: {
                min: 1,
                max: 1,
            },
        },
        links: {
            enable: true,
            distance: 100,
            color: goldAccent,
            opacity: 1,
            width: 0.5,
        },
        move: {
            enable: true,
            speed: 0.2,
            random: true
        },
    },
    smooth: true,
    fullScreen: {
        enable: true
    },
    background: {
        color: offWhite,
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    style: {
        transition: `${0.5}s all ease`,
        zIndex: -1
    },
};
