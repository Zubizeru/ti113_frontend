let botao = document.querySelector("#btn_mostrar");
botao.addEventListener("click", mostrarValores);

function mostrarValores() {
    let pessoa = {};
    pessoa.nome = document.querySelector("#txt_nome").value;
    pessoa.altura = parseFloat(document.querySelector("#txt_altura").value);
    pessoa.idade = parseInt(document.querySelector("#txt_idade").value);
    pessoa.dataNascimento = document.querySelector("#txt_data_nascimento").value;

    let mensagem =  `
    <b>O nome digitado é:</b> ${pessoa.nome} <br>
    <b>A Altura informada é:</b> ${pessoa.altura.toFixed(2)} <br>
    <b>A Idade informada é:</b> ${pessoa.idade} <br>
    <b>A Data de Nascimento é:</b> ${pessoa.dataNascimento}<br>`

    let div = document.querySelector("#resultado");
    div.innerHTML = mensagem;
}





/*let pessoa = {};
pessoa.nome = prompt("Informe Nome");
pessoa.altura = parseFloat(prompt("Informe Altura:"));
pessoa.idade = parseInt(prompt("Informe Idade:"));
pessoa.dataNascimento = prompt("Informe Data Nascimento: (dd/mm/yyyy)");

console.log(pessoa);
alert(
    `O nome digitado é: ${pessoa.nome};
    A Altura informada é: ${pessoa.altura.toFixed(2)};
    A Idade informada é: ${pessoa.idade};
    A Data de Nascimento é: ${pessoa.dataNascimento}.`
);*/