import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default class UpcomingLineItems extends Component{

    upcomingLink = (item) => {
        this.props.setPage(this.props.page)
        this.props.setSelectedLineItem(item)
    }

    render(){
        return(
            <div className='upcoming-list'>
                {this.props.items.map(item => {
                    return  <Link 
                        to={this.props.page} 
                        className='upcoming-line-item' 
                        style={{'background-color': item.date_of == this.props.dateInfo.today ? 'red' : item.date_of == this.props.dateInfo.tomorrow ? 'orange' : 'inherit'}} 
                        onClick={() => this.upcomingLink(item)}>
                            <div className='upcoming-topic'>
                                {item.title}
                            </div>
                            <div className='upcoming-date'>
                                {this.props.page == '/interviews' ? 
                                    item.date_of
                                    :
                                    this.props.page == '/meetups' ? 
                                        item.date_of
                                        :
                                        null
                                }
                            </div>
                    </Link>
                })}
            </div>
        )
    }
}