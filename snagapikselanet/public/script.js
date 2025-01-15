window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 2000); // Display loading screen for 2 seconds
});
window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  // Wait for the animation to finish before showing the content
  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 4000); // 2 seconds for "S" + 2 seconds for "P"
});
