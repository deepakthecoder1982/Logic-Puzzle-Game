import React from 'react';

function Answer() {
  return (
    <div className="border-2 rounded-md text-left py-2 px-1">
        <h1 className="text-center text-3xl py-1">Answer 🔥😉</h1>
      <div className="content">
        <div className="overflow-x-auto border-4 rounded-lg">
          <table className="table-auto border  rounded-lg w-full text-center text-gray-700">
            <thead>
              <tr>
                <th colSpan="3" className="text-center bg-cyan-200 p-2">
                  Correct Answers
                </th>
              </tr>
              <tr className="border  bg-slate-300">
                <th className="border border-gray-400 px-2 py-1">teacher</th>
                <th className="border border-gray-400 px-2 py-1">course</th>
                <th className="border border-gray-400 px-2 py-1">class_time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-1">Aditya</td>
                <td className="border border-gray-400 p-1">Probablity</td>
                <td className="border border-gray-400 p-1">8:00</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-1">Basil</td>
                <td className="border border-gray-500 p-1">Geometry</td>
                <td className="border border-gray-500 p-1">11:00</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-1">Cecilia</td>
                <td className="border border-gray-500 p-1">Calculus</td>
                <td className="border border-gray-500 p-1">9:00</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-1">Dimitri</td>
                <td className="border border-gray-500 p-1">Algebra</td>
                <td className="border border-gray-500 p-1">10:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Answer;
