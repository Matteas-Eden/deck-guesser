import Link from "next/link";

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="text-5xl font-bold">Guess That Deck!</h1>
      <Link href="/game/ty9V8lQKkUK3Fp2TjIWffw">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Start
        </button>
      </Link>
    </main>
  );
};

export default Home;
