import { PageSectionContainer } from "../../Components/Reusables/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { DegreesData } from "./DegreesData";
import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";

export const Degrees = () => {
    return (
        <PageSectionContainer>
            <SectionTitle titleText="Degrees" useThemeColors={true} />
            {Object.keys(DegreesData).map((key, idx) => {
                const degreeObj = DegreesData[key as keyof typeof DegreesData];
                return (
                    <CardComponent
                        ComponentToWrap={DegreeExperienceInternal}
                        internalComponentProps={{
                            name: key,
                            title: degreeObj.degree,
                            dates: degreeObj.dates,
                            bodyText: degreeObj.bodyText,
                            logo: degreeObj.logo,
                        }}
                        cardSkillsArr={degreeObj.skills}
                        cardTitleText={degreeObj.accentText}
                        cardTitleSize={20}
                        wrapInternalWithLink={false}
                        internalCardPadding={5}
                        widthPercent={70}
                        key={idx}
                        useWidthPercent
                        paddInternalCard
                    />
                );
            })}
        </PageSectionContainer>
    );
};
