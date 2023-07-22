import { styled } from "styled-components";
import { ParticlesComponent } from "../Particles/ParticlesComponent";

const WelcomeContentContainer = styled.div`
    position: absolute;
    color: ${(props) => props.theme.colors.text};
    top: 50%;
    left: 50%;
    width: 900px;
    height: 600px;
    text-align: center;
    margin-left: -450px;
    margin-top: -300px;
    overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 350px;
        height: 400px;
        margin-left: -175px;
        margin-top: -200px;
    }
`;

const WelcomeScreenContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
`;

export const WelcomeScreen = () => {
    return (
        <WelcomeScreenContainer>
            <ParticlesComponent />
            <WelcomeContentContainer>content</WelcomeContentContainer>
        </WelcomeScreenContainer>
    );
};
