const playBtn = document.querySelector("#play-btn"),
  audio = document.querySelector("#audio");

playBtn.addEventListener("click", function (e) {
  playBtn.style.display = "none";
  audio.style.display = "block";
});
