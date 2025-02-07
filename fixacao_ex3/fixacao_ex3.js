let pessoas = [];

function cadastrarPessoa() {
    let pessoa = {};
    pessoa.nome = document.querySelector("#username").value;
    pessoa.sobrenome = document.querySelector("#email").value;
    pessoa.senha = document.querySelector("#password").value;
    pessoa.conf_senha = document.querySelector("#conf_password").value;

    if (!pessoa.nome.trim() || !pessoa.sobrenome.trim() || !pessoa.senha.trim() || !pessoa.conf_senha.trim()) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    else if (/[0-9]/.test(pessoa.nome)) {
        alert("Nome inválido. O nome não pode conter números.");
        return; 
    }

    else if (pessoa.senha.length !== 8 || !(/.*\d.*\d.*/.test(pessoa.senha))) {
        alert("A senha precisa ter exatamente oito caracteres e ao menos dois números.");
        return; 
    }

    else if (pessoa.senha !== pessoa.conf_senha) {
        alert("As senhas não coincidem.");
        document.querySelector("#password").value = "";
        document.querySelector("#conf_password").value = "";
        return;  
    }

    pessoas.push(pessoa);

    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#conf_password").value = "";

    alert("Cadastro realizado com sucesso!");
}

let btnRegister = document.querySelector("#btnRegister");
btnRegister.addEventListener("click", cadastrarPessoa);
