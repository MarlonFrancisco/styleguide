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
  width: 14,
  height: 13
};

var Density =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Density, _PureComponent);

  function Density() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Density.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('density') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 14 13",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("rect", {
      y: "11.1426",
      width: newSize.width,
      height: "1.85714",
      rx: "0.928571",
      fill: color
    }), _react2.default.createElement("rect", {
      y: "7.42871",
      width: newSize.width,
      height: "1.85714",
      rx: "0.928571",
      fill: color
    }), _react2.default.createElement("rect", {
      width: newSize.width,
      height: "5.57143",
      rx: "1",
      fill: color
    }));
  };

  return Density;
}(_react.PureComponent);

Density.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Density.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Density;