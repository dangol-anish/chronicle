"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../ui/use-toast";

export function PomodoroClock() {
  const [open, setOpen] = useState(false);
  const defaultWorkTime = 25; // default work time in minutes
  const defaultBreakTime = 5; // default break time in minutes

  const [workTime, setWorkTime] = useState<number>(defaultWorkTime * 60); // default work time in seconds
  const [breakTime, setBreakTime] = useState<number>(defaultBreakTime * 60); // default break time in seconds
  const [time, setTime] = useState<number>(workTime);
  const [currentMode, setCurrentMode] = useState<"work" | "break">("work");
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [tempWorkTime, setTempWorkTime] = useState<number>(defaultWorkTime);
  const [tempBreakTime, setTempBreakTime] = useState<number>(defaultBreakTime);

  useEffect(() => {
    if (audioRef.current === null) {
      audioRef.current = new Audio("/oven-sound.wav");
    }

    if (isActive && time > 0 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      if (currentMode === "work") {
        setCurrentMode("break");
        setTime(breakTime);
      } else {
        setCurrentMode("work");
        setTime(workTime);
      }
      setIsActive(false); // Stop the timer after switching modes
      audioRef.current.play(); // Play the oven sound
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, time, currentMode, breakTime, workTime]);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActive(false);
    setTime(currentMode === "work" ? workTime : breakTime);
  };

  const handleSaveTime = () => {
    if (tempWorkTime > 60 || tempBreakTime > 60) {
      toast({
        description: "Work or break times cannot exceed 60 minutes",
        title: "Error",
        variant: "destructive",
      });
      return;
    }

    if (tempWorkTime < 1 || tempBreakTime < 1) {
      toast({
        description: "Invalid work or break time",
        title: "Error",
        variant: "destructive",
      });
      return;
    }

    const workTimeInSeconds = tempWorkTime * 60;
    const breakTimeInSeconds = tempBreakTime * 60;

    setWorkTime(workTimeInSeconds);
    setBreakTime(breakTimeInSeconds);
    setOpen(false);

    if (currentMode === "work") {
      setTime(workTimeInSeconds);
    } else {
      setTime(breakTimeInSeconds);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Card className="lg:w-[49%] h-full flex flex-col lg:gap-8 p-5">
      <CardTitle className="flex gap-2 items-center justify-center text-3xl">
        Pomodoro Timer
      </CardTitle>
      {/* header */}
      <div className="flex flex-col items-center justify-start h-full pt-10 gap-6">
        <CardHeader>
          <div className="flex flex-col justify-center w-full items-center gap-6">
            <div className="flex justify-center gap-6">
              <Button
                variant={currentMode === "work" ? "default" : "outline"}
                onClick={() => {
                  if (currentMode !== "work") {
                    setCurrentMode("work");
                    setIsActive(false); // Stop the timer when switching modes
                    setTime(workTime);
                  }
                }}
              >
                Work
              </Button>
              <Button
                variant={currentMode === "break" ? "default" : "outline"}
                onClick={() => {
                  if (currentMode !== "break") {
                    setCurrentMode("break");
                    setIsActive(false); // Stop the timer when switching modes
                    setTime(breakTime);
                  }
                }}
              >
                Break
              </Button>
            </div>
          </div>
        </CardHeader>
        {/* clock */}
        <CardContent className=" flex flex-col gap-10 justify-center items-center text-8xl">
          <p>{formatTime(time)}</p>
        </CardContent>
        {/* footer */}
        <CardFooter className="flex justify-center gap-6">
          <Button onClick={resetTimer}>Reset</Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Set Time</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Set New Time</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="work-time" className="text-right">
                    Work Time
                  </Label>
                  <Input
                    id="work-time"
                    type="number"
                    defaultValue={tempWorkTime}
                    className="col-span-3"
                    onChange={(e) => setTempWorkTime(Number(e.target.value))}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="break-time" className="text-right">
                    Break Time
                  </Label>
                  <Input
                    id="break-time"
                    type="number"
                    defaultValue={tempBreakTime}
                    className="col-span-3"
                    onChange={(e) => setTempBreakTime(Number(e.target.value))}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSaveTime}>
                  Save
                </Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Pause" : "Start"}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
