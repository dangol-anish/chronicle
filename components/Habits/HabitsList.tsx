import { createClient } from "@/utils/supabase/server";
import { HabitsItem } from "./HabitsItem";

export async function HabitsList() {
  const supabase = await createClient();

  const { data: habits } = await supabase
    .from("habits")
    .select()
    .order("inserted_at", { ascending: false });

  console.log(habits);

  return (
    <>
      <HabitsItem habits={habits} />
    </>
  );
}

// "use client";
// import React, { useState } from "react";

// type HabitData = {
//   [habit: string]: {
//     [date: string]: boolean;
//   };
// };

// export const HabitsList: React.FC = () => {
//   // Define habits and dates
//   const habits: string[] = ["Habit 1", "Habit 2", "Habit 3"];
//   const dates: string[] = ["2024-08-12", "2024-08-13", "2024-08-14"]; // Example dates

//   // Initialize state for habits and dates
//   const [habitData, setHabitData] = useState<HabitData>(
//     habits.reduce((acc, habit) => {
//       acc[habit] = dates.reduce((dateAcc, date) => {
//         dateAcc[date] = false; // Initialize each date's checkbox to false (unchecked)
//         return dateAcc;
//       }, {} as { [date: string]: boolean });
//       return acc;
//     }, {} as HabitData)
//   );

//   // Handle checkbox toggle
//   const handleCheckboxToggle = (habit: string, date: string) => {
//     setHabitData((prevHabitData) => ({
//       ...prevHabitData,
//       [habit]: {
//         ...prevHabitData[habit],
//         [date]: !prevHabitData[habit][date], // Toggle the checkbox value
//       },
//     }));
//   };

//   return (
//     <div>
//       <h1>Habit Tracker</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Habit</th>
//             {dates.map((date) => (
//               <th key={date}>{date}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {habits.map((habit) => (
//             <tr key={habit}>
//               <td>{habit}</td>
//               {dates.map((date) => (
//                 <td key={date}>
//                   <input
//                     type="checkbox"
//                     checked={habitData[habit][date]}
//                     onChange={() => handleCheckboxToggle(habit, date)}
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
