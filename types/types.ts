export interface User {
  id: string;
  email: string;
  user_metadata: {
    user_name: string;
  };
}

export interface HabitLog {
  log_id: number;
  log_date: string;
  log_time: string;
  is_completed: boolean;
  inserted_at: string;
}

export interface Habit {
  h_id: number;
  h_name: string;
  h_question: string;
  h_note?: string;
  inserted_at: string;
  habits_log: HabitLog[];
}

export interface HabitsItemProps {
  habits: Habit[] | null;
}

export interface Task {
  t_id: number;
  t_task: string;
  is_completed: boolean;
  inserted_at: string;
}

export interface TasksItemProps {
  tasks: Task[] | null;
}
