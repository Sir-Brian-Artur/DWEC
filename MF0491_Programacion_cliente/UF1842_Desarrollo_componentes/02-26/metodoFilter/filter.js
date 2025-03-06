function obtenerValor() {
    // Obtiene el valor como string
    let value = document.getElementById("number").value;
    let num = parseFloat(value); // Convierte a número
    let semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    let resul;

    if (firterDay(num, semana)) {
        resul = firterDay(num, semana)
    } else {
        resul = "Por favor, ingrese un número entre 1 y 7.";
    }

    function firterDay(n, resul) {
        return resul.filter((p, i) => i === n);
    }
}