import { StartButton } from "@/src/components/StartButton";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="text-5xl font-bold">Guess That Deck!</h1>
      <StartButton />
    </main>
  );
};

export default Home;
