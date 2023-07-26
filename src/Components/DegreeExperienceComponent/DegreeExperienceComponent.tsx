import { useState } from "react";
import {
    ExperienceContentContainer,
    ExperienceHeader,
    ExperienceTitleNameLogoContainer,
    ExperienceLogo,
    ExperienceNameAndTitle,
    ExperienceName,
    ExperienceTitle,
    ExperienceDate,
    ExperienceBody,
    ExperienceBodyItem,
} from "./DegreeExperienceComponentStyles";

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

export const DegreeExperienceInternal = ({
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
