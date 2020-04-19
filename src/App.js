import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./categories";
import Jocks from "./jocks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticked_categories: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/Jocks" render={(props) => <Jocks {...props} />} />

            <Route path="/" component={(props) => <Categories />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
