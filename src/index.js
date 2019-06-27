/* eslint no-unused-vars:0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'taucharts';
import equal from 'deep-equal';

/**
 * Wrapper for TauCharts library.
 */
class TauChartReact extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TauChart';
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.chart.destroy();
    this.renderChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  /**
   * Render the component.
   * @return {JSX.Element}
   */
  render() {
    return <div style={{ height: '100%' }} className={this.props.className} ref='placeholder'></div>;
  }

  /**
   * Render the chart.
   * @return {JSX.Element}
   */
  renderChart() {
    this.chart = new Chart(Object.assign({}, this.props.options, { data: this.props.data }));

    if (this.props.height && this.props.width) {
      this.chart.renderTo(this.refs.placeholder, {
        height: this.props.height,
        width: this.props.width,
      });
    } else {
      this.chart.renderTo(this.refs.placeholder);
    }
  }

  /**
   * Determine if the chart should be rerendered.
   * @return {boolean}
   */
  shouldComponentUpdate(newProps) {
    if (
      newProps.className === this.props.className &&
      newProps.height === this.props.height &&
      newProps.width === this.props.width &&
      equal(newProps.options, this.props.options, { strict: true })
    ) {
      this.chart.setData(newProps.data);
      return false;
    }
    return true;
  }
}

TauChartReact.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  options: React.PropTypes.object.isRequired,
};

export default TauChartReact;
