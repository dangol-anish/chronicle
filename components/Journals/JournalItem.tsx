export interface JournalItemData {
  current_mood: string;
  inserted_at: string;
  j_text: string;
}

export function JournalItem({ item }: { item: JournalItemData | null }) {
  console.log("item" + item);
  return (
    <div>
      {item ? (
        <>
          <p>Mood: {item.current_mood}</p>
          <p>Inserted At: {item.inserted_at}</p>
          <div dangerouslySetInnerHTML={{ __html: item.j_text }} />
        </>
      ) : (
        <p>No journal entry available</p>
      )}
    </div>
  );
}
