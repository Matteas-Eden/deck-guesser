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
      className="bg-ctp-blue-950 hover:bg-ctp-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer latte"
    >
      Start
    </button>
  );
};
