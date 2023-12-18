import React, { useState } from 'react'

function Story() {
    const [done, setDone] = useState([]); // Use a Set to store clicked story
    const Story = [
      "Aditya, Basil, Cecilia, and Dimitri each teach one class at 8:00, 9:00, 10:00, or 11:00. At those times, they each teach algebra, calculus, geometry, or probability. Everybody teaches at a different time, and everybody teaches a different class. For each teacher, we’d like to know *when* they teach and *which course*they teach. Given a set of clues, how can we figure it out?"
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
    <h1 className="text-center text-3xl py-1"> Story 👀</h1>
    <div className="content">
      <ol className="text-gray-500 text-lg px-2">
        {Story.map((clue, index) => (
          <li
            onClick={() => handleDone(clue)}
            key={index}
            className={done.includes(clue) ? 'line-through text-gray-300 cursor-pointer' : "cursor-pointer"}
          > {clue}</li>
        ))}
      </ol>
    </div>
  </div>
  )
}

export default Story