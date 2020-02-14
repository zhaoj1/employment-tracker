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

    componentDidUpdate(prevProps){
        if(this.props.currentUser && prevProps.currentUser !== this.props.currentUser){
            this.props.fetchInfo()
        }
    }

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
                        render={(routerProps) => <Profile {...routerProps} currentUser={this.props.currentUser} jobs={this.props.jobs} interviews={this.props.interviews} meetups={this.props.meetups} algorithms={this.props.algorithms} /> }
                    />
                    <Route exact path='/jobs' 
                        render={(routerProps) => <Pages 
                            {...routerProps} 
                            currentUser={this.props.currentUser} 
                            page='jobs' 
                            setPage={this.props.setPage} 
                            currentPage={this.props.currentPage} 
                            openModal={this.props.openModal} 
                            userSaved={this.props.jobs} 
                            notes={this.props.notes}
                            fetchInfo={this.fetchInfo} 
                            setItemToUpdate={this.props.setItemToUpdate} 
                            modalIsOpen={this.props.modalIsOpen} 
                            openNoteModal={this.props.openNoteModal} 
                            selectedLineItem={this.props.selectedLineItem} 
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                        /> }
                    />
                    <Route exact path='/interviews' 
                        render={(routerProps) => <Pages 
                            {...routerProps}
                            currentUser={this.props.currentUser}
                            page='interviews'
                            setPage={this.props.setPage}
                            currentPage={this.props.currentPage}
                            openModal={this.props.openModal}
                            userSaved={this.props.interviews}
                            notes={this.props.notes}
                            fetchInfo={this.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                        /> }
                    />
                    <Route exact path='/algorithms' 
                        render={(routerProps) => <Pages
                            {...routerProps}
                            currentUser={this.props.currentUser}
                            page='algorithms'
                            setPage={this.props.setPage}
                            currentPage={this.props.currentPage}
                            openModal={this.props.openModal}
                            userSaved={this.props.algorithms}
                            notes={this.props.notes}
                            fetchInfo={this.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                        /> }
                    />
                    <Route exact path='/meetups' 
                        render={(routerProps) => <Pages
                            {...routerProps}
                            currentUser={this.props.currentUser}
                            page='meetups'
                            setPage={this.props.setPage}
                            currentPage={this.props.currentPage}
                            openModal={this.props.openModal}
                            userSaved={this.props.meetups}
                            notes={this.props.notes}
                            fetchInfo={this.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem}
                        /> }
                    />
                </Switch>     
            </div>
        )
    }
}