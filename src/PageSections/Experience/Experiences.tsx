import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";
import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { PageSectionContainer } from "../../Components/CommonStyled/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { ExperiencesData } from "./ExperiencesData";

export const Experiences = () => {
    return (
        <PageSectionContainer id="Experiences">
            <SectionTitle
                titleText="Experience"
                useThemeColors
                includeSubText
                subText="Click or tap a card for more information."
            />
            {Object.keys(ExperiencesData).map((key, idx) => {
                const experienceObj = ExperiencesData[key];
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
                        widthPercent={70}
                        internalCardPadding={0}
                        key={idx}
                        useWidthPercent
                        paddInternalCard
                    />
                );
            })}
        </PageSectionContainer>
    );
};
