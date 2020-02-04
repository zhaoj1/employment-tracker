import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default class LineItems extends Component{
    render(){
        return(
            <div>
                {console.log(this.props)}
                <div className='line-item'>
                    {/* <Link to={this.props.currentPage + '/new'} ><button>V</button></Link> */}
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