// Libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import PreGamePage from "./pages/PreGamePage";
import GamePage from "./pages/GamePage";
import ScoresPage from "./pages/ScoresPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PreGamePage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/scores" component={ScoresPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
