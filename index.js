//Code pour décendre le header
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var separator = document.querySelector("#separator1");
  var menu = document.querySelector(".menu");

  var separatorPosition = separator.getBoundingClientRect().bottom;

  if (window.pageYOffset > separatorPosition) {
    header.classList.add("fixed-header");
    menu.classList.add("is-white");
  } else {
    menu.classList.remove("is-white");
    header.classList.remove("fixed-header");
  }
});
