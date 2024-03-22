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
    const [scrollShow, setScrollShow] = useState<boolean>(true);
    const [pixelValue, setPixelValue] = useState<number>(0);
    const previousScrollValue = useRef<number>(window.scrollY);
    const navShowAmount = useRef<number>(140);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const handleScroll = () => {
        if (window.scrollY > previousScrollValue.current) {
            //increase the amount shown until 100 percent
            if (
                navShowAmount.current < 140 &&
                navShowAmount.current +
                    (window.scrollY - previousScrollValue.current) <=
                    140
            ) {
                navShowAmount.current +=
                    window.scrollY - previousScrollValue.current;
                setPixelValue(-navShowAmount.current / 2);
            }
            if (
                navShowAmount.current < 140 &&
                navShowAmount.current +
                    (window.scrollY - previousScrollValue.current) >
                    140
            ) {
                navShowAmount.current = 140;
                setPixelValue(-navShowAmount.current / 2);
            }
        } else if (window.scrollY <= previousScrollValue.current) {
            if (
                navShowAmount.current > 0 &&
                navShowAmount.current -
                    (previousScrollValue.current - window.scrollY) >
                    0
            ) {
                navShowAmount.current -=
                    previousScrollValue.current - window.scrollY;
                setPixelValue(-navShowAmount.current / 2);
            }
            if (
                navShowAmount.current > 0 &&
                navShowAmount.current -
                    (previousScrollValue.current - window.scrollY) <=
                    0
            ) {
                navShowAmount.current = 0;
                setPixelValue(0);
            }
            setScrollShow(true);
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
        <NavContainer $top={pixelValue}>
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
