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
            `movieList/${element.Name}/${element.Name}.html`,
            element.Genre
          );
        });
        return flitered;
      }
    }
  }
});
const ClearingList = () => {
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
  console.log(Data);
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
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9V5fl1mGgVZzOYod0Jq2hyRlzEY.jpg",
  480042,
  "movielist/Escape Plan The Extractors/Escape Plan The Extractors.html",
  "Action"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Aqhl55vpzxNFqVfc2DpedUsR39L.jpg",
  440471,
  "movielist/Escape Plan 2 Hades/Escape Plan 2 Hades.html",
  "Action"
);
addMovie(
  `"https://m.media-amazon.com/images/M/MV5BMDUxZTljNzEtNGQ5MS00YzgyLWIzNTItNGNhM2FlZDQxZDQyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"`,
  760741,
  "movieList/Beast/Beast.html",
  "thriller"
);
addMovie(
  `"https://iegybest.cloud/wp-content/uploads/2015/08/Hitman-Agent-47.jpg"`,
  249070,
  "movieList/Hitman Agent 47/Hitman Agent 47.html",
  "action"
);
addMovie(
  `https://iegybest.cloud/wp-content/uploads/2022/09/Kingslayer.jpg`,
  991247,
  "movieList/Kingslayer/Kingslayer.html",
  "action"
);
addMovie(
  `https://m.media-amazon.com/images/M/MV5BMTNkNjU4OGYtODM3NS00NzM1LWFkZWItZTExNzdjYTAwMmRlXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_FMjpg_UX1000_.jpg`,
  807356,
  "movieList/Watcher/Watcher.html",
  "horror"
);
addMovie(
  `https://iegybest.cloud/wp-content/uploads/2022/09/York-Witches-Society.jpg`,
  1007205,
  "movieList/York Witches Society/York Witches Society.html",
  "horror"
);
addMovie(
  `https://m.media-amazon.com/images/M/MV5BNWRhMjcwYjMtZDg2ZC00YmI1LWIwM2MtOTBhNmQ4OWUwYjgxXkEyXkFqcGdeQXVyNDgyNzAxMzY@._V1_.jpg`,
  833339,
  "movieList/Speak no Evil/Speak no Evil.html",
  "horror"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  508947,
  "movielist/Turning Red/Turning red.html",
  "animation"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kdkk7OBnIL1peW2zwcAAp6O54Jo.jpg",
  807196,
  "movielist/Boiling Point/Boiling Point.html",
  "Drama"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ugIdyvtAzHWOguD91UjHKoAvfum.jpg",
  656663,
  "movielist/Jackass Forever/Jackass Forever.html",
  "Comedy"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
  766507,
  "movielist/Prey/Prey.html",
  "Thriller"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fYHOD4pxZQk4rsP2tQrZI5uBlZV.jpg",
  776305,
  "movielist/Belle/Belle.html",
  "animation"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
  762504,
  "movielist/Nope/Nope.html",
  "horror"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pzP3N9qRo3S91QjfBFWNI0ph0AY.jpg",
  913814,
  "movielist/Brian and Charles/Brian and Charles.html",
  "Comedy"
);
addMovie(
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zdnChkdppJjXl8lvwRz8vn6cs2s.jpg",
  107846,
  "movielist/Escape Plan/Escape Plan.html",
  "Action"
);
