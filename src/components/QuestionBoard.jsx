import React, { useState } from "react";
import Clues from "./Clues";
import Answer from "./Answer";
import Story from "./Story";

function QuestionBoard() {
  const [renderTab, setRenderTab] = useState("Clues");
  const tabs = ["Clues", "Story", "Answer"];

  const handleTabChange = (tabName) => {
    setRenderTab(tabName);
  };

  return (
    <div>
      <div className="border-2 shadow-md shadow-black flex justify-between rounded-md p-1 my-4 text-base border-box">
        {tabs.map((tabName) => (
          <div
            key={tabName}
            className={`text-black w-1/3 text-center text-xl cursor-pointer ${
              renderTab === tabName ? "bg-indigo-400 text-white rounded-md transition-opacity duration-500 ease-in-out shadow-sm shadow-indigo-400" : ""
            }`}
            onClick={() => handleTabChange(tabName)} 
          >
            {tabName}
          </div>
        ))}
      </div>

      <div className="dataToShow transition-opacity duration-300">
        {renderTab === "Clues" ? <Clues /> : renderTab === "Story" ? <Story /> : <Answer />}
      </div>
    </div>
  );
}

export default QuestionBoard;
