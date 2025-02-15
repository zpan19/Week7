document.addEventListener("DOMContentLoaded", function () {
  // 选择 Dark 和 Light 按钮
  const darkButton = document.querySelector("[data-bs-theme-value='dark']");
  const lightButton = document.querySelector("[data-bs-theme-value='light']");

  // 获取 body
  const body = document.body;

  // 检查本地存储，应用用户的偏好
  if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  // 监听 Dark 按钮点击事件
  darkButton.addEventListener("click", function () {
    enableDarkMode();
  });

  // 监听 Light 按钮点击事件
  lightButton.addEventListener("click", function () {
    enableLightMode();
  });

  // 启用暗色模式
  function enableDarkMode() {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark"); // 记住用户选择
  }

  // 启用浅色模式
  function enableLightMode() {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light"); // 记住用户选择
  }
});
