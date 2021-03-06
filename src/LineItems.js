import React, {Component} from 'react';
import './App.css';
  
export default class LineItems extends Component{

    render(){
        return(
            <div className='line-item' onClick={() => this.props.setSelectedLineItem(this.props.item)}>
                <label className='lineItemDesc'>{this.props.item.title}</label>
                <div className='lineItemBtn' >
                    <button className='edit-btn' onClick={() => this.props.setItemToUpdate(this.props.item)} >EDIT</button>
                </div>
            </div>
        )
    }
}