import React, { Component } from 'react'
import Chart from "chart.js";

let myChart 
let chartData
let chartInfoType

export default class LineChart extends Component {

    setData(props){
            chartData = 
                this.props.info.length > 0 ?
                    [
                        props.info.filter(ele => ele.date_of.split('-')[1] == '01').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '02').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '03').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '04').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '05').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '06').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '07').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '08').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '09').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '10').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '11').length,
                        props.info.filter(ele => ele.date_of.split('-')[1] == '12').length
                    ]
                    :
                    null
        // chartData = this.props.selectedChart == 'jobs' ? 
        //     [
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '01').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '02').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '03').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '04').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '05').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '06').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '07').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '08').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '09').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '10').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '11').length,
        //     props.jobs.filter(job => job.date_of.split('-')[1] == '12').length
        //     ]
        //     : this.props.selectedChart == 'interviews' ?
        //         [
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '01').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '02').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '03').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '04').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '05').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '06').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '07').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '08').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '09').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '10').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '11').length,
        //         props.interviews.filter(interview => interview.date_of.split('-')[1] == '12').length
        //         ]
        //         : this.props.selectedChart == 'algorithms' ? 
        //             [
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '01').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '02').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '03').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '04').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '05').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '06').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '07').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '08').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '09').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '10').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '11').length,
        //             props.algorithms.filter(algorithm => algorithm.date_of.split('-')[1] == '12').length
        //             ]
        //                 : this.props.selectedChart == 'meetups' ? 
        //                     [
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '01').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '02').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '03').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '04').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '05').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '06').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '07').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '08').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '09').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '10').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '11').length,
        //                     props.meetups.filter(meetup => meetup.date_of.split('-')[1] == '12').length
        //                     ]
        //                     : null

        chartInfoType = this.props.selectedChart == 'jobs' ? 
            'Jobs Applied'
            : this.props.selectedChart == 'interviews' ?
                'Interviews Scheduled'
                : this.props.selectedChart == 'algorithms' ? 
                    'Algorithms Completed'
                        : this.props.selectedChart == 'meetups' ? 
                            'Meetups RSVP\'d'
                            : null
    }

    makeChart(props){         
        const ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
                datasets: [{
                    label: chartInfoType,
                    lineTension: 0,
                    data: chartData,
                    borderColor: [
                        'rgb(0,0,0)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            maxRotation: 0,
                            minRotation: 0, 
                            fontStyle: 'bold',
                            precision: 0,
                            suggestedMax: 5
                        }
                    }]
                },
            }
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            if(myChart){myChart.destroy()};
            this.setData(this.props);
            this.makeChart(chartData);
        }
    }

    render() {
        return (
            <canvas id="myChart" width="500" height="300"></canvas>
        )
    }

}