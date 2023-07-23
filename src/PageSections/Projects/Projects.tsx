import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { ProjectsData } from "./ProjectsData";

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
                    <ProjectCard
                        title={key}
                        key={idx}
                        image={Project.image}
                        skills={Project.skillsUsed}
                        linkToProject={Project.linkToProject}
                    />
                );
            })}
        </PageSectionContainer>
    );
};
