import {ISourceOptions} from "tsparticles-engine"
import { defaultGradientEnd, defaultGradientStart } from "../../../Theme/ColorPallete";


const customOptions: ISourceOptions = {
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
            value: [defaultGradientStart,defaultGradientEnd],
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
            color: "#ffa600",
            opacity: 1,
            width: 0.3,
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
    fullScreen: true,
    zLayers: 1,
};

export default customOptions;