import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Extra from "./pages/Extra";
import Quizine from "./pages/Quizine";
import Cineats from "./pages/Cineats";
import Phoemale from "./pages/Phoemale";
import Portfolio from "./pages/Portfolio";
import Slalom from "./pages/Slalom";
import Glansis from "./pages/Glansis";

function App() {
  let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/extra":
      component = <Extra />;
      break;
    case "/quizine":
      component = <Quizine />;
      break;
    case "/glansis":
      component = <Glansis />;
      break;
    case "/slalom":
      component = <Slalom />;
      break;
    case "/phoemale":
      component = <Phoemale />;
      break;
    case "/portfolio":
      component = <Portfolio />;
      break;
    case "/cineats":
      component = <Cineats />;
      break;
  }
  return <>{component}</>;
}

export default App;
