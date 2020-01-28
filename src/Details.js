import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'

export default class Details extends Component{

    render(){
        return(
            <div>
                <div className='line-item'>title</div>
                <div className='line-item'>application info</div>
                <div className='line-item'>company</div>
                <div className='line-item'>job title</div>
                <div className='line-item'>link</div>
                <div className='notes'>
                    notes
                    <LineItems />
                </div>
            </div>
        )
    }
}