import React from "react";
// import "./App.css";
import Filter from "./filter/Filter";
import Gallery from "./gallery/Gallery";
import Preview from "./preview/Preview";

function App() {
  return (
    <div className="App">
      <Gallery />
      <Preview />
      <Filter />
    </div>
  );
}

export default App;
