import React, {Component} from 'react';
import './App.css';
import LineChart from './LineChart'
import UpcomingLineItems from './UpcomingLineItems'

// let d, year, month, day, today, tomorrow, nextWeek

export default class Profile extends Component{

    state = {
        selectedChart: null
    }

    // findToday(){
    //     d = new Date()
    //     year = d.getFullYear()
    //     month = d.getMonth() < 10 ? '0' + (d.getMonth()+1) : d.getMonth()+1
    //     day = d.getDate()
    //     today = year+'-'+month+'-'+day
    //     tomorrow = year+'-'+month+'-'+(day+1)
    //     nextWeek = year+'-'+month+'-'+(day+7)
    // }

    selectChart = (selection) => {
        this.setState({
            selectedChart: selection
        })
    }

    // componentDidMount(){
    //     this.findToday()
    // }

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
                                            info={this.state.selectedChart == 'jobs' ? 
                                                this.props.jobs.filter(job => job.date_of.split('-')[0]==this.props.dateInfo.year)
                                                :
                                                this.state.selectedChart == 'interviews' ?
                                                    this.props.interviews.filter(interview => interview.date_of.split('-')[0]==this.props.dateInfo.year)
                                                    :
                                                    this.state.selectedChart == 'meetups' ?
                                                        this.props.meetups.filter(meetup => meetup.date_of.split('-')[0]==this.props.dateInfo.year)
                                                        :
                                                        this.state.selectedChart == 'algorithms' ?
                                                            this.props.algorithms.filter(algorithm => algorithm.date_of.split('-')[0]==this.props.dateInfo.year) 
                                                            :
                                                            []
                                            }
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
                                    {console.log(this.props.dateInfo)}
                                    {this.props.interviews.length > 0 ? 
                                        <UpcomingLineItems 
                                            items={this.props.interviews.filter(interview => interview.date_of >= this.props.dateInfo.today && interview.date_of <= this.props.dateInfo.nextWeek).filter((i,index) => index < 3)} 
                                            setItemToUpdate={this.props.setItemToUpdate} 
                                            setPage={this.props.setPage}
                                            page='/interviews'
                                            setSelectedLineItem={this.props.setSelectedLineItem}
                                            dateInfo={this.props.dateInfo}
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
                                            items={this.props.meetups.filter(meetup => meetup.date_of >= this.props.dateInfo.today && meetup.date_of <= this.props.dateInfo.nextWeek).filter((i,index) => index < 3)} 
                                            setItemToUpdate={this.props.setItemToUpdate} 
                                            setPage={this.props.setPage}
                                            page='/meetups'
                                            setSelectedLineItem={this.props.setSelectedLineItem}
                                            dateInfo={this.props.dateInfo}
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