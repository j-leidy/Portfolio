import { css, styled } from "styled-components";
import {
    SkillIcon,
    SkillsContainer,
} from "../Reusables/ReusableStyledComponents";
import { footerData } from "./FooterData";

const FooterContainer = styled.div`
    width: 100%;
    height: 20vh;
    z-index: 2;
    ${({ theme }) => css`
        background: ${theme.colors.background};
        color: ${theme.colors.text};
    `}
`;

const FooterWrap = styled.div`
    width: 100%;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Footer = () => {
    return (
        <FooterWrap>
            <SkillsContainer>
                {footerData.skills.map((skill, idx) => {
                    return (
                        <SkillIcon
                            $inView={true}
                            $index={idx}
                            src={skill}
                            key={idx}
                            $pxSize={30}
                        />
                    );
                })}
            </SkillsContainer>
            <FooterContainer>
                <>footer</>
            </FooterContainer>
        </FooterWrap>
    );
};
