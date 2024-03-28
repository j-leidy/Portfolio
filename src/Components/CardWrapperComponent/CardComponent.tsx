import { styled, css, keyframes, IStyledComponent } from "styled-components";
import {
    SkillIcon,
    SkillIconKeyframes,
    SkillsContainer,
} from "../CommonStyled/SkillIconsStyled";
import { InViewProps } from "../CommonStyled/CommonStyledProps";
import { useEffect, useRef, useState } from "react";
import { offWhite } from "../../Theme/ColorPallete";

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    ${({ theme, $inView }) => css`
        transition: opacity ${theme.animationTime.short}s ease-in;
        opacity: ${$inView ? "1" : "0"};
    `}
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 10px;
    overflow: hidden;
    ${({ theme }) => css`
        transition: background ${theme.animationTime.short}s;
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        box-shadow: 0 10px 16px -14px ${theme.colors.background === offWhite ? theme.colors.text : theme.colors.accentMain};
        @media screen and (max-width: ${theme.breakpoint}px) {
            align-items: center;
            flex-direction: column;
        }
    `}
`;

interface InternalCardProps extends InViewProps {
    $paddInternal: boolean;
    $padAmount: number;
}

const InternalComponentWrapper = styled.div<InternalCardProps>`
    ${({ $inView, theme }) =>
        $inView
            ? css`
                  animation: ${CardInViewKeyframes}
                      ${theme.animationTime.short}s;
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
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 10px;
    ${({ theme, $fontSize }) => css`
        font-size: ${$fontSize}px;
        color: ${theme.colors.accentOne};
        @media screen and (max-width: ${theme.breakpoint}px) {
            font-size: ${$fontSize * 0.7}px;
        }
    `}
`;

const BaseInternalElement = () => {
    return (
        <>
            <>Internal</>
        </>
    );
};

const DefaultStyledExtraWrap = styled.div``;

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
    defaultStyledExtraWrap: DefaultStyledExtraWrap,
    InternalCardContainerProps: {},
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
    paddInternalCard?: boolean;
    internalCardPadding?: number;
    InternalCardContainer?: IStyledComponent<any, any>;
    InternalCardContainerProps?: { [key: string]: unknown };
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
    paddInternalCard = DefaultCardProps.paddInternalCard,
    internalCardPadding = DefaultCardProps.internalCardPadding,
    InternalCardContainer = DefaultCardProps.defaultStyledExtraWrap,
    InternalCardContainerProps = DefaultCardProps.InternalCardContainerProps,
}: CardComponentProps) => {
    const cardRefNoLink = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const [cardNoLinkInView, setCardNoLinkInView] = useState<boolean>(false);
    const [titleIsInView, setTitleIsInView] = useState<boolean>(false);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (cardRefNoLink.current && titleRef.current) {
                        cardRefNoLink.current.className ===
                            entry.target.className &&
                            setCardNoLinkInView(entry.isIntersecting);
                        titleRef.current.className === entry.target.className &&
                            setTitleIsInView(entry.isIntersecting);
                    }
                });
            },
            observerOptions
        );
        if (cardRefNoLink.current && titleRef.current) {
            const refs = [titleRef.current, cardRefNoLink.current];
            refs.forEach((ref) => observer.observe(ref));
        }

        return () => observer.disconnect();
    }, [cardRefNoLink, titleRef]);
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
                                key={idx}
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
            <InternalCardContainer {...InternalCardContainerProps}>
                <InternalComponentWrapper
                    $paddInternal={paddInternalCard}
                    $padAmount={internalCardPadding}
                    $inView={cardNoLinkInView}
                    ref={cardRefNoLink}
                >
                    <ComponentToWrap {...internalComponentProps} />
                </InternalComponentWrapper>
            </InternalCardContainer>
        </CardContainer>
    );
};
