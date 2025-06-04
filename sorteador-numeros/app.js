function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){ // se numero sortedo for igual ao anterior ele repete o sorteio para nao ser igual ao ultimo
            numero = obterNumeroAleatorio(de, ate);
        };
        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

}

function obterNumeroAleatorio(max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function alterarStatusBotao(){
    let botaoReinicio = document.getElementById('btn-reiniciar');
    if (botaoReinicio.classList.contains("container__botao-desabilitado")){
        botaoReinicio.classList.remove("container__botao-desabilitado");
        botaoReinicio.classList.add("container__botao");
    }else{
        botaoReinicio.classList.remove("container__botao");
        botaoReinicio.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';   
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';        
    alterarStatusBotao()
}