import styled, { css } from "styled-components";

interface Props {
    $active: boolean;
}

export const MobileMenuSVG = styled.svg``;

export const MobileMenuPathStyled = styled.path``;

export const NavContainer = styled.div`
    transition: 0.3s all ease;
    position: fixed;
    top: 0;
    height: 52px;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10;
    opacity: 1;
    caret-color: transparent;
    ${({theme})=>css`
        box-shadow: 0px 0px 10px -4px ${theme.colors.UIAccent};
        background: ${theme.colors.UIAccent};
    `}
`;

export const IconTextMoonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 10vw;
    height: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100px;
    }
`;

export const MobileIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.text};
`;

export const MobileMenuText = styled.div`
    font-weight: 700;
    font-size: 25px;
    text-align: cetner;
    color: ${(props) => props.theme.colors.text};
`;

export const FakeCheckBox = styled.input<Props>`
    position: relative;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    z-index: ${(props) => (props.$active ? "5" : "3")};
    opacity: 0;
    padding: 0;
    margin: 0;
`;

export const BurgerCheckHolder = styled.div`
    margin-left: auto;
    margin-right: 2vw;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 2;
    caret-color: transparent;
`;

export const SpanOne = styled.div<Props>`
    transition: 0.3s all ease;
    position: relative;
    z-index: 2;
    height: 4px;
    width: 30px;
    border-radius: 10px;
    ${({theme, $active})=>css`
        top: ${$active ? "-30px" : "-40px"};
        background: ${
            $active
                ? theme.colors.accentMain
                : theme.colors.backgroundOpposite};
         transform: rotate(${$active ? "-45deg" : "0deg"});
    `}
`;

export const SpanTwo = styled.div<Props>`
    transition: 0.3s all ease;
    position: relative;
    top: -34px;
    height: 4px;
    width: 30px;
    opacity: ${(props) => (props.$active ? "0" : "1")};
    border-radius: 10px;
    ${({theme,$active})=>css`
        background: ${theme.colors.backgroundOpposite};
        opacity: ${$active ? "0" : "1"};
    `}
`;

export const SpanThree = styled.div<Props>`
    transition: 0.3s all ease;
    position: relative;
    z-index: 2;
    height: 4px;
    width: 30px;
    border-radius: 10px;
    ${({theme, $active})=>css`
        top: ${$active ? "-38px" : "-28px"};
        background: ${
            $active
                ? theme.colors.accentMain
                : theme.colors.backgroundOpposite};
         transform: rotate(${$active ? "-45deg" : "0deg"});
    `}

`;

export const Card = styled.div<Props>`
    transition: 0.3s all ease;
    z-index: 1;
    position: absolute;
    right: 0;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    ${({theme, $active})=>css`
        top: ${$active ? "0" : "-2000px"};
        background: ${theme.colors.backgroundOpposite};
        @media screen and (max-width: ${theme.breakpoint}px) {
            height: 100vh;
        }
    `}
`;

export const CardItem = styled.div`
    color: ${(props) => props.theme.colors.textOpposite};
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
`;
