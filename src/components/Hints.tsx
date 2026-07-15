import { CardType } from "moxfield-api";
import { useState } from "react";

interface HintsProps {
  commanderCard: CardType;
}

export const Hints: React.FC<HintsProps> = ({ commanderCard }) => {
  const [showHints, setShowHints] = useState(false);

  const colorMap: Record<string, string> = {
    W: "ms-w",
    U: "ms-u",
    B: "ms-b",
    R: "ms-r",
    G: "ms-g",
  };

  // Enforce WUBRG order (White, Blue, Black, Red, Green)
  const wubrgOrder = ["W", "U", "B", "R", "G"];

  const getManaSymbols = (colors: string[]) => {
    const colorSet = new Set(colors);
    return wubrgOrder
      .filter((color) => colorSet.has(color))
      .map((color) => colorMap[color]);
  };

  return (
    <>
      {showHints ? (
        <div className="text-center text-sm border-2 border-ctp-mauve-500 rounded-lg p-2">
          <div className="flex items-baseline justify-center gap-1">
            <p className="mb-2">Color Identity:</p>
            {getManaSymbols(commanderCard.color_identity).map((symbol, i) => (
              <i key={i} className={`ms ms-cost ${symbol} text-2xl`}></i>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowHints(!showHints)}
          className="text-sm border-2 border-ctp-maroon-500 rounded-lg px-4 py-2"
        >
          Show Hint
        </button>
      )}
    </>
  );
};
