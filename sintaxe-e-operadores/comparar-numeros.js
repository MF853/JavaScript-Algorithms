function compararNumeros(num1, num2){
    var soma = num1 + num2;

    var vOuF = num1 == num2;
    var sNs;
    (vOuF == true) ? sNs = 'são' : sNs = 'não são';

    
    console.log('Os numeros '+ num1 + ' e ' + num2 + ' ' + sNs +' iguais. Sua soma é '+ soma +', que é MAIOR/ MENOR que 10 e MAIOR/ MENOR que 20');
}
compararNumeros();
