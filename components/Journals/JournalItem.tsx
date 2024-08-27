import React from "react";

// Define the interface for the props
export interface JournalItemDataProps {
  currentMood: string;
  insertedAt: string;
  journalText: string;
}

// Define the component as a regular function component
const JournalItem = ({
  currentMood,
  insertedAt,
  journalText,
}: JournalItemDataProps) => {
  return (
    <div className="journal-item">
      <p>Mood: {currentMood}</p>
      <p>Date: {new Date(insertedAt).toLocaleString()}</p>
      <div dangerouslySetInnerHTML={{ __html: journalText }} />
    </div>
  );
};

export default JournalItem;
