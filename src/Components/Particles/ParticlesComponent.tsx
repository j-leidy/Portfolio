import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "styled-components";

export const ParticlesComponent = () => {
    const customInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const theme = useTheme();
    return (
        <Particles
            id="tsparticles"
            init={customInit}
            width="100vw"
            height="100%"
            options={theme.particlesOptions}
        />
    );
};
