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

var Upload =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Upload, _PureComponent);

  function Upload() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Upload.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('upload') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 14 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M5.4 3.4V12H7.4V3.4L11.4 7.4L12.8 6L7.1 0.3C6.7 -0.1 6.1 -0.1 5.7 0.3L2.38419e-08 6L1.4 7.4L5.4 3.4Z",
      transform: "translate(0.599976)",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M14 0H0V2H14V0Z",
      transform: "translate(0 14)",
      fill: color
    }));
  };

  return Upload;
}(_react.PureComponent);

Upload.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Upload.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Upload;