import IUPUILogo from "../../Icons/Education/IUPUILogo.png";
import IVYLogo from "../../Icons/Education/IvyLogo.png";

import PythonIcon from "../../Icons/Languages/PythonIcon.png";
import SQLIcon from "../../Icons/Languages/SQLIcon.png";
import CPPIcon from "../../Icons/Languages/CPPIcon.png";
import BinaryIcon from "../../Icons/Languages/BinaryIcon.png";
import DatabasesIcon from "../../Icons/Languages/DatabasesIcon.png";
import RISCV from "../../Icons/Languages/RiscV.png";
import TypescriptIcon from "../../Icons/Languages/TypescriptIcon.png";

export type DegreesDataType = {
    [key: string]: {
        degree: string;
        dates: string;
        bodyText: string[];
        logo: string;
        skills: string[];
        accentText: string;
    };
};

export const DegreesData: DegreesDataType = {
    IUPUI: {
        degree: "B.S. Computer Science",
        dates: "June 2022 - Dec. 2024",
        bodyText: [
            "Theory of Computation",
            "Principles of Software Engineering",
            "Principles of Computer Networking",
            "Databse Systems",
            "Architecture of Computers",
            "Operating Systems",
            "Client-side Web Development",
            "Security In Computing",
            "Wireless and Mobile Security",
            "Linear Algebra",
            "Statistics",
        ],
        logo: IUPUILogo,
        skills: [BinaryIcon, CPPIcon, RISCV, TypescriptIcon],
        accentText: "3.97 GPA",
    },
    "IVY Tech": {
        degree: "A.S. Computer Science",
        dates: "Jan. 2019 - May. 2022",
        bodyText: [
            "Introduction to Python",
            "Data structures and algorithms in c++",
            "Computing I & II",
            "Calculus I && II",
        ],
        logo: IVYLogo,
        skills: [CPPIcon, SQLIcon, DatabasesIcon, PythonIcon],
        accentText: "3.80 GPA",
    },
};
