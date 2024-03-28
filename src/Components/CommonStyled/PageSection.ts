import { styled, css } from "styled-components";

interface PageSectionContainerProps {
    $useThemeBackground?:boolean
}

export const PageSectionContainer = styled.div<PageSectionContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 70%;
    ${({theme,$useThemeBackground})=>css`
        background: ${$useThemeBackground ? theme.colors.background : 'transparent'};
        color: ${theme.colors.text};
        transition: ${theme.animationTime.short}s all ease;
        @media screen and (max-width: ${theme.breakpoint}px){
            width: 90%;
        }
    `}
`;