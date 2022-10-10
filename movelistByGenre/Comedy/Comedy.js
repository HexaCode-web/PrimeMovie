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
  await addMovie(886083, "Deadstream", "Comedy", "movie");
  await addMovie(629542, "The Bad Guys", "Comedy", "movie");
  await addMovie(550988, "Free Guy", "Comedy", "movie");
  await addMovie(1006851, "Office Invasion", "Comedy", "movie");
  await addShow(59186, "Impractical Jokers", "Comedy", "tv");
  await addMovie(656663, "Jackass Forever", "Comedy", "movie");
  await addMovie(508947, "Turning Red", "Comedy", "movie");
  await addMovie(913814, "Brian and Charles", "Comedy", "movie");
}
Main();
