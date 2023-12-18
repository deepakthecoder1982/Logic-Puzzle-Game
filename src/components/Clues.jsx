import React, { useState } from "react";

function Clues() {
  const [done, setDone] = useState([]); // Use a Set to store clicked clues
  const clues = [
    "One of Basil's class and the 9:00 class is calculus and the other is geometry.",
    "The four classes are Cecilia’s, the 10:00 class, geometry, and probability.",
    "Aditya’s class is one hour before calculus.",
    "Calculus is two hours before geometry."
  ];

  const handleDone = (clue) => {
    let newDone = [...done] 
    if(!done.includes(clue)) {
        newDone.push(clue);
    }else{
        newDone = done.filter(item=>item !== clue);
    }
    setDone(newDone);
  };

  return (
    <div className="border-2 rounded-md text-left py-2 px-1">
      <h1 className="text-center text-3xl py-1">Clues 🧠</h1>
      <span className="text-sm p-1 text-green-600 "> ⭐Pro-Tip: Click on clues to finish or unfinish😎.</span>
      <div className="content">
        <ol className="text-gray-700 text-lg px-2">
          {clues.map((clue, index) => (
            <li
              onClick={() => handleDone(clue)}
              key={index}
              className={done.includes(clue) ? 'line-through text-gray-300 cursor-pointer' : "cursor-pointer"}
            >
              <span className="text-gray-700">{index + 1}.</span> {clue}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Clues;
