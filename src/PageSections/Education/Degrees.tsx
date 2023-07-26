import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { SectionTitle } from "../../Components/Reusables/SectionTitle";
import { Experience } from "../Experience/Experience";
import { DegreesData } from "./DegreesData";

export const Degrees = () => {
    return (
        <PageSectionContainer>
            <SectionTitle titleText="Degrees" useThemeColors={true} />
            {Object.keys(DegreesData).map((key, idx) => {
                const degreeObj = DegreesData[key as keyof typeof DegreesData];
                return (
                    <Experience
                        name={key}
                        title={degreeObj.degree}
                        dates={degreeObj.dates}
                        logo={degreeObj.logo}
                        bodyText={degreeObj.bodyText}
                        skills={degreeObj.skills}
                        accentText={degreeObj.accentText}
                    />
                );
            })}
        </PageSectionContainer>
    );
};
