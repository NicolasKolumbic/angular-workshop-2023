// nombre de la base de datos
const dataBaseName = "workshop-angular-2023";
// versionado
const version = 1;
// abrimos o nos conectamos a la base de datos
let openRequest = indexedDB.open(dataBaseName, version);
let database;

// UPGRADENEEDE: Este evento solo se ejecutará solo sí la base de datos no existe.
// Es decir, la primera vez.
openRequest.onupgradeneeded = function () {
    // base de datos en memoria
    database = openRequest.result;
    // Un OBJECT STORE equivale a lo que en base de datos relacional denominamos TABLA.
    // En la siguiente línea consultamos si la base de datos contiene el OBJECT STORE llamado "books".
    if (!database.objectStoreNames.contains('books')) {
        // Creamos el OBJECT STORE "books" y determinamos la propiedad "id" como PRIMARY KEY por medio
        // de un objeto que permite definir ciertas configuraciones para el OBJECT STORE.
        database.createObjectStore('books', { keyPath: 'id' });
    }
};

openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
    database = openRequest.result;
    let transaction = database.transaction("books", "readwrite");

    let books = transaction.objectStore("books");

    let book = {
        id: 'js',
        price: 10,
        created: new Date()
    };

    let request = books.add(book);

    request.onsuccess = function () {
        console.log("Book added to the store", request.result);
    };

    request.onerror = function () {
        console.log("Error", request.error);
    };
};