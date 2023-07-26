import { CardComponent } from "../../Components/Reusables/CardComponent";
import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { ProjectCardImage } from "./ProjectCardStyle";
import { ProjectsData } from "./ProjectsData";

const ProjectImageTest = (props: { image: string }) => {
    return <ProjectCardImage src={props.image} />;
};

export const Projects = () => {
    return (
        <PageSectionContainer>
            <SectionTitle
                titleText="Projects"
                useThemeColors={true}
                includeSubText={true}
                subText="Click or tap a card for more information"
            />
            {Object.keys(ProjectsData).map((key, idx) => {
                const Project = ProjectsData[key];
                return (
                    <CardComponent
                        internalComponentProps={{ image: Project.image }}
                        ComponentToWrap={ProjectImageTest}
                        cardSkillsArr={Project.skillsUsed}
                        cardTitleText={key}
                        internalLink={Project.linkToProject}
                        wrapInternalWithLink
                    />
                );
            })}
        </PageSectionContainer>
    );
};
