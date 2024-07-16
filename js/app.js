let valorTotal = 0;
alteraTexto("lista-produtos", "Sem produtos no carrinho");
alteraTexto("valor-total", 0);

function adicionar(){
    //recuperar nome do produto, quantidade e valor.
    let quantidade = document.getElementById("quantidade").value;
    let ProdutoSelecionado = document.getElementById("produto").value.split(" - ");
    let NomeDoProduto = ProdutoSelecionado[0];
    let valorUnitario = ProdutoSelecionado[1].replace("R$", "");

    // valida se a quantidade é valida
    if (isNaN(quantidade) || quantidade <= 0){
        alert("Por favor escreva uma quantidade válida");
        return;
    }

    //Calcular o preço, o nosso subtotal
    let subtotal = quantidade * valorUnitario;

    //adiciona no carrinho
    let = carrinho = document.getElementById("lista-produtos");

    carrinho.innerHTML = carrinho.innerHTML.replace("Sem produtos no carrinho", "") + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${NomeDoProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;

    //Atualiza o valor total
    valorTotal = valorTotal + subtotal;
    alteraTexto("valor-total", valorTotal);
}

function alteraTexto(ElementID, text){
    let element = document.getElementById(ElementID);
    element.textContent = text;
}

function limpar(){
    alteraTexto("lista-produtos", "Sem produtos no carrinho");
    alteraTexto("valor-total", 0);
    quantidade.value = 0;
    valorTotal = 0;
}