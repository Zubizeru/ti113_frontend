let botao = document.querySelector("#calcular_imc");
botao.addEventListener("click", mostrarimc);

function mostrarimc() {
    let pessoa = {};
    pessoa.nome = document.querySelector("#txt_nome").value;
    pessoa.altura = parseFloat(document.querySelector("#txt_altura").value);
    pessoa.peso = parseFloat(document.querySelector("#txt_peso").value);
    
    pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

    let mensagem =  `O IMC de ${pessoa.nome} é <b>${pessoa.imc.toFixed(2)}</b>.`

    let div = document.querySelector("#resultado");
    div.innerHTML = mensagem;
}