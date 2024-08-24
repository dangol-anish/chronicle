"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Angry, Frown, Laugh, Meh, Smile } from "lucide-react";
import { useState } from "react";

export function CurrentMood() {
  const [value, setValue] = useState("meh");

  return (
    <>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(value) => {
          if (value) setValue(value);
        }}
      >
        <ToggleGroupItem value="angry" aria-label="Toggle angry">
          <Angry className="text-red-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="frown" aria-label="Toggle frown">
          <Frown className="text-blue-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="meh" aria-label="Toggle meh">
          <Meh className="text-gray-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="smile" aria-label="Toggle smile">
          <Smile className="text-yellow-500" size={30} />
        </ToggleGroupItem>
        <ToggleGroupItem value="laugh" aria-label="Toggle laugh">
          <Laugh className="text-yellow-300" size={30} />
        </ToggleGroupItem>
      </ToggleGroup>
      <input type="hidden" name="mood" value={value} />
    </>
  );
}
