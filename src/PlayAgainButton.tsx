"use client";
import deckData from "@/public/decks.json";
import { useRouter } from "next/navigation";

export const PlayAgainButton = () => {
  const { push } = useRouter();

  const handleClick = () => {
    const { decks } = deckData;
    const randomID = decks[Math.floor(Math.random() * decks.length)].id;

    push(`/game/${randomID}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      Play Again?
    </button>
  );
};
