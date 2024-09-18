"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/chronicles-light.svg";
import WorkIllustration from "../public/Work time-cuate.svg";
import { Button } from "@/components/ui/button";
import { Hourglass, NotebookPen, Repeat } from "lucide-react";
import HabitImage from "../public/habit-page.png";
import JournalImage from "../public/journal-main.png";
import PomodoroImage from "../public/pomodoro-page.png";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const items = [
    <>
      Habit <br /> Tracker
    </>,
    <>
      Daily <br /> Journals
    </>,
    <>
      Pomodoro <br /> Timer
    </>,
    <>
      To-dos <br /> List
    </>,
    <>
      Daily <br /> Insights
    </>,
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
      <main className="w-full h-screen scrollbar-hide overflow-y-auto p-5 lg:py-6 lg:px-48 flex flex-col gap-20 ">
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
                  className={`font-bold text-8xl transition-opacity duration-500 ${fadeClass}`}
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
        <Separator />
        <section className="flex w-full md:flex-row md:justify-between flex-col gap-5 text-white ">
          <div className="md:w-[30%] flex flex-col gap-2 dark:text-white dark:bg-slate-900 bg-slate-100 cursor-pointer hover:bg-slate-300 text-slate-950 p-5 rounded-lg dark:hover:bg-slate-800">
            <p className="text-xl flex gap-2 items-center">
              <Repeat />
              Habit Tracking
            </p>
            <p className="text-sm">
              Track your daily habits and monitor your progress with a detailed
              history and visual insights.
            </p>
          </div>
          <div className="md:w-[30%] flex flex-col gap-2 dark:text-white dark:bg-slate-900 bg-slate-100 cursor-pointer hover:bg-slate-300 text-slate-950 p-5 rounded-lg dark:hover:bg-slate-800">
            <p className="text-xl flex gap-2 items-center">
              <NotebookPen />
              Journals
            </p>
            <p className="text-sm">
              Write daily reflections, log your thoughts, and review past
              entries to see your journey over time.
            </p>
          </div>
          <div className="md:w-[30%] flex flex-col gap-2 dark:text-white dark:bg-slate-900 bg-slate-100 cursor-pointer hover:bg-slate-300 text-slate-950 p-5 rounded-lg dark:hover:bg-slate-800">
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
        <Separator />
        <section className="flex items-center">
          <div className="lg:w-[50%] h-full flex flex-col items-center lg:items-start justify-center gap-5">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-4xl font-bold">
                Master Your Habits with Weekly Progress and Deep Insights
              </p>
              <p className="text-lg">
                Track, manage, and gain insights into your habits to build
                consistency and achieve your personal goals.
              </p>
            </div>

            <ul className="text-xl pl-[15%] lg:pl-[5%] flex flex-col self-start ">
              <li>Visualize your weekly progress</li>
              <li>Deep dive into habit insights</li>
              <li>Track your habits with ease</li>
              <li>Flexible habit management</li>
            </ul>
          </div>
          <div className="w-[50%] hidden lg:flex  items-center justify-end">
            <Image
              className="rounded-3xl"
              src={HabitImage}
              alt="habit-image"
              width={500}
              height={500}
            />
          </div>
        </section>
        <Separator />
        <section className="flex items-center">
          <div className="w-[50%] hidden lg:flex  items-center justify-start">
            <Image
              className="rounded-3xl "
              src={JournalImage}
              alt="journal-image"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-[50%] h-full flex flex-col items-center lg:items-end justify-center gap-5">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-4xl font-bold">
                Capture Your Journey with Rich, Personalized Journals
              </p>
              <p className="text-lg">
                Reflect on your thoughts and experiences using a powerful
                journaling tool with mood tracking and detailed views.
              </p>
            </div>
            <ul className="text-xl pl-[15%] lg:pl-[25%] flex flex-col self-start ">
              <li>Weekly journal overview</li>
              <li>Rich Text Editor for immersive journaling</li>
              <li>Set the mood</li>
              <li>Detailed journal views</li>
            </ul>
          </div>
        </section>
        <Separator />
        <section className="flex items-center">
          <div className="lg:w-[50%] h-full flex flex-col items-center lg:items-start justify-center gap-5">
            <div className="w-[80%] flex flex-col gap-5">
              <p className="text-4xl font-bold">
                Boost Productivity with Pomodoro and Seamless Task Management
              </p>
              <p className="text-lg">
                Stay focused with custom work-break cycles and an uncluttered
                task management system designed for efficiency.
              </p>
            </div>

            <ul className="text-xl pl-[15%] lg:pl-[5%] flex flex-col self-start ">
              <li>Customizable time blocks for focused work and breaks</li>
              <li>Unlimited task management</li>
              <li>Minimalist design for ultimate focus</li>
            </ul>
          </div>
          <div className="w-[50%] hidden lg:flex  items-center justify-end">
            <Image
              className="rounded-3xl"
              src={PomodoroImage}
              alt="pomodoro-image"
              width={500}
              height={500}
            />
          </div>
        </section>
        <Separator />
        <section className="flex flex-col gap-8">
          <p className="text-7xl text-center italic">
            "Transform Your Day: Track, Reflect, and Achieve with Ease."
          </p>
          <div className="flex gap-5 items-center justify-center">
            {" "}
            <Link href="/signup" className="">
              <Button className="text-xl p-6">Get Started</Button>
            </Link>
          </div>
        </section>
        <Separator />
        <footer>
          <div className="text-center">
            &copy; Chronicle - Anish Dangol - 2024
          </div>
        </footer>
      </main>
    </>
  );
}
