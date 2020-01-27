import React, {Component} from 'react';
import './App.css';
import LineChart from './LineChart'

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
                <div className='profile'>
                    <h1>{this.props.currentUser}</h1>
                    <div className='profile-analytics-container'>
                        <button onClick={() => this.selectChart('jobs')}>jobs</button>
                        <button onClick={() => this.selectChart('interviews')}>interviews</button>
                        <button onClick={() => this.selectChart('meetups')}>meetups</button>
                        <button onClick={() => this.selectChart('algorithms')}>algorithms</button>
                        <div className='profile-analytics'>
                            {/* {this.state.selectedChart?
                                <div className='chart' >
                                    <h1>{this.state.selectedChart}analytics</h1>
                                    < LineChart />
                                </div>
                                :
                                null
                            } */}
                            <div className={this.state.selectedChart? 'chart' : 'chart-hidden'} >
                                <h1>{this.state.selectedChart}analytics</h1>
                                < LineChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}