// Usamos un array para guardar la lista de amigos.
let amigos = [];

function agregarAmigo() {
    // Obtenemos el nombre del input y lo guardamos en una variable.
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim(); // .trim() elimina espacios en blanco al inicio y al final.

    // 1. Verificamos que el campo no esté vacío.
    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return; // Detenemos la función si no hay nombre.
    }

    // 2. Verificamos que el nombre no esté ya en la lista.
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido añadido. Intenta con otro.');
        nombreInput.value = ''; // Limpiamos el campo
        return;
    }

    // 3. Añadimos el amigo al array.
    amigos.push(nombre);

    // 4. Actualizamos la lista visible en la pantalla.
    actualizarListaAmigos();

    // 5. Limpiamos el campo de texto para el siguiente nombre.
    nombreInput.value = '';
    nombreInput.focus(); // Ponemos el cursor de nuevo en el input.
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiamos la lista para no duplicar nombres.

    // Creamos un elemento <li> por cada amigo en el array.
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    // 1. Verificamos que haya suficientes personas para jugar.
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 personas para poder sortear.');
        return;
    }

    // 2. Barajamos el array de amigos (Algoritmo de Fisher-Yates).
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambiamos elementos
    }

    // 3. Mostramos los resultados en la pantalla.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiamos resultados anteriores.

    for (let i = 0; i < amigos.length; i++) {
        let regalador = amigos[i];
        // El operador '%' asegura que el último de la lista le regale al primero.
        let receptor = amigos[(i + 1) % amigos.length]; 
        
        resultado.innerHTML += `${regalador} → ${receptor}<br>`;
    }
}
