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
import NewPage from './NewPage'

export default class MainContainer extends Component{

    // addNewJob = () => {
    //     fetch('http://localhost:3000/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type':'application/json',
    //             Accept: 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: '',
    //             application_info: '',
    //             company_name: '',
    //             job_title: '',
    //             link: '',
    //             date_applied: ''
    //         })
    //     })
    // }

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
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='jobs' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} /> }
                    />
                    <Route exact path='/interviews' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='interviews' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} /> }
                    />
                    <Route exact path='/algorithms' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='algorithms' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} /> }
                    />
                    <Route exact path='/meetups' 
                        render={(routerProps) => <Pages {...routerProps} currentUser={this.props.currentUser} page='meetups' setPage={this.props.setPage} currentPage={this.props.currentPage} openModal={this.props.openModal} /> }
                    />
                </Switch>     
            </div>
        )
    }
}