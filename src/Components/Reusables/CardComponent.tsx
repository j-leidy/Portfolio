import { styled, css, keyframes } from "styled-components";
import {
    InViewProps,
    SkillIcon,
    SkillsContainer,
} from "./ReusableStyledComponents";
import { useEffect, useRef, useState } from "react";

const CardContainer = styled.div`
    z-index: 10;
`;

const CardTitle = styled.div<InViewProps>`
    transition: opacity ${(props) => props.theme.animationTime.short}s ease-in;
    opacity: ${(props) => (props.$inView ? "1" : "0")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.accentOne};
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        font-size: 20px;
    }
`;

const CardInViewKeyframes = keyframes`
  0%{
    opacity: 0;
  }50%{
    opacity: 1;
  }100%{
    opacity: 1;
  } 
`;

const InternalCardStyles = css`
    transition: background ${(props) => props.theme.animationTime.short}s;
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    justify-content: space-around;
    padding: 20px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        padding: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

const InternalCardContainerWithLink = styled.a<InViewProps>`
    ${({ $inView, theme }) =>
        $inView
            ? css`
                  animation: ${CardInViewKeyframes} ${theme.animationTime.long}s;
                  animation-iteration-count: 1;
                  animation-fill-mode: forwards;
                  animation-timing-function: ease-in;
              `
            : css`
                  opacity: 0;
              `}
    ${InternalCardStyles}
`;

const InternalWithoutLink = styled.div<InViewProps>`
    ${({ $inView, theme }) =>
        $inView
            ? css`
                  animation: ${CardInViewKeyframes} ${theme.animationTime.long}s;
                  animation-iteration-count: 1;
                  animation-fill-mode: forwards;
                  animation-timing-function: ease-in;
              `
            : css`
                  opacity: 0;
              `}
    ${InternalCardStyles}
`;

const BaseInternalElement = () => {
    return (
        <>
            <>Internal</>
        </>
    );
};

const DefaultCardProps = {
    widthPercent: 100,
    showCardTitle: true,
    cardTitleText: "Title",
    cardTitleSize: 25,
    cardSkillsArr: [""],
    ComponentToWrap: BaseInternalElement,
    internalComponentProps: { test: "testing" },
    wrapInternalWithLink: true,
    internalLink: "https://google.com",
};

interface CardComponentProps {
    widthPercent?: number;
    showCardTitle?: boolean;
    cardTitleText?: string;
    cardTitleSize?: number;
    cardSkillsArr?: string[];
    ComponentToWrap: (props: any) => JSX.Element;
    internalComponentProps?: {};
    wrapInternalWithLink?: boolean;
    internalLink?: string;
}

const observerOptions: IntersectionObserverInit = {
    threshold: 0.15,
};

export const CardComponent = ({
    widthPercent = DefaultCardProps.widthPercent,
    showCardTitle = DefaultCardProps.showCardTitle,
    cardTitleSize = DefaultCardProps.cardTitleSize,
    cardTitleText = DefaultCardProps.cardTitleText,
    cardSkillsArr = DefaultCardProps.cardSkillsArr,
    ComponentToWrap = DefaultCardProps.ComponentToWrap,
    internalComponentProps = DefaultCardProps.internalComponentProps,
    wrapInternalWithLink = DefaultCardProps.wrapInternalWithLink,
    internalLink = DefaultCardProps.internalLink,
}: CardComponentProps) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const cardRefNoLink = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const [cardIsInView, setCardIsInView] = useState<boolean>(false);
    const [cardNoLinkInView, setCardNoLinkInView] = useState<boolean>(false);
    const [titleIsInView, setTitleIsInView] = useState<boolean>(false);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (wrapInternalWithLink) {
                        if (cardRef.current && titleRef.current) {
                            cardRef.current.className ===
                                entry.target.className &&
                                setCardIsInView(entry.isIntersecting);
                            titleRef.current.className ===
                                entry.target.className &&
                                setTitleIsInView(entry.isIntersecting);
                        }
                    } else if (!wrapInternalWithLink) {
                        if (cardRefNoLink.current && titleRef.current) {
                            cardRefNoLink.current.className ===
                                entry.target.className &&
                                setCardNoLinkInView(entry.isIntersecting);
                            titleRef.current.className ===
                                entry.target.className &&
                                setTitleIsInView(entry.isIntersecting);
                        }
                    }
                });
            },
            observerOptions
        );
        if (wrapInternalWithLink) {
            if (cardRef.current && titleRef.current) {
                const refs = [cardRef.current, titleRef.current];
                refs.forEach((ref) => observer.observe(ref));
            }
        } else if (!wrapInternalWithLink) {
            if (cardRefNoLink.current && titleRef.current) {
                const refs = [titleRef.current, cardRefNoLink.current];
                refs.forEach((ref) => observer.observe(ref));
            }
        }

        return () => observer.disconnect();
    }, [cardRef, titleRef, cardRefNoLink, wrapInternalWithLink]);
    return (
        <CardContainer>
            <CardTitle $inView={titleIsInView} ref={titleRef}>
                {showCardTitle && cardTitleText}
                <SkillsContainer>
                    {cardSkillsArr.map((skill, idx) => {
                        return (
                            <SkillIcon
                                src={skill}
                                $index={idx}
                                $inView={titleIsInView}
                            />
                        );
                    })}
                </SkillsContainer>
            </CardTitle>
            {wrapInternalWithLink ? (
                <InternalCardContainerWithLink
                    href={internalLink}
                    target="_blank"
                    $inView={cardIsInView}
                    ref={cardRef}
                >
                    <ComponentToWrap {...internalComponentProps} />
                </InternalCardContainerWithLink>
            ) : (
                <InternalWithoutLink
                    $inView={cardNoLinkInView}
                    ref={cardRefNoLink}
                >
                    kk
                    <ComponentToWrap {...internalComponentProps} />
                </InternalWithoutLink>
            )}
        </CardContainer>
    );
};
