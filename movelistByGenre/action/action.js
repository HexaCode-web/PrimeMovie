const UpdateUI = (
  Poster,
  Rating,
  Name,
  Path,
  genre,
  ID,
  release_date,
  type
) => {
  const copyTemp = document.importNode(temp, true);
  copyTemp.querySelector(".Poster").innerHTML = `<img
  src = ${Poster}>`;
  copyTemp.querySelector("#rating").innerHTML = `${Rating.toFixed(1)}`;
  copyTemp.querySelector("#link").innerHTML = `
  <a href="../../movielist/${Path}/${Path}.html">${Name}</a>`;
  copyTemp.querySelector(".genre").innerHTML = `
    ${genre}`;
  copyTemp.querySelector("#releaseDate").innerHTML = release_date;
  copyTemp.querySelector("#Watch").innerHTML = `
    <a href="../../movielist/${Path}/${Path}.html">Watch Now</a>`;
  movieList.appendChild(copyTemp);
  movieInfo = {};
  movieInfo.Name = Name;
  movieInfo.type = type;
  movieInfo.Poster = Poster;
  movieInfo.Rating = Rating;
  movieInfo.Genre = genre;
  movieInfo.ID = ID;
  movieInfo.path = Path;
  movieInfo.Date = release_date;
  return movieInfo;
};
async function Main() {
  await addMovie(1026377, "Sanctioning Evil", "Action", "movie");
  await addMovie(894205, "Werewolf by Night", "Action", "movie");
  await addMovie(893228, "Section 8 ", "Action", "movie");
  await addMovie(921360, "Wire Room", "Action", "movie");
  await addMovie(
    338952,
    "Fantastic Beasts The Crimes of Grindelwald",
    "Action",
    "movie"
  );
  await addMovie(
    338953,
    "Fantastic Beasts The Secrets of Dumbledore",
    "Action",
    "movie"
  );
  await addMovie(324857, "Spider-Man Into the Spider-Verse", "Action", "movie");
  await addMovie(315635, "Spider-Man Homecoming", "Action", "movie");
  await addMovie(361743, "Top Gun Maverick", "Action", "movie");
  await addMovie(634649, "Spider-Man No Way Home", "Action", "movie");
  await addMovie(725201, "The Gray Man", "Action", "movie");
  await addMovie(617653, "The Last Duel", "Action", "movie");
  await addMovie(524434, "Eternals", "Action", "movie");
  await addMovie(480042, "Escape Plan The Extractors", "Action", "movie");
  await addMovie(440471, "Escape Plan 2 Hades", "Action", "movie");
  await addMovie(991247, "Kingslayer", "Action", "movie");
  await addMovie(249070, "Hitman Agent 47", "Action", "movie");
  await addMovie(107846, "Escape Plan", "Action", "movie");
}
Main();
