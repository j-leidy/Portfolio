import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { DegreesData } from "./DegreesData";
import { CardComponent } from "../../Components/Reusables/CardComponent";
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
                        wrapInternalWithLink={false}
                        internalCardPadding={5}
                        widthPercent={70}
                        useWidthPercent
                        paddInternalCard
                    />
                );
            })}
        </PageSectionContainer>
    );
};
