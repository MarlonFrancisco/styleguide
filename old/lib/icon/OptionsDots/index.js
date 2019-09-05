"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var iconBase = {
  width: 16,
  height: 16
};

var OptionsDots =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(OptionsDots, _PureComponent);

  function OptionsDots() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = OptionsDots.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block,
        radius = _this$props.radius;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      viewBox: "0 0 32 32",
      className: "" + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height
    }, _react2.default.createElement("g", {
      className: "nc-icon-wrapper",
      fill: color
    }, _react2.default.createElement("g", {
      className: "nc-interact_dots-close-o-32",
      transform: "rotate(90 16 16)"
    }, ' ', _react2.default.createElement("g", {
      className: "nc-dot_left",
      transform: "translate(0)"
    }, ' ', _react2.default.createElement("circle", {
      cx: "6",
      cy: "16",
      r: radius,
      fill: color,
      "data-cap": "butt",
      "data-stroke": "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter"
    }), ' ', _react2.default.createElement("circle", {
      cx: "6",
      cy: "16",
      r: radius,
      fill: "none",
      stroke: color,
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      strokeWidth: "2"
    }), ' '), ' ', _react2.default.createElement("g", {
      className: "nc-dot_right",
      transform: "translate(-0)"
    }, ' ', _react2.default.createElement("circle", {
      cx: "26",
      cy: "16",
      r: radius,
      fill: color,
      "data-cap": "butt",
      "data-stroke": "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter"
    }), ' ', _react2.default.createElement("circle", {
      cx: "26",
      cy: "16",
      r: radius,
      fill: "none",
      stroke: color,
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      strokeWidth: "2"
    }), ' '), ' ', _react2.default.createElement("g", {
      className: "nc-dot_center"
    }, ' ', _react2.default.createElement("circle", {
      cx: "16",
      cy: "16",
      r: radius,
      fill: color,
      "data-cap": "butt",
      "data-stroke": "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter"
    }), ' ', _react2.default.createElement("circle", {
      cx: "16",
      cy: "16",
      r: radius,
      fill: "none",
      stroke: color,
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      strokeWidth: "2"
    }), ' '), ' ', _react2.default.createElement("path", {
      className: "nc-line_top-right",
      "data-cap": "none",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16 16L27 5",
      strokeDasharray: "15.56 15.56",
      strokeDashoffset: "15.56",
      opacity: "0"
    }), ' ', _react2.default.createElement("path", {
      className: "nc-line_bottom-left",
      "data-cap": "none",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 27l11-11",
      strokeDasharray: "15.56 15.56",
      strokeDashoffset: "-15.56",
      opacity: "0"
    }), ' ', _react2.default.createElement("path", {
      className: "nc-line_bottom-right",
      "data-cap": "none",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16 16l11 11",
      strokeDasharray: "15.56 15.56",
      strokeDashoffset: "15.56",
      opacity: "0"
    }), ' ', _react2.default.createElement("path", {
      className: "nc-line_top-left",
      "data-cap": "none",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 5l11 11",
      strokeDasharray: "15.56 15.56",
      strokeDashoffset: "-15.56",
      opacity: "0"
    }), ' ')));
  };

  return OptionsDots;
}(_react.PureComponent);

OptionsDots.defaultProps = {
  color: '#444444',
  size: 16,
  radius: 2,
  block: false
};
OptionsDots.propTypes = {
  color: _propTypes2.default.string,
  radius: _propTypes2.default.number,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = OptionsDots;