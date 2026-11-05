function agendar() {

    alert("Para agendar sua consulta, entre em contato pelo telefone (11) 99999-9999.");

}


function mostrarContato() {

    let telefone = document.getElementById("telefone");

    telefone.innerHTML = "Nosso telefone é: (11) 99999-9999";

}
/*menu*/
fetch("/views/html/menu.html")
    .then(resposta => resposta.text())
    .then(menu => {
        document.getElementById("menu").innerHTML = menu;
    });
    //rodape//
    fetch("rodape.html")
    .then(resposta => resposta.text())
    .then(rodape => {
        document.getElementById("rodape-container").innerHTML = rodape;
    });


