const New1 = document.querySelector(".itemone");
const New2 = document.querySelector(".itemtwo");
const New3 = document.querySelector(".itemthree");
const New4 = document.querySelector(".itemfour");
const AddMovieRecent = (varible, movieNum, color = "white") => {
  // console.log(movieDB);
  //console.log(varible);
  varible.style.backgroundImage = `url(${
    apiPoster + movieDB[movieNum].backdrop_path
  })`;
  let varHeadLine = varible
    .querySelector(".container")
    .querySelector(".headline");
  let VarOverView = varible
    .querySelector(".container")
    .querySelector(".overview");
  VarOverView.style.color = color;
  varHeadLine.innerHTML = `<a href="movieList/${movieDB[movieNum].Name}/${movieDB[movieNum].Name}.html">${movieDB[movieNum].Name}</a>`;
  VarOverView.innerHTML = movieDB[movieNum].overview;
};
const UpdateUI = (
  Poster,
  Rating,
  Name,
  Path,
  genre,
  ID,
  release_date,
  type,
  Banner,
  overview
) => {
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
  movieInfo.backdrop_path = Banner;
  movieInfo.overview = overview;
  return movieInfo;
};
async function Main() {
  await addMovie(617653, "The Last Duel", "Action", "movie");
  await addMovie(550988, "Free Guy", "Comedy", "movie");
  await addMovie(836225, "The Exorcism of God", "Horror", "movie");
  await addMovie(524434, "Eternals", "Action", "movie");
  await addMovie(740925, "No One Gets Out Alive", "Horror", "movie");
  await addMovie(787723, "13 Minutes", "Action", "movie");
  await addMovie(756999, "The Black Phone", "Horror", "movie");
  await addMovie(758724, "The Cellar", "Horror", "movie");
  await addMovie(1006851, "Office Invasion", "Comedy", "movie");
  await addShow(66732, "Stranger Things", "Drama", "tv");
  await addShow(59186, "Impractical Jokers", "Comedy", "tv");
  await addMovie(773975, "End of the Road", "Thriller", "movie");
  await addMovie(807356, "Watcher", "Horror", "movie");
  await addMovie(480042, "Escape Plan The Extractors", "Action", "movie");
  await addMovie(440471, "Escape Plan 2 Hades", "Action", "movie");
  await addMovie(760741, "Beast", "thriller", "movie");
  await addMovie(249070, "Hitman Agent 47", "Action", "movie");
  await addMovie(991247, "Kingslayer", "Action", "movie");
  await addMovie(1007205, "York Witches Society", "horror", "movie");
  await addMovie(833339, "Speak no Evil", "horror", "movie");
  await addMovie(508947, "Turning Red", "animation", "movie");
  await addMovie(807196, "Boiling Point", "Drama", "movie");
  await addMovie(656663, "Jackass Forever", "Comedy", "movie");
  await addMovie(766507, "Prey", "Thriller", "movie");
  await addMovie(776305, "Belle", "animation", "movie");
  await addMovie(762504, "Nope", "horror", "movie");
  await addMovie(913814, "Brian and Charles", "Comedy", "movie");
  await addMovie(107846, "Escape Plan", "Action", "movie");
  AddMovieRecent(New1, 0);
  AddMovieRecent(New2, 1);
  AddMovieRecent(New3, 2);
  AddMovieRecent(New4, 3, "white");
}
Main();
