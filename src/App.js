import React from 'react';
import NavBar from './NavBar'
import MainContainer from './MainContainer'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      currentUser: null,
      currentPage: null,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal = () => {
    this.setState({modalIsOpen: true});
    console.log('ok')
  }
 
  afterOpenModal = () => {
    
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
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
            currentPage={this.state.currentPage}
            openModal = {this.openModal}
          />
        </Router>
        <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    ) 
  };
}