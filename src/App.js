import React from "react";
// import black from './background/black.mov'
import './App.css'
import NavBar from "./components/nav/NavBar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import { Switch, Route } from "react-router-dom";




const App = () => {
  
  return (
    <div className="App">
      <NavBar />
      <div className="background">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactus" component={Contact} />
        </Switch>
       
    </div>
     

    </div >
  );
};
export default App;