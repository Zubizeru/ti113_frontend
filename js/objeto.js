let pessoa = {};
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
);