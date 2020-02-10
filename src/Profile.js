import React, {Component} from 'react';
import './App.css';
import LineChart from './LineChart'
import UpcomingLineItems from './UpcomingLineItems'

export default class Profile extends Component{

    state = {
        selectedChart: 'jobs'
    }

    selectChart = (selection) => {
        this.setState({
            selectedChart: selection
        })
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
                                <button onClick={() => this.selectChart('jobs')} className='buttons'>jobs</button>
                                <button onClick={() => this.selectChart('interviews')} className='buttons'>interviews</button>
                                <button onClick={() => this.selectChart('meetups')} className='buttons'>meetups</button>
                                <button onClick={() => this.selectChart('algorithms')} className='buttons'>algorithms</button>
                                <div className='profile-analytics'>
                                    <div className={this.state.selectedChart? 'chart' : 'chart-hidden'} >
                                        <h1>{this.state.selectedChart}analytics</h1>
                                        < LineChart jobs={this.props.jobs} interviews={this.props.interviews} meetups={this.props.meetups} algorithms={this.props.algorithms} />
                                    </div>
                                </div>
                            </div>
                            <div className='to-do'>
                                <div className='upcoming'>
                                    <div className='upcoming-title'>
                                        Upcoming Interviews
                                    </div>
                                    <UpcomingLineItems />
                                </div>
                                <div className='upcoming'>
                                    <div className='upcoming-title'>
                                        Upcoming Meetups
                                    </div>
                                    <UpcomingLineItems />
                                </div>
                            </div>
                        </div>    
                    </div>
                }
            </div>
        )
    }
}