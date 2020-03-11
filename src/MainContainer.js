import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Pages from './Pages'

let dateInfo, d, year, month, day, today, tomorrow, nextWeek

export default class MainContainer extends Component{

    constructor(){
        super();
        this.state = {
            error: ''
        }
        this.setError = this.setError.bind(this)
        this.clearError = this.clearError.bind(this)
    }

    findToday(){
        d = new Date();
        year = d.getFullYear();
        month = d.getMonth() < 10 ? '0' + (d.getMonth()+1) : d.getMonth()+1
        day = d.getDate()
        today = year+'-'+month+'-'+day
        tomorrow = year+'-'+month+'-'+(day+1)
        nextWeek = year+'-'+month+'-'+(day+7)

        dateInfo={
            d : d,
            year : year,
            month : month,
            day : day,
            today : today,
            tomorrow : tomorrow,
            nextWeek : nextWeek
        }
    }

    componentDidMount(){
        this.findToday();
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser && prevProps.currentUser !== this.props.currentUser){
            this.props.fetchInfo()
        }
    }

    setError = (error) => {
        this.setState({error: error})
    }

    clearError = () => {
        this.setState({error: ''})
    }

    render(){
        return(
            <div className='main-container'>
                <Switch>
                    <Route exact path='/' 
                        render={(routerProps) => <Login {...routerProps} 
                            setCurrentUser={this.props.setCurrentUser} 
                            currentUser={this.props.currentUser}
                            fetchInfo={this.props.fetchInfo}
                            setError={this.setError}
                            clearError={this.clearError}
                            error={this.state.error}
                        /> }
                    />
                    <Route exact path='/signup' 
                        render={(routerProps) => <Signup {...routerProps} 
                            setCurrentUser={this.props.setCurrentUser} 
                            currentUser={this.props.currentUser}
                            setError={this.setError}
                            clearError={this.clearError}
                            error={this.state.error}
                        /> }
                    />
                    <Route exact path='/profile' 
                        render={(routerProps) => <Profile
                            {...routerProps}
                            currentUser={this.props.currentUser}
                            jobs={this.props.jobs}
                            interviews={this.props.interviews}
                            meetups={this.props.meetups}
                            algorithms={this.props.algorithms}
                            fetchInfo={this.props.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            setPage={this.props.setPage}
                            setSelectedLineItem={this.props.setSelectedLineItem}
                            dateInfo={dateInfo}
                        /> }
                    />
                    <Route exact path='/jobs' 
                        render={(routerProps) => <Pages 
                            {...routerProps} 
                            currentUser={this.props.currentUser} 
                            page='jobs' 
                            setPage={this.props.setPage} 
                            currentPage={this.props.currentPage} 
                            openModal={this.props.openModal} 
                            closeModal={this.props.closeModal} 
                            userSaved={this.props.jobs} 
                            notes={this.props.notes}
                            fetchInfo={this.props.fetchInfo} 
                            setItemToUpdate={this.props.setItemToUpdate} 
                            modalIsOpen={this.props.modalIsOpen} 
                            openNoteModal={this.props.openNoteModal} 
                            selectedLineItem={this.props.selectedLineItem} 
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                            openDeleteModal={this.props.openDeleteModal}
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
                            closeModal={this.props.closeModal} 
                            userSaved={this.props.interviews}
                            notes={this.props.notes}
                            fetchInfo={this.props.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                            openDeleteModal={this.props.openDeleteModal}
                            dateInfo={dateInfo}
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
                            closeModal={this.props.closeModal} 
                            userSaved={this.props.algorithms}
                            notes={this.props.notes}
                            fetchInfo={this.props.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem} 
                            openDeleteModal={this.props.openDeleteModal}
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
                            closeModal={this.props.closeModal} 
                            userSaved={this.props.meetups}
                            notes={this.props.notes}
                            fetchInfo={this.props.fetchInfo}
                            setItemToUpdate={this.props.setItemToUpdate}
                            modalIsOpen={this.props.modalIsOpen}
                            openNoteModal={this.props.openNoteModal}
                            selectedLineItem={this.props.selectedLineItem}
                            setSelectedLineItem={this.props.setSelectedLineItem}
                            openDeleteModal={this.props.openDeleteModal}
                            dateInfo={dateInfo}
                        /> }
                    />
                    <Route render={() => <Redirect to="/"/>}/>
                </Switch>     
            </div>
        )
    }
}