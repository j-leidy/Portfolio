import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { Experience } from "./Experience";
import { ExperiencesData } from "./ExperiencesData";

export const Experiences = () => {
    return (
        <PageSectionContainer>
            <SectionTitle
                titleText="Experience"
                useThemeColors={true}
                includeSubText={true}
                subText="Click or tap a card for more information!"
            />
            {Object.keys(ExperiencesData).map((key) => {
                const experienceObj =
                    ExperiencesData[key as keyof typeof ExperiencesData];
                return (
                    <Experience
                        name={key}
                        dates={experienceObj.dates}
                        bodyText={experienceObj.bodyText}
                        title={experienceObj.jobTitle}
                        logo={experienceObj.logo}
                        skills={experienceObj.skills}
                        accentText={experienceObj.accentText}
                    />
                );
            })}
        </PageSectionContainer>
    );
};
