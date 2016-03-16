import React from 'react';
import TauCharts from 'taucharts';
import equal from 'deep-equal';

const TauChartReact = React.createClass({
	displayName: 'TauChart',

	propTypes: {
		options: React.PropTypes.object.isRequired,
		data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},

	componentWillUnmount() {
		this.chart.destroy();
	},

	componentDidMount() {
		this.renderChart();
	},

	renderChart() {
		this.chart = new TauCharts.Chart(
			Object.assign({}, this.props.options, { data: this.props.data })
		);
		this.chart.renderTo(this.refs.placeholder);
	},

	shouldComponentUpdate(newProps) {
		if (equal(newProps.options, this.props.options, { strict: true })) {
			this.chart.setData(newProps.data);
			return false;
		}
		return true;
	},

	componentDidUpdate() {
		this.chart.destroy();
		this.renderChart();
	},

	render() {
		return (<div ref="placeholder"></div>)
	}

});

export default TauChartReact;
