import { styled } from "styled-components";

export const PageSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props=>props.theme.colors.text};
    width: 60%;
    transition: ${props=>props.theme.animationTime.short}s all ease;
    @media screen and (max-width: ${props=>props.theme.breakpoint}px){
        width: 90%;
    }
`;