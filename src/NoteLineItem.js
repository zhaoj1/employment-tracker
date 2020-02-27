import React, {Component} from 'react';
import './App.css';
  
export default class NoteLineItem extends Component{

    handleDelete = async (event) => {
        event.preventDefault(); 
        const deleteNote = await fetch(`http://localhost:3000/users/${this.props.currentUser.id + '/notes/' + this.props.note.id}`, {method: 'DELETE'})
        if(deleteNote){
            this.props.fetchInfo();
        }
    }

    render(){
        return(
            <div className='note-line-item' >
                {console.log(this.props.note.id)}
                <label className='noteLineItemDesc'>{this.props.note.contents}</label>
                <div className='lineItemBtn' >
                    <button onClick={(event) => this.handleDelete(event)} >X</button>
                </div>
            </div>
        )
    }
}