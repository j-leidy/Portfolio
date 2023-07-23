import Portrait from "../../Images/PortraitFlip.jpg";
import TypewriterComponent from "typewriter-effect";
import { typewriterConfig } from "./TypewriterConfig";
import {
    HeroContainer,
    HeroText,
    HeroColoredText,
    HeroNameAndNormalContainer,
    HeroNormalText,
    HeroPortrait,
    TypeWriterStaticAndComponent,
    TypeWriterStatictext,
} from "./HeroStyle";

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>
                <HeroColoredText>Hello!</HeroColoredText>
                <HeroNameAndNormalContainer>
                    <HeroNormalText>My name is </HeroNormalText>
                    <HeroColoredText>John Leidy II</HeroColoredText>
                </HeroNameAndNormalContainer>
                <TypeWriterStaticAndComponent>
                    <TypeWriterStatictext>I am a </TypeWriterStatictext>
                    <TypewriterComponent options={typewriterConfig} />
                </TypeWriterStaticAndComponent>
            </HeroText>
            <HeroPortrait src={Portrait} />
        </HeroContainer>
    );
};
