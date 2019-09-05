"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var CIRCLE_DIAMETER = '2.4rem';

var TotalizerIcon =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TotalizerIcon, _PureComponent);

  function TotalizerIcon() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TotalizerIcon.prototype;

  _proto.render = function render() {
    var _this$props$item = this.props.item,
        icon = _this$props$item.icon,
        iconBackgroundColor = _this$props$item.iconBackgroundColor;
    return _react2.default.createElement("div", {
      className: "flex items-center mr3"
    }, _react2.default.createElement("div", {
      className: "flex items-center justify-center br-100 pa3 bg-light-silver c-muted-1",
      style: {
        height: CIRCLE_DIAMETER,
        width: CIRCLE_DIAMETER,
        backgroundColor: iconBackgroundColor
      }
    }, icon));
  };

  return TotalizerIcon;
}(_react.PureComponent);

TotalizerIcon.propTypes = {
  item: _propTypes2.default.shape({
    icon: _propTypes2.default.node.isRequired,
    iconBackgroundColor: _propTypes2.default.string
  }).isRequired
};
exports.default = TotalizerIcon;