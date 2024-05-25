import { css, keyframes, styled } from "styled-components";
import { useAppDispatch } from "../../Hooks/Hooks";
import { setShowMainPage } from "../../Redux/PageSlice/PageSlice";
import { MoonIcon } from "../Nav/MoonIcon";
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

const ClickOrTapToEnterButton = styled.button`
    border-radius: 50%;
    outline: none;
    padding: 0;
    margin: 0;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    ${({ theme }) => css`
        background: ${theme.colors.backgroundOpposite};
        transition: ${theme.animationTime.short}s all ease;
        border: 1px solid ${theme.colors.textOpposite};
    `}
    &:hover {
        cursor: pointer;
    }
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
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    animation: ${TextAnimation} 4s;
    animation-iteration-count: infinite;
    ${({ theme }) => css`
        transition: ${theme.animationTime.short}s all ease;
        color: ${theme.colors.textOpposite};
    `}
`;

export const WelcomeScreen = () => {
    const dispatch = useAppDispatch();
    const handleEnterClick = () => {
        dispatch(setShowMainPage(true));
    };
    return (
        <WelcomeScreenContainer>
            <WelcomeContentContainer>
                <MoonIcon />
                <ClickOrTapToEnterButton onClick={() => handleEnterClick()}>
                    <ClickOrTapToEnterText>Enter</ClickOrTapToEnterText>
                </ClickOrTapToEnterButton>

                <SocialIconsComponent giveShadow />
            </WelcomeContentContainer>
        </WelcomeScreenContainer>
    );
};
