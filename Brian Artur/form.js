document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Recoger y limpiar los valores
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const email = document.getElementById("email").value.trim();
        const contrasena = document.getElementById("contrasena").value.trim();
        const edad = document.getElementById("edad").value.trim();

        // Expresiones regulares para validación
        const regexNombreApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // Solo letras y espacios
        const regexEdad = /^\d+$/; // Solo números
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo válido
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_+,.-])[A-Za-z\d@$!%*?&_+,.-]{8,16}$/; // Contraseña segura

        // Validación de campos con expresiones regulares y condiciones simples
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(apellidos)) {
            alert("Los apellidos solo pueden contener letras y espacios.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("El email no es válido.");
            return;
        }
        if (contrasena.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (!/^\d+$/.test(edad) || parseInt(edad) < 1 || parseInt(edad) > 120) {
            alert("La edad debe ser un número válido entre 1 y 120.");
            return;
        }

        // Crear objeto usuario
        const user = {
            nombre,
            apellidos,
            email,
            contrasena,
            edad: parseInt(edad)
        };

        // Obtener el array de usuarios existente o inicializarlo
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuario registrado con éxito.");
        form.reset();
    });
});
