import React, { useState} from "react";
import copy from "copy-to-clipboard";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Capitalized all text", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowered all of the text", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("cleared all text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyText = () => {
   copy(text);
   props.showAlert(`Copyed the text ${text}`, "success");
}
  return (
    <>
      <div style={{ color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3" 
            onChange={(event) => handleOnChange(event)}>
          <label htmlFor="Text" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'grey':'white'}}
            onChange={(event) => handleOnChange(event)}
            id="exampleFormControlTextarea1"
            rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 " onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary ml-3 my-3" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className="container mb-3" style={{ color: props.mode==='light'?'black':'white'}}>
        <h1 className="mt-5">Text Summary</h1>
        <p>Number of words:{text.split(" ").length}</p>
        <p>Number of character:{text.length}</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Data to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
