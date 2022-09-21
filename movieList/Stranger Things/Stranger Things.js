const btnAR = document.querySelector("#WatchAR");
const btnEN = document.querySelector("#WatchEN");
const movieAR = document.querySelector(".MovieAR");
// const movieEN = document.querySelector(".MovieEN");
const poster = document.querySelector("#poster");
const backdrop = document.querySelector(".background");
const movieList = document.querySelector(".movies");
const About = document.querySelector("#MovieInfo");
const releseDate = document.querySelector("#Date");
const Genreinfo = document.querySelector("#Genre");
const MovieTitle = document.querySelector("#title");
const MovieDuration = document.querySelector("#duration");
const MovieLANG = document.querySelector("#language");
const countries = document.querySelector("#countries");
const season = document.querySelector(".Season");
const eplist = document.querySelector(".epLIST");
const WatchingNow = document.querySelector(".info");
const movieDB = [];
const apiPoster = "https://image.tmdb.org/t/p/w500/";
let clicks = 0;
let Data;
let SeasonData;
let s1DB = [
  "",
  "https://vadbom.com/embed-m2ucpqcymlbm.html",
  "https://vadbom.com/embed-w1ro8ee33ju3.html",
  "https://vadbom.com/embed-9u75rwr7wkcs.html",
  "https://vadbom.com/embed-32mve759xvs0.html",
  "https://vadbom.com/embed-keylzsraumik.html",
  "https://vadbom.com/embed-6ln89ilngxjt.html",
  "https://vadbom.com/embed-olmt7agc772g.html",
  "https://vadbom.com/embed-3bfp9xox7eip.html",
];
let s2DB = [
  "",
  "https://vadbom.com/embed-ldy9rggpb75x.html",
  "https://vadbom.com/embed-l4l1j8zz3qwi.html",
  "https://vadbom.com/embed-uzo5ou2xkur2.html",
  "https://vadbom.com/embed-mob0cjunvvzd.html",
  "https://vadbom.com/embed-b3lz51xmyszu.html",
  "https://vadbom.com/embed-apir78qhvw5v.html",
  "https://vadbom.com/embed-gvmupb3c9wke.html",
  "https://vadbom.com/embed-qra43mlt7x0k.html",
  "https://vadbom.com/embed-8vijdfxi292c.html",
];
let s3DB = [
  "",
  "https://vadbom.com/embed-79wzzzpkoggz.html",
  "https://vadbom.com/embed-8p6lbmpa6bu9.html",
  "https://vadbom.com/embed-825gilquu5hg.html",
  "https://vadbom.com/embed-3litsw1df440.html",
  "https://vadbom.com/embed-g6q2vaggwcu9.html",
  "https://vadbom.com/embed-dgu58to70saa.html",
  "https://vadbom.com/embed-0c7zie4ok13a.html",
  "https://vadbom.com/embed-xhalslzim385.html",
];
let s4DB = [
  "",
  "https://vidbam.org/embed-70u82yfm019j.html",
  "https://vidbam.org/embed-b994fewaqbcm.html",
  "https://vidbam.org/embed-3p72wpw1j4rv.html",
  "https://vidbam.org/embed-uydrlyl1bbut.html",
  "https://vidbam.org/embed-52k4vmj94xau.html",
  "https://vidbam.org/embed-z9ate95n3zac.html",
  "https://vidbam.org/embed-jnqtuzxdnr8l.html",
  "https://vidbam.org/embed-imtfx6y0kkln.html",
  "https://vidbam.org/embed-b2mq6myxgugz.html",
];

let DataBase;
btnAR.addEventListener("click", () => {
  season.classList.add("animations");
});
// btnEN.addEventListener("click", () => {
//   s1DB = s1dbEN;
//   season.classList.add("animations");
// });
const addMovieinfo = async (ID, img) => {
  const Data = await GetRate(ID);
  DefineMovie(Data, img);
};
const GetRate = async (ID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const data = await res.json();
  Data = data;
  return Data;
};
const printCount = () => {
  Data.origin_country.forEach((element) => {
    countries.innerHTML += `${element}, `;
  });
};
const printSeasons = () => {
  Data.seasons.forEach((element) => {
    //remove when you add new seaons
    season.innerHTML += `<li><button onclick="GetSeasonData(${Data.seasons.indexOf(
      element
    )})">${element.name}</button></li> `;
  });
};
const printEP = () => {
  Data.seasons.forEach((element) => {
    eplist.innerHTML += `<li><button onclick="showSeason(${Data.seasons.indexOf(
      element
    )})">${element.name}</button></li> `;
  });
};
const DefineMovie = (Data) => {
  const printgenre = () => {
    Data.genres.forEach((element) => {
      switch (element.name) {
        case "Thriller":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/thriller/thriller.html">${element.name} </a> `;
          break;
        case "Horror":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/horror/horror.html">${element.name} </a> `;
          break;
        case "Action":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/action/action.html">${element.name} </a> `;
          break;
        case "Animation":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/Animation/Animation.html">${element.name} </a> `;
          break;
        case "Drama":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/Drama/Drama.html">${element.name} </a> `;
          break;
        case "Comedy":
          Genreinfo.innerHTML += `<a href="../../movelistByGenre/Comedy/Comedy.html">${element.name} </a> `;
          break;
        default:
          Genreinfo.innerHTML += `${element.name} `;
          break;
      }
    });
  };
  backdrop.style.backgroundImage = `url(${apiPoster + Data.backdrop_path})`;
  poster.src = apiPoster + Data.poster_path;
  MovieLANG.innerHTML = `<span>Languages:</span>  ${Data.original_language}`;
  MovieDuration.innerHTML = `<span>Duration:</span> ${Data.episode_run_time} min`;
  About.innerHTML = `<span>Overview:</span> ${Data.overview}`;
  countries.innerHTML = `<span>countries:</span> `;
  printCount();
  Genreinfo.innerHTML = `<span>Genres:</span>  `;
  printgenre();
  releseDate.innerHTML = `<span>release date:</span> ${Data.first_air_date}`;
  MovieTitle.innerHTML = `<h1>${Data.name}</h1>`;
  printSeasons();
  printEP();
};

const GetSeasonData = async (number) => {
  let season = number + 1;
  await FetchSeasonData(season);
  eplist.classList.remove("animations");
  eplist.classList.add("animations");
  await PrintSeason();
};
const FetchSeasonData = async (season) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${Data.id}/season/${season}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const data = await res.json();
  // console.log(data);
  SeasonData = data;
  switch (SeasonData.season_number) {
    case 1:
      DataBase = s1DB;
      break;
    case 2:
      DataBase = s2DB;
      break;
    case 3:
      DataBase = s3DB;
      break;
    case 4:
      DataBase = s4DB;
      break;
    default:
      break;
  }
  return SeasonData;
};
const PrintSeason = async () => {
  eplist.innerHTML = ``;
  SeasonData.episodes.forEach((element) => {
    eplist.innerHTML += `<li><button onclick="ShowEpisode(${element.episode_number})">${element.episode_number}</button></li>`;
  });
};
const ShowEpisode = (num) => {
  WatchingNow.style.display = "flex";
  WatchingNow.innerHTML = SeasonData.episodes[num - 1].name;
  movieAR.classList.add("active");
  movieAR.src = DataBase[num];
};
addMovieinfo(66732);
