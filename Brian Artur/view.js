document.addEventListener("DOMContentLoaded", function () {
    const userGrid = document.getElementById("userGrid");

    // Cargar usuarios desde localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function renderUsers() {
        userGrid.innerHTML = "";            
        users.forEach((user, index) => {                
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
          <p><strong>Nombre:</strong> ${user.nombre}</p>
          <p><strong>Apellidos:</strong> ${user.apellidos}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Contraseña:</strong> ${user.contrasena}</p>
          <p><strong>Edad:</strong> ${user.edad}</p>
          <button data-index="${index}">Eliminar</button>
        `;
            userGrid.appendChild(card);
        });
    }

    // Eliminar usuario al hacer clic en el botón
    userGrid.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "button") {
            const index = event.target.getAttribute("data-index");
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            renderUsers();
        }
    });

    renderUsers();
});
