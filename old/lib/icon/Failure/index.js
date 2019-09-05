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

var Failure =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Failure, _PureComponent);

  function Failure() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Failure.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        solid = _this$props.solid,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);

    if (solid) {
      return _react2.default.createElement("svg", {
        className: (0, _utils.baseClassname)('failure', 'solid') + " " + (block ? 'db' : ''),
        width: newSize.width,
        height: newSize.height,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react2.default.createElement("path", {
        d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.5 10.1L10.1 11.5L8 9.4L5.9 11.5L4.5 10.1L6.6 8L4.5 5.9L5.9 4.5L8 6.6L10.1 4.5L11.5 5.9L9.4 8L11.5 10.1Z",
        fill: color
      }));
    }

    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('failure') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M5.6 0L3.5 2.1L1.4 0L0 1.4L2.1 3.5L0 5.6L1.4 7L3.5 4.9L5.6 7L7 5.6L4.9 3.5L7 1.4L5.6 0Z",
      transform: "translate(4.5 4.5)",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z",
      fill: color
    }));
  };

  return Failure;
}(_react.PureComponent);

Failure.defaultProps = {
  color: 'currentColor',
  size: 16,
  solid: false,
  block: false
};
Failure.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  solid: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};
exports.default = Failure;