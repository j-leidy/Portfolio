import { css, styled, useTheme } from "styled-components";
import { footerData } from "./FooterData";
import { useState, useRef, useEffect } from "react";
import { observerOptions } from "../CardWrapperComponent/CardComponent";
import {
    SocialIcon,
    SocialIconsContainer,
} from "../Reusables/SocialIconsStyled";
import Portrait from "../../Images/PortraitFlip.jpg";
import { InViewProps } from "../Reusables/CommonStyledProps";

const FooterContainer = styled.div<InViewProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 100px 50px;
    margin-top: 20%;
    box-shadow: 0px 0px 10px -4px ${(props) => props.theme.colors.accentMain};
    ${({ theme }) => css`
        color: ${theme.colors.text};
        background: ${theme.colors.accentMain};
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        flex-direction: column;
        padding: 50px 50px;
    }
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

const FooterIconAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const FooterIcon = styled.img`
    height: 70px;
    width: 70px;
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
                    <FooterTextItem $fontSize={28} $fontWeight={600}>
                        {footerData.name}
                    </FooterTextItem>
                </FooterIconAndText>
            </FooterTextItems>
            <SocialIconsContainer
                $shadow={false}
                $userBackground={theme.colors.accentMain}
            >
                {[...theme.socialIcons].map((icon, idx) => {
                    return <SocialIcon src={icon} key={idx} />;
                })}
            </SocialIconsContainer>
        </FooterContainer>
    );
};
