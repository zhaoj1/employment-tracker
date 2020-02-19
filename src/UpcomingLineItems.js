import React, {Component} from 'react';
import './App.css';

export default class UpcomingLineItems extends Component{

    render(){
        return(
            <div className='upcoming-list'>
                {this.props.items.map(item => {
                    return <div className='line-item' onClick={() => this.props.setItemToUpdate(this.props.item)}>
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
                })}
            </div>
        )
    }
}