import React from 'react';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component{

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    return (
      <div className="App">
        {console.log(this.state)}
        <Router>
          <NavBar 
            currentUser={this.state.currentUser} 
          />
          <MainContainer 
            currentUser={this.state.currentUser} 
            setCurrentUser={this.setCurrentUser} 
          />
        </Router>
      </div>
    ) 
  };
}