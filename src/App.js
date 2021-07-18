// Libraries
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import PreGamePage from "./pages/PreGamePage";
import GamePage from "./pages/GamePage";
import PostGamePage from "./pages/PostGamePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PreGamePage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/postgame" component={PostGamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
