// Definimos el estado inicial del juego
let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';  // El primer jugador siempre es 'X'
let juegoActivo = true;
let estadoJuego = document.getElementById('estadoJuego');

// Combinaciones ganadoras
const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columnas
    [0, 4, 8], [2, 4, 6]               // Diagonales
];

// Función para manejar los movimientos
function hacerMovimiento(indice) {
    // Verificamos si la celda está vacía y si el juego está activo
    if (tablero[indice] === '' && juegoActivo) {
        tablero[indice] = jugadorActual;  // Actualizamos el tablero con el jugador actual
        document.getElementsByClassName('celda')[indice].innerText = jugadorActual;  // Mostramos la jugada en la celda
        verificarGanador();  // Verificamos si hay un ganador
        cambiarTurno();  // Cambiamos de turno
    }
}

// Función para cambiar de turno
function cambiarTurno() {
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';  // Cambiamos entre 'X' y 'O'
    if (juegoActivo) {
        estadoJuego.innerText = `Turno del jugador ${jugadorActual}`;
    }
}

// Función para verificar si hay un ganador o empate
function verificarGanador() {
    // Verificamos si alguna de las combinaciones ganadoras se ha completado
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            juegoActivo = false;
            estadoJuego.innerText = `¡El jugador ${jugadorActual} ha ganado!`;
            return;
        }
    }

    // Verificamos si hay un empate (el tablero está lleno y no hay ganador)
    if (!tablero.includes('')) {
        juegoActivo = false;
        estadoJuego.innerText = '¡Empate!';
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];  // Limpiamos el tablero
    jugadorActual = 'X';  // Reiniciamos el primer jugador
    juegoActivo = true;  // Reactivamos el juego
    estadoJuego.innerText = `Turno del jugador ${jugadorActual}`;  // Mostramos el turno inicial
    let celdas = document.getElementsByClassName('celda');
    // Limpiamos las celdas visualmente
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerText = '';
    }
}

