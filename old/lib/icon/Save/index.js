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

var Save =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Save, _PureComponent);

  function Save() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Save.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('save') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M11.7 0.3C11.5 0.1 11.3 0 11 0H10V3C10 3.6 9.6 4 9 4H4C3.4 4 3 3.6 3 3V0H1C0.4 0 0 0.4 0 1V15C0 15.6 0.4 16 1 16H15C15.6 16 16 15.6 16 15V5C16 4.7 15.9 4.5 15.7 4.3L11.7 0.3ZM13 14H3V11C3 10.4 3.4 10 4 10H12C12.6 10 13 10.4 13 11V14Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M2 0H0V3H2V0Z",
      transform: "translate(7)",
      fill: color
    }));
  };

  return Save;
}(_react.PureComponent);

Save.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Save.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Save;