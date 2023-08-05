import { styled, css, keyframes } from "styled-components";
import {
    SkillIcon,
    SkillIconKeyframes,
    SkillsContainer,
} from "../Reusables/SkillIconsStyled";
import { InViewProps } from "../Reusables/CommonStyledProps";
import { useEffect, useRef, useState } from "react";

interface CardContainerProps {
    $width: number;
    $usePercent: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
    padding-top: 5%;
    ${({ $width, $usePercent, theme }) =>
        $usePercent
            ? css`
                  width: ${$width}%;
                  @media screen and (max-width: ${theme.breakpoint}px) {
                      width: 100%;
                  }
              `
            : css``}
`;

const CardTitle = styled.div<InViewProps>`
    transition: opacity ${(props) => props.theme.animationTime.short}s ease-in;
    opacity: ${(props) => (props.$inView ? "1" : "0")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
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
    border-radius: 10px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        align-items: center;
        flex-direction: column;
    }
`;

interface InternalCardProps {
    $inView: boolean;
    $paddInternal: boolean;
    $padAmount: number;
}

const InternalCardContainerWithLink = styled.a<InternalCardProps>`
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
    ${({ $paddInternal, $padAmount, theme }) =>
        $paddInternal
            ? css`
                  padding: ${$padAmount}px;
                  @media screen and (max-width: ${theme.breakpoing}px) {
                      padding: ${$padAmount / 2}px;
                  }
              `
            : css`
                  padding: 0;
              `}
`;

const InternalWithoutLink = styled.div<InternalCardProps>`
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
    ${({ $paddInternal, $padAmount, theme }) =>
        $paddInternal
            ? css`
                  padding: ${$padAmount}px;
                  @media screen and (max-width: ${theme.breakpoing}px) {
                      padding: ${$padAmount / 2}px;
                  }
              `
            : css`
                  padding: 0;
              `}
`;
interface CardTitleTextProps {
    $fontSize: number;
}
const CardTitleText = styled.div<CardTitleTextProps>`
    font-size: ${(props) => props.$fontSize}px;
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.accentOne};
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        font-size: ${(props) => props.$fontSize * 0.7}px;
    }
`;

const BaseInternalElement = () => {
    return (
        <>
            <>Internal</>
        </>
    );
};

const DefaultCardProps = {
    useWidthPercent: false,
    widthPercent: 100,
    showCardTitle: true,
    cardTitleText: "Title",
    cardTitleSize: 25,
    cardSkillsArr: [""],
    ComponentToWrap: BaseInternalElement,
    internalComponentProps: { test: "testing" },
    wrapInternalWithLink: true,
    internalLink: "",
    paddInternalCard: true,
    internalCardPadding: 20,
};

interface CardComponentProps {
    useWidthPercent?: boolean;
    widthPercent?: number;
    showCardTitle?: boolean;
    cardTitleText?: string;
    cardTitleSize?: number;
    cardSkillsArr?: string[];
    ComponentToWrap: (props: any) => JSX.Element;
    internalComponentProps?: {};
    wrapInternalWithLink?: boolean;
    internalLink?: string;
    paddInternalCard?: boolean;
    internalCardPadding?: number;
}

export const observerOptions: IntersectionObserverInit = {
    threshold: 0.15,
};

export const CardComponent = ({
    useWidthPercent = DefaultCardProps.useWidthPercent,
    widthPercent = DefaultCardProps.widthPercent,
    showCardTitle = DefaultCardProps.showCardTitle,
    cardTitleSize = DefaultCardProps.cardTitleSize,
    cardTitleText = DefaultCardProps.cardTitleText,
    cardSkillsArr = DefaultCardProps.cardSkillsArr,
    ComponentToWrap = DefaultCardProps.ComponentToWrap,
    internalComponentProps = DefaultCardProps.internalComponentProps,
    wrapInternalWithLink = DefaultCardProps.wrapInternalWithLink,
    internalLink = DefaultCardProps.internalLink,
    paddInternalCard = DefaultCardProps.paddInternalCard,
    internalCardPadding = DefaultCardProps.internalCardPadding,
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
        <CardContainer $width={widthPercent} $usePercent={useWidthPercent}>
            <CardTitle $inView={titleIsInView} ref={titleRef}>
                <CardTitleText $fontSize={cardTitleSize}>
                    {showCardTitle && cardTitleText}
                </CardTitleText>
                <SkillsContainer>
                    {cardSkillsArr.map((skill, idx) => {
                        return (
                            <SkillIcon
                                src={skill}
                                $index={idx}
                                $inView={titleIsInView}
                                $customKeyframes={SkillIconKeyframes}
                                $loopInfinitely={false}
                                $useIndex
                                $useThemeTiming
                                $customTiming={0}
                                $pxSize={35}
                            />
                        );
                    })}
                </SkillsContainer>
            </CardTitle>
            {wrapInternalWithLink ? (
                <InternalCardContainerWithLink
                    $paddInternal={paddInternalCard}
                    $padAmount={internalCardPadding}
                    href={internalLink}
                    target="_blank"
                    $inView={cardIsInView}
                    ref={cardRef}
                >
                    <ComponentToWrap {...internalComponentProps} />
                </InternalCardContainerWithLink>
            ) : (
                <InternalWithoutLink
                    $paddInternal={paddInternalCard}
                    $padAmount={internalCardPadding}
                    $inView={cardNoLinkInView}
                    ref={cardRefNoLink}
                >
                    <ComponentToWrap {...internalComponentProps} />
                </InternalWithoutLink>
            )}
        </CardContainer>
    );
};
