document.addEventListener("DOMContentLoaded", function () {
    // Configuração inicial para exibir img_3 e ocultar img_1
    iniciarComImg3();
});

var cont = 1; // Define o estado inicial

// Seleção de elementos
var img_3 = document.querySelector(".img_3");
var img_1 = document.querySelector("#img_1");
var body = document.body;
var h1 = document.querySelector("#h1");
var p_1 = document.querySelector("#p_1");
var p_2 = document.querySelector("#p_2");
var p_3 = document.querySelector("#p_3");
var p_4 = document.querySelector("#p_4");
var up = document.querySelector("#up");
var down = document.querySelector("#down");
var favorite = document.querySelector("#favorite");
var sobre_box = document.querySelector("#sobre_box");

// Função para iniciar com img_3 e fundo branco
function iniciarComImg3() {
    img_3.style.display = "flex";
    img_3.style.visibility = "visible";

    img_1.style.display = "none";
    img_1.style.visibility = "hidden";

    body.style.backgroundColor = "white";

    h1.style.color = "black";
    p_1.style.color = "black";
    p_2.style.color = "black";
    p_3.style.color = "black";
    p_4.style.color = "black";

    up.style.backgroundColor = "black";
    down.style.backgroundColor = "black";
    favorite.style.backgroundColor = "black";

    up.style.color = "white";
    down.style.color = "white";
    favorite.style.color = "white";
}

// Função para trocar para img_1 e fundo preto
function trocarParaImg1() {
    img_1.style.display = "flex";
    img_1.style.visibility = "visible";

    img_3.style.display = "none";
    img_3.style.visibility = "hidden";

    body.style.backgroundColor = "black";

    h1.style.color = "white";
    p_1.style.color = "white";
    p_2.style.color = "white";
    p_3.style.color = "white";
    p_4.style.color = "white";

    up.style.backgroundColor = "white";
    down.style.backgroundColor = "white";
    favorite.style.backgroundColor = "white";

    up.style.color = "black";
    down.style.color = "black";
    favorite.style.color = "black";
}

// Função para alternar entre img_3/fundo branco e img_1/fundo preto
function mudar_cor_site() {
    if (cont === 1) {
        trocarParaImg1();
        cont = 0; // Alternar estado
    } else {
        iniciarComImg3();
        cont = 1; // Alternar estado
    }
}