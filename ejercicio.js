// //ejercicio #1
// let numero = 8

// for (let i = 0; i <=10; i++) {
//     console.log (numero * i);
    
// }

//ejercicio #3

// let numeroCorrecto = 45
// let adivinanza = parseInt(prompt("este es un juego de adivinanza, ingresa un numero"))
// let acertado = false

// for (let i = 0; acertado==false; i++) {
//     let numeroIngresado = parseInt(prompt("ingrese un numero"))
//     if ( numeroCorrecto=== numeroIngresado) {
//         alert("ganaste, tus intentos fueron de "+i)
//       acertado = false
//     }else{
//         if (numeroIngresado > numeroCorrecto) {
//             alert("el numero que ingresaste es mayor")
            
//         }else{
//           alert("el numero que ingresaste es menor")
    
//         }
//     }

// }  

//ejercicio#4

// let numeroPrimo = parseInt(prompt("ingresa un numero para saber si es primo"))
// let numero=0

// if (numeroPrimo <= 1 ) {
//     console.log("debes ingresar un numero mayor a uno");
// }else{
//     for (let i = 2; i < numeroPrimo; i++) {
//         if (numeroPrimo % i === 0) {
//             numero = 1;
//             break;
            
//         }
//         }if (numero==1) {
//         console.log("el numero no es primo");
        
//     } else {
//         console.log("el numero es primo");
//     }
        
//     }

//ejercicio #5

// let numero = parseInt(prompt("ingresa un numero"))

// for (let i = 1; i <=numero; i++) {
//     if ( numero% i ==0) {
//         console.log(i+"");
        
//     }
  
// }

//ejercicio #6
// let colores= ["amarillo","rojo","verde","azul","rojo","blanco","negro","gris","rosa","marron"]
// for (let i = 0; i< colores.length ;i++) {
//     console.log(colores [i]);
// }


//ejercicio#7
// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let numero of array){
//     console.log(numero*2);
// }

// //or

// for ( i=0;i<numeros.length;i++){
//     if( numeros[i]!=0){
//       total = ( numeros [i]*2);
//     }
//     console.log(total);
//   }


//ejercicio #8

// let array= [
// miembro1={
//     nombre:"rosa",
//     apellido:"perez",
//     edad:"46",
//     estatura:"167",
   
// },

//  miembro2={
//     nombre:"david",
//     apellido:"perez",
//     edad: "46",
//     estatura:"198",
    
// },

// miembro3={
//     nombre: "luis",
//     apellido:"perez", 
//     edad:"22",
//     estatura:"180",
  
// },

// miembro4 ={
//     nombre:"raul",
//     apellido:"perez",
//     edad:"14",
//     estatura:"160",
    
// },

// miembro5 ={
//     nombre:"alejandro",
//     apellido:"perez",
//     edad: "11",
//     estatura:"105",
     
// }
// ]
// console.log(array);
// for (const miembros of array) {
// let descripcion = Object.values(miembros)
//     console.log(
//          "mi nombre es " + descripcion[0] +
//         " " + descripcion[1] + " tengo " +descripcion[2]+
//         "años de edad y tengo una estatura de "+ descripcion[3]
//     );
// }

//ejercicio # 9
// let array= [1,2,3,4,5,6,7,8,9,10]
// for (const numero of array) {
//     if (numero % 2 !== 0) {
//         console.log(numero);}
    
// } 


//ejercicio#10
// let numero
// let sumarPares =0;
// let numerosImpares = 0;

// while (numero !=0) {

//     numero = parseInt(prompt("Ingrese un número"))
//     if (numero %2 ===0) {
//         sumarPares = sumarPares + numero
//         console.log(" suma de numeros pares "+ sumarPares);
       
//     }else{
//         numerosImpares = numerosImpares + numero
//         console.log(" suma de numeros impares" + numerosImpares);
    
    
//     }
// }


//ejercicio #11
// let valores= [20, 30,70,80,100]
// let mayor = valores[0]
// for (let i = 1 ; i < valores.length; i++) {
//     if (valores[i]> mayor) {
//         mayor=valores[i]
        
//     }
    
// }
// console.log("el numero mayor es el "+ mayor);


// ejercicio #12
// let valores= [20, 30,70,80,100]
// let menor = valores[0]
// for (let i = 1 ; i < valores.length; i++) {
//     if (valores[i]< menor) {
//        menor=valores[i]
        
//     }
    
// }
// console.log("el numero menor es el "+ menor);


// ejercicio #13
// alert("esto es un juego de piedra papel o tijera, cada jugador tendra una oportunidad")
// alert ("Felices Juegos del Hambre... y que la suerte, siempre esté de su lado ")
// let tributo1 = prompt ("piedra, papel o tijera tributo1")
// let tributo2 = prompt ("piedra, papel o tijera tributo2")


//         while((tributo1 === "piedra" && tributo2 === "tijera" || tributo1 === "tijera" && tributo2 === "papel"|| tributo1 === "papel" && tributo2 === "piedra" )) {
//             alert ("Felicidades tributo1, eres el ganador")
//         }if ((tributo2 === "piedra" && tributo1 === "tijera" || tributo2 === "tijera" && tributo1 === "papel"|| tributo2 === "papel" && tributo1 === "piedra" )){
//             alert ("Felicidades tributo2, eres el ganador")
//         }else if(tributo1 === "piedra" || tributo1 === "papel" || tributo1 === "tijera") 
//                (tributo2 === "piedra" || tributo2 === "papel" || tributo2 === "tijera") 
//                 alert("¡Hubo un empate! Ambos jugadores eligieron lo mismo.");
//             tributo1 = prompt("¿Piedra, papel o tijera, tributo1?");
//             tributo2 = prompt("¿Piedra, papel o tijera, tributo2?");
    

//ejercicio #14
// for (let i = 1; i <= 5; i++) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '* ';
//     }
//     console.log(linea);
// }

//ejercicio #15
// for (let i = 5; i >= 1; i--) {
//     let linea = '';
//     for (let j = 1; j <= i; j++) {
//         linea += '* ';
//     }
//     console.log(linea);
// }


//ejercicio #16

let numeros= [7,3,4,6,5,2,8,10,9,1]

function ordernar(orden) {
    for (let iresultado = 0; iresultado < orden.length-1; iresultado++) {
        for (let resultado2= 0; resultado2 < orden.length-1 ;resultado2++) {
            if (orden[resultado2]>orden[resultado2+1]) {
                let a = orden[resultado2]
                orden[resultado2]=orden[resultado2+1]
                orden[resultado2+1]=a
            }
        }
        
    }return orden
    
}console.log(ordernar(numeros));


