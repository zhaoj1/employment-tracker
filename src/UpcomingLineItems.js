import React, {Component} from 'react';
import './App.css';

export default class UpcomingLineItems extends Component{

    render(){
        return(
            <div className='upcoming-list'>
                <div className='line-item'>
                    <div className='upcoming-topic'>
                        topic
                    </div>
                    <div className='upcoming-date'>
                        date/date/date
                    </div>
                </div>
                <div className='line-item'>
                    <div className='upcoming-topic'>
                        topic
                    </div>
                    <div className='upcoming-date'>
                        date/date/date
                    </div>
                </div>
                <div className='line-item'>
                    <div className='upcoming-topic'>
                        topic
                    </div>
                    <div className='upcoming-date'>
                        date/date/date
                    </div>
                </div>
            </div>
        )
    }
}