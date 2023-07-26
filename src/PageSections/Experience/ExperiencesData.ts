import HeadstormLogo from "../../Icons/Workplaces/HeadstormLogoNew.png";
import JJLogo from "../../Icons/Workplaces/JJLogo.png";

import GraphQLIcon from "../../Icons/Languages/GraphQLIcon.png"
import ReactIcon from "../../Icons/Languages/icons8-react-100.png";
import TypescriptIcon from "../../Icons/Languages/TypescriptIcon.png";
import GithubIcon from "../../Icons/Languages/GithubIcon.png";
import JIRAIcon from "../../Icons/Languages/JIRAIcon.png";

export const ExperiencesData = {
    "Headstorm" : {
        jobTitle: "Software Consulting Intern",
        dates: "May 2023 - Aug. 2023",
        bodyText: ["Successfully implemented features for production.", "Excelled in an Agile environment.", "Worked on a large team with version control through Git.", "Wrote tests for new features to improve code coverage by over 12%", "Worked on their open-source UI Library to improve existing components."],
        logo: HeadstormLogo,
        skills: [TypescriptIcon,ReactIcon,GraphQLIcon,GithubIcon,JIRAIcon],
        accentText: ""
    },
    "Jimmy Johns" : {
        jobTitle: "Delivery Driver",
        dates: "Dec. 2018 - May 2023",
        bodyText: ["Improved efficiency by learning the city block numbering system.", "Delivered orders to customers in a timely manner.", "Increased order throughput during chaotic hours when needed"],
        logo: JJLogo,
        skills: [],
        accentText: ""
    }
}