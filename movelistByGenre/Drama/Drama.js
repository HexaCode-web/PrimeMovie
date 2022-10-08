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
  await addShow(1396, "Breaking Bad", "Drama", "tv");
  await addMovie(24021, "The Twilight Saga Eclipse", "Advanture", "movie");
  await addMovie(505026, "Death on the Nile", "Drama", "movie");
  await addMovie(315635, "Spider-Man Homecoming", "Action", "movie");
  await addMovie(238, "The Godfather", "Drama", "movie");
  await addMovie(361743, "Top Gun Maverick", "Action", "movie");
  await addMovie(617653, "The Last Duel", "Drama", "movie");
  await addMovie(807196, "Boiling Point", "Drama", "movie");
  await addMovie(776305, "Belle", "Drama", "movie");
}
Main();
