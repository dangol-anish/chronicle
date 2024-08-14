export function HabitsItem({ habits }: { habits: any[] | null }) {
  return (
    <ul>
      {habits?.map((habit, index) => (
        <li key={index}>
          <h3>{habit.h_name}</h3>
          <p>{habit.h_question}</p>
          <p>{habit.h_note}</p>
        </li>
      ))}
    </ul>
  );
}
