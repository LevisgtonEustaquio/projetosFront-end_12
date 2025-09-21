const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 950 },
    { nome: "Cadeira", preco: 600 }
];

const nomesDosProdutos = produtos.map(produtos => (produtos.nome));

console.log(nomesDosProdutos); // Resultado esperado: ["Notebook", "Mouse", "Teclado", "Monitor", "Cadeira"]