import { styled, keyframes,css } from "styled-components";

export const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2%;
    align-items: center;
`;
export const ExperienceName = styled.div`
    text-transform: uppercase;
    font-weight: 600;
`;
export const ExperienceTitle = styled.div``;
export const ExperienceDate = styled.div`
    width: auto;
    white-space: nowrap;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        white-space: pre-wrap;
        font-size: 12px;
        width: auto;
        padding-right: 5px;
    }
`;
export const ExperienceLogo = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding-right: 5px;
`;
export const ExperienceTitleNameLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: auto;
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
    }
`;

const ExperienceBodyKeyframes = keyframes`
    0%{
        max-height: 0;
        opacity: 0;
    }
    100%{
        opacity:1;
        max-height: 300px;
    }
`;
interface ExperienceBodyProps {
    $showBody: boolean;
}
export const ExperienceBody = styled.div<ExperienceBodyProps>`
    width: 80%;
    padding: 0;
    overflow: hidden;
    min-height: 0;
    max-height: 0;
    opacity: 0;
    ${({ $showBody }) =>
        $showBody &&
        css`
            padding-top: 5%;
            animation: ${ExperienceBodyKeyframes} 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: 1;
        `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
        padding: 0;
    }
`;
export const ExperienceBodyItem = styled.div``;