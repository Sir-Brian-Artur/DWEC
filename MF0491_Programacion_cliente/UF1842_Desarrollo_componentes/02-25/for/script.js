let year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let k = 0;

for (k; k < year.length; k++) {
    console.log(year[k])
}
console.log(year[k-1])  // La variable "k" guarda el valor que hemos modificado dentro del bucle


for (let i = 0; i < year.length; i++) {
    console.log(year[i])
}

let j = 0;
while (j < year.length) {
    console.log(year[j]);
    j++;
}