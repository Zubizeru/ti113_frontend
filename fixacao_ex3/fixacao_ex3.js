let pessoas = [];

function cadastrarPessoa() {
    if (pessoas.length >= 3) {
        document.querySelector("#mensagem").textContent = "Limite de cadastros atingido (máximo de 50 pessoas).";
        btnRegister.style.display = "none";
        btnUnlock.style.display = "block";
        document.querySelector("#username").disabled = true;
        document.querySelector("#email").disabled = true;
        document.querySelector("#password").disabled = true;
        document.querySelector("#conf_password").disabled = true;
    }

    let pessoa = {};
    pessoa.nome = document.querySelector("#username").value;
    pessoa.email = document.querySelector("#email").value;
    pessoa.senha = document.querySelector("#password").value;
    pessoa.conf_senha = document.querySelector("#conf_password").value;

    if (!pessoa.nome.trim() || !pessoa.email.trim() || !pessoa.senha.trim() || !pessoa.conf_senha.trim()) {
        if (!pessoa.nome.trim()) {
            document.querySelector("#error_username").textContent = "Por favor, preencha o nome!";
            document.getElementById("username").nextElementSibling.style.display = "flex";
        }
        if (!pessoa.email.trim()) {
            document.querySelector("#error_email").textContent = "Por favor, preencha o e-mail!";
            document.getElementById("email").nextElementSibling.style.display = "flex";
        }
        if (!pessoa.senha.trim()) {
            document.querySelector("#error_password").textContent = "Por favor, preencha a senha!";
            document.getElementById("password").nextElementSibling.style.display = "flex";
        }
        if (!pessoa.conf_senha.trim()) {
            document.querySelector("#error_conf_password").textContent = "Por favor, confirme a senha!";
            document.getElementById("conf_password").nextElementSibling.style.display = "flex";
        }

        setTimeout(() => {
            document.querySelector("#error_username").textContent = " ";
            document.querySelector("#error_email").textContent = " ";
            document.querySelector("#error_password").textContent = " ";
            document.querySelector("#error_conf_password").textContent = " ";

            document.getElementById("username").nextElementSibling.style.display = "none";
            document.getElementById("email").nextElementSibling.style.display = "none";
            document.getElementById("password").nextElementSibling.style.display = "none";
            document.getElementById("conf_password").nextElementSibling.style.display = "none";
        }, 3000);
        return;
    }

    if (/[0-9]/.test(pessoa.nome)) {
        document.querySelector("#error_username").textContent = "Nome inválido. O nome não pode conter números.";
        document.getElementById("username").nextElementSibling.style.display = "flex";
        setTimeout(() => {
            document.querySelector("#error_username").textContent = " ";
            document.getElementById("username").nextElementSibling.style.display = "none";
        }, 3000);
        return;
    }

    if (!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(pessoa.email)) {
        document.querySelector("#error_email").textContent = "E-mail inválido. Informe um e-mail válido.";
        document.getElementById("email").nextElementSibling.style.display = "flex";
        setTimeout(() => {
            document.querySelector("#error_email").textContent = " ";
            document.getElementById("email").nextElementSibling.style.display = "none";
        }, 3000);
        return;
    }

    if (pessoa.senha.length !== 8 || !(/\d.*\d/.test(pessoa.senha))) {
        document.querySelector("#error_password").textContent = "A senha precisa ter exatamente oito caracteres e ao menos dois números.";
        document.getElementById("password").nextElementSibling.style.display = "flex";
        setTimeout(() => {
            document.querySelector("#error_password").textContent = " ";
            document.getElementById("password").nextElementSibling.style.display = "none";
        }, 3000);
        return;
    }

    if (pessoa.senha !== pessoa.conf_senha) {
        document.querySelector("#error_password").textContent = "As senhas não coincidem.";
        document.getElementById("password").nextElementSibling.style.display = "flex";
        document.querySelector("#error_conf_password").textContent = "As senhas não coincidem.";
        document.getElementById("conf_password").nextElementSibling.style.display = "flex";
        setTimeout(() => {
            document.querySelector("#error_conf_password").textContent = " ";
            document.querySelector("#error_password").textContent = " ";
            document.getElementById("conf_password").nextElementSibling.style.display = "none";
            document.getElementById("password").nextElementSibling.style.display = "none";
        }, 3000);
        return;
    }

    pessoas.push(pessoa);
    gravarStorage();
    carregarPessoas();

    if (pessoas.length >= 3) {
        document.querySelector("#mensagem").textContent = "Limite de cadastros atingido (máximo de 50 pessoas).";
        btnRegister.style.display = "none";
        btnUnlock.style.display = "block";
        document.querySelector("#username").disabled = true;
        document.querySelector("#email").disabled = true;
        document.querySelector("#password").disabled = true;
        document.querySelector("#conf_password").disabled = true;
        return;
    }

    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#conf_password").value = "";

    document.querySelector("#mensagem").textContent = "Cadastro realizado com sucesso!";
    setTimeout(() => {
        document.querySelector("#mensagem").textContent = "";
    }, 3000);
}

function gravarStorage() {
    localStorage.setItem("listaPessoas", JSON.stringify(pessoas));
    atualizarContagem();
}

function carregarPessoas() {
    pessoas = JSON.parse(localStorage.getItem("listaPessoas")) || [];
    atualizarContagem();
    if (pessoas.length >= 3) {
        document.querySelector("#mensagem").textContent = "Limite de cadastros atingido (máximo de 50 pessoas).";
        btnRegister.style.display = "none";
        btnUnlock.style.display = "block";
        document.querySelector("#username").disabled = true;
        document.querySelector("#email").disabled = true;
        document.querySelector("#password").disabled = true;
        document.querySelector("#conf_password").disabled = true;
    }
}

function atualizarContagem() {
    document.querySelector("#contagemStorage").textContent = ` (${pessoas.length})`;
}

let btnRegister = document.querySelector("#btnRegister");
btnRegister.addEventListener("click", cadastrarPessoa);

let btnUnlock = document.querySelector("#btnUnlock");
btnUnlock.addEventListener("click", function () {
    if (!(pessoas.length >= 3)) {
        btnRegister.style.display = "block";
        btnUnlock.style.display = "none";
        document.querySelector("#username").disabled = false;
        document.querySelector("#email").disabled = false;
        document.querySelector("#password").disabled = false;
        document.querySelector("#conf_password").disabled = false;
    }
});

carregarPessoas();