import {
  Book,
  ChartCandlestick,
  CircleHelp,
  Home,
  Timer,
  Users,
} from "lucide-react";

const size = 20;

export const NavbarList = [
  {
    group: "General",
    items: [
      {
        link: "/habits",
        text: "Habits",
        icon: <Home size={size} />,
      },
      {
        link: "/journal",
        text: "Journal",
        icon: <Book size={size} />,
      },
      {
        link: "/pomodoro",
        text: "Pomodoro",
        icon: <Timer size={size} />,
      },
      {
        link: "/insights",
        text: "Insights",
        icon: <ChartCandlestick size={size} />,
      },
    ],
  },
  {
    group: "Others",
    items: [
      {
        link: "/about-us",
        text: "About Us",
        icon: <Users size={size} />,
      },
      {
        link: "/helo",
        text: "Help",
        icon: <CircleHelp size={size} />,
      },
    ],
  },
];
