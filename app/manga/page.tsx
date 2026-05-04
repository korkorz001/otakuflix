export default async function Manga() {
  const res = await fetch(
    "https://api.mangadex.org/manga?limit=12"
  );
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Manga
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.data.map((m: any) => (
          <div key={m.id} className="bg-zinc-900 p-3 rounded">
            {m.attributes.title.en}
          </div>
        ))}
      </div>
    </div>
  );
}
