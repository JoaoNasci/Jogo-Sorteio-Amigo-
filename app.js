let nomes = [];
let sorteados = [];

function atualizarListas() {
    document.getElementById("listaAmigos").innerHTML = nomes.map(nome => `<li>${nome}</li>`).join("");
    document.getElementById("resultado").innerHTML = sorteados.map(nome => `<li>${nome}</li>`).join("");
}

function adicionarNome() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome && !nomes.includes(nome) && !sorteados.includes(nome)) {
        nomes.push(nome);
        document.getElementById("amigo").value = "";
        atualizarListas();
    } else {
        alert("Nome inválido ou já cadastrado!");
    }
}

function sortearNome() {
    if (nomes.length === 0) {
        alert("Não há nomes para sortear!");
        return;
    }
    let indice = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes.splice(indice, 1)[0];
    sorteados.push(nomeSorteado);
    atualizarListas();
}