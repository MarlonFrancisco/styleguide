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
  width: 44,
  height: 44
};

var User =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(User, _PureComponent);

  function User() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = User.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('user') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M16 0C7.17733 0 0 7.17733 0 16C0 24.8227 7.17733 32 16 32C24.8227 32 32 24.8227 32 16C32 7.17733 24.8227 0 16 0ZM24.9307 25.872C24.0453 23.2413 21.5973 21.3333 18.6667 21.3333H13.3333C10.4027 21.3333 7.95733 23.2427 7.072 25.8733C4.37467 23.432 2.66667 19.916 2.66667 16C2.66667 8.648 8.648 2.66667 16 2.66667C23.352 2.66667 29.3333 8.648 29.3333 16C29.3333 19.9147 27.6267 23.4307 24.9307 25.872Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M15.9998 6.66699C13.0545 6.66699 10.6665 9.05499 10.6665 12.0003V13.3337C10.6665 16.279 13.0545 18.667 15.9998 18.667C18.9452 18.667 21.3332 16.279 21.3332 13.3337V12.0003C21.3332 9.05499 18.9452 6.66699 15.9998 6.66699Z",
      fill: color
    }));
  };

  return User;
}(_react.PureComponent);

User.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
User.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = User;