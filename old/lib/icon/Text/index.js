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
  width: 18,
  height: 12
};

var Text =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Text, _PureComponent);

  function Text() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('text') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 64 64",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      fill: color,
      d: "M58,2H6C5.448,2,5,2.448,5,3v12c0,0.552,0.448,1,1,1h2c0.265,0,0.52-0.105,0.707-0.293L14.414,10H27v42.586 l-5.707,5.707C21.105,58.48,21,58.735,21,59v2c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1v-2c0-0.265-0.105-0.52-0.293-0.707 L37,52.586V10h12.465l3.703,5.555C53.354,15.833,53.666,16,54,16h4c0.552,0,1-0.448,1-1V3C59,2.448,58.552,2,58,2z"
    }));
  };

  return Text;
}(_react.PureComponent);

Text.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Text.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Text;