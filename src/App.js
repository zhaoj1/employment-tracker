import React from 'react';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Modal from 'react-modal';
import NewPage from './NewPage'
import UpdatePage from './UpdatePage'

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '20%',
    textAlign: 'center',
  }
};

Modal.setAppElement('#root');

export default class App extends React.Component{

  constructor(){

    super();

    this.state={
      currentUser: null,
      currentPage: null,
      modalIsOpen: false,
      itemToUpdate: null,
      jobs: [],
      interviews: [],
      meetups: [],
      algorithms: []
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this)
    this.fetchJobs = this.fetchJobs.bind(this);
    this.fetchInterviews = this.fetchInterviews.bind(this);
    this.fetchMeetups = this.fetchMeetups.bind(this);
    this.fetchAlgos = this.fetchAlgos.bind(this);
    this.setItemToUpdate = this.setItemToUpdate.bind(this);
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setPage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  setItemToUpdate = (item) => {
    this.setState({itemToUpdate: item}, () => {
      this.setState({modalIsOpen: true})
    })
    
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  } 
 
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      itemToUpdate: null
    });
  }

  fetchJobs = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/jobs`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            jobs: [...response]
        })
    })
  }

  fetchInterviews = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/interviews`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            interviews: [...response]
        })
    })
  }

  fetchMeetups = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/meetups`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            meetups: [...response]
        })
    })
  }

  fetchAlgos = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/algos`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            algorithms: [...response]
        })
    })
  }

  fetchInfo = () => {
    this.fetchJobs();
    this.fetchInterviews();
    this.fetchMeetups();
    this.fetchAlgos();
  }

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar 
            currentUser={this.state.currentUser} 
            setPage={this.setPage}
          />
          <MainContainer 
            currentUser={this.state.currentUser} 
            setCurrentUser={this.setCurrentUser} 
            setPage={this.setPage}
            currentPage={this.state.currentPage}
            openModal={this.openModal}
            jobs={this.state.jobs}
            interviews={this.state.interviews}
            meetups={this.state.meetups}
            algorithms={this.state.algorithms}
            fetchInfo={this.fetchInfo}
            fetchInterviews={this.fetchInterviews}
            fetchMeetups={this.fetchMeetups}
            setItemToUpdate={this.setItemToUpdate}
            modalIsOpen={this.state.modalIsOpen}
          />
        </Router>
        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles}
        >
          {this.state.itemToUpdate ?
            <UpdatePage 
              currentUser={this.state.currentUser} 
              currentPage={this.state.currentPage}
              itemToUpdate={this.state.itemToUpdate}
              fetchJobs={this.fetchJobs}
              fetchInterviews={this.fetchInterviews}
              fetchMeetups={this.fetchMeetups}
              fetchAlgos={this.fetchAlgos}
              closeModal={this.closeModal}
            />
            :
            <NewPage 
              currentUser={this.state.currentUser} 
              currentPage={this.state.currentPage}
              fetchInfo={this.fetchInfo}
              fetchJobs={this.fetchJobs}
              fetchInterviews={this.fetchInterviews}
              fetchMeetups={this.fetchMeetups}
              fetchAlgos={this.fetchAlgos}
              closeModal={this.closeModal}
            />
          }
        </Modal>
      </div>
    ) 
  };
}