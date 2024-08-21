import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormStatus } from "react-dom";
import { updateHabitLog } from "@/app/habits/actions";
import Link from "next/link";

export function HabitCheckBox({ log }: any) {
  const { pending } = useFormStatus();
  const [isCompleted, setIsCompleted] = useState(log.is_completed);

  const handleCheckboxChange = async (val: boolean) => {
    // Optimistically update the state
    setIsCompleted(val);

    const formData = new FormData();
    formData.append("log_id", log.log_id);
    formData.append("is_completed", val.toString());

    try {
      await updateHabitLog(formData);
    } catch (error) {
      setIsCompleted(!val);
      console.error("Failed to update habit log:", error);
    }
  };

  return (
    <form className="flex justify-center items-center py-1">
      <Checkbox
        disabled={pending}
        className="md:p-[9px]"
        checked={isCompleted}
        onCheckedChange={(val) => {
          if (val !== "indeterminate") {
            handleCheckboxChange(val);
          }
        }}
      />
    </form>
  );
}
