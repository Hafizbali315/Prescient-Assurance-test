import React from 'react'
import Chart from 'react-apexcharts'

const GraphCard = () => {
	const donutChartSettings = {
		series: [70, 60, 70],

		options: {
			colors: ['#d971e4', '#feb76e', '#7b5de4'],
			dataLabels: {
				enabled: false,
			},

			grid: {
				show: false,
			},

			chart: {
				type: 'donut',
			},

			plotOptions: {
				pie: {
					expandOnClick: false,

					donut: {
						labels: {
							show: true,

							value: {
								fontWeight: 500,
								fontSize: '25px',
								fontFamily: 'Poppins',
							},
							total: {
								show: true,
								showAlways: true,
								label: 'TICKETS',
								fontFamily: 'Poppins',
								fontWeight: 600,
								fontSize: '14px',
							},
						},
						name: {
							fontSize: '50px',
						},
					},
				},
			},

			tooltip: {
				enabled: false,
			},

			legend: {
				show: false,
			},

			series: {
				show: false,
			},
		},
	}

	return (
		<div className="card graph_card">
			<div className="chart_container">
				<Chart
					style={{ height: '100%', marginLeft: '-30px' }}
					options={donutChartSettings.options}
					series={donutChartSettings.series}
					type="donut"
				/>

				<div className="labels_right">
					<div className="label_container">
						<div className="top">
							<div className="label">
								<span className="circle" style={{ background: '#d46fe0' }}></span>
								Resolved
							</div>

							<div className="total">10</div>
						</div>

						<div className="range">
							<div className="value" style={{ background: '#d46fe0', width: '50%' }}></div>
						</div>
					</div>

					<div className="label_container">
						<div className="top">
							<div className="label">
								<span className="circle" style={{ background: '#7657e7' }}></span>
								Under Process
							</div>

							<div className="total">10</div>
						</div>

						<div className="range">
							<div className="value" style={{ background: '#7657e7', width: '20%' }}></div>
						</div>
					</div>

					<div className="label_container">
						<div className="top">
							<div className="label">
								<span className="circle" style={{ background: '#feb66e' }}></span>
								Unassigned
							</div>

							<div className="total">10</div>
						</div>

						<div className="range">
							<div className="value" style={{ background: '#feb66e', width: '80%' }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GraphCard
