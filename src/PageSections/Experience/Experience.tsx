import { keyframes, styled, css } from "styled-components";
import { useState, useRef, useEffect } from "react";
import { observerOptions } from "../Projects/ProjectCard";
import {
    InViewProps,
    SkillIcon,
    SkillsContainer,
} from "../../Components/Reusables/ReusableStyledComponents";

const ExperienceContainer = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
    }
`;
const ExperienceContentContainer = styled.div<InViewProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    background: ${(props) => props.theme.colors.background};
    transition: background ${(props) => props.theme.animationTime.short}s;
    padding-bottom: 10px;
    border-radius: 10px;
    transition: opacity ${(props) => props.theme.animationTime.medium}s;
    opacity: ${(props) => (props.$inView ? 1 : 0)};
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
    skills: [],
    accentText: "",
};

const ExperienceWrap = styled.div`
    padding-top: 10%;
    width: 100%;
`;

const ExperienceEntryAccentContainer = styled.div`
    color: ${(props) => props.theme.colors.accentOne};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ExperienceAccentText = styled.div`
    font-weight: 600;
`;

interface ExperienceProps {
    name?: string;
    title?: string;
    dates?: string;
    bodyText?: string[];
    logo?: string;
    skills?: string[];
    accentText?: string;
}

export const Experience = ({
    name = DefaultExperienceProps.companyName,
    title = DefaultExperienceProps.jobTitle,
    dates = DefaultExperienceProps.dates,
    bodyText = DefaultExperienceProps.bodyText,
    logo = DefaultExperienceProps.logo,
    skills = DefaultExperienceProps.skills,
    accentText = DefaultExperienceProps.accentText,
}: ExperienceProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const experienceRef = useRef<HTMLDivElement>(null);
    const experienceAccentRef = useRef<HTMLDivElement>(null);

    const [experienceIsInView, setExperienceIsInView] =
        useState<boolean>(false);
    const [experienceAccentIsInView, setExperienceAccentIsInView] =
        useState<boolean>(false);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (experienceAccentRef.current && experienceRef.current) {
                        experienceAccentRef.current.className ===
                            entry.target.className &&
                            setExperienceAccentIsInView(entry.isIntersecting);
                        experienceRef.current.className ===
                            entry.target.className &&
                            setExperienceIsInView(entry.isIntersecting);
                    }
                });
            },
            observerOptions
        );
        if (experienceRef.current && experienceAccentRef.current) {
            const refs = [experienceRef.current, experienceAccentRef.current];
            refs.forEach((ref) => observer.observe(ref));
        }
        return () => observer.disconnect();
    }, [experienceRef, experienceAccentRef]);

    return (
        <ExperienceWrap>
            <ExperienceEntryAccentContainer ref={experienceAccentRef}>
                <ExperienceAccentText>{accentText}</ExperienceAccentText>
                <SkillsContainer>
                    {skills.map((skill, idx) => {
                        return (
                            <SkillIcon
                                $inView={experienceAccentIsInView}
                                $index={idx}
                                src={skill}
                                key={idx}
                            />
                        );
                    })}
                </SkillsContainer>
            </ExperienceEntryAccentContainer>
            <ExperienceContainer
                onClick={() => setShowMore(!showMore)}
                ref={experienceRef}
            >
                <ExperienceContentContainer $inView={experienceIsInView}>
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
                                <ExperienceBodyItem>
                                    ◦ {item}
                                </ExperienceBodyItem>
                            );
                        })}
                    </ExperienceBody>
                </ExperienceContentContainer>
            </ExperienceContainer>
        </ExperienceWrap>
    );
};
