let precoTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `R$ 0`;

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let valorToltal = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');
    
    let preco = quantidade * valorUnitario;
    precoTotal = precoTotal + preco;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`;

    valorToltal.textContent = `R$ ${precoTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    document.getElementById('quantidade').value = 0; 
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}