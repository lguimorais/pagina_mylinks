function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    //set tiver sem light mode, manter imagem normal
    img.setAttribute("src", "assets/avatar.png")
  };
};
