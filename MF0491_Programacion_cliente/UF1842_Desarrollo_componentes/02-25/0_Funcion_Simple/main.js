/*
    Voy a intentar explicar que son las funciones

    Piensa la función como una "caja mágica"
    Piensa que tenemos una "caja mágica" que se llama suma, esta "caja" cada vez que la llamemos
    nos ejecutará lo que tenga dentro de dicha "caja mágica" (función)

    Si nosotros lo llamamos una vez solo se ejecuta una vez
    Pero podemos llamarla tantas veces como queramos

    suma()
    suma()
    ...

    En la consola solo nos mostrará el contenido de dicha caja (función) 
    En este ejemplo cada vez que llamemos siempre nos hará la suma de 2+4 y siempre nos dará un 6
*/

function suma(){
    let num1 = 2
    let num2 = 4

    let resultado = num1+num2
    console.log("El resultado es: "+resultado)
}

suma()
// Si quieres borra los siguientes ( // ) para que se pueda ejecutar mas de una vez
//suma() 
//suma()