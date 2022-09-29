const logoutBTN = document.querySelector("#logoutBTN");
const userData = JSON.parse(localStorage.getItem("currentUser"));
const movieDB = JSON.parse(localStorage.getItem("movieDB"));
const header = document.querySelector("#header");
const apiPoster = "https://image.tmdb.org/t/p/w500/";
const apibanner = "https://image.tmdb.org/t/p/original/"; //the api for poster add the id after it
const temp = document.querySelector("#sample").content; //the movie template
const movieList = document.querySelector(".movies"); //the container of movies
const favBTN = document.querySelector("#Fav");
const laterBTN = document.querySelector("#later");

logoutBTN.addEventListener("click", () => {
  loggedin = false;
  localStorage.setItem("loggedin", loggedin);
  location.href = "index.html";
});
const ClearingList = () => {
  //empties the whole list of movies
  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }
};
header.innerHTML = `Welcome ${userData.username}`;
const GetRate = async (ID, type) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const Data = await res.json();
  return Data;
};
const NewList = async (ID, Path, genre, type) => {
  const Data = await GetRate(ID, type); //gets the api
  if (type === "tv") {
    UpdateUI(
      apiPoster + Data.poster_path,
      Data.vote_average,
      Data.original_name,
      Path,
      genre,
      ID,
      Data.first_air_date,
      type
    );
    movieList.scrollIntoView();
  } else {
    UpdateUI(
      apiPoster + Data.poster_path,
      Data.vote_average,
      Data.title,
      Path,
      genre,
      ID,
      Data.release_date
    );
    movieList.scrollIntoView();
  }
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

favBTN.addEventListener("click", () => {
  ClearingList();
  userData.favMovies.forEach((element) => {
    for (let index = 0; index < movieDB.length; index++) {
      if (element === movieDB[index].Name.toUpperCase()) {
        NewList(
          movieDB[index].ID,
          movieDB[index].Name,
          movieDB[index].Genre,
          movieDB[index].type
        );
      }
    }
  });
});
laterBTN.addEventListener("click", () => {
  ClearingList();
  userData.watchLater.forEach((element) => {
    for (let index = 0; index < movieDB.length; index++) {
      if (element === movieDB[index].Name.toUpperCase()) {
        NewList(
          movieDB[index].ID,
          movieDB[index].Name,
          movieDB[index].Genre,
          movieDB[index].type
        );
      }
    }
  });
});
