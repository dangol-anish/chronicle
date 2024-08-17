import { Checkbox } from "@/components/ui/checkbox";
import { useFormStatus } from "react-dom";
import { updateHabitLog } from "@/app/habits/actions";

export function HabitCheckBox({ log }: any) {
  const { pending } = useFormStatus();

  const handleCheckboxChange = async (val: boolean) => {
    const formData = new FormData();
    formData.append("log_id", log.log_id); // Assuming log_id is available in the log object
    formData.append("is_completed", val.toString());

    await updateHabitLog(formData);
  };

  return (
    <form>
      <Checkbox
        disabled={pending}
        className="md:p-2"
        checked={log.is_completed}
        onCheckedChange={(val) => {
          if (val !== "indeterminate") {
            handleCheckboxChange(val);
          }
        }}
      />
    </form>
  );
}
