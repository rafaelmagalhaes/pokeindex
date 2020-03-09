import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";

import HomePage from "./pages/home";
import PokemonPage from "./pages/pokemon";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/pokemon/:id" component={PokemonPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
