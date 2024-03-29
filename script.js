const temp = document.querySelector("#sample").content; //the movie template
const movieList = document.querySelector(".movies"); //the container of movies
const input = document.querySelector("#SearchBar"); //search bar
const GenreShow = document.querySelector("#GenreShow");
const GenreList = document.querySelector(".GenreList");
const yearList = document.querySelector(".yearList");
const List = document.querySelector(".List");
const HighRate = document.querySelector("#HighRate"); //order by high rating
const New = document.querySelector("#New"); //movies that came this year
const Year = document.querySelector("#Year"); //order by year
const series = document.querySelector("#series"); //show series only
const movies = document.querySelector("#movies"); //show movies only
const movieDB = []; //the whole database of the movie
const apiPoster = "https://image.tmdb.org/t/p/w500/";
const apibanner = "https://image.tmdb.org/t/p/original/"; //the api for poster add the id after it
const years = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
]; //years that show in yearlist
let movieInfo = {}; //stores each movie individually as an object
let flitered = []; //useful later
function hidelist() {
  yearList.classList.toggle("active");
}

//flitering methoeds
//by year
//shows the year list
Year.addEventListener("click", () => {
  List.innerHTML = ``;
  yearList.classList.toggle("active");
  years.forEach((element) => {
    List.innerHTML += `<li><button onclick="releaseYear(
      ${element}
      );hidelist()">${element}</button></li>`;
  });
});
//fliters the movie
const releaseYear = (Year) => {
  ClearingList(); //clearing the list
  movieDB.forEach((element) => {
    //looping over the movie database
    if (element.Date.includes(Year)) {
      NewList(
        //calls the new list function
        element.ID, //useful for the api only
        element.path, //useful for the card
        element.Genre, //useful for the card
        element.type //movie or tv useful for the api only
      );
    }
  });
};
//shows the 2022 movies/shows only
New.addEventListener("click", () => {
  releaseYear(2022);
});
//shows movies only. not tv shows
movies.addEventListener("click", () => {
  ClearingList(); //clearing the list
  movieDB.forEach((element) => {
    //looping over the movie database
    if (element.type === "movie") {
      NewList(
        //calls the new list function
        element.ID, //useful for the api only
        element.path, //useful for the card
        element.Genre, //useful for the card
        element.type //MOVIES only
      );
    }
  });
});
//shows tv shows only not movies
series.addEventListener("click", () => {
  ClearingList(); //clearing the list
  movieDB.forEach((element) => {
    //looping over the movie database
    if (element.type === "tv") {
      NewList(
        //calls the new list function
        element.ID, //useful for the api only
        element.path, //useful for the card
        element.Genre, //useful for the card
        element.type //tv  only
      );
    }
  });
});
//by rate. above 7 will show
HighRate.addEventListener("click", () => {
  Sort();
});
//sorting function ONLY USED IN HIGHRATE
const Sort = async () => {
  ClearingList(); //clearing the list
  movieDB.forEach((element) => {
    //looping over the movie database
    if (element.Rating > 7) {
      NewList(
        //calls the new list function
        element.ID, //useful for the api only
        element.path, //useful for the card
        element.Genre, //useful for the card
        element.type //MOVIES or shows only
      );
    }
  });
};
//search function
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    // if the user presses enter
    const searchString = e.target.value;
    if (e.target.value === "") {
      document.location.reload(); //if the search bar is empty and user pressed enter the page will relod
    } else {
      flitered = []; //empties the flitred list which will be the new database
      for (let item of movieDB) {
        //loops over the database
        if (item.Name.toUpperCase().includes(searchString.toUpperCase())) {
          flitered.push(item);
          //pushes the whole movie object that matches
        }
      }
      //if not clear the list and print the new elements
      if (flitered.length === 0) {
        //if the new database is empty
        let result = document.createElement("h1");
        result.innerHTML = "no Movie found";
        result.style.color = "goldenrod";
        ClearingList();
        movieList.appendChild(result);
        return;
      } else {
        ClearingList();
        flitered.forEach((element) => {
          NewList(
            //main function for printing out the movies
            element.ID, //api
            element.path, //card
            element.Genre, //card
            element.type
          );
        });
      }
    }
  }
});
const ClearingList = () => {
  //empties the whole list of movies
  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }
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
const addMovie = async (ID, Path, genre, type) => {
  const Data = await GetRate(ID, type);
  // console.log(Data);
  UpdateUI(
    apiPoster + Data.poster_path,
    Data.vote_average,
    Data.title,
    Path,
    genre,
    ID,
    Data.release_date,
    type,
    apibanner + Data.backdrop_path,
    Data.overview
  );
  movieDB.push(movieInfo);
  localStorage.setItem("movieDB", JSON.stringify(movieDB));
};
const addShow = async (ID, Path, genre, type) => {
  const Data = await GetRate(ID, type);
  // console.log(Data);
  UpdateUI(
    apiPoster + Data.poster_path,
    Data.vote_average,
    Data.original_name,
    Path,
    genre,
    ID,
    Data.first_air_date,
    type,
    apiPoster + Data.backdrop_path,
    Data.overview
  );
  movieDB.push(movieInfo);
};
const GetRate = async (ID, type) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${ID}?api_key=2b2380189650d658fa1a06524ae8062a`
  );
  const Data = await res.json();
  return Data;
};
GenreShow.addEventListener("click", () => {
  //shows the genre list
  GenreList.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (GenreList.classList.contains("active")) {
    GenreList.classList.toggle("active");
  }
  if (Form.classList.contains("active")) {
    Form.classList.toggle("active");
  }
});
