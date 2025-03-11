// Array para almacenar los usuarios registrados
let usuarios = [];

// Función para manejar el envío del formulario

document.getElementById('registroForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let edad = document.getElementById('edad').value;

    // Crear un objeto con los datos del usuario
    let usuario = {
        nombre: nombre,
        email: email,
        password: password,
        edad: edad
    };

    // Añadir el usuario al array
    usuarios.push(usuario);

    // Limpiar el formulario
    document.getElementById('registroForm').reset();

    // Mostrar los usuarios en la consola (para verificación)
    console.log(usuarios);
});