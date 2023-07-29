import { SectionTitle } from "../../Components/SectionTitleComponent/SectionTitle";
import { PageSectionContainer } from "../../Components/Reusables/ReusableStyledComponents";
import { styled } from "styled-components";

const AboutMeText = styled.div`
    text-indent: 35px;
    padding-top: 50px;
    width: 70%;
`;

export const AboutMe = () => {
    return (
        <PageSectionContainer>
            <SectionTitle titleText="About Me" useThemeColors={true} />
            <AboutMeText>
                I am John Leidy II, a computer science student and developer.
                Born in a small town, I moved twice before settling in Indiana.
                There, I rebuilt my life and learned to contribute to society. I
                now spend my free time expanding my skills and credentials
                through education and personal projects. My passion lies in
                technology, and I enjoy creating software in my spare time,
                including command line applications in C++ and front-end
                development using React. If you have any questions about my
                projects, please reach out to me at the bottom of the page or
                through my LinkedIn.
            </AboutMeText>
        </PageSectionContainer>
    );
};
