const carrinhoJson = `[
    {"nome": "Smartphone", "categoria": "Eletrônicos", "preco": 1500},
    {"nome": "Tênis", "categoria": "Vestuário", "preco": 350},
    {"nome": "Fone de Ouvido", "categoria": "Eletrônicos", "preco": 250},
    {"nome": "Camiseta", "categoria": "Vestuário", "preco": 80},
    {"nome": "Smartwatch", "categoria": "Eletrônicos", "preco": 800}
]`;

const carrinho = JSON.parse(carrinhoJson);

const apenasEletronicos = carrinho.filter( carrinho => carrinho.categoria === "Eletrônicos");

const precos = apenasEletronicos.map( apenasEletronicos => apenasEletronicos.preco);

const totalEletronicos = precos.reduce((totalEletronicos, precos) => {
    return totalEletronicos + precos;
 });


console.log(totalEletronicos); // Resultado esperado: 2550