import React, {Component} from 'react';
import './App.css';
  
export default class LineItems extends Component{
    render(){
        return(
            <div className='line-item'>
                <label className='lineItemDesc'>line item basic description</label>
                <button className='lineItemBtn'>X</button>
            </div>
        )
    }
}