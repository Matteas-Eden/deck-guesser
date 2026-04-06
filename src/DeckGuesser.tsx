"use client";

import { DeckListType } from "moxfield-api";
import { getAllNonlandCards } from "./utils/getAllNonlandCards";
import { useState } from "react";

interface DeckGuesserProps {
  deck: DeckListType;
}

type GuessState = "pending" | "correct" | "incorrect";

export const DeckGuesser: React.FC<DeckGuesserProps> = ({ deck }) => {
  const nonlandCards = getAllNonlandCards(deck);
  const [randomNonlandCard] = useState(
    () => nonlandCards[Math.floor(Math.random() * nonlandCards.length)],
  );
  const commander = Object.values(deck.boards.commanders.cards)[0].card;
  const [guessState, setGuessState] = useState<GuessState>("pending");

  const randomCardImageUrl = `https://api.scryfall.com/cards/${randomNonlandCard.card.scryfall_id}?format=image&version=normal`;
  const commanderCardImageUrl = `https://api.scryfall.com/cards/${commander.scryfall_id}?format=image&version=normal`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuessState("correct");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={
          guessState === "correct" ? commanderCardImageUrl : randomCardImageUrl
        }
        width={250}
        alt="Guess this card!"
        className="rounded-xl"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-2"
      >
        <input className="border-2 border-white rounded-xl" type="text" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Guess!
        </button>
      </form>
    </div>
  );
};
