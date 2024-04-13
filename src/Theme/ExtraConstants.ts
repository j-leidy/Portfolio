import { offWhite } from "./ColorPallete";

import TWITWhite from "../Icons/SetBW/TWITSETWhite.png";
import TWITBlack from "../Icons/SetBW/TWITSETBlack.png";
import IGWhite from "../Icons/SetBW/IGSETWhite.png";
import IGBlack from "../Icons/SetBW/IGSETBlack.png";
import LIWhite from "../Icons/SetBW/LISETWhite.png";
import LIBlack from "../Icons/SetBW/LISETBlack.png";
import GHWhite from "../Icons/SetBW/GHSETWhite.png";
import GHBlack from "../Icons/SetBW/GHSETBlack.png";
import FBWhite from "../Icons/SetBW/FBSETWhite.png";
import FBBlack from "../Icons/SetBW/FBSETBlack.png";

export type SocialIconsObject = {
    [key: string]: {
        link: string;
        icon: string;
    };
};

export const BlackSocials: SocialIconsObject = {
    GitHub: {
        link: "https://github.com/j-leidy",
        icon: GHBlack,
    },
    LinkedIn: {
        link: "https://www.linkedin.com/in/jrleidyii/",
        icon: LIBlack,
    },
};

export const WhiteSocials: SocialIconsObject = {
    GitHub: {
        link: "https://github.com/j-leidy",
        icon: GHWhite,
    },
    LinkedIn: {
        link: "https://www.linkedin.com/in/jrleidyii/",
        icon: LIWhite,
    },
};

export const WelcomeParticlesBackground = {
    color: { offWhite },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
};
