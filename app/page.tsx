"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/chronicles-light.svg";
import WorkIllustration from "../public/Work time-cuate.svg";
import { Button } from "@/components/ui/button";
import { Hourglass, NotebookPen, Repeat } from "lucide-react";

export default function Home() {
  const items = [
    "Habit Tracker",
    "Daily Journals",
    "Pomodoro Timer",
    "To-dos List",
    "Daily Insights",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0");
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        setFadeClass("opacity-100");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="w-full h-screen scrollbar-hide overflow-y-auto p-5 lg:py-6 lg:px-32 flex flex-col gap-14 ">
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="logo"
              className="dark:invert"
              width={40}
              height={40}
            />
            <p className="text-3xl">Chronicle</p>
          </div>
          <ul className="list-none flex gap-5 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </header>
        <section className="flex justify-between">
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-5">
                <p className="text-7xl font-light">your all in one</p>
                <span
                  className={`font-bold text-7xl transition-opacity duration-500 ${fadeClass}`}
                >
                  {items[activeIndex]}
                </span>
              </div>

              <p className="text-lg">
                Chronicle, combines all your journals, habits, Pomodoros, and
                to-dos <br /> into a single web application.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              {" "}
              <Link href="/signup" className="">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
          <Image
            src={WorkIllustration}
            alt="work-illustration"
            className="h-[500px] w-[500px]  hidden lg:block"
          />
        </section>
        <section className="flex justify-between">
          <div className="w-[300px] flex flex-col gap-2">
            <p className="text-xl flex gap-2 items-center">
              <Repeat />
              Habit Tracking
            </p>
            <p className="text-sm">
              Track your daily habits and monitor your progress with a detailed
              history and visual insights.
            </p>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <p className="text-xl flex gap-2 items-center">
              <NotebookPen />
              Journals
            </p>
            <p className="text-sm">
              Write daily reflections, log your thoughts, and review past
              entries to see your journey over time.
            </p>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <p className="text-xl flex gap-2 items-center">
              <Hourglass />
              Pomodoro Timer
            </p>
            <p className="text-sm">
              Boost your productivity with the Pomodoro timer, breaking tasks
              into focused work sessions and breaks.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
