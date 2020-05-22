import React, {Component} from 'react';
import './App.css';

export default class NewNote extends Component{

    state = {
        note: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const postNotes = await fetch(`https://employment-tracker-backend.herokuapp.com/users/${this.props.currentUser.id}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                contents: this.state.note,
                page_type: this.props.currentPage,
                page_id: this.props.itemToUpdate.id,
                user_id: this.props.currentUser.id
            })
        })
        if(postNotes){
            this.props.fetchNotes();
        }
        this.props.closeModal();
    }

    render(){
        return(
            <div>
                <h1 className='addNewHeader'>Add New Note</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        name='note'
                        placeholder='Note'
                        className='newPageInput'
                        onChange={this.handleChange}
                        rows='5'
                    ></textarea>
                    <input className='buttons' type='submit'></input>
                </form>
            </div>
        )
    }
}