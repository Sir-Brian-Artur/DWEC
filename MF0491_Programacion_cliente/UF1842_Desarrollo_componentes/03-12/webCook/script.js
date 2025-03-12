class Receta {
	constructor(id, nombre, precio, descripcion, imagen) {
	  this.id = id;
	  this.nombre = nombre;
	  this.precio = precio;
	  this.descripcion = descripcion;
	  this.imagen = imagen;
	}
  
	// Método para obtener el HTML del producto
	generarHTML() {
	  return `
		<div class="producto">
		  <h2>${this.nombre}</h2>
		  <img src="${this.imagen}" alt="${this.nombre}">
		  <p>${this.descripcion}</p>
		  <p><strong>Precio:</strong> $${this.precio}</p>
		</div>
	  `;
	}
  }
  