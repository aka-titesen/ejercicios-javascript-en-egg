/*
CONSIGNA:
19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.
*/

const sortearNumerosInclusivo = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const rellenarArray = (cant, min, max) => {
    let arr = new Array();
    for (let i = 0; i < cant; i++) {
        arr.push(sortearNumerosInclusivo(min, max));
    }
    return arr;
}
const main = () => {
    let arrA = new Array(); //Tendrá 50 números
    let arrB = new Array(); //Tendrá 20 números

    arrA = rellenarArray(50, 10, 99); //Rellenar
    arrB = rellenarArray(20, 10, 99); //Rellenar

    arrA.sort(); //Ordenar ascendente
    arrB.sort(); //Ordenar ascendente
    console.log(`Array A de 50 elementos ordenados`);
    console.log(arrA);
    console.log(`Array B de 20 elementos ordenados`);
    console.log(arrB);

    for (let i = 0; i < 10; i++) { //Agregar los primeros 10 elementos del array A al array B
        arrB.push(arrA[i]);
    }

    arrA.splice(39, 10); //Elimina los 10 últimos elementos

    for (let i = 0; i < 10; i++){
        arrA.push(0.5);
    }

    console.log(`Array A de 50 elementos ordenados y con los últimos 10 valores con 0.5`);
    console.log(arrA);
    console.log(`Array B de 20 elementos ordenados y con los primeros 10 valores copiados desde el arrayA`);
    console.log(arrB);

}

main();