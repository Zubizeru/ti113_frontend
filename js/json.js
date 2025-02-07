let pessoas = [];
function cadastrarPessoa() {
    let pessoa = {};
    pessoa.nome = document.querySelector("#txtNome").value;
    pessoa.sobrenome = document.querySelector("#txtSobreNome").value;
    pessoa.cpf = document.querySelector("#txtCPF").value;
    pessoa.dataNascimento =
        document.querySelector("#txtDataNascimento").value;

    // Após guardar os dados, os campos são apagados
    document.querySelector("#txtNome").value = "";
    document.querySelector("#txtSobreNome").value = "";
    document.querySelector("#txtCPF").value = "";
    document.querySelector("#txtDataNascimento").value = "";
    pessoas.push(pessoa);

    gravarStorage();

    carregarPessoas();

}
function gravarStorage() {
    let listaPessoas = JSON.stringify(pessoas);
    localStorage.setItem("listaPessoas", listaPessoas);
}


function carregarPessoas() {
    pessoas = JSON.parse(localStorage.getItem('listaPessoas')) || [];
    const tabela = document.querySelector('#tabPessoas');
    // Limpar tabela
    tabela.innerHTML = '';
    let cabecalho = `
        <tr>
            <th>Nome</th>
            <th>SobreNome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
        </tr>`;
        
    let linhas = "";
    // Preencher a tabela com os dados armazenados
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        linhas += `
        <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.sobrenome}</td>
            <td>${pessoa.cpf}</td>
            <td>${pessoa.dataNascimento}</td>
        </tr>`;
    }
    tabela.innerHTML = cabecalho + linhas;
}

let btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.addEventListener("click", cadastrarPessoa);

carregarPessoas();