import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import './App.css'

// import "./App.css";
import Filter from "./filter/Filter";
import Preview from "./preview/Preview";

function Header() {
  return (
    <>

    </>
  );
}



function App() {
  return (
    <div className="App">
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
