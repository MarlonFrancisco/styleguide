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

var Grid =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Grid, _PureComponent);

  function Grid() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Grid.prototype;

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
      d: "M6 0H1C0.4 0 0 0.4 0 1V6C0 6.6 0.4 7 1 7H6C6.6 7 7 6.6 7 6V1C7 0.4 6.6 0 6 0Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M15 0H10C9.4 0 9 0.4 9 1V6C9 6.6 9.4 7 10 7H15C15.6 7 16 6.6 16 6V1C16 0.4 15.6 0 15 0Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M6 9H1C0.4 9 0 9.4 0 10V15C0 15.6 0.4 16 1 16H6C6.6 16 7 15.6 7 15V10C7 9.4 6.6 9 6 9Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M15 9H10C9.4 9 9 9.4 9 10V15C9 15.6 9.4 16 10 16H15C15.6 16 16 15.6 16 15V10C16 9.4 15.6 9 15 9Z",
      fill: color
    }));
  };

  return Grid;
}(_react.PureComponent);

Grid.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Grid.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Grid;