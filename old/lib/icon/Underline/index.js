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
  width: 18,
  height: 12
};

var Underline =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Underline, _PureComponent);

  function Underline() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Underline.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('underline') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 64 64",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M55,4H37V8h4a2,2,0,0,1,2,2V34.51c0,5.742-4.187,10.879-9.9,11.436A11.012,11.012,0,0,1,21,35V10a2,2,0,0,1,2-2h4V4H9V8h4a2,2,0,0,1,2,2V34.4c0,9.046,6.811,16.957,15.836,17.561A17.018,17.018,0,0,0,49,35V10a2,2,0,0,1,2-2h4Z",
      fill: color
    }), _react2.default.createElement("path", {
      fill: color,
      d: "M62,60H2a1,1,0,0,1,0-2H62a1,1,0,0,1,0,2Z"
    }));
  };

  return Underline;
}(_react.PureComponent);

Underline.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Underline.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Underline;