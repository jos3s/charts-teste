
import React, {useEffect} from "react";

export default function Chart(props) {
    
    //const canvasRef=useRef<HTMLCanvasElement>(null)

    function createData() {
        return {
            labels: props.data.labels,
            datasets: [{
                type:'bar',
                label: props.data.label,
                data: props.data.data,
                borderWidth: 1,
                backgroundColor: [
                    '#66BB6A'
                ]
            }]
        }
    }
    function createChart() {
        let ctx = document.getElementById(`{props.id}`);
        new Chart(ctx, {
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
            data:createData()
        })
    }

    return (
        <>
            {console.log(props)}
            <canvas id={`{props.id}`} width="100%" height="100%" />
            {createChart()}
        </>
    )
}