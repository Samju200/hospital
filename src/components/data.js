import {
  AiFillDashboard,
  AiFillSetting,
  AiFillGitlab,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { BiRadio } from "react-icons/bi";
import Account from "./Account";
import Consultation from "./Consultation";
import Setting from "./Setting";
import { FaGreaterThan } from "react-icons/fa";
import Nurse from "./Nurse";
import Radiology from "./Radiology";
import Laboratory from "./Laboratory";
import Pharmacy from "./Pharmacy";
import Despensary from "./Despensary";
import Records from "./Records";
import DashboardDetail from "./DashboardDetail";

export const sideTabs = [
  {
    id: 1,
    label: "Dashboard",
    icon: <AiFillDashboard />,
    content: <DashboardDetail />,
    greater: <FaGreaterThan />,
  },

  {
    id: 2,
    label: "Records",
    icon: <BsFillPersonFill />,
    content: <Records />,
    greater: <FaGreaterThan />,
  },

  {
    id: 3,
    label: "Account",
    icon: <MdPayments />,
    content: <Account />,
    greater: <FaGreaterThan />,
  },
  {
    id: 4,
    label: "Consultation",
    icon: <BsFillPersonFill />,
    content: <Consultation />,
    greater: <FaGreaterThan />,
  },
  {
    id: 5,
    label: "Despensary",
    icon: <AiOutlinePlus />,
    content: <Despensary />,
    greater: <FaGreaterThan />,
  },
  {
    id: 6,
    label: "Pharmacy Store",
    icon: <BsFillPersonFill />,
    content: <Pharmacy />,
    greater: <FaGreaterThan />,
  },
  {
    id: 7,
    label: "Laboratory",
    icon: <AiFillGitlab />,
    content: <Laboratory />,
    greater: <FaGreaterThan />,
  },
  {
    id: 8,
    label: "Radiology",
    icon: <BiRadio />,
    content: <Radiology />,
    greater: <FaGreaterThan />,
  },
  {
    id: 9,
    label: "Nurse",
    icon: <AiFillGitlab />,
    content: <Nurse />,
    greater: <FaGreaterThan />,
  },
  {
    id: 10,
    label: "System Setting",
    icon: <AiFillSetting />,
    content: <Setting />,
    greater: <FaGreaterThan />,
  },
];
