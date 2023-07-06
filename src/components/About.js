import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] =useState({
    color: '#f0f0f0',
    backgroundColor: '#333333'
  });
  const [theme, settheme] = useState('Light Mode')

  const toggleStyle = () =>{
    if(myStyle.color === '#f0f0f0'){
      setmyStyle({
        color: '#333333',
        backgroundColor: '#f0f0f0'
        
      })
      settheme('Dark Mode')
      
    }
    else {
        setmyStyle({
          color: '#f0f0f0',
          backgroundColor: '#333333',
          border: '1px solid white',
        })
        settheme('Light Mode')
        }
    }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Me</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={myStyle}>
              UI-UX Designer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong><code>Canva, Figma, Photoshop and Illustrator</code></strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" style={myStyle}>
              Web-Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong><code>HTML, CSS, SASS, JS, React, and NodeJs</code></strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}> 
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={myStyle}>
              ML Engineer
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong><code>Numpy, pandas, Sklearn and tensorflow</code></strong>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggleStyle} className="btn btn-primary">
        {theme}
      </button>
    </div>
  );
}
