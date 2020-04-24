import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"
import Beers from "./components/Beers"
import { BrowserRouter, Switch} from 'react-router-dom';
import Axios from 'axios'

let baseUrl = 'https://ih-beers-api2.herokuapp.com/beers'
let endPoint = "/"

class App extends Component {
  
getAllBeers = () => {
  Axios.get(baseUrl + endPoint)
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
}
  
  render() {
    {this.getAllBeers()}
    return (
      <div className="App">
        <Home></Home>
        <Switch>
          <BrowserRouter
            exact
            path = "/beers"
            component={(props) => <Beers {...props}/>}
            ></BrowserRouter>
            <BrowserRouter
            exact
            path = "/random-beer"
            component={(props) => <Beers {...props}/>}
            ></BrowserRouter>
            <BrowserRouter
            exact
            path = "/new-beers"
            component={(props) => <Beers {...props}/>}
            ></BrowserRouter>
        </Switch>
      </div>
    );
  }
}

export default App;
