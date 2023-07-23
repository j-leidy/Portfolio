import { keyframes, styled } from "styled-components";
import { useState } from "react";

const ProjectCardWithtitle = styled.div`
    margin-top: 10%;
`;

const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    justify-content: space-around;
    padding: 20px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.background};
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        padding: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

const DesktopTextContainerKeyframes = keyframes`
    0%{
        max-width: 0;
        opacity: 0;
    }50%{
        opacity: 0;
    }
    100%{
        max-width: 600px;
        opacity: 1;
    }
`;

const MobileTextContainerKeyframes = keyframes`
    0%{
        max-height: 0;
        opacity: 0;
    }50%{
        opacity: 0;
    }
    100%{
        max-height: 600px;
        opacity: 1;
    }
`;

const ProjectCardTextContainer = styled.div`
    animation: ${DesktopTextContainerKeyframes} 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        animation: ${MobileTextContainerKeyframes} 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
    }
`;

const ProjectCardImage = styled.img`
    height: 400px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        height: 100%;
    }
`;

const ProjectcardTitle = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        font-size: 20px;
    }
`;

interface ProjectCardListProps {
    $showDescription: boolean;
}
const ProjectCardList = styled.ul<ProjectCardListProps>`
    overflow: hidden;
`;
const ProjectCardBulletItem = styled.li``;
const ProjectCardSkills = styled.div`
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
`;
const ProjectCardSkillIcon = styled.img`
    width: 48px;
    height: 48px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 30px;
        height: 30px;
    }
`;
const ProjectCardImageLink = styled.a``;

const ContentAndImage = styled.div`
    display: flex;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        flex-direction: column;
    }
`;

interface ProjectCardProps {
    title: string;
    image: string;
    bullets: string[];
    skills: string[];
    linkToProject: string;
}

export const ProjectCard = ({
    title,
    image,
    bullets,
    skills,
    linkToProject,
}: ProjectCardProps) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <ProjectCardWithtitle>
            <ProjectcardTitle>{title}</ProjectcardTitle>
            <ProjectCardContainer
                onClick={() => setShowDescription(!showDescription)}
            >
                {showDescription ? (
                    <ContentAndImage>
                        <ProjectCardImage src={image} />
                        <ProjectCardTextContainer>
                            <ProjectCardList $showDescription={showDescription}>
                                {bullets.map((bulletItem) => {
                                    return (
                                        <ProjectCardBulletItem>
                                            {bulletItem}
                                        </ProjectCardBulletItem>
                                    );
                                })}
                            </ProjectCardList>
                            <ProjectCardSkills>
                                {skills.map((skill) => {
                                    return <ProjectCardSkillIcon src={skill} />;
                                })}
                            </ProjectCardSkills>
                        </ProjectCardTextContainer>
                    </ContentAndImage>
                ) : (
                    <ProjectCardImage src={image} />
                )}
            </ProjectCardContainer>
        </ProjectCardWithtitle>
    );
};
