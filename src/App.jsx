import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Landing from "./Components/Landing.jsx";
import About from "./Components/About.jsx";
import Technologies from "./Components/Technologies.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container md:mx-auto">
      <BrowserRouter>
        <Navbar />
        <Landing />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
