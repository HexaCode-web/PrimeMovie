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
  await addMovie(740925, "No One Gets Out Alive", "Thriller", "movie");
  await addMovie(756999, "The Black Phone", "Thriller", "movie");
  await addMovie(760741, "Beast", "Thriller", "movie");
  await addMovie(766507, "Prey", "Thriller", "movie");
  await addMovie(249070, "Hitman Agent 47", "Thriller", "movie");
  await addMovie(807356, "Watcher", "Thriller", "movie");
  await addMovie(807196, "Boiling Point", "Thriller", "movie");
  await addMovie(762504, "Nope", "Thriller", "movie");
  await addMovie(107846, "Escape Plan", "Thriller", "movie");
  await addMovie(773975, "End of the Road", "Thriller", "movie");
}
Main();
