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

    state={
        jobs: {},
        interviews: {},
        meetups: {},
        algorithms: {}
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser && prevProps.currentUser !== this.props.currentUser){
            this.fetchInfo()
        }
    }

    fetchInfo = () => {
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}/jobs`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                jobs: {...response}
            })
        })
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}/interviews`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                interviews: {...response}
            })
        })
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}/meetups`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                meetups: {...response}
            })
        })
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}/algos`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                algorithms: {...response}
            })
        })
    }

    render(){
        return(
            <div className='main-container'>
                {console.log(this.state)}
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
                        render={(routerProps) => <Profile {...routerProps} currentUser={this.props.currentUser} userSaved={this.state} /> }
                    />
                    <Route exact path='/jobs' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='jobs' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} userSaved={this.state.jobs} /> }
                    />
                    <Route exact path='/interviews' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='interviews' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} userSaved={this.state.interviews} /> }
                    />
                    <Route exact path='/algorithms' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='algorithms' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} userSaved={this.state.interviews} /> }
                    />
                    <Route exact path='/meetups' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='meetups' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} userSaved={this.state.meetups} /> }
                    />
                </Switch>     
            </div>
        )
    }
}