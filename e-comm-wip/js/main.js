// CONSTRUCTOR PRODUCTOS

class Producto {
    constructor(id, titulo, imagen, categoriaNombre, categoriaId, precio) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.categoria = new Categoria(categoriaNombre, categoriaId);
        this.precio = precio;
    }
}

class Categoria {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}

// CREA PRODUCTOS

// Abrigos
const abrigo1 = new Producto("abrigo-01", "Abrigo 01", "./img/abrigos/01.jpg", "Abrigos", "abrigos", 1000 );
const abrigo2 = new Producto("abrigo-02", "Abrigo 02", "./img/abrigos/02.jpg", "Abrigos", "abrigos", 1000 );
const abrigo3 = new Producto("abrigo-03", "Abrigo 03", "./img/abrigos/03.jpg", "Abrigos", "abrigos", 1000 );
const abrigo4 = new Producto("abrigo-04", "Abrigo 04", "./img/abrigos/04.jpg", "Abrigos", "abrigos", 1000 );
const abrigo5 = new Producto("abrigo-05", "Abrigo 05", "./img/abrigos/05.jpg", "Abrigos", "abrigos", 1000 );
// Camisetas
const camiseta1 = new Producto("camiseta-01", "Camiseta 01", "./img/camisetas/01.jpg", "Camisetas", "camisetas", 1000 );
const camiseta2 = new Producto("camiseta-02", "Camiseta 02", "./img/camisetas/02.jpg", "Camisetas", "camisetas", 1000 );
const camiseta3 = new Producto("camiseta-03", "Camiseta 03", "./img/camisetas/03.jpg", "Camisetas", "camisetas", 1000 );
const camiseta4 = new Producto("camiseta-04", "Camiseta 04", "./img/camisetas/04.jpg", "Camisetas", "camisetas", 1000 );
const camiseta5 = new Producto("camiseta-05", "Camiseta 05", "./img/camisetas/05.jpg", "Camisetas", "camisetas", 1000 );
const camiseta6 = new Producto("camiseta-06", "Camiseta 06", "./img/camisetas/06.jpg", "Camisetas", "camisetas", 1000 );
const camiseta7 = new Producto("camiseta-07", "Camiseta 07", "./img/camisetas/07.jpg", "Camisetas", "camisetas", 1000 );
const camiseta8 = new Producto("camiseta-08", "Camiseta 08", "./img/camisetas/08.jpg", "Camisetas", "camisetas", 1000 );
// Pantalones
const pantalon1 = new Producto("pantalon-01", "Pantalón 01", "./img/pantalones/01.jpg", "Pantalones", "pantalones", 1000 );
const pantalon2 = new Producto("pantalon-02", "Pantalón 02", "./img/pantalones/02.jpg", "Pantalones", "pantalones", 1000 );
const pantalon3 = new Producto("pantalon-03", "Pantalón 03", "./img/pantalones/03.jpg", "Pantalones", "pantalones", 1000 );
const pantalon4 = new Producto("pantalon-04", "Pantalón 04", "./img/pantalones/04.jpg", "Pantalones", "pantalones", 1000 );
const pantalon5 = new Producto("pantalon-05", "Pantalón 05", "./img/pantalones/05.jpg", "Pantalones", "pantalones", 1000 );

//AGREGA PRODUCTOS A LA MATRIZ

const productos = [
// Abrigos
abrigo1,abrigo2,abrigo3,abrigo4,abrigo5,
// Camisetas
camiseta1,camiseta2,camiseta3,camiseta4,camiseta5,camiseta6,camiseta7,camiseta8,
// Pantalones
pantalon1,pantalon2,pantalon3,pantalon4,pantalon5
];
