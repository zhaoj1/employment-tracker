import React, {Component} from 'react';
import './App.css';
import LineChart from './LineChart'
import UpcomingLineItems from './UpcomingLineItems'

let d, year, month, day, today, nextWeek

export default class Profile extends Component{

    state = {
        selectedChart: null
    }

    findToday(){
        d = new Date()
        year = d.getFullYear()
        month = d.getMonth() < 10 ? '0' + (d.getMonth()+1) : d.getMonth()+1
        day = d.getDate()
        today = year+'-'+month+'-'+day
        nextWeek = year+'-'+month+'-'+(day+7)
    }

    selectChart = (selection) => {
        this.setState({
            selectedChart: selection
        })
    }

    componentDidMount(){
        this.findToday()
    }

    render(){
        return(
            <div className='wrapper'>
                {!this.props.currentUser?
                    this.props.history.push('/')
                    :
                    <div className='profile'>
                        <h1 className='profile-username'>{this.props.currentUser.username}</h1>
                        <div className='profile-contents'>
                            <div className='profile-analytics-container'>
                                <button onClick={() => this.selectChart('jobs')} className='buttons'>Jobs</button>
                                <button onClick={() => this.selectChart('interviews')} className='buttons'>Interviews</button>
                                <button onClick={() => this.selectChart('meetups')} className='buttons'>Meetups</button>
                                <button onClick={() => this.selectChart('algorithms')} className='buttons'>Algorithms</button>
                                <div className='profile-analytics'>
                                    <div className={this.state.selectedChart? 'chart' : 'chart-hidden'} >
                                        < LineChart
                                            jobs={this.props.jobs.filter(job => job.date_applied.split('-')[0]==year)}
                                            interviews={this.props.interviews.filter(interview => interview.date_of_interview.split('-')[0]==year)}
                                            meetups={this.props.meetups.filter(meetup => meetup.date_of_meetup.split('-')[0]==year)}
                                            algorithms={this.props.algorithms.filter(algorithm => algorithm.date_completed.split('-')[0]==year)}
                                            selectedChart={this.state.selectedChart}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='to-do'>
                                <div className='upcoming'>
                                    <div className='upcoming-title'>
                                        Upcoming Interviews
                                    </div>
                                    {this.props.interviews.length > 0 ? 
                                        <UpcomingLineItems 
                                            items={this.props.interviews.filter(interview => interview.date_of_interview >= today && interview.date_of_interview <= nextWeek).filter((i,index) => index < 3)} 
                                            setItemToUpdate={this.props.setItemToUpdate} 
                                            setPage={this.props.setPage}
                                            page='/interviews'
                                            setSelectedLineItem={this.props.setSelectedLineItem}
                                        />
                                        :
                                        null
                                    }
                                </div>
                                <div className='upcoming'>
                                    <div className='upcoming-title'>
                                        Upcoming Meetups
                                    </div>
                                    {this.props.meetups.length > 0 ?
                                        <UpcomingLineItems 
                                            items={this.props.meetups.filter(meetup => meetup.date_of_meetup >= today && meetup.date_of_meetup <= nextWeek).filter((i,index) => index < 3)} 
                                            setItemToUpdate={this.props.setItemToUpdate} 
                                            setPage={this.props.setPage}
                                            page='/meetups'
                                            setSelectedLineItem={this.props.setSelectedLineItem}
                                        />
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>    
                    </div>
                }
            </div>
        )
    }
}