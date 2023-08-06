import {
    NavContainer,
    IconTextMoonContainer,
    MobileIcon,
    SpanOne,
    SpanThree,
    SpanTwo,
    BurgerCheckHolder,
    FakeCheckBox,
    Card,
    CardItem,
} from "./NavStyled";
import { useState } from "react";
import JLICON from "../../Icons/JLICON.png";
import { MoonIcon } from "./MoonIcon";
import {
    selectDegreesLocation,
    selectExperiencesLocation,
    selectHeroLocation,
    selectProjectsLocation,
} from "../../Redux/ScrollSlice/ScrollSlice";
import { useAppSelector } from "../../Hooks/Hooks";

const menuOptions = ["Home", "Projects", "Experience", "Degrees"];

export const MobileMenu = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const selectors = {
        Home: useAppSelector(selectHeroLocation),
        Projects: useAppSelector(selectProjectsLocation),
        Experience: useAppSelector(selectExperiencesLocation),
        Degrees: useAppSelector(selectDegreesLocation),
    };
    const scrollTo = (location: number) => {
        window.scrollTo({ top: location, left: 0, behavior: "smooth" });
    };
    return (
        <NavContainer>
            <IconTextMoonContainer>
                <MobileIcon src={JLICON} />
                <MoonIcon />
            </IconTextMoonContainer>
            <BurgerCheckHolder>
                <FakeCheckBox
                    type="checkbox"
                    onClick={() => setClicked(!clicked)}
                    $active={clicked}
                />
                <SpanOne $active={clicked} />
                <SpanTwo $active={clicked} />
                <SpanThree $active={clicked} />
            </BurgerCheckHolder>
            <Card $active={clicked}>
                {menuOptions.map((option, idx) => {
                    return (
                        <CardItem
                            key={idx}
                            onClick={() => {
                                scrollTo(
                                    selectors[option as keyof typeof selectors]
                                );
                                setClicked(!clicked);
                            }}
                        >
                            {option}
                        </CardItem>
                    );
                })}
            </Card>
        </NavContainer>
    );
};
