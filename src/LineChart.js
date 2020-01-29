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
                    data: [],
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
            <canvas id="myChart" width="525" height="300"></canvas>
        )
    }

}