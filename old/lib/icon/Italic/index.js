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

var Italic =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Italic, _PureComponent);

  function Italic() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Italic.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('italic') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 64 64",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      fill: color,
      d: "M18,62v-4l5.25626-0.64264c1.16066-0.08098,1.32598-0.41163,1.49131-1.65664l6.62993-47.40145 c0.16533-1.24501,0.08435-1.57566-1.07631-1.66001L26,6V2h20v4l-5.58691,0.72361c-1.24501,0.16533-1.32936,0.33065-1.49469,1.57566 l-6.7109,47.32048c-0.16533,1.32598-0.16533,1.49131,1.07631,1.65664L38,58v4H18z"
    }));
  };

  return Italic;
}(_react.PureComponent);

Italic.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Italic.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Italic;