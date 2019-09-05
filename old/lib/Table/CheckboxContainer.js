"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require("../Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(CheckboxContainer, _Component);

  function CheckboxContainer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CheckboxContainer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        partial = _this$props.partial,
        id = _this$props.id,
        _onClick = _this$props.onClick,
        disabled = _this$props.disabled;
    return _react2.default.createElement("div", {
      className: "flex items-center justify-center aspect-ratio--object"
    }, _react2.default.createElement("div", {
      className: "br2 h2 w2 flex items-center justify-center",
      onClick: function onClick(e) {
        e.stopPropagation();

        _onClick(id); // prevents the onRowClick event from happening

      }
    }, _react2.default.createElement(_Checkbox2.default, {
      checked: checked,
      partial: partial,
      value: "" + id,
      id: "" + id,
      name: "row_" + id,
      disabled: disabled
    })));
  };

  return CheckboxContainer;
}(_react.Component);

_defineProperty(CheckboxContainer, "defaultProps", {
  partial: false,
  disabled: false
});

_defineProperty(CheckboxContainer, "propTypes", {
  checked: _propTypes2.default.bool.isRequired,
  partial: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
});

exports.default = CheckboxContainer;