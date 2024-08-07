import {
  Book,
  Calendar,
  ChartArea,
  CircleHelp,
  CircuitBoard,
  ClipboardType,
  Clock,
  FileQuestion,
  Folder,
  HelpCircle,
  Notebook,
  Settings,
  Timer,
  Trash,
  User,
  UserRound,
  Users,
  icons,
} from "lucide-react";
import { Search, Home } from "lucide-react";

export const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/habits",
        text: "Habits",
        icon: <Home size={20} />,
      },
      {
        link: "/journals",
        text: "Journals",
        icon: <Book size={20} />,
      },
      {
        link: "/pomodoro",
        text: "Pomodoro",
        icon: <Clock size={20} />,
      },
      {
        link: "/insights",
        text: "Insights",
        icon: <ChartArea size={20} />,
      },
    ],
  },
  {
    group: "Others",
    items: [
      {
        link: "/settings",
        text: "Settings",
        icon: <Settings size={20} />,
      },
      {
        link: "/help",
        text: "Help",
        icon: <HelpCircle size={20} />,
      },
    ],
  },
];
