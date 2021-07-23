// Libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/game" component={Game} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
