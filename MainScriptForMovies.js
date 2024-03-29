const btnAR = document.querySelector("#WatchAR");
const btnEN = document.querySelector("#WatchEN");
const movieAR = document.querySelector(".MovieAR");
const movieEN = document.querySelector(".MovieEN");
const poster = document.querySelector("#poster");
const temp = document.querySelector("#sample").content;
const backdrop = document.querySelector(".background");
const apiPoster = "https://image.tmdb.org/t/p/w500/";
const movieList = document.querySelector(".movies");
const About = document.querySelector("#MovieInfo");
const releseDate = document.querySelector("#Date");
const Genreinfo = document.querySelector("#Genre");
const MovieTitle = document.querySelector("#title");
const MovieDuration = document.querySelector("#duration");
const MovieLANG = document.querySelector("#language");
const countries = document.querySelector("#countries");
const buttonwrapper = document.querySelector(".button-wrapper");
const FavBtn = document.querySelector("#Add");
const LaterBtn = document.querySelector("#Later");
const recommended = document.createElement("div");
const movieDB = [];
let clicks = 0;
let data;
if (!JSON.parse(localStorage.getItem("loggedin"))) {
  LaterBtn.classList.add("disabled");
  FavBtn.classList.add("disabled");
}
LaterBtn.addEventListener("click", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser.watchLater.includes(MovieTitle.innerText)) {
    console.log("already added");
  } else {
    currentUser.watchLater.push(MovieTitle.innerText);
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
FavBtn.addEventListener("click", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser.favMovies.includes(MovieTitle.innerText)) {
    console.log("already added");
  } else {
    currentUser.favMovies.push(MovieTitle.innerText);
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
});
btnAR.addEventListener("click", () => {
  movieAR.classList.toggle("active");
  movieEN.classList.remove("active");
});
btnEN.addEventListener("click", () => {
  movieEN.classList.toggle("active");
  movieAR.classList.remove("active");
});
const addMovieinfo = async (ID) => {
  const Data = await GetRate(ID);
  DefineMovie(Data);
};
const GetRate = async (ID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const data = await res.json();
  const Data = data;
  return Data;
};
const DefineMovie = (Data) => {
  console.log(Data);
  const printgenre = () => {
    Data.genres.forEach((element) => {
      if (element.name === "Thriller") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/thriller/thriller.html">${element.name}, </a> `;
      }
      if (element.name === "Horror") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/horror/horror.html">${element.name}, </a> `;
      }
      if (element.name === "Action") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/action/action.html">${element.name}, </a> `;
      }
      if (element.name === "Animation") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/Animation/Animation.html">${element.name}, </a> `;
      }
      if (element.name === "Drama") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/Drama/Drama.html">${element.name}, </a> `;
      }
      if (element.name === "Comedy") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/Comedy/Comedy.html">${element.name}, </a> `;
      }
      if (
        element.name !== "Thriller" &&
        element.name !== "Action" &&
        element.name !== "Horror" &&
        element.name !== "Animation" &&
        element.name !== "Drama" &&
        element.name !== "Comedy"
      ) {
        Genreinfo.innerHTML += `${element.name},  `;
      }
    });
  };
  const printCount = () => {
    Data.production_countries.forEach((element) => {
      countries.innerHTML += `${element.name}, `;
    });
  };
  backdrop.style.backgroundImage = `url(${apiPoster + Data.backdrop_path})`;
  poster.src = apiPoster + Data.poster_path;
  MovieLANG.innerHTML = `<span>Languages:</span>  ${Data.original_language}`;
  MovieDuration.innerHTML = `<span>Duration:</span> ${Data.runtime} min`;
  About.innerHTML = `<span>Overview:</span> ${Data.overview}`;
  countries.innerHTML = `<span>countries:</span> `;
  printCount();
  Genreinfo.innerHTML = `<span>Genres:</span>  `;
  printgenre();
  releseDate.innerHTML = `<span>release date:</span> ${Data.release_date}`;
  MovieTitle.innerHTML = `<h1>${Data.title}</h1>`;
};
