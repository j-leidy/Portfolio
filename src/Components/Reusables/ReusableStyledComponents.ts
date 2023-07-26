import { styled, keyframes, css } from "styled-components";

export interface InViewProps {
    $inView: boolean;
}

export const PageSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props=>props.theme.colors.text};
    width: 70%;
    transition: ${props=>props.theme.animationTime.short}s all ease;
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        width: 90%;
    }
`;

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
    padding-top: 10px;
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

export interface SkillIconProps {
    $index: number;
    $inView: boolean;
    $pxSize?: number;
}

export const SkillIcon = styled.img<SkillIconProps>`
    ${({ $inView, $index, theme }) =>
        $inView
            ? css`
                  animation: ${SkillIconKeyframes}
                      ${$index+1 * theme.animationTime.short*1.1}s;
                  animation-fill-mode: forwards;
                  animation-iteration-count: 1;
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