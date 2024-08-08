const productos = [
    { id: 1, nombre: 'Babolat Air Viper 2023', precio: 179990, imagen: './img/Babolat Air Viper 2023.png', categoria: 'babolat' },
    { id: 2, nombre: 'Babolat Counter Viper 2023', precio: 179990, imagen: './img/Babolat Counter Viper 2023.png', categoria: 'babolat' },
    { id: 3, nombre: 'Babolat Technical Viper 2022', precio: 199990, imagen: './img/Babolat Technical Viper 2022.png', categoria: 'babolat' },
    { id: 4, nombre: 'Babolat Technical Viper Lebron 2023', precio: 189990, imagen: './img/Babolat Technical Viper Lebron 2023.png', categoria: 'babolat' },

    { id: 5, nombre: 'Nox AT10 2024', precio: 159990, imagen: './img/Nox AT10 2024.png', categoria: 'nox' },
    { id: 6, nombre: 'Nox AT10 2023', precio: 159990, imagen: './img/Nox AT10 2023.png', categoria: 'nox' },
    { id: 7, nombre: 'Nox ML10 2022', precio: 149990, imagen: './img/Nox ML10 2022.png', categoria: 'nox' },
    { id: 8, nombre: 'Nox X-ONE 2023', precio: 179990, imagen: './img/Nox X-ONE 2023.png', categoria: 'nox' },

    { id: 9, nombre: 'Bullpadel Hack 03 CTR 2023', precio: 199990, imagen: './img/Bullpadel Hack 03 CTR 2023.png', categoria: 'bullpadel' },
    { id: 10, nombre: 'Bullpadel Hack 03 2023', precio: 199990, imagen: './img/Bullpadel Hack 03 2023.png', categoria: 'bullpadel' },
    { id: 11, nombre: 'Bullpadel Vertex 03 2023', precio: 169990, imagen: './img/Bullpadel Vertex 03 2023.png', categoria: 'bullpadel' },
    { id: 12, nombre: 'Bullpadel Vertex 04 2024', precio: 179990, imagen: './img/Bullpadel Vertex 04 2024.png', categoria: 'bullpadel' },

    { id: 13, nombre: 'Siux Electra ST2 2023', precio: 219990, imagen: './img/Siux Electra ST2 2023.png', categoria: 'otras' },
    { id: 14, nombre: 'Head Speed Pro 2023', precio: 229990, imagen: './img/Head Speed Pro 2023.png', categoria: 'otras' },
    { id: 15, nombre: 'Adidas Metalbone 2024', precio: 189990, imagen: './img/Adidas Metalbone 2024.png', categoria: 'otras' },
    { id: 16, nombre: 'Adidas Metalbone CTRL 2024', precio: 199990, imagen: './img/Adidas Metalbone CTRL 2024.png', categoria: 'otras' }
];

let carrito = [];

function mostrarProductos() {
    const categorias = ['babolat', 'nox', 'bullpadel', 'otras'];
    categorias.forEach(categoria => {
        const productoLista = document.getElementById(categoria);
        const productosFiltrados = productos.filter(p => p.categoria === categoria);
        productosFiltrados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            `;
            productoLista.appendChild(productoDiv);
        });
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    mostrarCarrito();
    actualizarTotal();
}

function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    carrito.forEach((item, index) => {
        const itemLi = document.createElement('li');
        itemLi.textContent = `${item.nombre} - $${item.precio}`;
        carritoLista.appendChild(itemLi);
    });
    document.getElementById('opciones-pago').classList.remove('hidden');
}

function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    document.getElementById('total').textContent = total;
}

function comprar() {
    if (carrito.length > 0) {
        const metodoPago = document.querySelector('input[name="pago"]:checked').value;
        alert(`Compra realizada con éxito! Método de pago: ${metodoPago}`);
        carrito = [];
        mostrarCarrito();
        actualizarTotal();
        document.getElementById('opciones-pago').classList.add('hidden');
    } else {
        alert('El carrito está vacío.');
    }
}

function recibirDescuento() {
    const email = prompt('Ingresa tu correo electrónico para recibir un descuento:');
    if (email) {
        alert('Revisa tu bandeja de entrada para recibir el descuento.');
    }
}

document.getElementById('comprar-btn').addEventListener('click', comprar);
document.getElementById('descuento-btn').addEventListener('click', recibirDescuento);
mostrarProductos();
