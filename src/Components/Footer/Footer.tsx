import { css, styled } from "styled-components";
import {
    FooterSkillIconKeyframes,
    SkillIcon,
} from "../Reusables/ReusableStyledComponents";
import { footerData } from "./FooterData";
import { useState, useRef, useEffect } from "react";
import { observerOptions } from "../CardWrapperComponent/CardComponent";
import { SocialIcon, SocialIconsContainer } from "../Welcome/WelcomeScreen";
import { allSocialIcons } from "../../Theme/ExtraConstants";

const FooterContainer = styled.div`
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => css`
        color: ${theme.colors.text};
        background: ${theme.colors.background};
    `}
`;

const FooterWrap = styled.div`
    width: 100%;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

interface FooterTextItemProps {
    $fontSize: number;
    $fontWeight: number;
}

const FooterTextItem = styled.div<FooterTextItemProps>`
    ${({ $fontSize, $fontWeight, theme }) => css`
        color: ${theme.colors.text};
        font-size: ${$fontSize}px;
        font-weight: ${$fontWeight};
        text-transform: uppercase;
    `}
`;

const FooterSkillsContainer = styled.div`
    width: 320px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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

    return (
        <FooterWrap ref={footerRef}>
            <FooterContainer>
                <FooterTextItem $fontSize={30} $fontWeight={600}>
                    {footerData.name}
                </FooterTextItem>
                <FooterTextItem $fontSize={20} $fontWeight={600}>
                    {footerData.websiteTitle}
                </FooterTextItem>
                <SocialIconsContainer>
                    {allSocialIcons.map((icon, idx) => {
                        return <SocialIcon src={icon} key={idx} />;
                    })}
                </SocialIconsContainer>
            </FooterContainer>
        </FooterWrap>
    );
};
