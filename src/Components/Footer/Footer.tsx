import { css, styled, useTheme } from "styled-components";
import { footerData } from "./FooterData";
import { useState, useRef, useEffect } from "react";
import { observerOptions } from "../CardWrapperComponent/CardComponent";
import {
    SocialIcon,
    SocialIconsContainer,
} from "../CommonStyled/SocialIconsStyled";
import Portrait from "../../Images/CompressedPortrait.jpg";
import { InViewProps } from "../CommonStyled/CommonStyledProps";

const FooterContainer = styled.div<InViewProps>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 70px 50px;
    margin-top: 20%;
    box-shadow: 0px 0px 10px -4px ${(props) => props.theme.colors.accentMain};
    ${({ theme }) => css`
        color: ${theme.colors.text};
        background: ${theme.colors.accentMain};
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        flex-direction: column;
        align-items: center;
        padding: 50px 50px;
    }
`;

interface FooterTextItemProps {
    $fontSize: number;
    $fontWeight: number;
    $capitalize?: boolean;
    $mobileFontSizeModifier?: number;
}

const FooterTextItem = styled.div<FooterTextItemProps>`
    ${({
        $fontSize,
        $fontWeight,
        $mobileFontSizeModifier,
        $capitalize,
        theme,
    }) => css`
        color: ${theme.colors.text};
        font-size: ${$fontSize}px;
        font-weight: ${$fontWeight};
        text-transform: ${$capitalize ? "uppercase" : "none"};
        @media screen and (max-width: ${theme.breapoint}px) {
            font-size: ${$mobileFontSizeModifier
                ? $fontSize * $mobileFontSizeModifier
                : $fontSize}px;
        }
    `}
`;

const FooterIconAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const FooterIcon = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;

const FooterTextItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Footer = () => {
    const [footerInView, setFooterInView] = useState<boolean>(false);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    setFooterInView(entry.isIntersecting);
                });
            },
            observerOptions
        );
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
    }, [footerRef]);

    const theme = useTheme();

    return (
        <FooterContainer ref={footerRef} $inView={footerInView}>
            <FooterTextItems>
                <FooterIconAndText>
                    <FooterIcon src={Portrait} />
                    <FooterTextItem
                        $fontSize={30}
                        $fontWeight={600}
                        $capitalize
                    >
                        {footerData.name}
                    </FooterTextItem>
                </FooterIconAndText>
                <FooterTextItem $fontSize={14} $fontWeight={500}>
                    Built using React
                </FooterTextItem>
                <FooterTextItem $fontSize={14} $fontWeight={500}>
                    Written in Typescript
                </FooterTextItem>
            </FooterTextItems>
            <SocialIconsContainer
                $shadow={false}
                $userBackground={theme.colors.accentMain}
            >
                {[...theme.socialIcons].map((icon, idx) => {
                    return (
                        <SocialIcon
                            src={icon}
                            key={idx}
                            $mobileModifier={0.8}
                            $changeMobileSize
                        />
                    );
                })}
            </SocialIconsContainer>
        </FooterContainer>
    );
};
