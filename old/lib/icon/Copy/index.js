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
  height: 18
};

var Copy =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Copy, _PureComponent);

  function Copy() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Copy.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('copy') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M6.4 0H9.2C10.3046 0 11.2 0.895431 11.2 2V9.2C11.2 10.3046 10.3046 11.2 9.2 11.2H2C0.89543 11.2 0 10.3046 0 9.2V6.4",
      transform: "translate(5.80005 12.2) rotate(-90)",
      stroke: color,
      strokeWidth: "2",
      strokeMiterlimit: "10",
      strokeLinecap: "square"
    }), _react2.default.createElement("path", {
      d: "M9.2 0H2C0.895431 0 0 0.89543 0 2V9.2C0 10.3046 0.89543 11.2 2 11.2H9.2C10.3046 11.2 11.2 10.3046 11.2 9.2V2C11.2 0.895431 10.3046 0 9.2 0Z",
      transform: "translate(1 17) rotate(-90)",
      stroke: color,
      strokeWidth: "2",
      strokeMiterlimit: "10",
      strokeLinecap: "square"
    }));
  };

  return Copy;
}(_react.PureComponent);

Copy.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Copy.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Copy;