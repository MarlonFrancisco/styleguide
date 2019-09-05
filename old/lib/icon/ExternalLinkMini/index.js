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

var ExternalLinkMini =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ExternalLinkMini, _PureComponent);

  function ExternalLinkMini() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ExternalLinkMini.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('external-link-mini') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M12.5567 0H2.45361V2.8866H9.09278L0 11.9794L2.02062 14L11.1134 4.90722V11.5464H14V1.4433C14 0.57732 13.4227 0 12.5567 0Z",
      fill: color
    }));
  };

  return ExternalLinkMini;
}(_react.PureComponent);

ExternalLinkMini.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
ExternalLinkMini.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = ExternalLinkMini;