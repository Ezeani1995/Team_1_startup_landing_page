const header = document.querySelector("#header");
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const navEl = document.querySelector("#nav");

openBtn.addEventListener("click", () => {
  header.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("clicked");
});
