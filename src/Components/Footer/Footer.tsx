import { css, styled, useTheme } from "styled-components";
import { footerData } from "./FooterData";
import { useState, useRef, useEffect } from "react";
import { observerOptions } from "../CardWrapperComponent/CardComponent";
import Portrait from "../../Images/CompressedPortrait.jpg";
import { InViewProps } from "../CommonStyled/CommonStyledProps";
import { SocialIconsComponent } from "../SocialIcons/SocialIconsComponent";

const FooterContainer = styled.div<InViewProps>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 70px 50px;
    margin-top: 20%;
    ${({ theme }) => css`
        color: ${theme.colors.text};
        background: ${theme.colors.background};
        @media screen and (max-width: ${theme.breakpoint}px) {
            flex-direction: column;
            align-items: center;
            padding: 50px 50px;
        }
    `}
`;

interface FooterTextItemProps {
    $fontSize: number;
    $fontWeight: number;
    $capitalize?: boolean;
    $mobileFontSizeModifier?: number;
}

const FooterTextItem = styled.div<FooterTextItemProps>`
    ${({ $fontSize, $fontWeight, $mobileFontSizeModifier, $capitalize, theme }) => css`
        color: ${theme.colors.text};
        font-size: ${$fontSize}px;
        font-weight: ${$fontWeight};
        text-transform: ${$capitalize ? "uppercase" : "none"};
        @media screen and (max-width: ${theme.breakpoint}px) {
            font-size: ${$mobileFontSizeModifier ? $fontSize * $mobileFontSizeModifier : $fontSize}px;
            text-align: center;
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
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        padding-bottom: 50px;
    }
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
            <FooterIconAndText>
                <FooterIcon src={Portrait} />
                <FooterTextItems>
                    <FooterTextItem $fontSize={30} $fontWeight={600} $capitalize>
                        {footerData.name}
                    </FooterTextItem>
                    <FooterTextItem $fontSize={14} $fontWeight={500}>
                        Built with React.
                    </FooterTextItem>
                    <FooterTextItem $fontSize={14} $fontWeight={500}>
                        Developed using Typescript.
                    </FooterTextItem>
                </FooterTextItems>
            </FooterIconAndText>
            <SocialIconsComponent iconsObject={theme.socialIcons} useThemeBackground />
        </FooterContainer>
    );
};
