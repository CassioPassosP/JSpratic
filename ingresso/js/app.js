function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista'){
        comprarPista(qtd);
    }else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else{
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > qtdPista){
            alert('Quantidade indisponivel para o tipo pista');
        }else{
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista
            alert('Compra realizada!');
        }
     
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > qtdSuperior){
            alert('Quantidade indisponivel para o tipo superior');
        }else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior
            alert('Compra realizada!');
        }
     
}
     

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > qtdInferior){
            alert('Quantidade indisponivel para o tipo inferior');
        }else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior
            alert('Compra realizada!');
        }
     
     
}