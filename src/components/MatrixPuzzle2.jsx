import React from 'react'
import "../styles/MatrixPuzzle2.css"
function MatrixPuzzle2() {
  return (
    <div className='border-none border-gray-400 w-7/12 font-mono' id='mainBoard'>
        {/* I am there */}
        <div className="row">
            <div className="headers">
                <div className="teacher">
                    <div className="options" >
                            <li>Aditya</li>
                            <li>Aditya</li>
                            <li>Aditya</li>
                            <li>Aditya</li>
                    </div>
                    <p className='teacher-title'>Teacher</p>
                </div>
                {/* <div className="course">
                    <p className='course-title'>Course</p>
                    <div className="options" >
                            <li>Aditya</li>
                            <li>Aditya</li>
                            <li>Aditya</li>
                            <li>Aditya</li>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default MatrixPuzzle2