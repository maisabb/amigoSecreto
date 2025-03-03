const amigos = [];

function adicionarAmigo (){
    const input = document.getElementById("amigo");
    const nome = input.value;

    if (amigos.includes(nome)) {
        alert("Nome já adicionado, tente novamente");
        return;
    }

    amigos.push(nome);

    input.value = "";
    atualizarLista();
    

    
}

function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário no mínimo duas pessoas a serem sorteadas");
        return;
    }

    let sorteio = [];
    let copiaAmigos = [...amigos];

    amigos.forEach(amigo => {
        let index;
        do {
            index = Math.floor(Math.random() * copiaAmigos.length);
        } while (copiaAmigos[index] === amigo);

        sorteio.push(`${amigo} → ${copiaAmigos[index]}`);
        copiaAmigos.splice(index, 1);
    });

    document.getElementById("resultado").innerHTML = sorteio.join("<br>");
}


