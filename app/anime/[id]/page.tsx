import Link from "next/link";

export default function AnimePage({ params }: any) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Anime #{id}
      </h1>

      <div className="grid grid-cols-4 gap-2">
        {[...Array(12)].map((_, i) => (
          <Link
            key={i}
            href={`/watch/${id}/${i + 1}`}
            className="bg-purple-600 p-3 rounded text-center"
          >
            Episode {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
