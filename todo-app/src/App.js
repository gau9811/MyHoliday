import { useEffect } from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    if (window.location.pathname == "/" && localStorage.getItem("data")) {
      window.location.href = "/Home";
    }
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
