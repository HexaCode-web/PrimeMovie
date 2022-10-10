const New1 = document.querySelector(".itemone");
const New2 = document.querySelector(".itemtwo");
const New3 = document.querySelector(".itemthree");
const New4 = document.querySelector(".itemfour");
const request = document.querySelector("#request");
const Form = document.querySelector("#Form");
const form = document.querySelector("#my-form");
const FormBtn = document.querySelector("#my-form-button");

const signUpBTN = document.querySelector("#signUpBTN");
const signupForm = document.querySelector(".signUp-form");
const saveSignUp = document.querySelector("#Save-signup");
const cancelSignUp = document.querySelector("#Cancel-signup");
const signupInfo = document.querySelector("#infoSignUp");

const signinBTN = document.querySelector("#signinBTN");
const signinForm = document.querySelector(".signIn-form");
const saveSignin = document.querySelector("#Save-signin");
const cancelSignin = document.querySelector("#Cancel-signin");
const signinInfo = document.querySelector("#infoSignin");

const username = document.querySelector("#id");
const signinUserName = document.querySelector("#id-signin");
const password = document.querySelector("#password");
const signinpassword = document.querySelector("#password-signin");
const logoutBTN = document.querySelector("#logoutBTN");
const ProfileBtn = document.querySelector("#Profile");
let loggedin = JSON.parse(localStorage.getItem("loggedin"));
let newUser = {};
if (loggedin) {
  signinBTN.style.display = "none";
  signUpBTN.style.display = "none";
  logoutBTN.style.display = "inline";
  Profile.style.display = "inline";
}
logoutBTN.addEventListener("click", () => {
  loggedin = false;
  localStorage.setItem("loggedin", loggedin);
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let userlist = JSON.parse(localStorage.getItem("userlist"));
  userlist.forEach((user) => {
    if (user.username === currentUser.username) {
      currentUser.favMovies.forEach((e) => {
        let location = currentUser.favMovies.indexOf(e);
        if (e !== user.favMovies[location]) {
          user.favMovies.push(e);
        }
      });
      currentUser.watchLater.forEach((e) => {
        let location = currentUser.watchLater.indexOf(e);
        if (e !== user.watchLater[location]) {
          user.watchLater.push(e);
        }
      });
      localStorage.setItem("userlist", JSON.stringify(userlist));
    }
  });
  localStorage.setItem("currentUser", "{}");
  location.reload();
});
signUpBTN.addEventListener("click", () => {
  signupForm.classList.toggle("active");
  signinForm.classList.remove("active");
  username.value = "";
  password.value = "";
});
signinBTN.addEventListener("click", () => {
  signinForm.classList.toggle("active");
  signupForm.classList.remove("active");
  signinUserName.value = "";
  signinpassword.value = "";
});

saveSignUp.addEventListener("click", () => {
  let duplicate = false;
  if (!JSON.parse(localStorage.getItem("userlist"))) {
    let userlist = [];
    userlist.push({});
    localStorage.setItem("userlist", JSON.stringify(userlist));
  }
  let olduser = JSON.parse(localStorage.getItem("userlist"));
  if (username.value === "" || password.value === "") {
    signupInfo.innerHTML = "username or password cant be left empty";
  }
  newUser = {
    username: username.value,
    password: password.value,
    favMovies: [],
    watchLater: [],
  };
  if (!(olduser === null))
    olduser.forEach((element) => {
      if (element.username === newUser.username) {
        duplicate = true;
        signupInfo.innerHTML = "username is taken";
      }
    });
  if (!duplicate) {
    olduser.push(newUser);
    window.localStorage.setItem("userlist", JSON.stringify(olduser));
    signupInfo.innerHTML = "signed up successfully";
  }
});
saveSignin.addEventListener("click", () => {
  checkUser = {
    username: signinUserName.value,
    password: signinpassword.value,
    favMovies: [],
    watchLater: [],
  };
  let olduser = JSON.parse(localStorage.getItem("userlist"));
  let checked = false;
  olduser.forEach((element) => {
    if (
      element.username === checkUser.username &&
      element.password === checkUser.password
    ) {
      signinInfo.innerHTML = "logged in";
      loggedin = true;
      window.localStorage.setItem("loggedin", JSON.stringify(loggedin));
      checked = true;
      window.localStorage.setItem("currentUser", JSON.stringify(element));
      location.reload();
    }
  });
  if (checked === false) {
    signinInfo.innerHTML = "invaild info";
  }
});
cancelSignUp.addEventListener("click", () => {
  signupForm.classList.toggle("active");
});
cancelSignin.addEventListener("click", () => {
  signinForm.classList.toggle("active");
});
const AddMovieRecent = (
  varible,
  movieNum,
  path = movieDB[movieNum].Name,
  color = "white"
) => {
  varible.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%),url(${movieDB[movieNum].backdrop_path})`;
  const varHeadLine = varible
    .querySelector(".container")
    .querySelector(".headline");
  const VarOverView = varible
    .querySelector(".container")
    .querySelector(".overview");
  const varGenre = varible
    .querySelector(".container")
    .querySelector(".Details")
    .querySelector("#type");
  const vardate = varible
    .querySelector(".container")
    .querySelector(".Details")
    .querySelector("#Date");
  const varRate = varible
    .querySelector(".container")
    .querySelector(".Details")
    .querySelector("#Rate");
  VarOverView.style.color = color;
  varHeadLine.innerHTML = `<a href="movieList/${path}/${path}.html">${path}</a>`;
  VarOverView.innerHTML = movieDB[movieNum].overview;
  varGenre.innerHTML = movieDB[movieNum].Genre;
  vardate.innerHTML = movieDB[movieNum].Date;
  varRate.innerHTML += movieDB[movieNum].Rating.toFixed(1);
  // console.log(movieDB[movieNum]);
  // console.log(varGenre);
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
  copyTemp.querySelector(".rating").innerHTML = `${Rating.toFixed(1)}`;
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
FormBtn.addEventListener("click", () => {
  Form.classList.toggle("active");
});
request.addEventListener("click", () => {
  Form.classList.toggle("active");
});
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
  await addMovie(886083, "Deadstream", "Horror", "movie");
  await addMovie(1024530, "Grimcutty", "Horror", "movie");
  await addShow(1396, "Breaking Bad", "Drama", "tv");
  await addMovie(893228, "Section 8", "Action", "movie");
  await addMovie(978651, "The Razing", "Horror", "movie");
  await addMovie(1028955, "In isolation", "Horror", "movie");
  await addMovie(986088, "Control", "Thriller", "movie");
  await addMovie(921360, "Wire Room", "Action", "movie");
  await addMovie(844380, "Nix", "Horror", "movie");
  await addMovie(24021, "The Twilight Saga Eclipse", "Advanture", "movie");
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
  AddMovieRecent(New1, 0);
  AddMovieRecent(New2, 1);
  AddMovieRecent(New3, 2);
  AddMovieRecent(New4, 3);
}
Main();
