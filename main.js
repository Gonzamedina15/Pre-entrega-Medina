// Algoritmo para calcular el precio total de una compra
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
  }
  let precioDelProducto = parseInt(prompt("Ingrese el precio del producto:"));
  if (precioDelProducto <= 0) {
    alert("Por favor, ingrese correctamente el precio.");
  } else {
    let cantidadDelProducto;
    
    while (true) {
      cantidadDelProducto = parseInt(prompt("Ingrese la cantidad deseada del producto:"));
      
      if (cantidadDelProducto > 0) {
        break;
      } else {
        alert("Por favor, ingrese correctamente la cantidad");
      }
    }
    let total = calcularTotal(precioDelProducto, cantidadDelProducto);

    alert("El total de su compra es de: $" + total);
  }
  