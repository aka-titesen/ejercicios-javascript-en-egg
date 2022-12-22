/*
CONSIGNA:
14. Crear  un  objeto  libro  que  contenga  las  siguientes  propiedades:  ISBN,  Título,  Autor, Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.  
*/

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    presentar() {
        console.log(`Isbn: ${this.isbn} | Título: ${this.titulo} | Autor: ${this.autor} | Número de páginas: ${this.numPaginas}`)
    }
}

const crearLibro = () => {
    try {
        let isbn = "";
        let titulo = "";
        let autor = "";
        let numPaginas = 0;
        isbn = prompt("Ingrese el isbn");
        titulo = prompt("Ingrese el titulo");
        autor = prompt("Ingrese el autor");
        numPaginas = prompt("Ingrese el número páginas");
        if (typeof isbn !== "string") {
            throw new TypeError("El valor isbn no es correcto");
        }
        if (typeof titulo !== "string") {
            throw new TypeError("El valor titulo no es correcto")
        }
        if (typeof autor !== "string") {
            throw new TypeError("El valor autor no es correcto");
        }
        numPaginas = parseInt(numPaginas);
        if (isNaN(numPaginas)) {
            throw new TypeError("El número de páginas no son números");
        }
        let libro = new Libro(isbn, titulo, autor, numPaginas);
        return libro;
    } catch (err) {
        if (err instanceof TypeError) {
            console.warn(err.message);
        } else {
            console.error("Ocurrio un error genérico");
        }
    } finally {
        console.log("Operación finalizada");
    }
}

let nuevoLibro = crearLibro();
nuevoLibro.presentar();

