import './App.css';
import Home from './pages/Home/Home';
import { Route } from "react-router-dom";
import Wines from './pages/Wines/Wines';
import AboutUs from './pages/AboutUs/AboutUs';
import History from './pages/History/History';
import Contact from './pages/Contact/Contact';
import Wine from './pages/Wine/Wine';
import Gallery from './pages/Gallery/Gallery';
function App() {
  return (
    <div className="App font-lato-300 text-left">
           <Route exact path="/" component={Home} />
           <Route exact path="/vinos/:id" component={Wines} />
           <Route exact path="/bodega" component={AboutUs} />
           <Route exact path="/historia" component={History} />
           <Route exact path="/contacto" component={Contact} />
           <Route exact path="/vino/:id" component={Wine} />
           <Route exact path="/galeria" component={Gallery} />
    </div>
  );
}

export default App;
