import { PageSectionContainer } from "../../Components/CommonStyled/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { DegreesData } from "./DegreesData";
import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";
import { useEffect, useRef } from "react";
import { storeSectionLocation } from "../../Functions/storeSectionLocation";
import { useDispatch } from "react-redux";

export const Degrees = () => {
    const DegreeRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        storeSectionLocation(DegreeRef.current, dispatch);
    }, [DegreeRef, dispatch]);
    return (
        <PageSectionContainer ref={DegreeRef} id="Degrees">
            <SectionTitle titleText="Degrees" useThemeColors />
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
