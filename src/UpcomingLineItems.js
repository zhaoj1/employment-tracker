import React, {Component} from 'react';
import './App.css';

export default class UpcomingLineItems extends Component{

    render(){
        return(
            <div className='upcoming-list'>
                <div className='line-item'>
                    <div className='upcoming-topic'>
                        {this.props.item.title}
                    </div>
                    <div className='upcoming-date'>
                        {this.props.type == 'interview' ? 
                            this.props.item.date_of_interview
                            :
                            this.props.type == 'meetup' ? 
                                this.props.item.date_of_meetup
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
}