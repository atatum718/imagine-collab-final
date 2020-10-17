import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import './App.css'
import {
 TopPageDecoration,
 BottomPageDecoration,
} from "./mainStyles/AppStyles";
import Filter from "./filter/Filter";
import Preview from "./preview/Preview";
import Landing from "./landing-page/Landing"
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
    <Route path="/Landing" exact component={Landing} />
    <Route path="/preview" component={Preview} />
    <Route path="/filter" component={Filter} />
   </Switch>
   <BottomPageDecoration/> 
  </div>
 );
}

export default App;