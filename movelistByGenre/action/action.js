const temp = document.querySelector("#sample").content;
const movieList = document.querySelector(".movies");
const input = document.querySelector("#SearchBar");
const GenreShow = document.querySelector("#GenreShow");
const GenreList = document.querySelector(".GenreList");
let clicks = 0;
let data;
const movieDB = [];
let flitered = [];
GenreShow.addEventListener("click", () => {
  clicks++;
  if (clicks % 2 === 1) {
    GenreList.style.display = "flex";
  } else {
    GenreList.style.display = "none";
  }
});
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const searchString = e.target.value;
    if (e.target.value === "") {
      document.location.reload();
    } else {
      flitered = {};
      for (let item of movieDB) {
        if (item.Name.toUpperCase() === searchString.toUpperCase()) {
          flitered.Name = item.Name;
          flitered.Poster = item.Poster;
          flitered.Rating = item.Rating;
          flitered.Genre = item.Genre;
          flitered.ID = item.ID;
        }
      }
      if (flitered.Name === undefined) {
        alert("no movie found");
      } else {
        ClearingList();
        addMovie(
          flitered.Poster,
          flitered.ID,
          `movieList/${flitered.Name}/index.html`,
          flitered.Genre
        );
        console.log(flitered);
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
const addMovie = async (Poster, ID, Path, genre) => {
  const Data = await GetRate(ID);
  UpdateUI(Poster, Data.vote_average, Data.original_title, Path, genre, ID);
};
const GetRate = async (ID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const data = await res.json();
  const Data = data;
  return Data;
};
const UpdateUI = (Poster, Rating, Name, Path, genre, ID) => {
  const copyTemp = document.importNode(temp, true);
  copyTemp.querySelector(".Poster").innerHTML = `<img
src = ${Poster}>`;
  copyTemp.querySelector("#rating").innerHTML = `${Rating}`;
  copyTemp.querySelector("#link").innerHTML = `
<a href="${Path}">${Name}</a>`;
  copyTemp.querySelector(".genre").innerHTML = `
  ${genre}`;
  copyTemp.querySelector("#Watch").innerHTML = `
  <a href="${Path}">Watch Now</a>`;
  movieList.appendChild(copyTemp);
  const movieInfo = {};
  movieInfo.Name = Name;
  movieInfo.Poster = Poster;
  movieInfo.Rating = Rating;
  movieInfo.Genre = genre;
  movieInfo.ID = ID;
  movieDB.push(movieInfo);
};
addMovie(
  `"https://m.media-amazon.com/images/M/MV5BMDUxZTljNzEtNGQ5MS00YzgyLWIzNTItNGNhM2FlZDQxZDQyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"`,
  760741,
  "../../movieList/Beast/Beast.html",
  "thriller"
);
addMovie(
  `https://iegybest.cloud/wp-content/uploads/2022/09/Kingslayer.jpg`,
  991247,
  "../../movieList/Kingslayer/Kingslayer.html",
  "action"
);
addMovie(
  `https://iegybest.cloud/wp-content/uploads/2015/08/Hitman-Agent-47.jpg`,
  249070,
  "../../movieList/Hitman Agent 47/Hitman Agent 47.html",
  "action"
);
