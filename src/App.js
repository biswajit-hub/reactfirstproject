// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("success");
  const [darkMode, setDarkMode] = useState({});
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [btnValue, setBtnValue] = useState("Enable Dark Mode");
  // const togleMode = ()=>{
  // }
  const enableDarkMode = () => {
    if (mode === "success") {
      setMode("dark");
    } else {
      setMode("success");
    }
    if (Object.keys(darkMode).length === 0) {
      // console.log(Object.keys(darkMode).length);
      showAlert("Dark mode has been enabled", "success");
      setDarkMode({
        color: "cyan",
        backgroundColor: "#212529",
        border: "1px solid cyan",
        borderRadius: "3px",
      });
      setBtnValue("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amezing.."
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1000);

    } else {
      setDarkMode({});
      setBtnValue("Enable Dark Mode");
      showAlert("Light mode has been enabled", "success");

      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        togleMode={enableDarkMode}
        darkMode={darkMode}
        btnValue={btnValue}
      />
      <Alert title={alert} />
      <Switch>
          <Route path="/about">
            <About darkMode={darkMode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} darkMode={darkMode} mode={mode} />
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
