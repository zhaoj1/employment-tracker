import React from 'react';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Modal from 'react-modal';
import NewPage from './NewPage'
import UpdatePage from './UpdatePage'
import NewNote from './NewNote'
import DeleteModal from './DeleteModal'

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
      updateNote: false,
      deleteItem: false,
      selectedLineItem: null,
      jobs: [],
      interviews: [],
      meetups: [],
      algorithms: []
    };

    this.openModal = this.openModal.bind(this);
    this.openNoteModal = this.openNoteModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this)
    this.fetchJobs = this.fetchJobs.bind(this);
    this.fetchInterviews = this.fetchInterviews.bind(this);
    this.fetchMeetups = this.fetchMeetups.bind(this);
    this.fetchAlgorithms = this.fetchAlgorithms.bind(this);
    this.fetchNotes = this.fetchNotes.bind(this);
    this.setItemToUpdate = this.setItemToUpdate.bind(this);
    this.setSelectedLineItem = this.setSelectedLineItem.bind(this);
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
    this.fetchInfo();
  }

  setPage = (page) => {
    this.setState({
      currentPage: page,
      selectedLineItem: null
    })
  }

  setItemToUpdate = (item) => {
    this.setState({itemToUpdate: item}, () => {
      this.setState({modalIsOpen: true})
    })
  }

  setSelectedLineItem = (item) => {
    this.setState({selectedLineItem: item})
  }||||||||||||||||||||||||||||||||||||||||||||||||\\

  openModal = () => {
    this.setState({modalIsOpen: true});
  } 

  openNoteModal = (item) => {
    this.setState({itemToUpdate: item}, () => {
      this.setState({modalIsOpen: true, updateNote: true})
    })
  }

  openDeleteModal = (item) => {
    this.setState({itemToUpdate: item}, () => {
      this.setState({modalIsOpen: true, deleteItem: true})
    })
  }
 
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      itemToUpdate: null,
      selectedLineItem: null,
      deleteItem: false,
      updateNote: false
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

  fetchAlgorithms = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/algorithms`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            algorithms: [...response]
        })
    })
  }

  fetchNotes = () => {
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/notes`)
    .then(res => res.json())
    .then(response => {
        this.setState({
            notes: [...response]
        })
    })
  }

  fetchInfo = () => {
    this.fetchJobs();
    this.fetchInterviews();
    this.fetchMeetups();
    this.fetchAlgorithms();
    this.fetchNotes();
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
            closeModal={this.closeModal} 
            jobs={this.state.jobs}
            interviews={this.state.interviews}
            meetups={this.state.meetups}
            algorithms={this.state.algorithms}
            notes={this.state.notes}
            fetchInfo={this.fetchInfo}
            setItemToUpdate={this.setItemToUpdate}
            modalIsOpen={this.state.modalIsOpen}
            openNoteModal={this.openNoteModal}
            openDeleteModal={this.openDeleteModal}
            selectedLineItem={this.state.selectedLineItem} 
            setSelectedLineItem={this.setSelectedLineItem}
          />
        </Router>
        <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={customStyles}
        >
          {this.state.deleteItem ?
            <DeleteModal 
              currentUser={this.state.currentUser} 
              currentPage={this.state.currentPage}
              closeModal={this.closeModal}
              itemToUpdate={this.state.itemToUpdate}
              currentPage={this.state.currentPage}
              fetchInfo={this.fetchInfo}
            />
            :
            this.state.updateNote ? 
              <NewNote 
                currentUser={this.state.currentUser} 
                currentPage={this.state.currentPage}
                closeModal={this.closeModal}
                itemToUpdate={this.state.itemToUpdate}
                currentPage={this.state.currentPage}
                fetchNotes={this.fetchNotes}
              />
              :
              this.state.itemToUpdate ?
                <UpdatePage 
                  currentUser={this.state.currentUser} 
                  currentPage={this.state.currentPage}
                  itemToUpdate={this.state.itemToUpdate}
                  fetchJobs={this.fetchJobs}
                  fetchInterviews={this.fetchInterviews}
                  fetchMeetups={this.fetchMeetups}
                  fetchAlgorithms={this.fetchAlgorithms}
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
                  fetchAlgorithms={this.fetchAlgorithms}
                  closeModal={this.closeModal}
                />
            }
        </Modal>
      </div>
    ) 
  };
}