"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Check = require("../icon/Check");

var _Check2 = _interopRequireDefault(_Check);

var _CheckPartial = require("../icon/CheckPartial");

var _CheckPartial2 = _interopRequireDefault(_CheckPartial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Checkbox, _PureComponent);

  function Checkbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      return !_this.props.disabled && _this.props.onChange(e);
    });

    return _this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        required = _this$props.required,
        value = _this$props.value,
        partial = _this$props.partial;
    return _react2.default.createElement("div", {
      className: (0, _classnames2.default)('flex items-center relative', {
        pointer: !disabled
      })
    }, _react2.default.createElement("div", {
      className: (0, _classnames2.default)('relative w1 h1', {
        mr3: label
      })
    }, _react2.default.createElement("div", {
      className: (0, _classnames2.default)('h1 w1 absolute ba bw1 br1 ', {
        'b--muted-4 pointer': !checked && !disabled,
        'b--disabled bg-muted-5 c-disabled': !checked && disabled,
        'b--action-primary bg-action-primary': checked && !disabled,
        'b--muted-5 bg-muted-5': partial && !checked && disabled,
        'b--disabled bg-disabled': checked && disabled,
        mr3: label
      }),
      style: {
        transition: 'background 20ms, border 100ms',
        backgroundColor: partial && !checked && !disabled && '#dbe9fd',
        borderColor: partial && !checked && !disabled && '#dbe9fd'
      }
    }), _react2.default.createElement("div", {
      className: "absolute w1 h1 flex o-100",
      style: {
        left: 0
      }
    }, _react2.default.createElement("div", {
      className: "absolute top-0 left-0 bottom-0 overflow-hidden w-100 flex items-center align-center justify-center " + (disabled ? 'c-on-disabled' : 'c-on-action-primary'),
      style: {
        transition: 'right 110ms ease-in-out 30ms'
      }
    }, checked ? _react2.default.createElement(_Check2.default, {
      size: 12,
      color: "currentColor"
    }) : partial && _react2.default.createElement(_CheckPartial2.default, {
      size: 12,
      color: disabled ? '#979899' : '#1346d8'
    }))), _react2.default.createElement("input", {
      checked: checked,
      className: (0, _classnames2.default)('h1 w1 absolute o-0', {
        pointer: !disabled
      }),
      disabled: disabled,
      required: required,
      id: id,
      name: name,
      onChange: this.handleChange,
      type: "checkbox",
      value: value,
      tabIndex: 0
    })), label && _react2.default.createElement("label", {
      className: (0, _classnames2.default)({
        'c-disabled': disabled
      }, {
        'c-on-base pointer': !disabled
      }),
      htmlFor: id
    }, label));
  };

  return Checkbox;
}(_react.PureComponent);

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  required: false,
  partial: false
};
Checkbox.propTypes = {
  /** (Input spec attribute) */
  checked: _propTypes2.default.bool,

  /** (Input spec attribute) */
  disabled: _propTypes2.default.bool,

  /** (Input spec attribute) */
  id: _propTypes2.default.string.isRequired,

  /** Checkbox label */
  label: _propTypes2.default.node,

  /** (Input spec attribute) */
  name: _propTypes2.default.string.isRequired,

  /** onChange event */
  onChange: _propTypes2.default.func.isRequired,

  /** (Input spec attribute) */
  required: _propTypes2.default.bool,

  /** (Input spec attribute) */
  value: _propTypes2.default.string,

  /** Partial state */
  partial: _propTypes2.default.bool
};
exports.default = Checkbox;