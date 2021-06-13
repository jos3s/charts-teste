import React, {useEffect} from "react";
import Chart from "chart.js/auto";

import dt from "../../data.json"

let data = {
    labels: dt.areas[0].labels,
    datasets: [{
        type:'bar',
        label: dt.areas[0].label,
        data: dt.areas[0].data,
        borderWidth: 1,
        backgroundColor: [
            '#66BB6A'
        ]
    }]
}

function BarChart() {
    
    useEffect(() => {
        let ctx = document.getElementById("myChart")
        new Chart(ctx, {
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })

        console.log(data)
    }, [data])

    return (
        <canvas id="myChart" width="400" height="100"></canvas>
    )
}



export default BarChart;