import React, {Component} from 'react';
import './App.css';

export default class NewNote extends Component{

    state = {
        note: '',
        page_type: '',
        page_id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        console.log(this.props.currentUser)
        console.log(this.props.selectedLineItem)
        // const createNote = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/jobs/${this.props.selectedLineItem.id}/notes`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json'
        //     },
        //     body: JSON.stringify({
        //         note: this.state.note,
        //         page_type: '/job',
        //         page_id: this.props.selectedLineItem.id,
        //         user_id: this.props.currentUser.id
        //     })
        // })
        // if(createNote){
            
        // }
    }

    render(){
        return(
            <div>
                <h1 className='addNewHeader'>Add New Note</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='note'
                        placeholder='Note'
                        className='newPageInput'
                        onChange={this.handleChange}
                    ></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}