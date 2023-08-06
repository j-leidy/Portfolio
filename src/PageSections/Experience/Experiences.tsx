import { DegreeExperienceInternal } from "../../Components/DegreeExperienceComponent/DegreeExperienceComponent";
import { CardComponent } from "../../Components/CardWrapperComponent/CardComponent";
import { PageSectionContainer } from "../../Components/CommonStyled/PageSection";
import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { ExperiencesData } from "./ExperiencesData";
import { storeSectionLocation } from "../../Functions/storeSectionLocation";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

export const Experiences = () => {
    const ExperienceRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        storeSectionLocation(ExperienceRef.current, dispatch);
    }, [ExperienceRef, dispatch]);
    return (
        <PageSectionContainer ref={ExperienceRef} id="Experiences">
            <SectionTitle
                titleText="Experience"
                useThemeColors
                includeSubText
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
