import { DeckGuesser } from "@/src/DeckGuesser";
import { getAllNonlandCards } from "@/src/utils/getAllNonlandCards";
import MoxfieldApi from "moxfield-api";

interface GameProps {
  params: Promise<{ id: string }>;
}

const Game: React.FC<GameProps> = async ({ params }) => {
  const { id } = await params;

  const moxfield = new MoxfieldApi();

  const deck = await moxfield.deckList.findById(id);

  const cards = getAllNonlandCards(deck);

  // The 'instability' from randomness is intentional, so we can ignore the warning
  // about an impure function here
  // eslint-disable-next-line react-hooks/purity
  const randomCard = cards[Math.floor(Math.random() * cards.length)].card;

  const commander = Object.values(deck.boards.commanders.cards)[0].card;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <DeckGuesser randomCard={randomCard} commander={commander} />
    </div>
  );
};

export default Game;
