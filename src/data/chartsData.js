import dt from "./../data.json";

export const linearBar = {
	options: {
		chart: {
			id: "basic-bar",
		},
		xaxis: {
			categories: dt.areas[0].labels,
		},
	},
	series: [
		{
			name: "area-1",
			data: dt.areas[0].data,
		},
		{
			name: "area-2",
			data: dt.areas[0].data.map(valor=>valor-10),
		},
	],
	labels: dt.areas[0].labels,
};

export const radar = {
	options: {},
	series: [
		{
			name: "Area 1",
			data: dt.areas[0].data,
		},
	],
	labels: dt.areas[0].labels,
};

export const donut = {
	series: dt.areas[0].data,
	options: {
		labels: dt.areas[0].labels,
	},
};

const labelData = dt.areas[0].data.map((el, idx) => {
	return {
		x: dt.areas[0].labels[idx],
		y: el,
	};
});

export const treemap = {
	options: {
		chart: {
			toolbar: {
				show: false,
			},
		},
	},
	series: [
		{
			data: labelData,
		},
	],
};


export const faseDataCars = dt.areas[0].labels.map((el, idx) => {
	return {fase:el, value:dt.areas[0].data[idx]}
})