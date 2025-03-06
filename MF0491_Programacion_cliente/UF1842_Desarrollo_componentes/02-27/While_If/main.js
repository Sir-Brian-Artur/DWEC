let months = ["enero","febrero","marzo","abril","mayo","junio","julio",
    "agosto","semptiembre","octubre","noviemnbre","diciembre"]

let days = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

function buscar() {
    let valueSearch = document.getElementById("search").value;
    valueSearch = valueSearch.toLowerCase()
    
    let findIt = false; 
    let i = 0;
    while(findIt != true){
        console.log(i)
        if(days[i] == valueSearch){
            console.log("Es un dia de la semana");
            findIt = true;
        }else if(months[i] == valueSearch){
            console.log("Es un mes");
            findIt = true;
        }else if(i == months.length){
            console.log("No es ni mes ni un dia");
            findIt = true;
        }
        i++   
    }  
}
