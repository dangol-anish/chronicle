"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Moon, Sun, SunMoon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ToggleGroup type="single" defaultValue={theme}>
        <ToggleGroupItem
          onClick={() => setTheme("light")}
          value="light"
          className="flex gap-2"
        >
          <Sun /> <p className="hidden md:flex">Light</p>
        </ToggleGroupItem>

        <ToggleGroupItem
          onClick={() => setTheme("dark")}
          value="dark"
          className="flex gap-2"
        >
          <Moon /> <p className="hidden md:flex">Dark</p>
        </ToggleGroupItem>

        <ToggleGroupItem
          onClick={() => setTheme("system")}
          value="system"
          className="flex gap-2"
        >
          <SunMoon />
          <p className="hidden md:flex">System</p>
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
