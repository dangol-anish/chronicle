"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Angry, Frown, Laugh, Meh, Smile } from "lucide-react";
import { SetStateAction, useState, Dispatch } from "react";

interface CurrentMoodProps {
  currentMood: string;
  setCurrentMood: Dispatch<SetStateAction<string>>;
}

export function CurrentMood({ currentMood, setCurrentMood }: CurrentMoodProps) {
  return (
    <>
      <ToggleGroup
        type="single"
        value={currentMood}
        onValueChange={(value) => {
          if (value) setCurrentMood(value);
        }}
      >
        <ToggleGroupItem value="angry" aria-label="Toggle angry">
          <Angry className="text-red-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="frown" aria-label="Toggle frown">
          <Frown className="text-blue-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="neutral" aria-label="Toggle meh">
          <Meh className="text-green-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="smile" aria-label="Toggle smile">
          <Smile className="text-yellow-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="laugh" aria-label="Toggle laugh">
          <Laugh className="text-yellow-300" size={30} />
        </ToggleGroupItem>
      </ToggleGroup>
      <input type="hidden" name="mood" value={currentMood} />
    </>
  );
}
