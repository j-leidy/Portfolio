import { keyframes, styled, css } from "styled-components";
import { useState } from "react";
const ExperienceContainer = styled.div`
    display: flex;
    padding-top: 10%;
    width: 80%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
    }
`;
const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    background: ${(props) => props.theme.colors.background};
    transition: background ${(props) => props.theme.animationTime.short}s;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
`;
const ExperienceName = styled.div`
    text-transform: uppercase;
    font-weight: 600;
`;
const ExperienceTitle = styled.div``;
const ExperienceDate = styled.div`
    width: auto;
    white-space: nowrap;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        white-space: pre-wrap;
        font-size: 12px;
        width: auto;
        padding-right: 5px;
    }
`;
const ExperienceLogo = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding-right: 5px;
`;
const ExperienceTitleNameLogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: auto;
    }
`;
const ExperienceNameAndTitle = styled.div``;
const ExperienceHeader = styled.div`
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
const ExperienceBody = styled.div<ExperienceBodyProps>`
    width: 80%;
    padding: 0;
    overflow: hidden;
    min-height: 0;
    max-height: 0;
    opacity: 0;
    ${({ $showBody }) =>
        $showBody &&
        css`
            animation: ${ExperienceBodyKeyframes} 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: 1;
        `}
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 90%;
        padding: 0;
    }
`;

const ExperienceBodyItem = styled.div``;

const DefaultExperienceProps = {
    companyName: "Test Company",
    jobTitle: "Test Job Title",
    dates: "Aug. 2018 - Sept. 2023",
    bodyText: ["Worked on things and kept working on things."],
    logo: "",
};

interface ExperienceProps {
    name?: string;
    title?: string;
    dates?: string;
    bodyText?: string[];
    logo?: string;
}

export const Experience = ({
    name = DefaultExperienceProps.companyName,
    title = DefaultExperienceProps.jobTitle,
    dates = DefaultExperienceProps.dates,
    bodyText = DefaultExperienceProps.bodyText,
    logo = DefaultExperienceProps.logo,
}: ExperienceProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <ExperienceContainer onClick={() => setShowMore(!showMore)}>
            <ExperienceContentContainer>
                <ExperienceHeader>
                    <ExperienceTitleNameLogoContainer>
                        <ExperienceLogo src={logo} />
                        <ExperienceNameAndTitle>
                            <ExperienceName>{name}</ExperienceName>
                            <ExperienceTitle>{title}</ExperienceTitle>
                        </ExperienceNameAndTitle>
                    </ExperienceTitleNameLogoContainer>
                    <ExperienceDate>{dates}</ExperienceDate>
                </ExperienceHeader>
                <ExperienceBody $showBody={showMore}>
                    {bodyText.map((item) => {
                        return (
                            <ExperienceBodyItem>◦ {item}</ExperienceBodyItem>
                        );
                    })}
                </ExperienceBody>
            </ExperienceContentContainer>
        </ExperienceContainer>
    );
};
