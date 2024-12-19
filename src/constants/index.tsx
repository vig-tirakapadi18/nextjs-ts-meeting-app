import { BsPeopleFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaVideo,
} from "react-icons/fa";

export const sidebarLinks = [
  {
    icon: (size: number = 26, color: string = "#fff") => {
      return <FaHome size={size + 4} color={color} />;
    },
    route: "/",
    label: "Home",
  },
  {
    icon: (size: number = 26, color: string = "#fff") => {
      return <FaCalendarAlt size={size} color={color} />;
    },
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    icon: (size: number = 26, color: string = "#fff") => {
      return <FaCalendarCheck size={size} color={color} />;
    },
    route: "/previous",
    label: "Previous",
  },
  {
    icon: (size: number = 26, color: string = "#fff") => {
      return <FaVideo size={size} color={color} />;
    },
    route: "/recordings",
    label: "Recordings",
  },
  {
    icon: (size: number = 26, color: string = "#fff") => {
      return <BsPeopleFill size={size} color={color} />;
    },
    route: "/personal-room",
    label: "Personal Room",
  },
];
