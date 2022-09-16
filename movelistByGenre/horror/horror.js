const temp = document.querySelector("#sample").content;
const movieList = document.querySelector(".movies");
const input = document.querySelector("#SearchBar");
const GenreShow = document.querySelector("#GenreShow");
const GenreList = document.querySelector(".GenreList");
let data;
let clicks = 0;
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
  UpdateUI(Poster, Data.vote_average, Data.title, Path, genre, ID);
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
  `https://m.media-amazon.com/images/M/MV5BMTNkNjU4OGYtODM3NS00NzM1LWFkZWItZTExNzdjYTAwMmRlXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_FMjpg_UX1000_.jpg`,
  807356,
  "/movieList/Watcher/Watcher.html",
  "horror"
);
addMovie(
  `https://iegybest.cloud/wp-content/uploads/2022/09/York-Witches-Society.jpg`,
  1007205,
  "../../movieList/York Witches Society/York Witches Society.html",
  "horror"
);
addMovie(
  `https://m.media-amazon.com/images/M/MV5BNWRhMjcwYjMtZDg2ZC00YmI1LWIwM2MtOTBhNmQ4OWUwYjgxXkEyXkFqcGdeQXVyNDgyNzAxMzY@._V1_.jpg`,
  833339,
  "../../movieList/Speak no Evil/Speak no Evil.html",
  "horror"
);
