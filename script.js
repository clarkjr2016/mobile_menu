const hamburgerMenu = document.querySelector(".hamburger_menu");
const links_wrapper = document.querySelector(".links_wrapper");

hamburgerMenu.addEventListener("click", () => {
  links_wrapper.classList.toggle("active");
});
