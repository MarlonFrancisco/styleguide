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

var Deny =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Deny, _PureComponent);

  function Deny() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Deny.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('deny') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M11.9071 0.707107C11.5166 0.316582 10.8834 0.316582 10.4929 0.707107L7 4.2L3.50711 0.707107C3.11658 0.316582 2.48342 0.316583 2.09289 0.707107L0.707107 2.09289C0.316582 2.48342 0.316583 3.11658 0.707107 3.50711L4.2 7L0.707107 10.4929C0.316582 10.8834 0.316583 11.5166 0.707107 11.9071L2.09289 13.2929C2.48342 13.6834 3.11658 13.6834 3.50711 13.2929L7 9.8L10.4929 13.2929C10.8834 13.6834 11.5166 13.6834 11.9071 13.2929L13.2929 11.9071C13.6834 11.5166 13.6834 10.8834 13.2929 10.4929L9.8 7L13.2929 3.50711C13.6834 3.11658 13.6834 2.48342 13.2929 2.09289L11.9071 0.707107Z",
      fill: color
    }));
  };

  return Deny;
}(_react.PureComponent);

Deny.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Deny.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Deny;