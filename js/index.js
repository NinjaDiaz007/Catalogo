// Datos de ejemplo - aquí puedes agregar tus prendas
const prendas = [
    /*{
        id: 1,
        nombre: "Playera Básica Blanca",
        precio: 199,
        categoria: "playeras",
        imagen: "https://via.placeholder.com/400x500/ffffff/222222?text=Playera+Blanca",
        descripcion: "100% algodón, suave y resistente.",
        tallas: "S, M, L, XL"
    },*/
    {
        id: 2,
        nombre: "Vestido Rallado",
        precio: 250,
        categoria: "vestidos",
        imagen: "./img/v1.jpg",
        descripcion: "Corte recto, material elástico.",
        tallas: "L"
    },
    {
        id: 3,
        nombre: "Vestido Floral Amarillo",
        precio: 200,
        categoria: "vestidos",
        imagen: "./img/v3.jpg",
        descripcion: "Tela fresca, ideal para el día y la talla viene reducida.",
        tallas: "XL"
    },
    {
        id: 4,
        nombre: "Vestido Morado",
        precio: 250,
        categoria: "vestidos",
        imagen: "./img/v2.jpg",
        descripcion: "Color morado liso.",
        tallas: "L"
    },
    {
        id: 5,
        nombre: "Vestido Gris Con Rayas",
        precio: 100,
        categoria: "vestidos",
        imagen: "./img/v4.jpg",
        descripcion: "Tela gruesa, cuello de tortuga.",
        tallas: "L"
    },
    {
        id: 6,
        nombre: "Control Inalambrico Nintendo Switch",
        precio: 350,
        categoria: "videojuegos",
        imagen: "./img/Control1.png",
        descripcion: "Batería de larga duración, compatible con switch 1 y 2, android y pc, nuevo sellado.",
        tallas: "Única"
    },
    {
        id: 7,
        nombre: "Juego Immortals Fenyx Rising",
        precio: 1000,
        categoria: "videojuegos",
        imagen: "./img/AU84A.jpg",
        descripcion: "Para Nintendo Switch.",
        tallas: "Única"
    },
    {
        id: 8,
        nombre: "Vestido Negro Con Estampados",
        precio: 200,
        categoria: "vestidos",
        imagen: "./img/v5.jpg",
        descripcion: "Ajustado y para eventos especiales.",
        tallas: "Unitalla"
    },
    {
        id: 9,
        nombre: "Vestido Negro Floreado",
        precio: 150,
        categoria: "vestidos" || "playera",
        imagen: "./img/v6.jpg",
        descripcion: "Vestido o Blusa.",
        tallas: "Única"
    },
    {
        id: 10,
        nombre: "Vestido Blanco",
        precio: 150,
        categoria: "vestidos",
        imagen: "./img/v7.jpg",
        descripcion: "El vestido blanco para niñas.",
        tallas: "XL"
    },
    {
        id: 11,
        nombre: "Vestido Negro sin Hombros",
        precio: 200,
        categoria: "vestidos",
        imagen: "./img/v8.jpg",
        descripcion: "Vestido negro sin hombros para eventos o fiestas.",
        tallas: "M-L"
    },
    {
        id: 12,
        nombre: "Vestido Beije Floreado",
        precio: 300,
        categoria: "vestidos",
        imagen: "./img/v9.jpg",
        descripcion: "Vestido nuevo .",
        tallas: "L"
    },
    {
        id: 13,
        nombre: "Vestido Cafe",
        precio: 250,
        categoria: "vestidos",
        imagen: "./img/v10.jpg",
        descripcion: "Vestido cafe semi nuevo.",
        tallas: "L"
    },
    {
        id: 14,
        nombre: "Vestido Azul Con Blanco",
        precio: 200,
        categoria: "vestidos",
        imagen: "./img/v11.jpg",
        descripcion: "Vestido nuevo pero viene reducido.",
        tallas: "L"
    },
    {
        id: 15,
        nombre: "Vestido Vino",
        precio: 300,
        categoria: "vestidos",
        imagen: "./img/v12.jpg",
        descripcion: "Vestido vino para eventos o fiestas.",
        tallas: "L"
    }
];

const contenedor = document.getElementById('catalogo');
const buscador = document.getElementById('buscador');
const filtroCat = document.getElementById('filtro-cat');
const modal = document.getElementById('modal');

// Mostrar prendas en pantalla
function mostrarPrendas(lista) {
    contenedor.innerHTML = '';
    lista.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-prenda';
        tarjeta.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="info-prenda">
                <div class="nombre">${item.nombre}</div>
                <div class="precio">$${item.precio} MXN</div>
                <div class="categoria">${item.categoria}</div>
            </div>
        `;

        // Abrir detalles al hacer clic
        tarjeta.addEventListener('click', () => abrirModal(item));
        contenedor.appendChild(tarjeta);
    });
}

// Filtrar y buscar
function aplicarFiltros() {
    const texto = buscador.value.toLowerCase();
    const cat = filtroCat.value;

    const filtrado = prendas.filter(p => {
        const coincideTexto = p.nombre.toLowerCase().includes(texto);
        const coincideCat = cat === 'todas' || p.categoria === cat;
        return coincideTexto && coincideCat;
    });

    mostrarPrendas(filtrado);
}

// Ventana de detalles
function abrirModal(item) {
    const modalImg = document.getElementById('modal-img');

    // Asignar imagen y textos
    modalImg.src = item.imagen;
    document.getElementById('modal-nombre').textContent = item.nombre;
    document.getElementById('modal-precio').textContent = `$${item.precio} MXN`;
    document.getElementById('modal-descripcion').textContent = item.descripcion;
    document.getElementById('modal-tallas').textContent = item.tallas;

    // ✅ Aplicar estilo ESPECIAL solo al apatado de vestidos
    if(item.id === 2){
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.zIndex = '10';
        modalImg.style.marginLeft = '20%';
    }else if (item.id === 3) {
        modalImg.style.width = '60%';
        modalImg.style.height = '400px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }else if (item.id === 4) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 5) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 7) {
        modalImg.style.width = '55%';
        modalImg.style.height = '400px';
        modalImg.style.marginLeft = '25%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 8) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 10) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 11) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 12) {
        modalImg.style.width = '80%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '10%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 13) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 14) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else if (item.id === 15) {
        modalImg.style.width = '60%';
        modalImg.style.height = '330px';
        modalImg.style.marginLeft = '20%';
        modalImg.style.zIndex = '10';
    }
    else {
        // ✅ Restaurar estilos NORMALES para los demás productos
        modalImg.style.width = '';
        modalImg.style.height = '';
        modalImg.style.marginLeft = '';
        modalImg.style.zIndex = '';
    }

    modal.style.display = 'flex';
}

// Cerrar ventana
document.querySelector('.cerrar').addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Eventos
buscador.addEventListener('input', aplicarFiltros);
filtroCat.addEventListener('change', aplicarFiltros);

// Iniciar catálogo
mostrarPrendas(prendas);