import { keyframes, styled } from "styled-components";

const ProjectCardWithtitle = styled.div`
    margin-top: 10%;
    caret-color: transparent;
    overflow: hidden;
`;

const ProjectCardContainer = styled.a`
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.accentMain};
    justify-content: space-around;
    padding: 20px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.background};
    overflow: hidden;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        padding: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

const ProjectCardImage = styled.img`
    height: 400px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        height: 100%;
    }
`;
const ProjectCardTitleDesktop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.accentOne};
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        font-size: 20px;
    }
`;

const ProjectCardSkills = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    padding-top: 10px;
    height: 48px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        justify-content: space-evenly;
        height: 30px;
    }
`;
const SkillIconKeyframes = keyframes`
  0%{
    opacity: 0;
  }
  65%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  } 
`;
interface ProjectCardSkillIconProps {
    $index: number;
}
const ProjectCardSkillIcon = styled.img<ProjectCardSkillIconProps>`
    animation: ${SkillIconKeyframes} ${(props) => props.$index * 0.4}s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    width: 40px;
    height: 40px;
    padding: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 20px;
        height: 20px;
        padding: 0;
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
    return (
        <ProjectCardWithtitle>
            <ProjectCardTitleDesktop>
                {title}
                <ProjectCardSkills>
                    {skills.map((skill, idx) => {
                        return (
                            <ProjectCardSkillIcon $index={idx} src={skill} />
                        );
                    })}
                </ProjectCardSkills>
            </ProjectCardTitleDesktop>
            <ProjectCardContainer href={linkToProject} target="_blank">
                <ProjectCardImage src={image} />
            </ProjectCardContainer>
        </ProjectCardWithtitle>
    );
};
