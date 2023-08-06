import { styled, css } from "styled-components";
import { offWhite } from "../../Theme/ColorPallete";

interface SocialIconsContainerProps {
    $shadow?: boolean;
    $useThemeBackground?: boolean;
    $userBackground?: string;
    $customFlexAlign?: string;
}

export const SocialIconsContainer = styled.div<SocialIconsContainerProps>`
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    padding: 10px;
    ${({ theme, $shadow, $useThemeBackground, $userBackground }) => css`
        box-shadow: ${$shadow
            ? `0px 25px 20px -20px ${
                  theme.colors.text === offWhite
                      ? theme.colors.accentOne
                      : theme.colors.text
              }`
            : ""};
        background: ${$useThemeBackground ? theme.colors.background : $userBackground ? $userBackground : offWhite};
        @media screen and (max-width: ${theme.breakpoint}px) {
            width: 90%;
        }
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
    }
`;

interface SocialIconProps {
    $changeMobileSize?: boolean
    $mobileModifier?: number
}

export const SocialIcon = styled.img<SocialIconProps>`
    width: 40px;
    height: 40px;
    ${({$changeMobileSize,$mobileModifier})=>
        $changeMobileSize ? css`
            @media screen and (max-width: ${props=>props.theme.breakpoint}px){
                height: ${$mobileModifier ? 40*$mobileModifier : 20}px;
                width: ${$mobileModifier ? 40*$mobileModifier : 20}px;
            }
        ` : ''
}
`;