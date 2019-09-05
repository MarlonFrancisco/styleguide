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
  width: 17,
  height: 16
};

var ArrowUp =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ArrowUp, _PureComponent);

  function ArrowUp() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ArrowUp.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('arrow-up') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 17 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M8.39162 16C8.78498 16 9.04721 15.8667 9.30945 15.6L16.7832 8L14.9476 6.13333L9.70281 11.4667V0H7.08043V11.4667L1.83567 6.13333L3.12612e-08 8L7.47379 15.6C7.73602 15.8667 7.99826 16 8.39162 16Z",
      transform: "translate(16.7832 16) rotate(-180)",
      fill: color
    }));
  };

  return ArrowUp;
}(_react.PureComponent);

ArrowUp.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
ArrowUp.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = ArrowUp;