const New1 = document.querySelector(".itemone");
const New2 = document.querySelector(".itemtwo");
const New3 = document.querySelector(".itemthree");
const New4 = document.querySelector(".itemfour");
const request = document.querySelector("#request");
const Form = document.querySelector("#Form");
const FormBtn = document.querySelector("#my-form-button");
request.addEventListener("click", () => {
  console.log("hi");
  Form.classList.toggle("active");
});
FormBtn.addEventListener("onclick", () => {
  Form.classList.toggle("active");
});
const AddMovieRecent = (
  varible,
  movieNum,
  path = movieDB[movieNum].Name,
  color = "white"
) => {
  // console.log(movieDB);
  //console.log(varible);
  varible.style.backgroundImage = `url(${movieDB[movieNum].backdrop_path})`;
  let varHeadLine = varible
    .querySelector(".container")
    .querySelector(".headline");
  let VarOverView = varible
    .querySelector(".container")
    .querySelector(".overview");
  VarOverView.style.color = color;
  varHeadLine.innerHTML = `<a href="movieList/${path}/${path}.html">${path}</a>`;
  VarOverView.innerHTML = movieDB[movieNum].overview;
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
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
async function Main() {
  await addMovie(
    338952,
    "Fantastic Beasts The Crimes of Grindelwald",
    "Action",
    "movie"
  );
  await addMovie(
    338953,
    "Fantastic Beasts The Secrets of Dumbledore",
    "Action",
    "movie"
  );
  await addMovie(505026, "Death on the Nile", "Drama", "movie");
  await addMovie(629542, "The Bad Guys", "Animations", "movie");
  await addMovie(
    324857,
    "Spider-Man Into the Spider-Verse",
    "Animation",
    "movie"
  );
  await addMovie(315635, "Spider-Man Homecoming", "Action", "movie");
  await addMovie(634649, "Spider-Man No Way Home", "Action", "movie");
  await addMovie(725201, "The Gray Man", "Action", "movie");
  await addMovie(617653, "The Last Duel", "Action", "movie");
  await addMovie(550988, "Free Guy", "Comedy", "movie");
  await addMovie(836225, "The Exorcism of God", "Horror", "movie");
  await addMovie(361743, "Top Gun Maverick", "Action", "movie");
  await addMovie(238, "The Godfather", "Drama", "movie");
  await addMovie(524434, "Eternals", "Action", "movie");
  await addMovie(740925, "No One Gets Out Alive", "Horror", "movie");
  await addMovie(787723, "13 Minutes", "Action", "movie");
  await addMovie(756999, "The Black Phone", "Horror", "movie");
  await addMovie(758724, "The Cellar", "Horror", "movie");
  await addMovie(1006851, "Office Invasion", "Comedy", "movie");
  await addShow(66732, "Stranger Things", "Drama", "tv");
  await addShow(59186, "Impractical Jokers", "Comedy", "tv");
  await addMovie(773975, "End of the Road", "Thriller", "movie");
  await addMovie(807356, "Watcher", "Horror", "movie");
  await addMovie(480042, "Escape Plan The Extractors", "Action", "movie");
  await addMovie(440471, "Escape Plan 2 Hades", "Action", "movie");
  await addMovie(760741, "Beast", "thriller", "movie");
  await addMovie(249070, "Hitman Agent 47", "Action", "movie");
  await addMovie(991247, "Kingslayer", "Action", "movie");
  await addMovie(1007205, "York Witches Society", "horror", "movie");
  await addMovie(833339, "Speak no Evil", "horror", "movie");
  await addMovie(508947, "Turning Red", "animation", "movie");
  await addMovie(807196, "Boiling Point", "Drama", "movie");
  await addMovie(656663, "Jackass Forever", "Comedy", "movie");
  await addMovie(766507, "Prey", "Thriller", "movie");
  await addMovie(776305, "Belle", "animation", "movie");
  await addMovie(762504, "Nope", "horror", "movie");
  await addMovie(913814, "Brian and Charles", "Comedy", "movie");
  await addMovie(107846, "Escape Plan", "Action", "movie");
  AddMovieRecent(New1, 0, "Fantastic Beasts The Crimes of Grindelwald");
  AddMovieRecent(New2, 1, "Fantastic Beasts The Secrets of Dumbledore");
  AddMovieRecent(New3, 2);
  AddMovieRecent(New4, 3);
}
Main();
