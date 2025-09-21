const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];

for (let i = 0; i < numeros.length; i++) {

    const cont = numeros[i];
    
    if(cont % 2 === 0){
        numerosPares.push(cont);
    }
    
}

console.log(numerosPares); // Resultado esperado: [2, 4, 6, 8, 10]