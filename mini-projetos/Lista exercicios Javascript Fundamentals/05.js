const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 950 },
    { nome: "Cadeira", preco: 600 }
];

const produtosCaros = produtos.filter(produtos => (produtos.preco > 500));

console.log(produtosCaros);
/* Resultado esperado:
[
    { nome: 'Notebook', preco: 2500 },
    { nome: 'Monitor', preco: 950 },
    { nome: 'Cadeira', preco: 600 }
]
*/