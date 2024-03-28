import {ISourceOptions} from "tsparticles-engine"
import { darkBlueAccent, greenAccent, offWhite} from "../../../Theme/ColorPallete";

export type CustomISourceOptions = Omit<ISourceOptions,"style">

export const customOptions: CustomISourceOptions = {
    name: "custom options",
    particles: {
        number: {
            value:  3,   
            density: {
                enable: true,
                value_area: 400
            }     
        },
        color: {
            value: [greenAccent],
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
            distance: 500,
            color: darkBlueAccent,
            opacity: 1,
            width:2,
        },
        move: {
            enable: true,
            speed: 0.3,
            random: true
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
        position: "fixed",
        overflow: "hidden"
    },
};
