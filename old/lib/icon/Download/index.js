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
  height: 16
};

var Download =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Download, _PureComponent);

  function Download() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Download.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('download') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 14 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M6.4 12C6.7 12 6.9 11.9 7.1 11.7L12.8 6L11.4 4.6L7.4 8.6V0H5.4V8.6L1.4 4.6L2.38419e-08 6L5.7 11.7C5.9 11.9 6.1 12 6.4 12Z",
      transform: "translate(0.599976)",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M14 0H0V2H14V0Z",
      transform: "translate(0 14)",
      fill: color
    }));
  };

  return Download;
}(_react.PureComponent);

Download.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Download.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Download;