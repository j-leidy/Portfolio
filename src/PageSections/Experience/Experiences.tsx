import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";
import { CardComponent } from "../../Components/Reusables/CardComponent";
import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
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
            {Object.keys(ExperiencesData).map((key, idx) => {
                const experienceObj =
                    ExperiencesData[key as keyof typeof ExperiencesData];
                return (
                    <CardComponent
                        showCardTitle={false}
                        ComponentToWrap={DegreeExperienceInternal}
                        internalComponentProps={{
                            name: key,
                            title: experienceObj.jobTitle,
                            dates: experienceObj.dates,
                            bodyText: experienceObj.bodyText,
                            logo: experienceObj.logo,
                        }}
                        cardSkillsArr={experienceObj.skills}
                        wrapInternalWithLink={false}
                        widthPercent={80}
                        internalCardPadding={5}
                        useWidthPercent
                        paddInternalCard
                    />
                );
            })}
        </PageSectionContainer>
    );
};
