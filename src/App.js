import "./App.css";
import Navegacao from "./components/Navegacao";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Meteorologia from "./components/Meteorologia";

function App() {
  return (
    <>
      <Router>
        <Navegacao />
        <Switch>
          <Route path="/nodeMeteorologia">
            <Meteorologia />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
