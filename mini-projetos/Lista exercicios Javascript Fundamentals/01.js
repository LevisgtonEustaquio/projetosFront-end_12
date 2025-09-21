function verificarNumero(numero) {
    if(numero > 0){
        console.log("Positivo");
    } else if(numero < 0){
        console.log("Negativo")
    } else{
        console.log("Zero");
    }
}

verificarNumero(10);  // Deve imprimir "Positivo"
verificarNumero(-5);  // Deve imprimir "Negativo"
verificarNumero(0);   // Deve imprimir "Zero"