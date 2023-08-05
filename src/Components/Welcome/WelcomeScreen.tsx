import { css, keyframes, styled } from "styled-components";
import { useAppDispatch } from "../../Hooks/Hooks";
import { setShowMainPage } from "../../Redux/PageSlice/PageSlice";
import { allSocialIcons } from "../../Theme/ExtraConstants";
import { MoonIcon } from "../Nav/MoonIcon";
import { offWhite } from "../../Theme/ColorPallete";
import { swapTheme } from "../../Redux/ThemeSlice/ThemeSlice";

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

interface SocialIconsContainerProps {
    $shadow?: boolean;
    $useThemeBackground?: boolean;
}

export const SocialIconsContainer = styled.div<SocialIconsContainerProps>`
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    padding: 10px;
    ${({ theme, $shadow, $useThemeBackground }) => css`
        box-shadow: ${$shadow
            ? `0px 25px 20px -20px ${
                  theme.colors.text === offWhite
                      ? theme.colors.accentOne
                      : theme.colors.text
              }`
            : ""};
        background: ${$useThemeBackground ? theme.colors.background : offWhite};
        @media screen and (max-width: ${theme.breakpoint}px) {
            width: 90%;
        }
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
    }
`;

export const SocialIcon = styled.img`
    width: 40px;
    height: 40px;
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

                <SocialIconsContainer $shadow>
                    {allSocialIcons.map((Icon, idx) => {
                        return <SocialIcon key={idx} src={Icon} />;
                    })}
                </SocialIconsContainer>
            </WelcomeContentContainer>
        </WelcomeScreenContainer>
    );
};
