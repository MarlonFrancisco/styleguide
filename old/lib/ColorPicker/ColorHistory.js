"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorUtil = require("./colorUtil");

var _colorUtil2 = _interopRequireDefault(_colorUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ColorHistory Component
 */
var ColorHistory =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ColorHistory, _React$Component);

  function ColorHistory() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderColorBlock", function (colorInput) {
      var rgba = colorInput.rgba,
          hsva = colorInput.hsva,
          hex = colorInput.hex;
      var color = rgba || hsva || hex || '#FFFFFF';

      var colorInRGB = _colorUtil2.default.any.to.rgb(color);

      var styleColorBox = {
        backgroundColor: "rgba(" + colorInRGB.r + "," + colorInRGB.g + "," + colorInRGB.b + "," + colorInRGB.a + ")",
        height: '1.5rem'
      };
      var output = {
        rgba: colorInRGB,
        hsva: _colorUtil2.default.any.to.hsv(color),
        hex: _colorUtil2.default.any.to.hex(color)
      };
      return _react2.default.createElement("div", {
        onClick: function onClick() {
          return _this.props.onColorChange(output);
        },
        className: "br2 ba b--muted-4 w-100 ma1 hover-b--action-primary pointer",
        style: styleColorBox
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderColorList", function (colorList) {
      var blocks = [];

      var appendColor = function appendColor(color) {
        return color ? blocks.push(_this.renderColorBlock(color)) : blocks.push(_this.renderColorBlock(_this.props.defaultColor));
      };

      for (var i = 0; i < _this.props.historyLength; i++) {
        appendColor(colorList && colorList[i]);
      }

      return blocks;
    });

    return _this;
  }

  var _proto = ColorHistory.prototype;

  /**
   * Render ColorHistory component
   */
  _proto.render = function render() {
    var colorHistory = this.props.colorHistory;
    return _react2.default.createElement("div", {
      className: "flex"
    }, this.renderColorList(colorHistory.reverse()));
  };

  return ColorHistory;
}(_react2.default.Component);
/**
 * ColorHistory default props
 */


ColorHistory.defaultProps = {
  /** Default historyLength */
  historyLength: 9,

  /** Default color to empty blocks */
  defaultColor: {
    hex: '#FFFFFF'
  }
  /** ColorHistory Props */

};
ColorHistory.propTypes = {
  /** Color history list */
  colorHistory: _propTypes2.default.array,

  /** Color history length */
  historyLength: _propTypes2.default.number,

  /** Default color to empty blocks */
  defaultColor: _propTypes2.default.object,

  /** onColorChange event */
  onColorChange: _propTypes2.default.func
};
exports.default = ColorHistory;