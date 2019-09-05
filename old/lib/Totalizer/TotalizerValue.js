"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = require("../Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var TotalizerValue =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TotalizerValue, _PureComponent);

  function TotalizerValue() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TotalizerValue.prototype;

  _proto.render = function render() {
    var _this$props$item = this.props.item,
        value = _this$props$item.value,
        isLoading = _this$props$item.isLoading;

    if (isLoading) {
      return _react2.default.createElement("div", {
        className: "mt2 c-muted-1"
      }, _react2.default.createElement(_Spinner2.default, {
        size: 14,
        color: "currentColor"
      }));
    }

    if (value == null) {
      return null;
    }

    return _react2.default.createElement("div", {
      className: "f4 fw5 c-on-base"
    }, value);
  };

  return TotalizerValue;
}(_react.PureComponent);

TotalizerValue.propTypes = {
  item: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.node,
    iconBackgroundColor: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    isLoading: _propTypes2.default.bool
  })
};
exports.default = TotalizerValue;