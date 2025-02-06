const pessoas = [];

function cadastrarPessoa() {
    let pessoa = {};

    pessoa.nome = document.querySelector("#txtNome").value;
    pessoa.sobrenome = document.querySelector("#txtSobrenome").value;
    pessoa.cpf = document.querySelector("#txtCPF").value;
    pessoa.dataNascimento = document.querySelector("#txtDataNascimento").value;

    // Após guardar os dados, os campos são apagados
    document.querySelector("#txtNome").value = "";
    document.querySelector("#txtSobrenome").value = "";
    document.querySelector("#txtCPF").value = "";
    document.querySelector("#txtDataNascimento").value = "";

    pessoas.push(pessoa);
}

function gravarStorage() {
    let listaPessoas = JSON.stringify(pessoas);
    localStorage.setItem("listaPessoas", listaPessoas)
}

let btnCadastrar = document.querySelector("#btnCadastrar")
btnCadastrar.addEventListener("click", cadastrarPessoa);

let btnPersistir = document.querySelector("#btnPersistir")
btnPersistir.addEventListener("click", gravarStorage);