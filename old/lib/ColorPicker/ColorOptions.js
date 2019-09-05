"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Gradient = require("./Gradient");

var _Gradient2 = _interopRequireDefault(_Gradient);

var _Saturation = require("./Saturation");

var _Saturation2 = _interopRequireDefault(_Saturation);

var _Alpha = require("./Alpha");

var _Alpha2 = _interopRequireDefault(_Alpha);

var _RGBInput = require("./RGBInput");

var _RGBInput2 = _interopRequireDefault(_RGBInput);

var _HSVInput = require("./HSVInput");

var _HSVInput2 = _interopRequireDefault(_HSVInput);

var _Dropdown = require("./../../Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _ColorHistory = require("./ColorHistory");

var _ColorHistory2 = _interopRequireDefault(_ColorHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** HSV Key to Dropdown */
var HSV_INPUT = 'HSV_KEY';
/** RGB Key to Dropdown */

var RGB_INPUT = 'RGB_KEY';
/**
 * ColorOptions Component
 */

var ColorOptions =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ColorOptions, _React$Component);

  function ColorOptions() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentInput: RGB_INPUT
      /**
       * Handle input changes
       */

    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChangeInput", function (e) {
      _this.setState({
        currentInput: e.target.value
      });
    });

    return _this;
  }

  var _proto = ColorOptions.prototype;

  /**
   * Render ColorOptions Component
   */
  _proto.render = function render() {
    return _react2.default.createElement("div", {
      className: "absolute pa3 w-100 z-5 bg-base options-container br2"
    }, _react2.default.createElement("div", {
      className: "mv3 relative items-end flex w-100"
    }, _react2.default.createElement("div", {
      className: "w-75"
    }, this.state.currentInput === RGB_INPUT ? _react2.default.createElement(_RGBInput2.default, {
      color: this.props.color.rgba,
      onChange: this.props.onColorChange
    }) : _react2.default.createElement(_HSVInput2.default, {
      color: this.props.color.hsva,
      onChange: this.props.onColorChange
    })), _react2.default.createElement("div", {
      className: "w-25 mb3"
    }, _react2.default.createElement(_Dropdown2.default, {
      size: "small",
      options: [{
        value: RGB_INPUT,
        label: 'RGB'
      }, {
        value: HSV_INPUT,
        label: 'HSV'
      }],
      value: this.state.currentInput,
      onChange: this.handleOnChangeInput
    }))), _react2.default.createElement(_Saturation2.default, {
      color: this.props.color.rgba,
      onChangeComplete: this.props.onColorChange
    }), _react2.default.createElement(_Gradient2.default, {
      color: this.props.color.rgba,
      onChangeComplete: this.props.onColorChange
    }), _react2.default.createElement(_Alpha2.default, {
      color: this.props.color.rgba,
      onChangeComplete: this.props.onColorChange
    }), _react2.default.createElement(_ColorHistory2.default, this.props));
  };

  return ColorOptions;
}(_react2.default.Component);

exports.default = ColorOptions;
ColorOptions.propTypes = {
  /** Color input */
  color: _propTypes2.default.object.isRequired,

  /** ColorChange event */
  onColorChange: _propTypes2.default.func
};