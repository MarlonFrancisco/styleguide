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

var Image =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Image, _PureComponent);

  function Image() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('image') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 64 64",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      d: "M52,10H12V6a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2Z",
      fill: color
    }), _react2.default.createElement("path", {
      d: "M59,12H5a2,2,0,0,0-2,2V58a2,2,0,0,0,2,2H59a2,2,0,0,0,2-2V14A2,2,0,0,0,59,12ZM21,20a4,4,0,1,1-4,4A4,4,0,0,1,21,20ZM52.87,49.493A1,1,0,0,1,52,50H12a1,1,0,0,1-.832-1.555l8-12a1,1,0,0,1,1.539-.152l7.185,7.185L39.2,28.4a.973.973,0,0,1,.852-.4,1,1,0,0,1,.8.484l12,20A1,1,0,0,1,52.87,49.493Z",
      fill: color
    }));
  };

  return Image;
}(_react.PureComponent);

Image.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Image.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Image;