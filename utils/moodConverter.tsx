import { Angry, Frown, Laugh, Meh, Smile } from "lucide-react";

export function moodConverter(mood: string) {
  switch (mood) {
    case "angry":
      return <Angry className="text-red-500" size={30} />;
    case "frown":
      return <Frown className="text-blue-500" size={30} />;
    case "neutral":
      return <Meh className="text-green-500" size={30} />;
    case "meh":
      return <Meh className="text-green-500" size={30} />;
    case "smile":
      return <Smile className="text-yellow-500" size={30} />;
    case "laugh":
      return <Laugh className="text-yellow-600" size={30} />;
    default:
      return "Invalid Mood";
  }
}
