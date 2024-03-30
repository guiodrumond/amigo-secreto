
// Variáveis para armazenar os dados

let listaDeAmigos = [];

let listaDeParticipantes = document.getElementById("listaDeParticipantes");

let listaDeAmigosSecretos = document.getElementById("amigosSecretos")

let amigo = document.querySelector('input');


// Função para incluir amigo na lista de participantes e atualizar a lista

function incluirParticipanteNaLista(event) {
    event.preventDefault();
    if (amigo.value) {
        listaDeAmigos.push(amigo.value);
        amigo.value = '';
        listaDeParticipantes.innerHTML = listaDeAmigos.join(', ');
    };
};


// Função para sortear os amigos secretos e inserir na página

function sortearAmigos(event) {
    event.preventDefault();
    for (let i = listaDeAmigos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listaDeAmigos[i], listaDeAmigos[j]] = [listaDeAmigos[j], listaDeAmigos[i]];
    }
    listaDeAmigosSecretos.innerHTML = gerarListaDePares(listaDeAmigos);
}

function gerarListaDePares(nomes) {
    let listaHtml = '<ul>';

    for (let i = 0; i < nomes.length; i++) {
        let parAtual = nomes[i];
        let proximoPar = nomes[(i + 1) % nomes.length]; // O último volta para o primeiro
        listaHtml += `<li>${parAtual} 🎁 ${proximoPar}</li>`;
    }

    listaHtml += '</ul>';
    return listaHtml;
}
