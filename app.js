let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora de desafio";

function aletFunction() {
    alert("click")
}
function aletFunction() {
    alert("yo amo JS")
}
function alertFunction() {
    let ciudad = prompt("introduce el nombre de una ciudad de Brasil");
    let mensaje = `estuve en ${ciudad} de brasil`;
    alert(mensaje)
}
function suma() {
    let numero1 = prompt("ingresa un numero");
    numero1 = parseFloat(numero1);
    let numero2 = prompt("ingresa el siguiente numero");
    numero2 = parseFloat(numero2)
    let suma = numero1 + numero2;
    alert(`su suma es ${suma}`)
   
}

function mostrar() {
    console.log("hola mundo");
}

mostrar();

function parametro(nombre){
    console.log(`hola ${nombre}`);
}
parametro("brigitte");

function doblarNumero(numero){
    return numero * 2;

}
console.log(doblarNumero(5));

function numeros(num1, num2, num3){
    let suma = num1 + num2 + num3
    let promedio = suma / 3
    return promedio;
}
let promedio = numeros(5,6,8)
console.log(promedio);

function numeroMayor(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }

}
 console.log(numeroMayor(2,10));

 function multiplicar(num1){
    return num1 * num1

 }
 console.log(multiplicar(6));