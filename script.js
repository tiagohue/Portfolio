var botao_barra_lateral = document.getElementById("barra-lateral-btn")
var botao_barra_lateral_fechar = document.getElementById("botao-fechar")

botao_barra_lateral.addEventListener("click", () => {
    var sidebar = document.getElementById("barra-lateral-div");

    sidebar.classList.toggle("open");
})

botao_barra_lateral_fechar.addEventListener("click", () => {
    var sidebar = document.getElementById("barra-lateral-div");

    sidebar.classList.toggle("open");
})