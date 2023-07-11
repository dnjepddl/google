window.onload = function () {
  var pic = document.querySelector(".pic");
  var lightBox = document.querySelector("#lightbox");
  var lightBoxImage = document.querySelector("#lightboxImage");

  for (var i = 0; i < pic.length; i++) {
    pic[i].addEventListener("click", showLightBox);
  }
  function showLightBox() {
    var bigLocation = this.getAttribute("data-src");
    lightBoxImage.setAttribute("src", bigLocation);
    lightBox.style.display = "block";
  }
  lightBox.onclick = function () {
    lightBox.style.display = "none";
  };
};
