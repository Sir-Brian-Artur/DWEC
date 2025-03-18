function validarFormulario() {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Expresiones regulares para validación
    const regexNombreApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // Solo letras y espacios
    const regexEdad = /^\d+$/; // Solo números
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo válido
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_+,.-])[A-Za-z\d@$!%*?&_+,.-]{8,16}$/; // Contraseña segura

    // Validar nombre
    if (!nombre || !regexNombreApellidos.test(nombre)) {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio y solo puede contener letras y espacios.';
        return false;
    } else {
        document.getElementById('nombreError').textContent = '';
    }

    // Validar apellidos
    if (!apellidos || !regexNombreApellidos.test(apellidos)) {
        document.getElementById('apellidosError').textContent = 'Los apellidos son obligatorios y solo pueden contener letras y espacios.';
        return false;
    } else {
        document.getElementById('apellidosError').textContent = '';
    }

    // Validar edad
    if (!edad || !regexEdad.test(edad) || edad < 1 || edad > 120) {
        document.getElementById('edadError').textContent = 'La edad es obligatoria y debe ser un número válido (1-120).';
        return false;
    } else {
        document.getElementById('edadError').textContent = '';
    }

    // Validar correo electrónico
    if (!email || !regexEmail.test(email)) {
        document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio y debe tener un formato válido.';
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validar contraseña
    if (!password || !regexPassword.test(password)) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener entre 8 y 16 caracteres, incluir números, letras mayúsculas, minúsculas y símbolos especiales.';
        return false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Si todo está correcto, el formulario se envía
    return true;
}