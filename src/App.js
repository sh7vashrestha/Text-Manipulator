import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Manipulator - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fafafa";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Manipulator - Light";
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="Text Conversion"
          aboutText="About Me"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
