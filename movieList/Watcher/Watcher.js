addMovieinfo(807356);
const disabled = document.querySelector(".disabled");
disabled.addEventListener("mouseover", () => {
  disabled.innerHTML = "<span>Soon</span>";
});
disabled.addEventListener("mouseleave", () => {
  disabled.innerHTML = "<span>Watch in english!</span>";
});
