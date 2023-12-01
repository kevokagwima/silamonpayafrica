const burger = document.querySelector(".burger");
const side_nav = document.querySelector(".side-navigation");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  side_nav.classList.add("show-side-nav");
});

close.addEventListener("click", () => {
  side_nav.classList.remove("show-side-nav");
});

window.addEventListener("scroll", () => {
  side_nav.classList.remove("show-side-nav");
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pay-in");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}
