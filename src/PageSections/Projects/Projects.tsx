import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { PageSectionContainer } from "../../Components/CommonStyled/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { ProjectsData } from "./ProjectsData";
import { styled } from "styled-components";

const ProjectCardImage = styled.img`
    height: 500px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint}px) {
        width: 100%;
        height: 100%;
    }
`;

const ProjectImage = (props: { image: string }) => {
    return <ProjectCardImage src={props.image} />;
};

const ImageWrapper = styled.a``;

export const Projects = () => {
    return (
        <PageSectionContainer id="Projects">
            <SectionTitle
                titleText="Projects"
                useThemeColors
                includeSubText
                subText="Click or tap a card for more information."
            />
            {Object.keys(ProjectsData).map((key, idx) => {
                const Project = ProjectsData[key];
                return (
                    <CardComponent
                        internalComponentProps={{ image: Project.image }}
                        ComponentToWrap={ProjectImage}
                        cardSkillsArr={Project.skillsUsed}
                        cardTitleText={key}
                        key={idx}
                        InternalCardContainer={ImageWrapper}
                        InternalCardContainerProps={{
                            href: Project.linkToProject,
                            target: "_blank",
                        }}
                    />
                );
            })}
        </PageSectionContainer>
    );
};
