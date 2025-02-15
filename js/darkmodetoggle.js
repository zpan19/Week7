document.addEventListener("DOMContentLoaded", function () {
  const darkButton = document.querySelector("[data-bs-theme-value='dark']");
  const lightButton = document.querySelector("[data-bs-theme-value='light']");

  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  darkButton.addEventListener("click", function () {
    enableDarkMode();
  });

  lightButton.addEventListener("click", function () {
    enableLightMode();
  });

  function enableDarkMode() {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }

  function enableLightMode() {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});
