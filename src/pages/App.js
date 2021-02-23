import { useEffect } from "react";
import { Router, hashHistory } from "react-router-dom";
import { Navbar } from "../component";
import Routes from "../config/routes";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
