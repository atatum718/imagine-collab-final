import React from "react";
import { Route, Switch, Link } from "react-router-dom";

// import "./App.css";
import Filter from "./filter/Filter.js";
import Preview from "./preview/Preview.js";
import Share from "./Share/Share.js";

function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/preview">Preview</Link>
      <Link to="/filter">Filter</Link>
      <Link to="/Share">Share</Link>
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
        <Route path="/Share" component={Share}/>
      </Switch>
    </div>
  );
}

export default App;
