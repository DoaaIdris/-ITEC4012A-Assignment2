import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom"

import { Navbar } from './components/NavBar/index';
import {HomePage} from "./components/pages/HomePage/index";
import { Profile} from "./components/pages/Profile/index";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
