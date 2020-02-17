import React, { Component } from 'react'
import Chart from "chart.js";

let myChart 

export default class LineChart extends Component {

    makeChart(props){
        const ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
                datasets: [{
                    label: 'Votes',
                    data: [
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 1).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 2).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 3).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 4).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 5).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 6).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 7).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 8).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 9).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 10).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 11).length,
                        props.jobs.filter(job => new Date(job.date_applied).getMonth() == 12).length,
                    ],
                    borderColor: [
                        'rgb(0,0,0)'
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            maxRotation: 0,
                            minRotation: 0, 
                            fontStyle: 'bold'
                        }
                    }]
                },
            }
        });
    }

    async componentDidMount(){
        const fetchProps = await this.props.fetchInfo()
        if(fetchProps){
            this.makeChart(this.props)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            if(myChart){myChart.destroy()};
            this.makeChart(this.props)
        }
    }

    render() {
        return (
            <canvas id="myChart" width="525" height="300"></canvas>
        )
    }

}