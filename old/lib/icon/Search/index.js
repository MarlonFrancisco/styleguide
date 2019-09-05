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

var Search =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Search, _PureComponent);

  function Search() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('search') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M15.707 13.293L13 10.586C13.63 9.536 14 8.311 14 7C14 3.14 10.859 0 7 0C3.141 0 0 3.14 0 7C0 10.86 3.141 14 7 14C8.312 14 9.536 13.631 10.586 13L13.293 15.707C13.488 15.902 13.744 16 14 16C14.256 16 14.512 15.902 14.707 15.707L15.707 14.707C16.098 14.316 16.098 13.684 15.707 13.293ZM7 12C4.239 12 2 9.761 2 7C2 4.239 4.239 2 7 2C9.761 2 12 4.239 12 7C12 9.761 9.761 12 7 12Z",
      fill: color
    }));
  };

  return Search;
}(_react.PureComponent);

Search.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Search.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Search;