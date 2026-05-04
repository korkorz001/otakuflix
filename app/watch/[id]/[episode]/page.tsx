export default function Watch({ params }: any) {
  const { id, episode } = params;

  return (
    <div className="h-screen">
      <iframe
        src={`https://player.vidplus.to/embed/anime/${id}/${episode}?dub=false`}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
