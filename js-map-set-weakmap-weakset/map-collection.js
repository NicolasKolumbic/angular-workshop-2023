/**
 * MAP es una ESTRUCTURA DE DATOS, de manera eficiente comparandolo con un OBJETO LITERAL, 
*/

const mapPlayer = new Map();
mapPlayer.set('name','Lionel');
mapPlayer.set('lastName','Messi');
mapPlayer.set('age',36);
mapPlayer.set('club','Inter Miami');

// Objecto Literal
const player = {
    name: 'Lionel',
    lastName: 'Messi',
    age: 36,
    club: 'Inter Miami'
}

// recuperar el valor de un objeto
// Objecto Literal
player['name'] // o también player.name
// Map
mapPlayer.get('name')

/**
 * Aunque la diferencia puede ser mínima en la mayoría de los casos, los Map tienden a
 * ofrecer tiempos de búsqueda más consistentes, ya que no tienen propiedades heredadas
 * como los objetos literales, lo que podría causar colisiones en las claves.
 */

// Opciones para iterarlos

// Objecto Literales
for (const key in player) {
    if (Object.hasOwnProperty.call(object, key)) {
        const value = object[key];
        console.log(value); 
    }
}

// Map

/**
 * Los objetos Map proporcionan métodos específicos para iterar sobre sus elementos,
 * como forEach y entries. Esto hace que la iteración a través de un Map sea más clara y
 * eficiente en comparación con los objetos literales, donde debes extraer las claves 
 * manualmente y luego acceder a los valores.
 */

// Opción 1
mapPlayer.forEach((key) => {
    const value = mapPlayer.get(key);
    console.log(value);
});

// Opción 2
const iterable = mapPlayer.entries();
let iterator = iterable.next();
while(!iterator.done) {
    iterator = iterable.next();
    console.log(iterator.value)
}

/*----------------------------------------------------------*/

// Eliminar un juego "clave-valor" de un OBJETO LITERAL o MAP.
/**
 * Con un Map, puedes eliminar elementos de manera más sencilla utilizando 
 * el método delete, mientras que en un objeto literal, debes utilizar el operador delete.
 */

// Eliminar la propiedad "age" de un objeto literal
delete player.age;

// Eliminar la propiedad "age" de un MAP
mapPlayer.delete('age');

/*------------------------------------------------*/

/**
 * Los OBJETOS LITERALES en JavaScript solo permiten claves que sean cadenas de texto o símbolos.
 * En cambio, un Map permite utilizar cualquier tipo de dato como clave, incluyendo objetos,
 * funciones y otros tipos primitivos. Esto puede ser útil cuando necesitas realizar búsquedas o
 * asociaciones más complejas.
 */

const people = new Map();
        
people.set(
    {name: 'Lionel', lastName: 'Messi'}, // clave
    {age: 36, club: 'Inter Miami', tShirtNumber: 10} // valor
);

people.set(
    {name: 'Angel', lastName: 'Di María'}, // clave
    {age: 35, club: 'Benfica', tShirtNumber: 11} // valor
);

/**
 * Los Map mantienen el orden de inserción de sus elementos. Esto significa que los elementos
 * se almacenan y recuperan en el orden en que se insertaron. Los objetos literales no garantizan
 * ningún orden específico en las claves.
 */

// Iteración
const iterablePeople = people.entries();
let iteratorPeople = iterable.next();
while(!iteratorPeople.done) {
    iteratorPeople = iterablePeople.next();
    console.log(iteratorPeople.value)
}