import React from "react";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const JacketsPage = () => {
  return (
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
