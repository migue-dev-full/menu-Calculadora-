// realizar una calculadora que tenga las opciones para:
// 1:SUMAR
// 2: RESTAR
// 3: MULTIPLICAR
// 4: DIVIDIR
// 5: SALIR

// TENER EN CUENTA QUE EL MENU SE VA A REPETIR
// HASTA QUE EL USUARIO INDIQUE LA OPCION DE SALIR

// */
var op;
var rep = true;
var num1, num2;



do{
    op = parseInt(prompt("calculadora: \n1.Suma\n2.Resta\n3Multiplicacion\n4.Dividir\n5.Salir"));
    // console.log(op);
    

    rep = false;

    switch(op){
        case 1:
            // Suma
            console.log("opcion suma")
            num1 = parseInt(prompt("Ingrese el valor 1"));
            num2 = parseInt(prompt("Ingrese el valor 2"));

            // sumamos
            let suma = num1 + num2;

            console.log("El resultado es: ", suma);
            alert("el resultado es: " + suma);
            rep = true;

            break;
        case 2:
            // Resta
            console.log("opcion resta")
            num1 = parseInt(prompt("Ingrese el valor 1"));
            num2 = parseInt(prompt("Ingrese el valor 2"));

            let resta = num1 - num2;

            console.log("El resultado es: ", resta);
            alert("el resultado es: " + resta);
            rep = true;

            break;
        case 3:
            // Multiplicacion
            console.log("opcion multiplicacion")
            num1 = parseInt(prompt("Ingrese el valor 1"));
            num2 = parseInt(prompt("Ingrese el valor 2"));
            rep = true;

            let multiplicacion = num1 * num2;

            console.log("El resultado es: ", multiplicacion);
            alert("el resultado es: " + multiplicacion);

            break;
        case 4:
            // Division
            console.log("opcion dividir")
            num1 = parseInt(prompt("Ingrese el valor 1"));
            num2 = parseInt(prompt("Ingrese el valor 2"));

            let division = num1 / num2;

            console.log("El resultado es: ", division);
            alert("el resultado es: " + division);
            rep = true;


            break;
        case 5:
            // Salir
            console.log("opcion salir")
            rep = false;
            break;
        default:
            console.log("Ingrese la opcion correcta");
            
            break;
    }
    
}while(rep)