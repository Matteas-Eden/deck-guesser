"use client";

import { CardType } from "moxfield-api";
import { useState } from "react";
import { CardImage } from "./components/CardImage";
import { PlayAgainButton } from "./components/PlayAgainButton";

interface DeckGuesserProps {
  randomCard: CardType;
  commander: CardType;
}

type GuessState = "pending" | "correct" | "incorrect";

export const DeckGuesser: React.FC<DeckGuesserProps> = ({
  randomCard,
  commander,
}) => {
  const [guessState, setGuessState] = useState<GuessState>("pending");

  const randomCardImageUrl = `https://api.scryfall.com/cards/${randomCard.scryfall_id}?format=image&version=normal`;
  const commanderCardImageUrl = `https://api.scryfall.com/cards/${commander.scryfall_id}?format=image&version=normal`;

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const guess = formData.get("guess") as string;

    // Some commanders (like ones from Final Fantasy) are reprints of existing cards
    // and therefore need to use the flavour name instead
    const commanderName = commander.flavor_name
      ? commander.flavor_name.split(",")[0]
      : commander.name.split(",")[0];

    if (commanderName.toLowerCase().includes(guess.toLowerCase())) {
      setGuessState("correct");
      return;
    }

    setGuessState("incorrect");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {guessState === "correct" ? (
        <CardImage
          key="commander"
          src={commanderCardImageUrl}
          alt={commander.name}
        />
      ) : (
        <CardImage
          key="random-card"
          src={randomCardImageUrl}
          alt={randomCard.name}
        />
      )}
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
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-5xl font-bold">Correct!</h1>
          <PlayAgainButton />
        </div>
      )}
    </div>
  );
};
