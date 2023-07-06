import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] =useState({
  //   color: props.mode==='dark'?'white':'black',
  //   backgroundColor: props.mode==='dark'?'black':'white'
  // });
  let myStyle = {
    color: props.mode === "dark" ? "#fafafa" : "#212529",
    backgroundColor: props.mode === "dark" ? "#212529" : "#fafafa",
    border: '1px solid',
    borderColor : props.mode === "dark" ? "#fafafa" : "#212529"
  };
  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode === "dark" ? "#fafafa" : "#212529"}}>About Me</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}>
              UI-UX Designer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" >
              <strong>
                <code>Canva, Figma, Photoshop and Illustrator</code>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}>
              Web-Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>
                <code>HTML, CSS, SASS, JS, React, and NodeJs</code>
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}>
              ML Engineer
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" >
              <strong>
                <code>Numpy, pandas, Sklearn and tensorflow</code>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
