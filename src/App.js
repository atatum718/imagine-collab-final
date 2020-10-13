import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import './App.css'

// import "./App.css";
import Filter from "./filter/Filter";
import Preview from "./preview/Preview";





function App() {
  return (
    <div className="App">
      <img className="icon" href="https://files.slack.com/files-pri/TCNHBFEG3-F01CYKS6YHE/imagine_logo_neon.png"></img>
      <Header />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/preview" component={Preview} />
        <Route path="/filter" component={Filter} />
      </Switch>
    </div>
  );
}

export default App;
