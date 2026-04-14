console.log("JS is connected");
const images = document.querySelectorAll(".clickable");
console.log(images.length);

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  document.querySelector(".close").addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
