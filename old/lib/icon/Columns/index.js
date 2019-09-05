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

var iconBaseDimensions = {
  width: 16,
  height: 18
};

var Columns =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Columns, _PureComponent);

  function Columns() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Columns.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBaseDimensions, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('columns') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M1 4H15V15H1V4Z",
      stroke: color,
      strokeWidth: "2"
    }), _react2.default.createElement("path", {
      d: "M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V5H0V1Z",
      fill: color
    }), _react2.default.createElement("line", {
      x1: "8.11133",
      y1: "4.70586",
      x2: "8.11133",
      y2: "14.1176",
      stroke: color,
      strokeWidth: "2"
    }));
  };

  return Columns;
}(_react.PureComponent);

Columns.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Columns.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Columns;