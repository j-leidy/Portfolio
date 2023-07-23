import { keyframes, styled, css } from "styled-components";

interface InViewProps {
    $inView: boolean;
}



interface ProjectCardSkillIconProps {
    $index: number;
    $inView: boolean;
}

const ProjectCardContainerKeyframes = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  } 
`;

export const SkillIconKeyframes = keyframes`
  0%{
    opacity: 0;
    transform: translateX(100%);
  }
  40%{
    opacity: 0;
    transform: translateX(100%);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  } 
`;

export const ProjectCardWithtitle = styled.div`
    margin-top: 10%;
    caret-color: transparent;
    overflow: hidden;
`;

export const ProjectCardContainer = styled.a<InViewProps>`
    ${({ $inView, theme }) =>
        $inView
            ? css`
                  animation: ${ProjectCardContainerKeyframes}
                      ${theme.animationTime.long*0.6}s;
                  animation-iteration-count: 1;
                  animation-fill-mode: forwards;
                  animation-timing-function: ease-in;
              `
            : css`
                  opacity: 0;
              `}
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    justify-content: space-around;
    padding: 20px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.background};
    overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        padding: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

export const ProjectCardImage = styled.img`
    height: 400px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        height: 100%;
    }
`;

export const ProjectCardTitle = styled.div<InViewProps>`
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

export const ProjectCardSkills = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    padding-top: 10px;
    height: 48px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        justify-content: space-evenly;
        height: 30px;
    }
`;

export const ProjectCardSkillIcon = styled.img<ProjectCardSkillIconProps>`
    ${({ $inView, $index, theme }) =>
        $inView
            ? css`
                  animation: ${SkillIconKeyframes}
                      ${$index * theme.animationTime.short}s;
                  animation-fill-mode: forwards;
                  animation-iteration-count: 1;
              `
            : css`
                  opacity: 0;
              `}
    width: 40px;
    height: 40px;
    padding: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 20px;
        height: 20px;
        padding: 0;
    }
`;