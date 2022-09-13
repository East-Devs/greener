import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { pieMotion } from '../../../../helper/framermotion/expand';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Animate } from '../../../../helper/functions';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	responsive: true,
	maintainAspectRatio: true,
	layout: {
		padding: {
			bottom(ctx) {
				const chart = ctx.chart;
				const offset = chart.data.datasets[0].offset || 0;
				return offset / 2;
			},
		},
	},
	plugins: {
		title: {
			display: true,
		},
		datalabels: {
			color: '#ffffff',
			formatter: (value) => {
				return value;
			},
		},
		legend: {
			display: false,
		},
	},
};

function PieChart({ donutChart = [] }) {
	const data = {
		datasets: [
			{
				label: '# of Votes',
				data: Object.values(donutChart).reverse(),
				backgroundColor: ['#283C7E', '#91C251'],
				offset: 8,
			},
		],
	};
	return (
		<div className='pie_div'>
			<motion.div
				className='pie_wrapper'
				animate={Animate}
				variants={pieMotion}
			>
				<Pie plugins={[ChartDataLabels]} data={data} options={options} />
			</motion.div>
			<div className='p-2 sc'>
				<p className='pie_heading fs-16'>
					{`Toutes les expeditions - ${donutChart.total} exp (100%)`}
				</p>
				<p className='pie_heading fs-16'>{`Votre selection - ${donutChart.filteredtotal} exp (25%)`}</p>
			</div>
		</div>
	);
}

export default PieChart;
