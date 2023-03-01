
// VARIABLES**************

const iconCarrito = document.querySelector(".iconCarrito");
const iconX = document.querySelector(".iconX");
const subMenuCarrito = document.querySelector(".submenuCarrito");
const main = document.querySelector(".main");
const contenedorCarrito = document.querySelector(".contenedorCarrito");
const carritoTable = document.querySelector(".carritoTable");
const vaciarCarritoBtn = document.querySelector(".vaciarCarritoBtn");


chargingEventListeners();



// CHARGING EventListeners **************

function chargingEventListeners(params) {
     iconCarrito.addEventListener('click', openCarrito);
     iconX.addEventListener('click', closeCarrito);
     main.addEventListener('click', agregarCurso );
     carritoTable.addEventListener('click', eliminarCurso );
     vaciarCarritoBtn.addEventListener('click', vaciandoCarrito );
}


// FUCTIONS ****************************


// MyUtility : solo para comprobar funcionamiento del click

function hacerClick(e) {
     e.preventDefault();
     console.log("me cliqueaste");
  }

function openCarrito() {
     // console.log("Abriendo el carrito");
     subMenuCarrito.style.display = "block";
     iconCarrito.style.display = "none";
}

function closeCarrito() {
     // console.log("Cerrando el carrito");
     subMenuCarrito.style.display = "none";
     iconCarrito.style.display = "block"
}


 function agregarCurso(e) {
     e.preventDefault();
     if (e.target.classList.contains("agregarButton")) {
         const cursoSeleccionado = e.target.parentElement.parentElement.parentElement;
         leerDatosCurso(cursoSeleccionado);
     
     }
 }
 
     function leerDatosCurso(cursoSeleccionado) {

          // Aca construimos un objeto del curso recibido

          const cursoActualData = {
               imagen: cursoSeleccionado.querySelector(".imageArticle").src,
               nombre: cursoSeleccionado.querySelector(".articleH1").textContent,
               precio: cursoSeleccionado.querySelector(".articlePrecio span").textContent,
               id: cursoSeleccionado.querySelector(".agregarButton").getAttribute("data-id"),
               cantidad: 1
          }

          console.log("Aca ya leimos el curso recibido y es objeto es este :");
          console.log(cursoActualData);
     }  
  
 function eliminarCurso(e) {
     e.preventDefault();
     console.log("eliminando curso");
 }

 function vaciandoCarrito(e) {
     e.preventDefault();
     console.log("vaciando carrito");
 }

