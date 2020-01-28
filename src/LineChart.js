import React, { Component } from 'react'
import Chart from "chart.js";

let myChart 

export default class LineChart extends Component {

    makeChart(props){
        const ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['days', 'numbers'], 
                datasets: [{
                    label: 'Votes',
                    data: [props.yay, props.nay],
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
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                },
            }
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps.yay !== this.props.yay || prevProps.nay !== this.props.nay){
            if(myChart){myChart.destroy()};
            this.makeChart(this.props)
        }
    }

    componentDidMount(){
        this.makeChart(this.props)
    }

    render() {
        return (
            <canvas id="myChart" width="600" height="300"></canvas>
        )
    }

}