const btnAR = document.querySelector("#WatchAR");
const btnEN = document.querySelector("#WatchEN");
const movieAR = document.querySelector(".MovieAR");
const movieEN = document.querySelector(".MovieEN");
const poster = document.querySelector("#poster");
const temp = document.querySelector("#sample").content;
const movieList = document.querySelector(".movies");
const About = document.querySelector("#MovieInfo");
const releseDate = document.querySelector("#Date");
const Genreinfo = document.querySelector("#Genre");
const MovieTitle = document.querySelector("#title");
const MovieDuration = document.querySelector("#duration");
const MovieLANG = document.querySelector("#language");
const countries = document.querySelector("#countries");
const movieDB = [];
let clicks = 0;
let data;
btnAR.addEventListener("click", () => {
  movieAR.classList.toggle("active");
  movieEN.classList.remove("active");
  window.scrollTo(0, 1000);
});
btnEN.addEventListener("click", () => {
  movieEN.classList.toggle("active");
  movieAR.classList.remove("active");
  window.scrollTo(0, 1000);
});
const addMovieinfo = async (ID, img) => {
  const Data = await GetRate(ID);
  DefineMovie(Data, img);
};
const GetRate = async (ID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const data = await res.json();
  const Data = data;
  return Data;
};
const DefineMovie = (Data, img) => {
  console.log(Data);
  const printgenre = () => {
    Data.genres.forEach((element) => {
      if (element.name === "Thriller") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/thriller/thriller.html">${element.name} </a> `;
      }
      if (element.name === "Horror") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/horror/horror.html">${element.name} </a> `;
      }
      if (element.name === "Action") {
        Genreinfo.innerHTML += `<a href="../../movelistByGenre/action/action.html">${element.name} </a> `;
      }
      if (
        element.name !== "Thriller" &&
        element.name !== "Action" &&
        element.name !== "Horror"
      ) {
        Genreinfo.innerHTML += `${element.name}  `;
      }
    });
  };
  const printCount = () => {
    Data.production_countries.forEach((element) => {
      countries.innerHTML += `${element.name}, `;
    });
  };
  poster.src = img;
  MovieLANG.innerHTML = `language: ${Data.original_language}`;
  MovieDuration.innerHTML = `Duration:${Data.runtime} min`;
  About.innerHTML = Data.overview;
  countries.innerHTML = `countries: `;
  printCount();
  Genreinfo.innerHTML = `genre: `;
  printgenre();
  releseDate.innerHTML = `release date:${Data.release_date}`;
  MovieTitle.innerHTML = `<h1>${Data.title}</h1>`;
};

addMovieinfo(
  249070,
  "https://iegybest.cloud/wp-content/uploads/2015/08/Hitman-Agent-47.jpg"
);
