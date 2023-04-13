const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-xmark");

window.onload = () => (times.style.display = "none");

bars.addEventListener("click", () => {
  times.style.color = "white";
  bars.style.display = "none";
  times.style.display = "block";
});

times.addEventListener("click", () => {
  bars.style.display = "block";
  times.style.display = "none";
});
