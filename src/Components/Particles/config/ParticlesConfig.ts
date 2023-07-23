import {ISourceOptions} from "tsparticles-engine"
import { blackAccent, greenAccent, purpleGreenGradientStart } from "../../../Theme/ColorPallete";

export type CustomISourceOptions = Omit<ISourceOptions,"style">

export const customOptions: CustomISourceOptions = {
    name: "custom options",
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                area: 500
            },
        },
        color: {
            value: [greenAccent],
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
            distance: 70,
            color: purpleGreenGradientStart,
            opacity: 1,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.2,
            random: true
        },
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "grab"
            }
        },
        modes: {
            push: {
                quantity: 4,
            },
        },
    },
    smooth: true,
    fullScreen: {
        enable: true
    },
    background: {
        color: blackAccent,
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    style: {
        transition: `${0.5}s all ease`
    }
};
