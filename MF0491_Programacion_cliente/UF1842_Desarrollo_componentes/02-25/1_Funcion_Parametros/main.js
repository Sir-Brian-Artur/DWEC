/* 
    Las funciones con parámetros son "cajas mágicas" que le puedes pasar X valores y "hacen algo".
    El "hacen algo" es que lo quieras que haga dicha "caja" (función)
    
    Podemos pasar tantos parámetros como queramos ( siempre y cuando la función lo pida)

    Los nombres de las variables de los parámetros de nuestra "caja" podemos 
    darle los nombres que queramos.Ejemplo de distintas maneras
        function suma(variable_uno,variable_dos)
        function suma(var_uno,var_dos)
    **Comentario mas abajo

    Dicho nombre de la variable del parámetro tiene que estar llamado dentro para que pueda hacer lo que queramos
    que haga. Ejemplo con el anterior
        let resultado = variable_uno + variable_dos
        let resultado = var_uno + var_dos

    Nosotros podemos pasar los parámetros con la variable o el número directamente
        - suma(variable_uno,variable_dos) 
        - suma(2,4) 

    En este caso las variables son números, pero podemos pasar todo tipos de variables
        - Numeros enteros -> 5
        - Booleanos -> True o False
        - Strings -> "Hola que tal"

    Si las variables de la función no están en uso tienen un color azul oscuro
    Si la variable esta en uso tiene un color azul claro (Ejemplo function prueba_color)
    
*/
let num1 = 2
let num2 = 9

function suma( parametro_uno,parametro_dos){
    let suma = parametro_uno + parametro_dos
    console.log("La suma de los valores es: "+suma)
}
suma(num1,num2)
suma(5,3)
suma(2,4)

function prueba_color(color_uno,color_dos, color_tres){ //<- color_dos es más oscuro, y no se estaría usando
    console.log(" ") //Consola vacia para dar un espacio de separacion, no es necesario, es mas visual
    console.log("El color uno es el: " + color_uno)
    //console.log("El color uno es el: " + color_dos)
    console.log("El color uno es el: " + color_tres)
   
}
prueba_color("Negro","Blanco",3) //Pasamos los parámetros

prueba_color() /* Si nosotros no pasamos ningún parámetro como tenemos la funcion que nos muestra los
                colores que le damos, nos mostrará [ undefined ], que no está definido

                Pon el ratón por encima de la función y te mostrará lo que te pide
                Te mostaría algo así:
                function prueba_color(color_uno: any,color_dos: any, color_tres:any): void
                 
                **Comentario: Es buena praxis nombrarlo de una manera para que si otra persona o tu mismo si no 
                te acuerdas como funciona dicha función y no te acuerdas en que orden se metían los parámetros,
                puedas pasar el ratón por encima de dicha función y saber que parámetros poner y en que posiciones.
                */

                            