import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default class UpcomingLineItems extends Component{

    render(){
        return(
            <div className='upcoming-list'>
                {this.props.items.map(item => {
                    return  <Link to='/jobs' className='nav-btns' onClick={() => this.props.setPage('/jobs')}>
                        <div className='line-item' >
                            <div className='upcoming-topic'>
                                {item.title}
                            </div>
                            <div className='upcoming-date'>
                                {this.props.type == 'interview' ? 
                                    item.date_of_interview
                                    :
                                    this.props.type == 'meetup' ? 
                                        item.date_of_meetup
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        )
    }
}