import React, {Component} from 'react';
import './App.css';

export default class LineItems extends Component{
    render(){
        return(
            <div>
                <div className='line-item'>
                    <button>V</button>
                    line item basic description
                    <button>X</button>
                </div>
                <div className='line-item'>
                    <button>V</button>
                    line item basic description
                    <button>X</button>
                </div>
                <div className='line-item'>
                    <button>V</button>
                    line item basic description
                    <button>X</button>
                </div>
                <div className='line-item'>
                    <button>+</button>
                    add new line item
                </div>
            </div>
        )
    }
}