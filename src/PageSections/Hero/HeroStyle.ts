import { styled,css } from "styled-components";
export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 200px;
    width: 100%;
    ${({theme})=>css`
        transition: ${theme.animationTime.short}s all ease;
        color: ${theme.colors.text};
        @media screen and (max-width: ${theme.breakpoint}px) {
            flex-direction: column-reverse;
            align-items: center;
        }
    `}
`;
export const HeroPortrait = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 200px;
        height: 200px;
    }
`;
export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 45px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        font-size: 28px;
    }
`;

export const HeroColoredText = styled.div`
    color: ${(props) => props.theme.colors.accentMain};
`;
export const HeroNormalText = styled.div`
    padding-right: 10px;
    height: 100%;
`;
export const HeroNameAndNormalContainer = styled.div`
    display: flex;
`;
export const TypeWriterStaticAndComponent = styled.div`
    display: flex;
    font-size: 20px;
`;
export const TypeWriterStatictext = styled.div`
    padding-right: 5px;
`;