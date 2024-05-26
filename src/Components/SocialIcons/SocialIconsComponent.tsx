import { BlackSocials, SocialIconsObject } from "../../Theme/ExtraConstants";
import { styled, css } from "styled-components";
import { blackAccent, offWhite } from "../../Theme/ColorPallete";

interface SocialIconsContainerProps {
    $shadow?: boolean;
    $useThemeBackground?: boolean;
    $userBackground?: string;
    $customFlexAlign?: string;
}
interface SocialIconProps {
    $changeMobileSize?: boolean;
    $mobileModifier?: number;
}

interface SocialIconsTextProps {
    $useThemeBackground: boolean;
}

const SocialIconsText = styled.div<SocialIconsTextProps>`
    ${({ theme, $useThemeBackground }) => css`
        color: ${$useThemeBackground ? theme.colors.text : blackAccent};
    `}
`;

const SocialIconsContainer = styled.div<SocialIconsContainerProps>`
    min-width: 17%;
    font-weight: 700;
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
        background: ${$useThemeBackground
            ? theme.colors.background
            : $userBackground
            ? $userBackground
            : offWhite};
        @media screen and (max-width: ${theme.breakpoint}px) {
            width: 90%;
        }
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
    }
`;

const SocialIconLink = styled.a``;

const SocialIcon = styled.img<SocialIconProps>`
    width: 40px;
    height: 40px;
    ${({ $changeMobileSize, $mobileModifier }) =>
        $changeMobileSize
            ? css`
                  @media screen and (max-width: ${(props) =>
                          props.theme.breakpoint}px) {
                      height: ${$mobileModifier ? 40 * $mobileModifier : 20}px;
                      width: ${$mobileModifier ? 40 * $mobileModifier : 20}px;
                  }
              `
            : ""}
`;

const SocialIconsComponentDefault = {
    useThemeBackground: false,
    customBackground: "#FFFDFA",
    iconsObject: BlackSocials,
    giveShadow: false,
};

interface SocialIconsComponentProps {
    useThemeBackground?: boolean;
    customBackground?: string;
    iconsObject?: SocialIconsObject;
    giveShadow?: boolean;
}

export const SocialIconsComponent = ({
    useThemeBackground = SocialIconsComponentDefault.useThemeBackground,
    customBackground = SocialIconsComponentDefault.customBackground,
    iconsObject = SocialIconsComponentDefault.iconsObject,
    giveShadow = SocialIconsComponentDefault.giveShadow,
}: SocialIconsComponentProps) => {
    return (
        <SocialIconsContainer
            $shadow={giveShadow}
            $userBackground={customBackground}
            $useThemeBackground={useThemeBackground}
        >
            <SocialIconsText $useThemeBackground={useThemeBackground}>
                Let's Connect
            </SocialIconsText>
            {Object.keys(iconsObject).map((Social, idx) => {
                const socialObject = iconsObject[Social];
                return (
                    <SocialIconLink
                        key={idx}
                        href={socialObject.link}
                        target="_blank"
                    >
                        <SocialIcon key={idx} src={socialObject.icon} />
                    </SocialIconLink>
                );
            })}
        </SocialIconsContainer>
    );
};
