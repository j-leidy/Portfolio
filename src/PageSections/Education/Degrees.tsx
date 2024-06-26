import { PageSectionContainer } from "../../Components/CommonStyled/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { DegreesData } from "./DegreesData";
import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";

export const Degrees = () => {
    return (
        <PageSectionContainer id="Degrees">
            <SectionTitle
                titleText="Degrees"
                subText="Click or tap a card for more information."
                includeSubText
                useThemeColors
            />
            {Object.keys(DegreesData).map((key, idx) => {
                const degreeObj = DegreesData[key];
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
