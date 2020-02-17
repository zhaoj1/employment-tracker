import React, {Component} from 'react';
import './App.css';
import LineChart from './LineChart'
import UpcomingLineItems from './UpcomingLineItems'

export default class Profile extends Component{

    state = {
        selectedChart: null
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
                                        < LineChart
                                            jobs={this.props.jobs}
                                            interviews={this.props.interviews}
                                            meetups={this.props.meetups}
                                            algorithms={this.props.algorithms}
                                            selectedChart={this.state.selectedChart}
                                            fetchInfo={this.props.fetchInfo}
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
                                        <UpcomingLineItems items={this.props.interviews} type='interview' />
                                        :
                                        null
                                    }
                                </div>
                                <div className='upcoming'>
                                    <div className='upcoming-title'>
                                        Upcoming Meetups
                                    </div>
                                    {this.props.meetups.length > 0 ?
                                        <UpcomingLineItems items={this.props.meetups} type='meetup' />
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