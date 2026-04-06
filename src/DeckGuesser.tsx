"use client";

import { DeckListType } from "moxfield-api";
import { getAllNonlandCards } from "./utils/getAllNonlandCards";
import { useState } from "react";
import Image from "next/image";
import { Base64PlaceholderImage } from "./Base64PlaceholderImage";

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

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const guess = formData.get("guess") as string;

    const commanderName = commander.name.split(",")[0];

    if (commanderName.toLowerCase().includes(guess.toLowerCase())) {
      setGuessState("correct");
      return;
    }

    setGuessState("incorrect");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={
          guessState === "correct" ? commanderCardImageUrl : randomCardImageUrl
        }
        placeholder={Base64PlaceholderImage}
        height={350}
        width={250}
        alt={
          guessState === "correct"
            ? commander.name
            : randomNonlandCard.card.name
        }
        className="rounded-xl h-auto max-w-full"
        unoptimized
        priority
      />
      {guessState !== "correct" && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-2"
        >
          <input
            className="border-2 border-white rounded-xl p-2"
            type="text"
            name="guess"
          />
          <button
            type="submit"
            className={`${guessState === "incorrect" ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded cursor-pointer`}
          >
            Guess!
          </button>
        </form>
      )}
      {guessState === "correct" && (
        <div className="text-center">
          <h1 className="text-5xl font-bold">Correct!</h1>
        </div>
      )}
    </div>
  );
};
