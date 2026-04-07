import { DeckListType } from "moxfield-api";

export const getAllNonlandCards = (deck: DeckListType) => {
  const cards = deck.boards.mainboard.cards;

  const cardEntries = Object.values(cards);

  const excludedCards = ["Sol Ring", "Arcane Signet"];

  return cardEntries.filter(
    (entry) =>
      !entry.card.type_line?.includes("Land") &&
      !excludedCards.includes(entry.card.name),
  );
};
