let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = nums2.concat(nums1);
console.log(nums3);

let subArray = nums3.slice(1, 4);
console.log(subArray);
let newArray = []
subArray.forEach(e => {
    newArray.push(e * 2);
});
console.log(newArray)

let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(numbers)

console.log(doubles.reverse())

const personas = [
    {nombre: "Ana", edad: 21},
    {nombre: "Carlos", edad: 37},
    {nombre: "Jonás", edad: 15}
]

let elementFound = personas.find(e => e.nombre == "Ana")
console.log(elementFound);

let matrixFiltered = personas.filter(e => e.edad > 20)
console.log(matrixFiltered);

const personas2 = personas.map(e => {
    return {
        nombre : e.nombre,
        edad : e.edad + 3
    }
})

console.log(personas2)

const lista = "manzana,banana,pera,uva";
const frutas = lista.split(",\s")
console.log(frutas)

/**
 * alert()
 * prompt()
 */