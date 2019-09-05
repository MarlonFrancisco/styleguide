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
  height: 14
};

var Minus =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Minus, _PureComponent);

  function Minus() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Minus.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block,
        solid = _this$props.solid;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return solid ? _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('minus') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      xmlns: "http://www.w3.org/2000/svg",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 16C12.418 16 16 12.4185 16 8C16 3.58154 12.418 0 8 0C3.58203 0 0 3.58154 0 8C0 12.4185 3.58203 16 8 16ZM5 7C4.44727 7 4 7.44775 4 8C4 8.55225 4.44727 9 5 9H11C11.5527 9 12 8.55225 12 8C12 7.44775 11.5527 7 11 7H5Z",
      fill: color
    })) : _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('minus') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("circle", {
      cx: "8",
      cy: "8",
      r: "7",
      stroke: color,
      strokeWidth: "2"
    }), _react2.default.createElement("path", {
      d: "M4 8.5V7.5C4 7.22386 4.22386 7 4.5 7H11.5C11.7761 7 12 7.22386 12 7.5V8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5Z",
      fill: color
    }));
  };

  return Minus;
}(_react.PureComponent);

Minus.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false,
  solid: false
};
Minus.propTypes = {
  color: _propTypes2.default.string,
  solid: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Minus;