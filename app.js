const monke = document.getElementById("monke");
const back = document.getElementById("back");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stopbtn = document.getElementById("stop");
const forward = document.getElementById("forward");

play.addEventListener("click", function () {
  monke.play();
  if (monke.play()) {
    document.getElementById("text").textContent =
      "Its not working! Quick! Click pause!";
  }
});

pause.addEventListener("click", function () {
  monke.pause();
  document.getElementById("text").textContent =
    "Oh no, he's drafting a mean tweet about you... Just go back 10s";
});

back.addEventListener("click", function () {
  monke.currentTime -= 10;
  document.getElementById("text").textContent =
    "That just made him more mad... Jump 10s forward";
});

forward.addEventListener("click", function () {
  monke.currentTime += 10;
  document.getElementById("text").textContent =
    "He's reaching his arm back to fling POO! HIT STOP";
});

stopbtn.addEventListener("click", function () {
  monke.currentTime = 0;
  document.getElementById("text").textContent = "Phew... that was close...";
});
