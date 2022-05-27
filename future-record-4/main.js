screenheight = document.documentElement.scrollHeight;

console.log(screenheight);

function getDimensions() {
  document.documentElement.scrollHeight;
  console.log(screenheight);

  document.getElementById("dynamic").style.height = screenheight + "px";
}

window.addEventListener("resize", getDimensions);

document.getElementById("dynamic").style.height = screenheight + "px";
