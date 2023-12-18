import React from "react";
import MatrixPuzzle from "./MatrixPuzzle";
import QuestionBoard from "./QuestionBoard";

function GameBoard() {
  
  return (
    <>
      <div className="border-4 border-gray-500 w-11/12 text-center m-auto my-5 rounded-xl ">
        <h1 className="text-3xl font-bold text-cyan-700">Puzzle Game</h1>
      </div>
      <div className="border-4 border-gray-500 w-11/12 m-auto my-5 rounded-xl font-mono flex justify-around">
        <div id="gameboard" className="max-w-md w-2/5">
          <h1 className="text-xl font-bold text-indigo-600">GameBoard</h1>
          <div className="Puzzle">
            <MatrixPuzzle />
          </div>
        </div>
        <div
          id="line"
          className="w-1 rounded-xl bg-gray-500 border-2 border-gray-500 min-h-fit"
        ></div>
        <div id="questionBoard" className="max-w-md w-2/5">
          <h1 className="text-xl font-bold text-indigo-600">
            <QuestionBoard/>
          </h1>
        </div>
      </div>
    </>
  );
}

export default GameBoard;
