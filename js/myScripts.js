
const iconCarrito = document.querySelector(".iconCarrito");
const iconX = document.querySelector(".iconX");
const subMenuCarrito = document.querySelector(".submenuCarrito")
chargingEventListeners();



// Charging eventlisteners **************

function chargingEventListeners(params) {
     iconCarrito.addEventListener('click', openCarrito);
     iconX.addEventListener('click', closeCarrito);
     // iconCarrito.addEventListener('mouseover', openCarrito);
     // iconX.addEventListener('mouseleave', closeCarrito);
}



// FUCTIONS ****************************

function openCarrito() {
     console.log("Abriendo el carrito");
     subMenuCarrito.style.display = "block";
     iconCarrito.style.display = "none";
     // subMenuCarrito.style.transition = "3s";
}

function closeCarrito() {
     console.log("Cerrando el carrito");
     subMenuCarrito.style.display = "none";
     iconCarrito.style.display = "block"
     // subMenuCarrito.style.transition = "3s";
}