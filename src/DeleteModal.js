import React, {Component} from 'react';
import './App.css';

export default class DeleteModal extends Component{

    handleDelete = async (event) => {
        event.preventDefault();
        const deleteItem = await fetch(`http://localhost:3000/users/${this.props.currentUser.id + this.props.currentPage + '/' + this.props.itemToUpdate.id}`, {method: 'DELETE'})
        if(deleteItem){
            this.props.fetchInfo();
            this.props.closeModal();
        }
    }

    render(){
        return(
            <div>
                <div className='addNewHeader'>Are you sure?</div><br></br>
                <button className='buttons' onClick={this.handleDelete}>Yes</button>
                <button className='buttons' onClick={this.props.closeModal}>No</button>
            </div>
        )
    }
}