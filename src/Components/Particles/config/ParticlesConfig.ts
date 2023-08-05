import {ISourceOptions} from "tsparticles-engine"
import { goldAccent, offWhite, purpleGreenGradientStart} from "../../../Theme/ColorPallete";

export type CustomISourceOptions = Omit<ISourceOptions,"style">

export const customOptions: CustomISourceOptions = {
    name: "custom options",
    particles: {
        number: {
            value:  100,        },
        color: {
            value: [purpleGreenGradientStart],
        },
        shape: {
            type: "circle",
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
            speed: 1,
            random: false,
            direction: "down"
        },
    },
    smooth: true,
    fullScreen: {
        enable: false
    },
    background: {
        color: offWhite,
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    style: {
        transition: `${0.5}s background-color ease`,
        zIndex: -1,
        top: "inherit",
        width: "100%",
        position: "fixed",
        height: "150vh"

    },
};
