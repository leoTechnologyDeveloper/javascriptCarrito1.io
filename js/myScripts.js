
// VARIABLES**************

const iconCarrito = document.querySelector(".iconCarrito");
const iconX = document.querySelector(".iconX");
const subMenuCarrito = document.querySelector(".submenuCarrito");
const main = document.querySelector(".main");
const contenedorCarrito = document.querySelector(".contenedorCarrito");
const carritoTable = document.querySelector(".carritoTable");
const carritoTbody = document.querySelector(".carritoTable tbody");
const vaciarCarritoBtn = document.querySelector(".vaciarCarritoBtn");

let platosEnCarrito = [];

chargingEventListeners();

// CHARGING EventListeners **************

function chargingEventListeners(params) {
     iconCarrito.addEventListener('click', openCarrito);
     iconX.addEventListener('click', closeCarrito);
     main.addEventListener('click', agregarCurso );
     carritoTable.addEventListener('click', eliminarCurso );
     vaciarCarritoBtn.addEventListener('click', vaciandoCarrito );
         // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
  
        platosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(platosEnCarrito);
        pintandoCarritoHtml();
    });
}







// FUCTIONS ****************************


// MyUtility : solo para comprobar funcionamiento del click

function hacerClick(e) {
     e.preventDefault();
     console.log("me cliqueaste");
  }

  // F1 -------------------------------

function openCarrito() {
     // console.log("Abriendo el carrito");
     subMenuCarrito.style.display = "block";
     iconCarrito.style.display = "none";
}

// F2 -------------------------------
function closeCarrito() {
     // console.log("Cerrando el carrito");
     subMenuCarrito.style.display = "none";
     iconCarrito.style.display = "block"
}

// F3 -------------------------------
 function agregarCurso(e) {
     e.preventDefault();
     if (e.target.classList.contains("agregarButton")) {
         const cursoSeleccionado = e.target.parentElement.parentElement.parentElement;
         leerDatosCurso(cursoSeleccionado);
     
     }
 }
 
 // F4 -------------------------------
 function leerDatosCurso(cursoSeleccionado) {

          // Aca construimos un objeto del curso recibido

          const cursoActualData = {
               imagen: cursoSeleccionado.querySelector(".imageArticle").src,
               nombre: cursoSeleccionado.querySelector(".articleH1").textContent,
               precio: cursoSeleccionado.querySelector(".articlePrecio span").textContent,
               id: cursoSeleccionado.querySelector(".agregarButton").getAttribute("data-id"),
               cantidad: 1
          };

        // Revisando si un elemento ya esxiste en el carrito

        const existe = platosEnCarrito.some( plato => plato.id === cursoActualData.id);

        if (existe) {
            const platos = platosEnCarrito.map(plato => {
                if (plato.id === cursoActualData.id) {
                    plato.cantidad++;
                    return plato; // retorna el objeto actualizado
                }else{
                    return plato; // retorna los objetos que no son los duplicados
                }
            });

            platosEnCarrito = [...platos];
        } else {
            // Agregando elementos al arreglo de carrito
            platosEnCarrito = [...platosEnCarrito, cursoActualData];
        }

          //---------------------------------------------
          // console.log("Aca ya leimos el curso recibido y es objeto es este :");
          // console.log(cursoActualData);
          
          // console.log("Aca los platos actuales en el carrito");
          // console.log(platosEnCarrito);
          
          pintandoCarritoHtml();
     }  

// F5 -------------------------------     

 function eliminarCurso(e) {
     e.preventDefault();
     console.log("eliminando curso");
     if (e.target.classList.contains('aEliminar')) {
          const platoId = e.target.getAttribute('data-id');
  
          // Eliminando del arreglo por el data-id
          platosEnCarrito = platosEnCarrito.filter(plato => plato.id !== platoId);
      }
          pintandoCarritoHtml(); // Iterando sobre el carrito y mostrando su HTML
 }

 // F6 -------------------------------

 function vaciandoCarrito(e) {
     e.preventDefault();
     console.log("vaciando carrito");
     platosEnCarrito = [];
     pintandoCarritoHtml();
 }

 // F7 -------------------------------

 function pintandoCarritoHtml() {

     // Primero limpiamos el estado actual del Html
     limpiarHTML();
     //  console.log("Por aca pintando la vaina");
     //  console.log(platosEnCarrito);
      platosEnCarrito.forEach(plato => {
           
          const rowInfoEnHtml = document.createElement("tr");
          rowInfoEnHtml.innerHTML = `
               <td><img src="${plato.imagen}" alt="imagen producto ${plato.id}" width="100px"></td>
               <td>${plato.nombre}</td>
               <td>${plato.precio}</td>
               <td>${plato.cantidad}</td>
               <td class="tdEliminar"><a href="#" class="aEliminar" data-id="${plato.id}">X</a></td>
          `;
          carritoTbody.appendChild(rowInfoEnHtml);
     });

     // Agregando el carrito de compras al storage
     sincronizarStorage();
     console.log(platosEnCarrito);
     
 }

// F8 -------------------------------

 function limpiarHTML() {
     // Forma Lenta de limpiar HTML
     //carritoTbody.innerHTML = "";
 
     // Forma Rápida de limpiar HTML
     while (carritoTbody.firstChild) {
          carritoTbody.removeChild(carritoTbody.firstChild)
     }
 }


 // F9 -------------------------------

 function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(platosEnCarrito))
}



