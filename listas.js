// Una variable que contenga la lista de la compra (mínimo 5 elementos)

let compras = ["Azucar", "Fideos", "Arroz", "Bananas", "Papas"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"

compras.push("Aceie de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compras.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculasFav = [{
    titulo: "Star Trek First Contact",
    director: "Jonathan Frakes",
    fecha: 1996
},
{
    titulo: "Interstellar",
    director: "Nolan",
    fecha: 2018
},
{
    titulo: "Alien",
    director: "Ridley Scott",
    fecha: 1992
}
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const nuevaLista = peliculasFav.filter(obj =>{
    if (obj.fecha > 2010){
        return true;
    } else {
        return false;
    }
});

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculasFav.map(valor =>{
    return valor.director;
}) 

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const peliculas = peliculasFav.map(valor =>{
    return valor.titulo;
})

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let directoresPeliculas = directores.concat(peliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let directoresTitulos = [...directores, ...peliculas];

console.log(directoresTitulos);