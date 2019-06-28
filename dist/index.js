"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _taucharts = require("taucharts");

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Wrapper for TauCharts library.
 */
var TauChartReact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TauChartReact, _React$Component);

  function TauChartReact(props) {
    var _this;

    _classCallCheck(this, TauChartReact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TauChartReact).call(this, props));
    _this.displayName = 'TauChart';
    return _this;
  }

  _createClass(TauChartReact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.chart.destroy();
      this.renderChart();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.chart.destroy();
    }
    /**
     * Render the component.
     * @return {JSX.Element}
     */

  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          height: '100%'
        },
        className: this.props.className,
        ref: "placeholder"
      });
    }
    /**
     * Render the chart.
     * @return {JSX.Element}
     */

  }, {
    key: "renderChart",
    value: function renderChart() {
      this.chart = new _taucharts.Chart(Object.assign({}, this.props.options, {
        data: this.props.data
      }));

      if (this.props.height && this.props.width) {
        this.chart.renderTo(this.refs.placeholder, {
          height: this.props.height,
          width: this.props.width
        });
      } else {
        this.chart.renderTo(this.refs.placeholder);
      }
    }
    /**
     * Determine if the chart should be rerendered.
     * @return {boolean}
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(newProps) {
      if (newProps.className === this.props.className && newProps.height === this.props.height && newProps.width === this.props.width && (0, _deepEqual["default"])(newProps.options, this.props.options, {
        strict: true
      })) {
        this.chart.setData(newProps.data);
        return false;
      }

      return true;
    }
  }]);

  return TauChartReact;
}(_react["default"].Component); // TauChartReact.propTypes = {
//   data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
//   options: React.PropTypes.object.isRequired,
// };


var _default = TauChartReact;
exports["default"] = _default;