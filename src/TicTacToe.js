// src/TicTacToe.js
import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
