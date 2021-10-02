import "./App.css";
import Navegacao from "./components/Navegacao";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Meteorologia from "./components/Meteorologia";
import Contato from "./components/Contato";
import Laboratorios from "./components/Laboratorios";
import ConsumoEnergia from "./components/ConsumoEnergia";
import EmDesenvolvimento from "./components/EmDesenvolvimento";
import Subestacao from "./components/Subestacao";

function App() {
  return (
    <>
      <Router>
        <Navegacao />
        <Switch>
          <Route path="/nodeMeteorologia">
            <Meteorologia />
          </Route>
          <Route path="/nodeConsumoEnergia">
            <ConsumoEnergia />
          </Route>
          <Route path="/nodeSubestacao">
            <Subestacao />
          </Route>
          <Route path="/emDesenvolvimento">
            <EmDesenvolvimento />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/laboratorios">
            <Laboratorios />
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
