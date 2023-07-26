import { styled } from "styled-components";
import { MobileMenu } from "../Components/Nav/NavBar";
import { WelcomeScreen } from "../Components/Welcome/WelcomeScreen";
import { useAppSelector } from "../Hooks/Hooks";
import { selectShowMainPageState } from "../Redux/PageSlice/PageSlice";
import { ParticlesComponent } from "../Components/Particles/ParticlesComponent";
import { Hero } from "../PageSections/Hero/Hero";
import { Projects } from "../PageSections/Projects/Projects";
import { Experiences } from "../PageSections/Experience/Experiences";
import { Degrees } from "../PageSections/Education/Degrees";
import { Footer } from "../Components/Footer/Footer";
import { CardComponent } from "../Components/Reusables/CardComponent";

const MainPageContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    z-index: 1;
    top: 0;
    left: 0;
    caret-color: transparent;
`;

const TestComponent = (props: { test: string }) => {
    return <>{props.test}</>;
};

export const MainPage = () => {
    const showMainPage = useAppSelector(selectShowMainPageState);
    return (
        <>
            <ParticlesComponent />
            {showMainPage ? (
                <MainPageContainer>
                    <MobileMenu />
                    <Hero />
                    <Projects />
                    <Experiences />
                    <Degrees />
                    <CardComponent
                        ComponentToWrap={TestComponent}
                        wrapInternalWithLink={false}
                    />
                    <Footer />
                </MainPageContainer>
            ) : (
                <WelcomeScreen />
            )}
        </>
    );
};
