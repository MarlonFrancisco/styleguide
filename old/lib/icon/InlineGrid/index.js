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

var InlineGrid =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(InlineGrid, _PureComponent);

  function InlineGrid() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = InlineGrid.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('caret-left') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 0C0.447715 0 0 0.447715 0 1V6C0 6.55228 0.447715 7 1 7H15C15.5523 7 16 6.55228 16 6V1C16 0.447715 15.5523 0 15 0H1ZM1 9C0.447715 9 0 9.44771 0 10V15C0 15.5523 0.447715 16 1 16H15C15.5523 16 16 15.5523 16 15V10C16 9.44772 15.5523 9 15 9H1Z",
      fill: color
    }));
  };

  return InlineGrid;
}(_react.PureComponent);

InlineGrid.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
InlineGrid.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = InlineGrid;