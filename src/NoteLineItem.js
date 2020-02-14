import React, {Component} from 'react';
import './App.css';
  
export default class NoteLineItem extends Component{
    render(){
        return(
            <div className='line-item' >
                <label className='noteLineItemDesc'>{this.props.note.contents}</label>
                <div className='lineItemBtn' >
                    <button >X</button>
                </div>
            </div>
        )
    }
}