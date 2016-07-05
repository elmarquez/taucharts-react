import React from 'react';
import { Chart } from 'taucharts';
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
		this.chart = new Chart(
			Object.assign({}, this.props.options, { data: this.props.data })
		);

		if (this.props.height && this.props.width) {
			this.chart.renderTo(this.refs.placeholder, {
				height: this.props.height,
				width: this.props.width
			});
		} else {
			this.chart.renderTo(this.refs.placeholder);
		}

	},

	shouldComponentUpdate(newProps) {
		if (newProps.className === this.props.className &&
			newProps.height === this.props.height &&
			newProps.width === this.props.width &&
			equal(newProps.options, this.props.options, { strict: true })
		) {
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
		return (<div style={{height: '100%'}} className={this.props.className} ref="placeholder"></div>)
	}

});

export default TauChartReact;
