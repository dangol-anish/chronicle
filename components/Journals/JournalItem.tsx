import React from "react";

export interface JournalItemDataProps {
  currentMood: string;
  insertedAt: string;
  journalText: string;
}

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
