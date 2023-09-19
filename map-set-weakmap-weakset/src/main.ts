
// EcmaScript 6
export const months: Map<string, number> = new Map<string, number>();

/**
 * el @method set() permite agregar un nuevo juego "clave-valor". 
 * @param {string | number} key
 * @param {string | number | JSON | Object | Array} value
 */
months.set('Enero', 1);
months.set('Febrero', 2);
months.set('Marzo', 3);

/**
 * el @method get() recuperar el valor un juego "clave-valor" por medio de su clave. 
 * @param {string} key
 */
const index = months.get('Marzo');
console.log(index);

/**
 * @prop {number} size - retorna el número de juegos de "clave-valor" 
 */
months.size

/**
 * el @method keys() - retorna una collección de todas las claves del objecto MAP.
 */
for (const key of months.keys()) {
    console.log(key);
}

/**
 * el @method values() - retorna una collección de todas los valores del objecto MAP.
 */
for (const key of months.values()) {
    console.log(key);
}






