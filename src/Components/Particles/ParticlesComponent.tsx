import Particles from "react-tsparticles";
import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import customOptions from "./config/ParticlesConfig";
import { useTheme } from "styled-components";

export const ParticlesComponent = () => {
    const customInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const [currentOptions, setCurrentOptions] = useState(customOptions);
    const theme = useTheme();
    useEffect(() => {
        const tempOptions = customOptions;
        tempOptions.background = theme.particlesBackground;
        tempOptions.style = {
            transition: `${theme.animationTime.short}s all ease`,
        };
        setCurrentOptions({ ...tempOptions });
    }, [theme]);
    return (
        <Particles
            id="tsparticles"
            init={customInit}
            width="100vw"
            height="100vh"
            options={currentOptions}
        />
    );
};
