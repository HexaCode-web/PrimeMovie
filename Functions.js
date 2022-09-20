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
  console.log("updateui was called");
  const copyTemp = document.importNode(temp, true);
  copyTemp.querySelector(".Poster").innerHTML = `<img
  src = ${Poster}>`;
  copyTemp.querySelector("#rating").innerHTML = `${Rating.toFixed(1)}`;
  copyTemp.querySelector("#link").innerHTML = `
  <a href="movielist/${Path}/${Path}.html">${Name}</a>`;
  copyTemp.querySelector(".genre").innerHTML = `
    ${genre}`;
  copyTemp.querySelector("#releaseDate").innerHTML = release_date;
  copyTemp.querySelector("#Watch").innerHTML = `
    <a href="movielist/${Path}/${Path}.html">Watch Now</a>`;
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
addShow(59186, "Impractical Jokerss9", "Comedy", "tv");
addMovie(807356, "Watcher", "Horror", "movie");
addMovie(480042, "Escape Plan The Extractors", "Action", "movie");
addMovie(440471, "Escape Plan 2 Hades", "Action", "movie");
addMovie(760741, "Beast", "thriller", "movie");
addMovie(249070, "Hitman Agent 47", "Action", "movie");
addMovie(991247, "Kingslayer", "Action", "movie");
addMovie(1007205, "York Witches Society", "horror", "movie");
addMovie(833339, "Speak no Evil", "horror", "movie");
addMovie(508947, "Turning Red", "animation", "movie");
addMovie(807196, "Boiling Point", "Drama", "movie");
addMovie(656663, "Jackass Forever", "Comedy", "movie");
addMovie(766507, "Prey", "Thriller", "movie");
addMovie(776305, "Belle", "animation", "movie");
addMovie(762504, "Nope", "horror", "movie");
addMovie(913814, "Brian and Charles", "Comedy", "movie");
addMovie(107846, "Escape Plan", "Action", "movie");
