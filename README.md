# taucharts-react

> React wrapper for [tauCharts](https://github.com/TargetProcess/tauCharts)

## Usage

```js
import React from 'react';
import TauChart from 'taucharts-react';

const chartData = [...];
const chartOptions = {...};

...
  render() {
  	return <TauChart ref="tau" data={chartData} options={chartOptions} />
  }
...

```
See a full example [here](example/index.js) (`npm run example` for run it).

## Available props

* **data** - Array (required) - chart data
* **options** - Object (required) - chart options
* **className** - String - `className` for wrapper
* **height** - Number - chart height.
* **width** - Number - chart width.

## Tips

* Specify `height` and `width` for decreasing repainting (works well if your data changes frequently).
* You can gain access to tauchart via `this.refs.tau.chart`

## License

MIT
