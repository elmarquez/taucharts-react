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
You can gain access to tauchart via `this.refs.tau.chart`.

See a full example [here](example/index.js) (`npm run example` for run it).

## License

MIT
