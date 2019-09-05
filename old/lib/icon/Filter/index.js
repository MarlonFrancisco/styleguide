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

var Filter =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Filter, _PureComponent);

  function Filter() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Filter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        solid = _this$props.solid,
        block = _this$props.block;
    var iconBase = {
      width: solid ? 16 : 18,
      height: solid ? 16 : 21
    };
    var newSize = (0, _utils.calcIconSize)(iconBase, size);

    if (solid) {
      return _react2.default.createElement("svg", {
        className: (0, _utils.baseClassname)('filter', 'solid') + " " + (block ? 'db' : ''),
        width: newSize.width,
        height: newSize.height,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react2.default.createElement("path", {
        d: "M15 0H1C0.4 0 0 0.4 0 1V3C0 3.3 0.1 3.6 0.4 3.8L6 8.5V15C6 15.4 6.2 15.8 6.6 15.9C6.7 16 6.9 16 7 16C7.3 16 7.5 15.9 7.7 15.7L9.7 13.7C9.9 13.5 10 13.3 10 13V8.5L15.6 3.8C15.9 3.6 16 3.3 16 3V1C16 0.4 15.6 0 15 0Z",
        fill: color
      }));
    }

    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('filter') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 18 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M16 3.16441C16 3.45327 15.8751 3.72803 15.6574 3.91794L10.1204 8.74873C9.90269 8.93864 9.77778 9.21339 9.77778 9.50226V16.5773C9.77778 16.9536 9.56663 17.2979 9.23135 17.4686L7.67579 18.2602C7.0105 18.5988 6.22222 18.1155 6.22222 17.369V9.50226C6.22222 9.21339 6.09731 8.93864 5.87964 8.74873L0.342585 3.91794C0.124915 3.72803 0 3.45327 0 3.16441V1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V3.16441Z",
      transform: "translate(1 1)",
      stroke: color,
      strokeWidth: "2",
      strokeMiterlimit: "10",
      strokeLinecap: "square"
    }));
  };

  return Filter;
}(_react.PureComponent);

Filter.defaultProps = {
  color: 'currentColor',
  size: 16,
  solid: false,
  block: false
};
Filter.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  solid: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};
exports.default = Filter;