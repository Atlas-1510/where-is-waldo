// Libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/game" component={Game} />
        <Route exact={true} path="/leaderboard" component={Leaderboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
