const disabled = document.querySelector(".disabled");
disabled.addEventListener("mouseover", () => {
  disabled.innerHTML = "<span>Soon</span>";
});
disabled.addEventListener("mouseleave", () => {
  disabled.innerHTML = "<span>Watch in english!</span>";
});
addMovieinfo(1024530);
