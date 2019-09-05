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
  height: 11
};

var ArrowBack =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ArrowBack, _PureComponent);

  function ArrowBack() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ArrowBack.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('arrow-back') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M5.5 15.5002C5.75781 15.5002 5.92969 15.4169 6.10156 15.2502L11 10.5002L9.79687 9.33356L6.35938 12.6669L6.35938 0H4.64063L4.64062 12.6669L1.20312 9.33356L0 10.5002L4.89844 15.2502C5.07031 15.4169 5.24219 15.5002 5.5 15.5002Z",
      transform: "translate(16.0002) rotate(90)",
      fill: color
    }));
  };

  return ArrowBack;
}(_react.PureComponent);

ArrowBack.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
ArrowBack.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = ArrowBack;