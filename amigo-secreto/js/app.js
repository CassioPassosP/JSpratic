let listaSorteio = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos');

    if(listaSorteio.includes(nomeAmigo.value)){
        alert('Nome ja adicionado!')
        return;
    }

    if(nomeAmigo == ''){
        alert('informe o nome do amigo!')
        return;
    }

    listaSorteio.push(nomeAmigo)
    amigosIncluidos.textContent = !amigosIncluidos.textContent || !nomeAmigo ? amigosIncluidos.textContent + `${nomeAmigo}` : amigosIncluidos.textContent + `,${nomeAmigo}` ;

    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    embaralhar(listaSorteio)
    let sorteio = document.getElementById('lista-sorteio');

    if(listaSorteio.length < 4 ){
        alert('Adicione pelo menos 4 amigos!')
        return;
    }
    for(let i = 0; i < listaSorteio.length; i ++){
        listaSorteio[i] = listaSorteio.length
         ? sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ` --> ` + listaSorteio[0] + '<br>'
         : sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ` --> ` + listaSorteio[i+1] + '<br>';
    }

    console.log(listaSorteio)
}

function embaralhar(lista){
    for(let i = lista.length; i; i-- ){
        const indiceAleatorio = Math.floor(Math.random()* i);

        [lista[i-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i-1]];
    }
}

function reiniciar(){
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
}