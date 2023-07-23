import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { ProjectsData } from "./ProjectsData";

export const Projects = () => {
    return (
        <PageSectionContainer>
            <SectionTitle titleText="Projects" useThemeColors={true} />
            {Object.keys(ProjectsData).map((key) => {
                return (
                    <ProjectCard
                        title={key}
                        bullets={
                            ProjectsData[key as keyof typeof ProjectsData]
                                .bullets
                        }
                        image={
                            ProjectsData[key as keyof typeof ProjectsData].image
                        }
                        skills={
                            ProjectsData[key as keyof typeof ProjectsData]
                                .skillsUsed
                        }
                        linkToProject={
                            ProjectsData[key as keyof typeof ProjectsData]
                                .linkToProject
                        }
                    />
                );
            })}
        </PageSectionContainer>
    );
};
