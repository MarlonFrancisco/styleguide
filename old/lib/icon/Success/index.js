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

var Success =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Success, _PureComponent);

  function Success() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Success.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        solid = _this$props.solid,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);

    if (solid) {
      return _react2.default.createElement("svg", {
        className: (0, _utils.baseClassname)('success', 'solid') + " " + (block ? 'db' : ''),
        width: newSize.width,
        height: newSize.height,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react2.default.createElement("path", {
        d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM7 11.4L3.6 8L5 6.6L7 8.6L11 4.6L12.4 6L7 11.4Z",
        fill: color
      }));
    }

    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('success') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M3.414 6.828L-3.43323e-08 3.414L1.414 2L3.414 4L7.414 -3.43323e-08L8.828 1.414L3.414 6.828Z",
      transform: "translate(3.58606 4.586)",
      fill: color
    }));
  };

  return Success;
}(_react.PureComponent);

Success.defaultProps = {
  color: 'currentColor',
  size: 16,
  solid: false,
  block: false
};
Success.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  solid: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};
exports.default = Success;