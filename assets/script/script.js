const lupa = document.querySelector(".cabecalho__input");

console.log(lupa);

function pesquisar() {
  console.log("lupa clicada");
  const tela = window.outerWidth;
  console.log(tela);
  const listaNav = document.querySelector(".cabecalho__lista");
  console.log(listaNav);

  if (tela <= 575) {
    listaNav.classList.toggle("display");
  }
}
lupa.addEventListener("click", pesquisar);