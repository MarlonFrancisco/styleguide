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

var Warning =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Warning, _PureComponent);

  function Warning() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Warning.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        solid = _this$props.solid,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);

    if (solid) {
      return _react2.default.createElement("svg", {
        className: (0, _utils.baseClassname)('warning', 'solid') + " " + (block ? 'db' : ''),
        width: newSize.width,
        height: newSize.height,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react2.default.createElement("path", {
        d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 12C7.4 12 7 11.6 7 11C7 10.4 7.4 10 8 10C8.6 10 9 10.4 9 11C9 11.6 8.6 12 8 12ZM9 9H7V4H9V9Z",
        fill: color
      }));
    }

    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('warning') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M2 0H0V5H2V0Z",
      transform: "translate(7 4)",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z",
      transform: "translate(7 10)",
      fill: color
    }));
  };

  return Warning;
}(_react.PureComponent);

Warning.defaultProps = {
  color: 'currentColor',
  size: 16,
  solid: false,
  block: false
};
Warning.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  solid: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};
exports.default = Warning;