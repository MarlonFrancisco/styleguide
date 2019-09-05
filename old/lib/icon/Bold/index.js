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

var Bold =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Bold, _PureComponent);

  function Bold() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Bold.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        size = _this$props.size,
        block = _this$props.block;
    var newSize = (0, _utils.calcIconSize)(iconBase, size);
    return _react2.default.createElement("svg", {
      className: (0, _utils.baseClassname)('bold') + " " + (block ? 'db' : ''),
      width: newSize.width,
      height: newSize.height,
      viewBox: "0 0 64 64",
      fill: color,
      xmlns: "http://www.w3.org/2000/svg"
    }, _react2.default.createElement("path", {
      fill: color,
      d: "M43.06677,30.83765v-0.24634c5.05432-1.65662,10.10852-6.04956,10.10852-13.92456 C53.17529,8.4646,49.19739,2,35.02649,2H8v6l3.26491,1.0883C12.89828,9.63276,14,11.16131,14,12.88304v38.23392 c0,1.72172-1.10172,3.25028-2.73509,3.79473L8,56v6h26.28088c13.01013,0,22.62268-4.22766,22.62268-16.49219 C56.90356,37.22119,52.51404,31.91736,43.06677,30.83765z M26,10h7c4.97058,0,9,4.02942,9,9s-4.02942,9-9,9h-7V10z M35,54h-9V36h9 c4.97058,0,9,4.02942,9,9S39.97058,54,35,54z"
    }));
  };

  return Bold;
}(_react.PureComponent);

Bold.defaultProps = {
  color: 'currentColor',
  size: 20,
  block: false
};
Bold.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Bold;