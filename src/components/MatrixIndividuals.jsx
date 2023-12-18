import React from "react";

function MatrixIndividuals(props) {
  const { rows, columns, NumberOfCategories } = props;
  console.log(rows, columns);
  // Function to generate an empty 2D matrix
  const generateEmptyMatrix = (rows, columns) => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(Array(columns).fill(""));
    }
    return matrix;
  };

  let emptyMatrix = generateEmptyMatrix(rows, columns);
  const NumeberOfGrid = Array.from(
    { length: NumberOfCategories },
    (_, index) => index
  );
  return (
    <div className="absoloute top-(-1/2) rounded-md text-left py-2 px-1 flex flex-wrap w-1/2">
      {NumeberOfGrid.map((grid) => {
        return (
          <div className="flex">
            {emptyMatrix.map((item) => {
              return (
                <div className="grid gap-0" key={item}>
                  {item.map((i) => {
                    return (
                      <div className="w-10 h-10 border border-gray-300 text-center text-2xl">
                        {" "}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default MatrixIndividuals;
