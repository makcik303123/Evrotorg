const hamburgerBtn = document.querySelector("#wrapper__icon");
const hamburgerBody = document.querySelector("#menu__nav");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerBody.classList.toggle("active");
  body.classList.toggle("lock");
});

hamburgerBody.querySelectorAll(".item__link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    hamburgerBody.classList.remove("active");
    body.classList.remove("lock");
  });
});
