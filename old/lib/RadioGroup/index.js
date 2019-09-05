"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Radio = require("../Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RadioGroup, _React$Component);

  function RadioGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange(event);
    });

    return _this;
  }

  var _proto = RadioGroup.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        options = _this$props.options,
        value = _this$props.value,
        name = _this$props.name,
        disabled = _this$props.disabled;
    return _react2.default.createElement("div", null, options.map(function (option, i) {
      var isFirst = i === 0;
      var isLast = i === options.length - 1;
      var isDisabled = disabled || option.disabled;
      var id = name + "-" + i;
      return _react2.default.createElement("label", {
        className: "db pv2 ph4 ba b--muted-4 br3 " + (0, _classnames2.default)({
          pointer: !isDisabled
        }),
        key: id,
        style: _extends({}, !isFirst && {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTop: 'none'
        }, {}, !isLast && {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        })
      }, _react2.default.createElement("div", {
        className: "mt3"
      }, _react2.default.createElement(_Radio2.default, {
        id: id,
        name: name,
        disabled: isDisabled,
        onChange: _this2.handleChange,
        label: option.label,
        value: option.value,
        checked: value === option.value
      })));
    }));
  };

  return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes = {
  /** Options list */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    label: _propTypes2.default.node.isRequired,
    disabled: _propTypes2.default.bool
  })).isRequired,

  /** Name attribute for the radio inputs, which will also be used to generate ids */
  name: _propTypes2.default.string.isRequired,

  /** Current selected value */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** onChange event handler */
  onChange: _propTypes2.default.func.isRequired,

  /** Disable the entire group */
  disabled: _propTypes2.default.bool
};
RadioGroup.defaultProps = {
  disabled: false
};
exports.default = RadioGroup;