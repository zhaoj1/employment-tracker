import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Pages from './Pages'

export default class MainContainer extends Component{

    render(){
        return(
            <div className='main-container'>
                <Switch>
                    <Route exact path='/' 
                        render={(routerProps) => <Login {...routerProps} 
                            setCurrentUser={this.props.setCurrentUser} 
                            currentUser={this.props.currentUser}
                        /> }
                    />
                    <Route exact path='/signup' 
                        render={(routerProps) => <Signup {...routerProps} 
                            setCurrentUser={this.props.setCurrentUser} 
                            currentUser={this.props.currentUser}
                        /> }
                    />
                    <Route exact path='/profile' 
                        render={(routerProps) => <Profile {...routerProps} currentUser={this.props.currentUser} /> }
                    />
                    <Route exact path='/jobs' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='jobs' /> }
                    />
                    <Route exact path='/interviews' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='interviews' /> }
                    />
                    <Route exact path='/algorithms' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='algorithms' /> }
                    />
                    <Route exact path='/meetups' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='meetups' /> }
                    />
                </Switch>     
            </div>
        )
    }
}