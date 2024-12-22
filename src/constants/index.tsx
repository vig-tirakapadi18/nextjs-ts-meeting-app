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

export const avatarImages = [
  "https://cdn.pixabay.com/photo/2022/09/29/03/17/baby-7486419_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/12/05/21/57/santa-claus-9247511_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/11/20/13/32/xmas-7604304_1280.png",
  "https://cdn.pixabay.com/photo/2021/03/22/03/28/bird-6113555_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/10/31/14/22/moon-9164274_1280.png",
];