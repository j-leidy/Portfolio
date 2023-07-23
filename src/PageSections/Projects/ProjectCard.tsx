import { styled } from "styled-components";

const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    width: 100%;
    justify-content: space-around;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const ProjectCardTextContainer = styled.div``;

const ProjectCardImage = styled.img`
    width: 100px;
    height: 100px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        height: 100%;
    }
`;

const ProjectCardTitle = styled.div``;
const ProjectCardList = styled.ul``;
const ProjectCardBulletItem = styled.li``;
const ProjectCardSkills = styled.div``;
const ProjectCardSkillIcon = styled.img`
    width: 48px;
    height: 48px;
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
    return (
        <ProjectCardContainer>
            <ProjectCardTextContainer>
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <ProjectCardList>
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
            <ProjectCardImage src={image} />
        </ProjectCardContainer>
    );
};
