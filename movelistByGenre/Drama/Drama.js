const temp = document.querySelector("#sample").content;
const movieList = document.querySelector(".movies");
const input = document.querySelector("#SearchBar");
const GenreShow = document.querySelector("#GenreShow");
const GenreList = document.querySelector(".GenreList");
const yearList = document.querySelector(".yearList");
const List = document.querySelector(".List");
const HighRate = document.querySelector("#HighRate");
const New = document.querySelector("#New");
const Year = document.querySelector("#Year");
const movieDB = [];
const years = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
];
let clicks = 0;
let data;
let movieInfo = {};
let flitered = [];
function hidelist() {
  yearList.classList.toggle("active");
}
Year.addEventListener("click", () => {
  List.innerHTML = ``;
  yearList.classList.toggle("active");
  years.forEach((element) => {
    List.innerHTML += `<li><button onclick="releaseYear(
      ${element}
    );hidelist()">${element}</button></li>`;
  });
});
HighRate.addEventListener("click", () => {
  Sort();
});
GenreShow.addEventListener("click", () => {
  GenreList.classList.toggle("active");
});
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const searchString = e.target.value;
    if (e.target.value === "") {
      document.location.reload();
    } else {
      flitered = [];
      for (let item of movieDB) {
        if (item.Name.toUpperCase().includes(searchString.toUpperCase())) {
          flitered.push(item);
          console.log(flitered);
        }
      }
      if (flitered.lengh <= 0) {
        alert("no movie found");
      } else {
        ClearingList();
        flitered.forEach((element) => {
          addMovie(
            element.Poster,
            element.ID,
            `movieList/${element.Name}/index.html`,
            element.Genre
          );
        });
        return flitered;
      }
    }
  }
});
const ClearingList = () => {
  console.log("here");
  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }
};
New.addEventListener("click", () => {
  releaseYear(2022);
});
const releaseYear = (Year) => {
  ClearingList();
  movieDB.forEach((element) => {
    if (element.Date.includes(Year)) {
      console.log(clicks++);
      NewList(element.Poster, element.ID, element.path, element.Genre);
    }
  });
};
const Sort = async () => {
  ClearingList();
  movieDB.forEach((element) => {
    if (element.Rating > 7) {
      NewList(element.Poster, element.ID, element.path, element.Genre);
    }
  });
};
const NewList = async (Poster, ID, Path, genre) => {
  const Data = await GetRate(ID);
  UpdateUI(
    Poster,
    Data.vote_average,
    Data.title,
    Path,
    genre,
    ID,
    Data.release_date
  );
};
const addMovie = async (Poster, ID, Path, genre) => {
  const Data = await GetRate(ID);
  UpdateUI(
    Poster,
    Data.vote_average,
    Data.title,
    Path,
    genre,
    ID,
    Data.release_date
  );
  movieDB.push(movieInfo);
};
const GetRate = async (ID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const Data = await res.json();
  return Data;
};

const UpdateUI = (Poster, Rating, Name, Path, genre, ID, release_date) => {
  const copyTemp = document.importNode(temp, true);
  copyTemp.querySelector(".Poster").innerHTML = `<img
src = ${Poster}>`;
  copyTemp.querySelector("#rating").innerHTML = `${Rating.toFixed(1)}`;
  copyTemp.querySelector("#link").innerHTML = `
<a href="${Path}">${Name}</a>`;
  copyTemp.querySelector(".genre").innerHTML = `
  ${genre}`;
  copyTemp.querySelector("#releaseDate").innerHTML = release_date;
  copyTemp.querySelector("#Watch").innerHTML = `
  <a href="${Path}">Watch Now</a>`;
  movieList.appendChild(copyTemp);
  movieInfo = {};
  movieInfo.Name = Name;
  movieInfo.Poster = Poster;
  movieInfo.Rating = Rating;
  movieInfo.Genre = genre;
  movieInfo.ID = ID;
  movieInfo.path = Path;
  movieInfo.Date = release_date;
  return movieInfo;
};
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kdkk7OBnIL1peW2zwcAAp6O54Jo.jpg",
  807196,
  "../../movielist/Boiling Point/Boiling Point.html",
  "Drama"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fYHOD4pxZQk4rsP2tQrZI5uBlZV.jpg",
  776305,
  "../../movielist/Belle/Belle.html",
  "Drama"
);
