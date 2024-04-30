function toggleContrast() {
    const estiloAltoContraste = document.querySelector('link[title="Alto Contraste"]');
    estiloAltoContraste.disabled = !estiloAltoContraste.disabled;
}

document.addEventListener("DOMContentLoaded", function () {
    var tamanhoFonte = parseFloat(getComputedStyle(document.querySelector(".text")).fontSize);

    document.querySelector("#aumentar").addEventListener("click", function () {
        tamanhoFonte += 1;
        const elementosTexto = document.querySelectorAll(".text"); 
        elementosTexto.forEach(function (elemento) {
            elemento.style.fontSize = tamanhoFonte + "px";
        });
    });

    document.querySelector("#diminuir").addEventListener("click", function () {
        tamanhoFonte -= 1;
        const elementosTexto = document.querySelectorAll(".text");
        elementosTexto.forEach(function (elemento) {
            elemento.style.fontSize = tamanhoFonte + "px";
        });
    });
});

function returntopage(){
    window.location.assign("cursos.html");
};

function inf(){
    window.location.assign("curso-inf.html");
};

function adm(){
    window.location.assign("curso-adm.html");
};

function amb(){
    window.location.assign("curso-amb.html");
};

function ds(){
    window.location.assign("curso-ds.html");
};

function farm(){
    window.location.assign("curso-farm.html");
};

function admmod(){
    window.location.assign("curso-admmod.html");
};

