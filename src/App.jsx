// src/App.jsx

import "./App.css";
import Navigation from "./components/navigations/Nav.jsx";
import Contectus from "./components/contectus/Contectus.jsx";
import Contactform from "./components/contactform/contactform.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Contectus />
      <Contactform/>
    </div>
  );
};

export default App;
