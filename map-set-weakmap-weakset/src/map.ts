
// EcmaScript 6
export function map() {
    
    const months: Map<string, number> = new Map<string, number>();

    /**
     * el @method set() permite agregar un nuevo juego "clave-valor". 
     * @param {string | number | object} key
     * @param {string | number | JSON | Object | Array} value
     */
    months.set('Enero', 1);
    months.set('Febrero', 2);
    months.set('Marzo', 3);
    months.set('Abril', 4);

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

    /**
     * @method delete()
     * @param {string} key - eliminar un juego "campo-valor" del objeto MAP.
     */
    months.delete('Enero');


    /**
     * @method clear() - eliminar todo los juegos "campo-valor" del objeto MAP.
     */
    months.clear();

    /**
     * @method entries() - retorna un object de tipo IterableIterato<[string, number]>
     */
    const monthIterable: IterableIterator<[string, number]> = months.entries();

    let monthIterator: IteratorResult<[string, number]> = monthIterable.next();

    while (!monthIterator.done) {
        console.log(monthIterator.value)
        monthIterator = monthIterable.next();
    }

    /**
     * @method has() - retorna verdadero o falso dependiendo si el objecto MAP contiene la clave.
     */
    months.has('Marzo');

    /**
     * Es posible crear una instancia de MAP a partir de un OBJETO LITERAL.
     */
    const lastMonths = {
        'Octuble': 10,
        'Noviembre': 11,
        'Diciembre': 12
    };

    const newMonths = new Map(Object.entries(lastMonths));

}





 