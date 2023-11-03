// PRODUCTOS
const productos = [
    // Pulseras
    {
        id: "pulsera-01",
        titulo: "Pulsera 01",
        imagen: "./img/pulseras/01.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras",
        },
        precio: 2500
    },
    {
        id: "pulsera-02",
        titulo: "Pulsera 02",
        imagen: "./img/pulseras/02.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-03",
        titulo: "Pulsera 03",
        imagen: "./img/pulseras/03.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-04",
        titulo: "Pulsera 04",
        imagen: "./img/pulseras/04.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    {
        id: "pulsera-05",
        titulo: "Pulsera 05",
        imagen: "./img/pulseras/05.jpg",
        categoria: {
            nombre: "Pulseras",
            id: "pulseras"
        },
        precio: 2500
    },
    // Pulseras Especiales
    {
        id: "collar-01",
        titulo: "Collar 01",
        imagen: "./img/collares/01.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-02",
        titulo: "Collar 02",
        imagen: "./img/collares/02.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-03",
        titulo: "Collar 03",
        imagen: "./img/collares/03.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-04",
        titulo: "Collar 04",
        imagen: "./img/collares/04.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-05",
        titulo: "Collar 05",
        imagen: "./img/collares/05.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-06",
        titulo: "Collar 06",
        imagen: "./img/collares/06.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-07",
        titulo: "Collar 07",
        imagen: "./img/collares/07.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    {
        id: "collar-08",
        titulo: "Collar 08",
        imagen: "./img/collares/08.jpg",
        categoria: {
            nombre: "Collares",
            id: "collares"
        },
        precio: 2500
    },
    // Anillos
    {
        id: "anillo-01",
        titulo: "Anillos 01",
        imagen: "./img/anillos/01.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-02",
        titulo: "Anillos 02",
        imagen: "./img/anillos/02.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-03",
        titulo: "Anillos 03",
        imagen: "./img/anillos/03.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    },
    {
        id: "anillo-04",
        titulo: "Anillos 04",
        imagen: "./img/anillos/04.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
            
        },
        precio: 2500
    },
    {
        id: "anillo-05",
        titulo: "Anillos 05",
        imagen: "./img/anillos/05.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 2500
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
                <center><a href="index2.html" ><button class="producto-informacion" id="${producto.id}">Más información</button></a></center> 
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}