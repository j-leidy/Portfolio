import IUPUILogo from "../../Icons/Education/IUPUILogo.png";
import IVYLogo from "../../Icons/Education/IvyLogo.png";

import PythonIcon from "../../Icons/Languages/PythonIcon.png";
import SQLIcon from "../../Icons/Languages/SQLIcon.png";
import CPPIcon from "../../Icons/Languages/CPPIcon.png";
import BinaryIcon from "../../Icons/Languages/BinaryIcon.png";
import DatabasesIcon from "../../Icons/Languages/DatabasesIcon.png";
import RISCV from  "../../Icons/Languages/RiscV.png";

export const DegreesData = {
    "IUPUI" : {
        degree: "B.S. Computer Science",
        dates: "June 2022 - Dec. 2024",
        bodyText: ["4.0 GPA"],
        logo: IUPUILogo,
        skills: [BinaryIcon,CPPIcon,RISCV],
        accentText: "4.0 GPA"
    },
    "IVY Tech" : {
        degree: "A.S. Computer Science",
        dates: "Jan. 2019 - May. 2022",
        bodyText: ["3.80 GPA"],
        logo: IVYLogo,
        skills: [CPPIcon,SQLIcon,DatabasesIcon, PythonIcon],
        accentText: "3.80 GPA"
    }
}