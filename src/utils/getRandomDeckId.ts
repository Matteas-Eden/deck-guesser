import deckData from "@/public/decks.json";

export const getRandomDeckId = () => {
  const { decks } = deckData;
  const randomID = decks[Math.floor(Math.random() * decks.length)].id;

  return randomID;
};
