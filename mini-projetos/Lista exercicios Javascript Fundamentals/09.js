const valores = [10, 20, 30, 40, 50];

const somaTotal = valores.reduce((somaTotal, valores) => {
    return somaTotal + valores;
})

console.log(somaTotal); // Resultado esperado: 150