import { styled, keyframes, css } from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";
import { InViewProps } from "./CommonStyledProps";

export interface SkillsContainerProps {
    $centerItems: boolean;
}

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    height: 48px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        height: 30px;
    }
`;

export const SkillIconKeyframes = keyframes`
  0%{
    opacity: 0;
    transform: translateX(100%);
  }85%{
    opacity: 0;
    transform: translateX(100%);
  }90%{
    opacity: 0;
  }100%{
    opacity: 1;
    transform: translateX(0);
  } 
`;

export const FooterSkillIconKeyframes = keyframes`
     0%{
    opacity: 0;
    transform: translateX(-100%);
  }85%{
    opacity: 0;
    transform: translateX(-100%);
  }90%{
    opacity: 0;
  }100%{
    opacity: 1;
    transform: translateX(0);
  } 
`;

export interface SkillIconProps extends InViewProps {
    $index: number;
    $pxSize?: number;
    $customKeyframes: Keyframes;
    $loopInfinitely: boolean;
    $useIndex: boolean;
    $useThemeTiming: boolean;
    $customTiming: number;

}

export const SkillIcon = styled.img<SkillIconProps>`
    ${({ $inView, $index, $customKeyframes, $loopInfinitely, $useThemeTiming, $customTiming, $useIndex, theme }) =>
        $inView
            ? css`
                  animation: ${$customKeyframes} ${$useIndex ? ($index+1 * ($useThemeTiming ? theme.animationTime.short : $customTiming )*1.1) : ($useThemeTiming ? theme.animationTime.short : $customTiming )}s;
                  animation-fill-mode: forwards;
                  animation-iteration-count: ${$loopInfinitely ? 'infinite' : '1'};
              `
            : css`
                  opacity: 0;
              `}
    ${({$pxSize})=>
    $pxSize
        ? css`
            width: ${$pxSize}px; 
            height: ${$pxSize}px;
            `  
        : css` 
            width: 40px;
            height: 40px;`
            }
    padding: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        ${({$pxSize})=>$pxSize ? css`width: ${$pxSize/2}px; height: ${$pxSize/2}px;` : css` width: 20px;
    height: 20px;`}
        padding: 2px;
    }
`;