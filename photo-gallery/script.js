function updateImage(src) {
  const display = document.getElementById("display");
  display.src = src;
  display.style.display = "block";
}

function clearImage() {
  const display = document.getElementById("display");
  display.src = "";
  display.style.display = "none";
}
