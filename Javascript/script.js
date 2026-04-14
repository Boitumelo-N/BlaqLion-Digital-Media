document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll("img.clickable").forEach(img => {
    img.onclick = function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    };
  });

  lightbox.onclick = function () {
    lightbox.style.display = "none";
  };
});

console.log("Clickable images:", document.querySelectorAll("img.clickable").length);