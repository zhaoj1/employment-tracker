import React from 'react';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component{

  state = {
    currentUser: null,
    page: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setPage = (page) => {
    this.setState({
      page: page
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
            setPage={this.setPage}
          />
        </Router>
      </div>
    ) 
  };
}