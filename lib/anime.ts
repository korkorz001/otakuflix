export async function getTrendingAnime() {
  const query = `
  query {
    Page(page:1, perPage:12){
      media(type:ANIME, sort:POPULARITY_DESC){
        id
        title { romaji english }
        coverImage { large }
      }
    }
  }`;

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();
  return data.data.Page.media;
}
