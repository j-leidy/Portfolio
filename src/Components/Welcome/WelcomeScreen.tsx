import { keyframes, styled } from "styled-components";
import { useAppDispatch } from "../../Hooks/Hooks";
import { setShowMainPage } from "../../Redux/PageSlice/PageSlice";
import { MoonIcon } from "../Nav/MoonIcon";
import { swapTheme } from "../../Redux/ThemeSlice/ThemeSlice";
import { SocialIconsComponent } from "../SocialIcons/SocialIconsComponent";

const WelcomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${(props) => props.theme.colors.text};
    width: 100vw;
    height: 100vh;
    text-align: center;
    z-index: 1;
`;

const WelcomeScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    user-select: none;
    caret-color: transparent;
`;

const ClickOrTapToEnterButton = styled.div`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: ${(props) => props.theme.colors.backgroundOpposite};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${(props) => props.theme.animationTime.short}s all ease;
    border: 1px solid ${(props) => props.theme.colors.textOpposite};
`;

const TextAnimation = keyframes`
    0%{
        opacity: 0;
    }50%{
        opacity: 1;
    }100%{
        opacity: 0;
    }
`;

const ClickOrTapToEnterText = styled.div`
    transition: ${(props) => props.theme.animationTime.short}s all ease;
    color: ${(props) => props.theme.colors.textOpposite};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    animation: ${TextAnimation} 4s;
    animation-iteration-count: infinite;
`;

export const WelcomeScreen = () => {
    const dispatch = useAppDispatch();
    const handleEnterClick = () => {
        dispatch(setShowMainPage(true));
        dispatch(swapTheme());
    };
    return (
        <WelcomeScreenContainer>
            <WelcomeContentContainer>
                <MoonIcon />
                <ClickOrTapToEnterButton>
                    <ClickOrTapToEnterText onClick={() => handleEnterClick()}>
                        Enter
                    </ClickOrTapToEnterText>
                </ClickOrTapToEnterButton>

                <SocialIconsComponent giveShadow />
            </WelcomeContentContainer>
        </WelcomeScreenContainer>
    );
};
