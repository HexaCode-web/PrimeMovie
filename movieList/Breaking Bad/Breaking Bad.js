const btnAR = document.querySelector("#WatchAR");
const btnEN = document.querySelector("#WatchEN");
const movieAR = document.querySelector(".MovieAR");
const movieEN = document.querySelector(".MovieEN");
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
const focuss = document.createElement("div");
focuss.classList.add("focused");
const movieDB = [];
const apiPoster = "https://image.tmdb.org/t/p/w500/";
let clicks = 0;
let Data;
const FavBtn = document.querySelector("#Add");
const LaterBtn = document.querySelector("#Later");
const recommended = document.createElement("div");
let SeasonData;
let s1DB = [
  "",
  "https://vadbom.com/embed-k07w1wujlf3w.html",
  "https://vadbom.com/embed-0pkbi902sr83.html",
  "https://vedbam.xyz/embed-yd4mp1jjrjl9.html",
  "https://vadbom.com/embed-9604ha3sico2.html",
  "https://vadbom.com/embed-wlz2w85t30q7.html",
  "https://vadbom.com/embed-o3gid7cojpi5.html",
  "https://vadbom.com/embed-2no8k19vbno5.html",
];
let s2DB = [
  "",
  "https://vadbom.com/embed-xxy3ke28msdp.html",
  "https://vadbom.com/embed-a5gv7jppyypy.html",
  "https://vadbom.com/embed-zqifxgal99mx.html",
  "https://vadbom.com/embed-bsgaymnsopfo.html",
  "https://vadbom.com/embed-vjnzfxm7bdzj.html",
  "https://vadbom.com/embed-mkskp5hqb44h.html",
  "https://vadbom.com/embed-xrqf051z0jer.html",
  "https://vadbom.com/embed-2gr9u4cxj6j3.html",
  "https://vadbom.com/embed-hw91ygiq2aqk.html",
  "https://vadbom.com/embed-ie96qotpyem5.html",
  "https://vadbom.com/embed-n0ka5gnke4ip.html",
  "https://vadbom.com/embed-30new6wf0615.html",
  "https://vadbom.com/embed-16gg8gvbcqyc.html",
];
let s3DB = [
  "",
  "https://vadbom.com/embed-f48bqxp10xhe.html",
  "https://vadbom.com/embed-voioscfzvb57.html",
  "https://vadbom.com/embed-vsfwe5in847o.html",
  "https://vadbom.com/embed-camy2sur93hq.html",
  "https://vadbom.com/embed-18aw6x9i4lvi.html",
  "https://vadbom.com/embed-mh9grjwa6jzk.html",
  "https://vadbom.com/embed-0ppqgngwwg9b.html",
  "https://vadbom.com/embed-y91zoye8i8ip.html",
  "https://vadbom.com/embed-w5d0u0mde3tz.html",
  "https://vadbom.com/embed-j6183u7zpqwu.html",
  "https://vadbom.com/embed-5diuckjk19n5.html",
  "https://vadbom.com/embed-pxiz9oiyi115.html",
  "https://vadbom.com/embed-6rsf5f9h853b.html",
];
let s4DB = [];
let s5DB = [];
let DataBase;
btnAR.addEventListener("click", () => {
  season.classList.add("animations");
});
// btnEN.addEventListener("click", () => {
//   movieEN.classList.toggle("active");
//   movieAR.classList.remove("active");
//   window.scrollTo(0, 1000);
// });
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
  Data.seasons.shift();
  Data.seasons.forEach((element) => {
    //remove when you add new seaons
    season.innerHTML += `<li><button onclick="GetSeasonData(${Data.seasons.indexOf(
      element
    )})">${element.name}</button></li> `;
  });
};
const printEP = () => {
  Data.seasons.shift();
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
    case 5:
      DataBase = s5DB;
      break;
    default:
      break;
  }
  return SeasonData;
};
const PrintSeason = async () => {
  eplist.innerHTML = ``;
  SeasonData.episodes.forEach((element) => {
    eplist.innerHTML += `<li><button id="${element.episode_number}" onclick="ShowEpisode(${element.episode_number})">${element.episode_number}</button></li>`;
  });
};
const ShowEpisode = (num) => {
  WatchingNow.style.display = "flex";
  console.log(SeasonData.episodes[num - 1]);
  WatchingNow.innerHTML = SeasonData.episodes[num - 1].name;
  movieAR.classList.add("active");
  console.log(DataBase);
  movieAR.src = DataBase[num];
  let selected = document.getElementById(`${num}`);
  selected.appendChild(focuss);
};
addMovieinfo(1396);
