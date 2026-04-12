interface GuessFormProps {
  showIncorrect: boolean;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export const GuessForm: React.FC<GuessFormProps> = ({
  showIncorrect,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2">
    <input
      className="border-2 border-ctp-surface2 hover:border-ctp-text focus:border-ctp-text rounded-xl p-2 h-12 w-full border-solid bg-ctp-mantle font-(family-name:--font-geist-sans) [outline:none]"
      type="text"
      name="guess"
      autoFocus
      autoComplete="off"
    />
    <button
      type="submit"
      className={`${showIncorrect ? "bg-ctp-red-950 hover:bg-ctp-red-700" : "bg-ctp-blue-950 hover:bg-ctp-blue-700"} text-ctp-white text-xl font-bold py-1 px-4 rounded cursor-pointer latte`}
    >
      Guess!
    </button>
  </form>
);
