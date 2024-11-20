var botao_barra_lateral = document.getElementById("barra-lateral-btn")

botao_barra_lateral.addEventListener("click", () => {
    var sidebar = document.getElementById("barra-lateral-div");

    sidebar.classList.toggle("open");
})