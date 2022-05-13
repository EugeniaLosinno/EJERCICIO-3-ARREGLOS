let nombres_1 : string[] = new Array(Number(prompt("Ingrese la cantidad de nombres que desea ingresar")));
let nomb : string;

for (let indice = 0; indice < nombres_1.length; indice++) {
  nomb = (prompt("Ingrese el nombre " + (indice + 1)));
  nomb = nomb.toUpperCase();
  nombres_1[indice] = nomb;
};

console.log("Los nombre ingresados");
for (let indice = 0; indice < nombres_1.length; indice++) {
  console.log(nombres_1[indice]);
};

let nombres_2 : string[] = new Array(Number(prompt("Ingrese la cantidad de nombres personales que desea ingresar"));

for (let indice = 0; indice < nombres_2.length; indice++) {
  nomb = (prompt("Ingrese el nombre personal " + (indice + 1)));
  nomb = nomb.toUpperCase();
  nombres_2[indice] = nomb;
};

console.log("Los nombre personales ingresados");
for (let indice = 0; indice < nombres_2.length; indice++) {
  console.log(nombres_2[indice]);
};
