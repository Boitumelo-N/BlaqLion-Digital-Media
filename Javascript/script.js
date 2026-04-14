document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".clickable").forEach(img => {
    img.onclick = function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    };
  });

  lightbox.onclick = function () {
    lightbox.style.display = "none";
  };
});