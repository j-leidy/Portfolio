import { styled, css } from "styled-components";

export const PageSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    ${({theme})=>css`
        color: ${theme.colors.text};
        transition: ${theme.animationTime.short}s all ease;
        @media screen and (max-width: ${theme.breakpoint}px){
            width: 90%;
        }
    `}
`;