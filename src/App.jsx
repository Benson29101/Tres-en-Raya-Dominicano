import { useState, useEffect } from 'react';
import './App.css';

// Combinaciones ganadoras
const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
  [0, 4, 8], [2, 4, 6],            // Diagonales
];

const PLAYERS = {
  X: 'Taíno',
  O: 'Caribe',
};

// Función ganadora
function calculateWinner(squares) {
  for (const [a, b, c] of WIN_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Casillas
function Square({ value, onSquareClick }) {
  return (
    <button
      className={`square ${value ? `square-${value.toLowerCase()}` : ''}`}
      onClick={onSquareClick}
      disabled={Boolean(value)} // Incapaz jugar casilla jugada
    >
      {value}
    </button>
  );
}

// Aplicación
function App() {
  // Cargar partida
  const [squares, setSquares] = useState(() => {
    const saved = localStorage.getItem('ttt-squares');
    return saved ? JSON.parse(saved) : Array(9).fill(null);
  });

  // Turno
  const [currentPlayer, setCurrentPlayer] = useState(() => {
    const saved = localStorage.getItem('ttt-currentPlayer');
    return saved ? JSON.parse(saved) : 'X';
  });

  // Guardar jugada y turno
  useEffect(() => {
    localStorage.setItem('ttt-squares', JSON.stringify(squares));
    localStorage.setItem('ttt-currentPlayer', JSON.stringify(currentPlayer));
  }, [squares, currentPlayer]);

  // Partida
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  const gameOver = Boolean(winner) || isDraw;
  
  let message;
  if (winner) message = `¡Epa! Ganó ${PLAYERS[winner]}`;
  else if (isDraw) message = 'Empate, mi hermano';
  else message = `Turno de ${PLAYERS[currentPlayer]}`;

  // Acciones
  function handleSquareClick(index) {
    if (squares[index] || gameOver) return;

    const nextSquares = squares.slice();
    nextSquares[index] = currentPlayer;

    setSquares(nextSquares);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  // Pantalla
  return (
    <div className="app">
      <header>
        <h1>Tres en Raya Dominicano</h1>
        <p className="subtitle">Taíno vs Caribe</p>
      </header>

      <div className={`status ${gameOver ? 'game-over' : ''}`}>
        {message}
      </div>

      <div className={`board ${gameOver ? 'game-over' : ''}`}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleSquareClick(index)}
          />
        ))}
      </div>

      <button className="btn-reset" onClick={handleReset}>
        Reiniciar partida
      </button>
    </div>
  );
}

export default App;
