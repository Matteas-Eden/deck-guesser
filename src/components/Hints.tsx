import { CardType } from "moxfield-api";
import { useState } from "react";

interface HintsProps {
  commanderCard: CardType;
}

export const Hints: React.FC<HintsProps> = ({ commanderCard }) => {
  const [showHints, setShowHints] = useState(false);

  return (
    <>
      {showHints ? (
        <div className="text-center text-sm border-2 border-ctp-mauve-500 rounded-lg">
          Color Identity: {commanderCard.color_identity}
        </div>
      ) : (
        <button
          onClick={() => setShowHints(!showHints)}
          className="text-sm border-2 border-ctp-maroon-500 rounded-lg"
        >
          Show Hint
        </button>
      )}
    </>
  );
};
