"use client";

import { useRouter } from "next/navigation";
import { getRandomDeckId } from "../utils/getRandomDeckId";

export const StartButton = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/game/${getRandomDeckId()}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      Start
    </button>
  );
};
