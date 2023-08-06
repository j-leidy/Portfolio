import Portrait from "../../Images/CompressedPortrait.jpg";
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
import { useEffect, useRef } from "react";
import { storeSectionLocation } from "../../Functions/storeSectionLocation";
import { useDispatch } from "react-redux";

export const Hero = () => {
    const HeroRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        storeSectionLocation(HeroRef.current, dispatch);
    }, [HeroRef, dispatch]);
    return (
        <HeroContainer ref={HeroRef} id="Hero">
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
