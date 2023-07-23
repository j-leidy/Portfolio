import { styled } from "styled-components";
import { MobileMenu } from "../Components/Nav/NavBar";
import { WelcomeScreen } from "../Components/Welcome/WelcomeScreen";
import { useAppSelector } from "../Hooks/Hooks";
import { selectShowMainPageState } from "../Redux/PageSlice/PageSlice";
import { ParticlesComponent } from "../Components/Particles/ParticlesComponent";

const MainPageContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const MainPage = () => {
    const showMainPage = useAppSelector(selectShowMainPageState);
    return (
        <>
            <ParticlesComponent />
            {showMainPage ? (
                <MainPageContainer>
                    <MobileMenu />
                    Main page showing
                </MainPageContainer>
            ) : (
                <WelcomeScreen />
            )}
        </>
    );
};
