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
  await addMovie(881487, "The Visitor", "Horror", "movie");
  await addMovie(894205, "Werewolf by Night", "Horror", "movie");
  await addMovie(886083, "Deadstream", "Horror", "movie");
  await addMovie(1024530, "Grimcutty", "Horror", "movie");
  await addMovie(978651, "The Razing", "Horror", "movie");
  await addMovie(1028955, "In isolation", "Horror", "movie");
  await addMovie(844380, "Nix", "Horror", "movie");
  await addMovie(836225, "The Exorcism of God", "Horror", "movie");
  await addMovie(740925, "No One Gets Out Alive", "Horror", "movie");
  await addMovie(756999, "The Black Phone", "Horror", "movie");
  await addMovie(760741, "Beast", "Horror", "movie");
  await addMovie(807356, "Watcher", "Horror", "movie");
  await addMovie(1007205, "York Witches Society", "Horror", "movie");
  await addMovie(833339, "Speak no Evil", "Horror", "movie");
  await addMovie(762504, "Nope", "Horror", "movie");
}
Main();
