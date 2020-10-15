import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css'
import {
 TopPageDecoration,
 BottomPageDecoration,
} from "./mainStyles/AppStyles";
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
   <TopPageDecoration/>
   <Header />
   <Switch>
    <Route path="/" exact component={Header} />
    <Route path="/preview" component={Preview} />
    <Route path="/filter" component={Filter} />
   </Switch>
   <BottomPageDecoration/> 
  </div>
 );
}

export default App;