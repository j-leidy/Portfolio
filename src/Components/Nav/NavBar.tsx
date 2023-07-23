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
                <CardItem
                    onClick={() => {
                        // add scroll to here
                        setClicked(!clicked);
                    }}
                >
                    Command Usage
                </CardItem>
                <CardItem
                    onClick={() => {
                        // add scroll to here
                        setClicked(!clicked);
                    }}
                >
                    Activity Metrics
                </CardItem>
                <CardItem
                    onClick={() => {
                        // add scroll to here
                        setClicked(!clicked);
                    }}
                >
                    Leaderboards
                </CardItem>
            </Card>
        </NavContainer>
    );
};
