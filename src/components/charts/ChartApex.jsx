import react from "react";
import Chart from "react-apexcharts";

export default function ChartApex(props){

    return (
        <Chart
			options={props.options}
			series={props.series}
			type={props.type}
			width={props.width}
			height={props.height}
		/>
    )
}