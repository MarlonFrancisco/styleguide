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

var ExternalLink =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ExternalLink, _PureComponent);

  function ExternalLink() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ExternalLink.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('external-link') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M8.7 0H1.7V2H6.3L1.90735e-07 8.3L1.4 9.7L7.7 3.4V8H9.7V1C9.7 0.4 9.3 0 8.7 0Z",
      transform: "translate(6.30005)",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M14 15H1C0.4 15 0 14.6 0 14V1C0 0.4 0.4 0 1 0H5V2H2V13H13V10H15V14C15 14.6 14.6 15 14 15Z",
      transform: "translate(0 1)",
      fill: color
    }));
  };

  return ExternalLink;
}(_react.PureComponent);

ExternalLink.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
ExternalLink.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = ExternalLink;