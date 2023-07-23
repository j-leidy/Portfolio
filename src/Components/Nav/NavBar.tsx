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
} from "./MobileMenuStyle";
import { useState } from "react";
import JLICON from "../../Icons/JLICON.png";
import { MoonIcon } from "./MoonIcon";

const menuOptions = ["Home", "About Me", "Projects", "Experience"];

export const MobileMenu = () => {
    const [clicked, setClicked] = useState(false);
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
                {menuOptions.map((option) => {
                    return (
                        <CardItem
                            onClick={() => {
                                // add scroll to here
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
