import React, {Component} from 'react';
import './App.css';
  
export default class LineItems extends Component{
    render(){
        return(
            <div>
                {console.log(this.props)}
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
                    <button onClick={this.props.openModal} >+</button>
                    add new line item
                </div>
            </div>
        )
    }
}