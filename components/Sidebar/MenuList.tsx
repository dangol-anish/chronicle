import {
  Book,
  ChartArea,
  Hourglass,
  NotebookPen,
  Repeat,
  Settings,
} from "lucide-react";

const iconSize = 20;

export const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/habits",
        text: "Habits",
        icon: <Repeat size={iconSize} />,
      },
      {
        link: "/journals",
        text: "Journals",
        icon: <NotebookPen size={iconSize} />,
      },
      {
        link: "/pomodoro",
        text: "Pomodoro",
        icon: <Hourglass size={iconSize} />,
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
