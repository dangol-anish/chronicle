import { Book, ChartArea, Clock, HelpCircle, Settings } from "lucide-react";
import { Home } from "lucide-react";

const iconSize = 20;

export const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/habits",
        text: "Habits",
        icon: <Home size={iconSize} />,
      },
      {
        link: "/journals",
        text: "Journals",
        icon: <Book size={iconSize} />,
      },
      {
        link: "/pomodoro",
        text: "Pomodoro",
        icon: <Clock size={iconSize} />,
      },
      {
        link: "/insights",
        text: "Insights",
        icon: <ChartArea size={iconSize} />,
      },
    ],
  },
  {
    group: "Others",
    items: [
      {
        link: "/settings",
        text: "Settings",
        icon: <Settings size={iconSize} />,
      },
    ],
  },
];
