import HeadstormLogo from "../../Icons/Workplaces/HeadstormLogoNew.png";
import JJLogo from "../../Icons/Workplaces/JJLogo.png";
import INFBILogo from "../../Icons/Workplaces/INFBI_LOGO.jpg";

import GraphQLIcon from "../../Icons/Languages/GraphQLIcon.png";
import ReactIcon from "../../Icons/Languages/icons8-react-100.png";
import TypescriptIcon from "../../Icons/Languages/TypescriptIcon.png";
import GithubIcon from "../../Icons/Languages/GithubIcon.png";
import JIRAIcon from "../../Icons/Languages/JIRAIcon.png";
import HTMLIcon from "../../Icons/Languages/HTMLIcon.png";
import CSSIcon from "../../Icons/Languages/CSSIcon.png";
import BitBucketIcon from "../../Icons/Languages/BitBucketIcon.png";
import AngularIcon from "../../Icons/Languages/AngularIcon.png";
import JavascriptIcon from "../../Icons/Languages/JavascriptIcon.png";

type ExperiencesDataType = {
    [key: string]: {
        jobTitle: string;
        dates: string;
        bodyText: string[];
        logo: string;
        skills: string[];
        accentText: string;
    };
};

export const ExperiencesData: ExperiencesDataType = {
    "Indiana Farm Bureau Insurance": {
        jobTitle: "Software Developer Intern",
        dates: "May 2024 - Present",
        bodyText: ["Coming soon!"],
        logo: INFBILogo,
        skills: [
            AngularIcon,
            TypescriptIcon,
            JavascriptIcon,
            HTMLIcon,
            CSSIcon,
            JIRAIcon,
            GithubIcon,
            BitBucketIcon,
        ],
        accentText: "",
    },
    Headstorm: {
        jobTitle: "Software Consulting Intern",
        dates: "May 2023 - Aug. 2023",
        bodyText: [
            "Actively engaged in an Agile Software Development cycle to meet deadlines.",
            "Presented to the partners for my team to update them on our progress for 3/5 sprints.",
            "Over 3x improvement in my output per sprint over the course of the internship.",
            "Implemented features using TypeScript to improve the overall experience of an internal web application.",
            "Utilized GraphQL to fetch employee data and populate an interactive table.",
            "Wrote End-To-End tests to verify UI components I created functioned properly on all browsers (Playwright).",
            "Wrote unit tests to verify data was populated accordingly (Jest).",
            "Gained an understanding of CI/CD and GitHub actions.",
            "Reviewed other developers code to ensure company practices were adhered to.",
        ],
        logo: HeadstormLogo,
        skills: [TypescriptIcon, HTMLIcon, CSSIcon, ReactIcon, GraphQLIcon, GithubIcon, JIRAIcon],
        accentText: "",
    },
    "Jimmy Johns": {
        jobTitle: "Delivery Driver",
        dates: "Dec. 2018 - May 2023",
        bodyText: [
            "Improved efficiency by learning the city block numbering system.",
            "Delivered orders to customers in a timely manner.",
            "Increased order throughput during chaotic hours when needed",
        ],
        logo: JJLogo,
        skills: [],
        accentText: "",
    },
};
