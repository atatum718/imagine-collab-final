import React from "react";
import { Route, Switch, Link } from "react-router-dom";

// import "./App.css";
import Filter from "./filter/Filter";
import Gallery from "./gallery/Gallery";
import Preview from "./preview/Preview";
import Share from "./share/share"

function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/preview">Preview</Link>
      <Link to="/filter">Filter</Link>
      <link to="/share">Share</link>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/preview" component={Preview} />
        <Route path="/filter" component={Filter} />
        <Route path="/share" component={Share} />

      </Switch>
    </div>
  );
}

export default App;
