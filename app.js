let amigos = [];

function adicionarAmigo (){
    
    let input = document.getElementById("amigo");
    let pessoa = input.value;

    if (amigos.includes(pessoa)) {
        alert("Essa pessoa já está incluída na lista, tente novamente");
        return;
    }

    amigos.push(pessoa);
    input.value = "";
    
    atualizarLista();
    
}

function atualizarLista(){
    
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
    
}


function sortearAmigo() {
    
    if (amigos.length < 2) {
        alert("É necessário no mínimo duas pessoas para serem sorteadas");
        return;
    }

    let sorteio = [];
    let arrayAmigos = [...amigos];

    amigos.forEach(amigo => {
        let index;
        do {
            index = Math.floor(Math.random() * arrayAmigos.length);
        } while (arrayAmigos[index] === amigo);

        sorteio.push(`${amigo} → ${arrayAmigos[index]}`);
        arrayAmigos.splice(index, 1);
    });

    document.getElementById("resultado").innerHTML = sorteio.join("<br>");
    
}
