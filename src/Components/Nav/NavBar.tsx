import {
    NavContainer,
    IconTextMoonContainer,
    SpanOne,
    SpanThree,
    SpanTwo,
    BurgerCheckHolder,
    FakeCheckBox,
    Card,
    CardItem,
    NameText,
} from "./NavStyled";
import { useEffect, useRef, useState } from "react";
import { MoonIcon } from "./MoonIcon";

const menuOptions = ["Home", "Projects", "Experience", "Degrees"];
const ids = ["Hero", "Projects", "Experiences", "Degrees"];

export const MobileMenu = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [pixelValue, setPixelValue] = useState<number>(0);
    const [showNavBar, setShowNavBar] = useState<boolean>(true);
    const previousScrollValue = useRef<number>(window.scrollY);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const handleScroll = () => {
        if (window.scrollY > previousScrollValue.current) {
            setShowNavBar(true);
        } else if (window.scrollY <= previousScrollValue.current) {
            setShowNavBar(false);
        }
        previousScrollValue.current = window.scrollY;
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <NavContainer $show={showNavBar}>
            <IconTextMoonContainer>
                <NameText>JL</NameText>
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
                                scrollTo(ids[idx]);
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
