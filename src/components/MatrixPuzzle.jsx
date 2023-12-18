import React from "react";
import "../styles/MatrixPuzzle.css";
import MatrixIndividuals from "./MatrixIndividuals";

const MatrixPuzzle = () => {
  // const matrixInfo = [
  //   {
  //     row: 4,
  //     col: 4,
  //     clues: [
  //       "One of Basil's class and the 9:00 class is calculus and the other is geometry",
  //       "The four classes are Cecilia’s, the 10:00 class, geometry, and probability",
  //       "Aditya’s class is one hour before calculus",
  //       "Calculus is two hours before geometry",
  //     ],
  //     question:
  //       "Aditya, Basil, Cecilia, and Dimitri each teach one class at 8:00, 9:00, 10:00, or 11:00. At those times, they each teach axlebra, calculus, geometry, or probability. Everybody teaches at a different time, and everybody teaches a different class. For each teacher, we’d like to know *when* they teach and *which course*they teach. Given a set of clues, how can we figure it out?",
  //     categories: ["Teacher", "Class Time", "Course"],
  //     SolutionGrid: [
  //       [
  //         [1, 0, 0, 0],
  //         [0, 0, 1, 0],
  //         [0, 0, 0, 1],
  //         [0, 1, 0, 0],
  //       ],
  //       [
  //         [0, 0, 0, 1],
  //         [0, 1, 0, 0],
  //         [1, 0, 0, 0],
  //         [0, 0, 1, 0],
  //       ],
  //       [
  //         [0, 0, 0, 1],
  //         [0, 0, 1, 0],
  //         [0, 1, 0, 0],
  //         [1, 0, 0, 0],
  //       ],
  //     ],
  //   },
  // ];
  return (
    <div id="matrix-puzzle" className="">
      <div id="coloumn" className="font-bold rounded border-gray-500">
        <div id="heading" className="flex justify-between text-white text-md ">
          <div className="w-1/2 p-0.5 border-2 rounded-md shadow-md shadow-gray-400">
            <h1 className="bg-red-500 p-0.5 w-full rounded-md text-center">Authors</h1>
            <div className="flex ">
              <div id="category-1" className="flex justify-around ">
                <div className="categories text-black rotate-180 ">
                  something{" "}
                </div>
                <div className="categories text-black rotate-180 ">
                  something
                </div>
                <div className="categories text-black rotate-180">
                  something
                </div>
              
             
              </div>
            </div>
          </div>
          <div className="w-1/2 p-0.5  border-2 rounded-md shadow-md shadow-gray-400 ">
            <h1 className="p-0.5 bg-indigo-500 rounded-md text-center">Subjects</h1>
            <div className="flex ">
              <div id="category-2" className="flex justify-around w-1/2">
                <div className="categories outline-2 text-white">something</div>
              </div>
            </div>
          </div>
        </div>
    
       </div> 
       <div
        id="rows"
        className="font-bold rounded h-100 my-1 relative right-12 rotate-180"
      >
        <div
          id="heading"
          className="flex border justify-around text-white text-md rotate-180"
        >
          <div className="">
            <h2 className="bg-red-500  px-1.5 py-4">Authors</h2>
          </div>
          <p className="bg-indigo-500 w-1/2 px-1.5 py-4">Subjects</p>
        </div>
        <div className="matrixes">
          <div className="matrixIndividual min-h-full flex flex-wrap border-2 w-full">
           <MatrixIndividuals columns={4} rows={4} NumberOfCategories={3}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixPuzzle;
