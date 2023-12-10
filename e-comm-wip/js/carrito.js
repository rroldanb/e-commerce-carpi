let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorcarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoFooter = document.querySelector("#carrito-footer");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function desplegarProductosCarrito () {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorcarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoFooter.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Título</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$ ${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$ ${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id= "${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });
    } else{
        contenedorcarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoFooter.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    actualizaBotonesEliminar();
    actualizarTotal ();
}

desplegarProductosCarrito ();


function actualizaBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarito);
    })
}


function eliminarDelCarito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index,1);
    desplegarProductosCarrito();

    localStorage.setItem ("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem ("productos-en-carrito", JSON.stringify(productosEnCarrito));
    desplegarProductosCarrito();
}

function actualizarTotal () {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$ ${totalCalculado}`

}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem ("productos-en-carrito", JSON.stringify(productosEnCarrito));
    desplegarProductosCarrito();
    contenedorcarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoFooter.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}