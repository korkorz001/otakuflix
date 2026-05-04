import Link from "next/link";
import { getTrendingAnime } from "@/lib/anime";

export default async function Home() {
  const anime = await getTrendingAnime();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">
        OtakuFlix
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {anime.map((a: any) => (
          <Link key={a.id} href={`/anime/${a.id}`}>
            <img
              src={a.coverImage.large}
              className="rounded-xl hover:scale-105 transition"
            />
            <p className="mt-2 text-sm">
              {a.title.english || a.title.romaji}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
