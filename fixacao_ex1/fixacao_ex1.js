function exibirAlert() {
    mensagem = document.querySelector("#txtExibir").value;
    alert(mensagem);

    document.querySelector("#txtExibir").value = "";
}

let btnExibir = document.querySelector("#btnExibir")
btnExibir.addEventListener("click", exibirAlert);



