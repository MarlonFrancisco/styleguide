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
  width: 20,
  height: 20
};

var Cog =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Cog, _PureComponent);

  function Cog() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Cog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('cog') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M18.9188 8.48C17.29 8.0725 16.5175 6.2075 17.3813 4.76875C17.7838 4.09875 17.6625 3.52125 17.2638 3.12375L16.8763 2.73625C16.4788 2.33875 15.9013 2.2175 15.2313 2.61875C13.7913 3.4825 11.9262 2.71 11.52 1.08125C11.3312 0.3225 10.8362 0 10.2738 0H9.72625C9.16375 0 8.67 0.3225 8.48 1.08125C8.0725 2.71 6.2075 3.4825 4.76875 2.61875C4.09875 2.21625 3.52 2.3375 3.1225 2.735L2.735 3.1225C2.3375 3.52 2.21625 4.09875 2.61875 4.76875C3.4825 6.20875 2.71 8.07375 1.08125 8.48C0.325 8.66875 0 9.1625 0 9.72625V10.2738C0 10.8362 0.3225 11.33 1.08125 11.52C2.71 11.9275 3.4825 13.7925 2.61875 15.2313C2.21625 15.9013 2.3375 16.4788 2.73625 16.8763L3.12375 17.2638C3.5225 17.6625 4.10125 17.7825 4.76875 17.3813C6.20875 16.5175 8.07375 17.29 8.48 18.9188C8.66875 19.6775 9.16375 20 9.72625 20H10.2738C10.8362 20 11.33 19.6775 11.52 18.9188C11.9275 17.29 13.7925 16.5175 15.2313 17.3813C15.9 17.7825 16.4775 17.6625 16.8763 17.2638L17.2638 16.8763C17.6612 16.4788 17.7825 15.9013 17.3813 15.2313C16.5175 13.7913 17.29 11.9262 18.9188 11.52C19.6775 11.3312 20 10.8362 20 10.2738V9.72625C20 9.1625 19.675 8.66875 18.9188 8.48ZM10 13.75C7.92875 13.75 6.25 12.0712 6.25 10C6.25 7.92875 7.92875 6.25 10 6.25C12.0712 6.25 13.75 7.92875 13.75 10C13.75 12.0712 12.0712 13.75 10 13.75Z",
      fill: color
    }));
  };

  return Cog;
}(_react.PureComponent);

Cog.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Cog.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Cog;