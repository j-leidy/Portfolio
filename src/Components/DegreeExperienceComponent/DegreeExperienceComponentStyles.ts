import { styled, keyframes,css } from "styled-components";



const CardKeyframesIN = keyframes`
    0%{
        max-height: 0;
        opacity: 0;
    }
    10%{
        padding-top: 10px;
        max-height: 600px;
        opacity: 0;
    }
    20%{
        padding-top: 10px;
        max-height: 600px;
        opacity: 1;
    }
    100%{
        padding-top: 10px;
        max-height: 600px;
        opacity: 1;
    }
`;

const CardKeyframesOut = keyframes`
    0%{
        opacity: 1;
        padding-top: 10px;
        max-height: 600px;
    }
    10%{
        opacity: 0;
        padding-top: 10px;
        max-height: 600px;
    }
    20%{
        max-height: 0px;
        padding-top: 0px;
        opacity: 0;
    }
    100%{
        opacity: 0;
        padding-top: 0px;
        max-height: 0px;
    }
`;

export const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 5px;
    align-items: center;
`;
export const ExperienceName = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        text-align: center;
    }
`;
export const ExperienceTitle = styled.div`
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        text-align: center;
    }
`;
export const ExperienceDate = styled.div`
    width: auto;
    white-space: nowrap;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        white-space: pre-wrap;
        font-size: 12px;
        width: auto;
        text-align: center;
    }
`;
export const ExperienceLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding-right: 5px;
`;
export const ExperienceTitleNameLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: auto;
        flex-direction: column;
    }
`;
export const ExperienceNameAndTitle = styled.div``;

export const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding-left: 5px;
    padding-right: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        padding: 0;
        flex-direction: column;
    }
`;

interface ExperienceBodyProps {
    $showBody: boolean;
    $animate: boolean;
}
export const ExperienceBody = styled.div<ExperienceBodyProps>`
    width: 80%;
    overflow: hidden;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    ${({$animate,$showBody,theme})=>($animate&&$showBody) && css`
        animation: ${CardKeyframesIN} ${theme.animationTime.medium}s;
        max-height: 600px;
        padding-top: 10px;
    `}
    ${({$animate,$showBody,theme})=>($animate&&!$showBody)&&css`
        animation: ${CardKeyframesOut} ${theme.animationTime.medium}s;
        max-height: 0px;
        padding-top: 0px;
    `}
    ${({$animate,$showBody})=>(!$animate &&$showBody)&&css`
        padding-top: 10px;
    `}
    ${({$animate,$showBody})=>(!$animate&&!$showBody)&&css`
        opacity: 1;
        padding-top: 0px;
        max-height:0px;
    `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
    }
`;
export const ExperienceBodyItem = styled.div``;