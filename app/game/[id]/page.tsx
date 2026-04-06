import { DeckGuesser } from "@/src/DeckGuesser";
import MoxfieldApi from "moxfield-api";

interface GameProps {
  params: Promise<{ id: string }>;
}

const Game: React.FC<GameProps> = async ({ params }) => {
  const { id } = await params;

  const moxfield = new MoxfieldApi();

  const deck = await moxfield.deckList.findById(id);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <DeckGuesser deck={deck} />
    </div>
  );
};

export default Game;
