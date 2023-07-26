import { CardComponent } from "../../Components/Reusables/CardComponent";
import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { Experience } from "../../Components/RefactoredToOne/Experience";
import { ExperiencesData } from "./ExperiencesData";
import { useState } from "react";
import { styled, css, keyframes } from "styled-components";

const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
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

interface ExperienceInternalProps {
    name?: string;
    title?: string;
    dates?: string;
    bodyText?: string[];
    logo?: string;
}

const ExperienceInternal = ({
    name = DefaultExperienceProps.companyName,
    title = DefaultExperienceProps.jobTitle,
    dates = DefaultExperienceProps.dates,
    bodyText = DefaultExperienceProps.bodyText,
    logo = DefaultExperienceProps.logo,
}: ExperienceInternalProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <ExperienceContentContainer onClick={() => setShowMore(!showMore)}>
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
                    return <ExperienceBodyItem>◦ {item}</ExperienceBodyItem>;
                })}
            </ExperienceBody>
        </ExperienceContentContainer>
    );
};

export const Experiences = () => {
    return (
        <PageSectionContainer>
            <SectionTitle
                titleText="Experience"
                useThemeColors={true}
                includeSubText={true}
                subText="Click or tap a card for more information!"
            />
            {Object.keys(ExperiencesData).map((key, idx) => {
                const experienceObj =
                    ExperiencesData[key as keyof typeof ExperiencesData];
                return (
                    <CardComponent
                        showCardTitle={false}
                        ComponentToWrap={ExperienceInternal}
                        internalComponentProps={{
                            name: key,
                            title: experienceObj.jobTitle,
                            dates: experienceObj.dates,
                            bodyText: experienceObj.bodyText,
                            logo: experienceObj.logo,
                        }}
                        cardSkillsArr={experienceObj.skills}
                        wrapInternalWithLink={false}
                        useWidthPercent
                        paddInternalCard
                        internalCardPadding={5}
                    />
                );
            })}
        </PageSectionContainer>
    );
};
