//sencillas


//funciones sencillas
function mostrarHola() {
  console.log("hola");
}
mostrarHola();


// funciones con parametros
function mosotrarMensaje (mensaje:string):{
console.log(mensaje);
}
// mosotrarMensaje('hola parametro');
// mosotrarMensaje('menssaje 2');


function calcularSuma (n1:number,n2:number,n3:number){
let sum = n1+n2+n3;
console.log(sum);

}

// calcularSuma(6,5,6)

// Funciones que devuelven datos

function multiplicar (num1:number,num2:number ):number {
  let t = num1*num2;
  return t
}


var numResultado:number = 0;

numResultado = multiplicar(5,10)

console.log('resultado de multiplicacion'+ numResultado);



