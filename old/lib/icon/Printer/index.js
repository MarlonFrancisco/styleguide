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
  height: 15
};

var Printer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Printer, _PureComponent);

  function Printer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Printer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('Printer') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M13.6 4H2.4C1.072 4 0 5.072 0 6.4V10.2C0 10.7523 0.447715 11.2 1 11.2H3.2V13.4C3.2 13.9523 3.64772 14.4 4.2 14.4H11.8C12.3523 14.4 12.8 13.9523 12.8 13.4V11.2H15C15.5523 11.2 16 10.7523 16 10.2V6.4C16 5.072 14.928 4 13.6 4ZM11.2 12.8H4.8V8.8H11.2V12.8ZM13.6 7.2C13.16 7.2 12.8 6.84 12.8 6.4C12.8 5.96 13.16 5.6 13.6 5.6C14.04 5.6 14.4 5.96 14.4 6.4C14.4 6.84 14.04 7.2 13.6 7.2ZM12.8 1C12.8 0.447716 12.3523 0 11.8 0H4.2C3.64771 0 3.2 0.447715 3.2 1V3.2H12.8V1Z",
      fill: color
    }));
  };

  return Printer;
}(_react.PureComponent);

Printer.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Printer.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Printer;