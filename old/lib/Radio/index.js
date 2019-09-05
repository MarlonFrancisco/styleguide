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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Radio =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Radio, _PureComponent);

  function Radio(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleContainerClick", function (e) {
      var disabled = _this.props.disabled;

      if (!disabled && e.target === _this.container.current) {
        _this.radio.current.click();
      }
    });

    _this.radio = _react2.default.createRef();
    _this.container = _react2.default.createRef();
    return _this;
  }

  var _proto = Radio.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        required = _this$props.required,
        value = _this$props.value;
    return _react2.default.createElement("div", {
      className: (0, _classnames2.default)('flex items-start mb3 relative', {
        pointer: !disabled
      }),
      ref: this.container,
      onClick: this.handleContainerClick
    }, _react2.default.createElement("div", null, _react2.default.createElement("div", {
      className: (0, _classnames2.default)('fake-radio relative ba br-100 mr3 flex justify-center items-center', {
        'b--muted-4 pointer': !disabled && !checked,
        'b--action-primary pointer': !disabled && checked,
        'b--muted-4 bg-muted-5': disabled
      }),
      style: {
        borderWidth: '3px',
        height: '1.25rem',
        width: '1.25rem',
        transition: 'border 100ms ease-in-out'
      }
    }, _react2.default.createElement("div", {
      className: (0, _classnames2.default)('br-100', {
        'bg-action-primary': !disabled,
        'bg-muted-3': disabled
      }),
      style: {
        height: '0.5rem',
        width: '0.5rem',
        transform: "scale(" + (checked ? 1 : 0) + ")",
        transition: "transform 80ms " + (checked ? 'ease-out' : 'ease-in')
      }
    }))), _react2.default.createElement("input", {
      checked: checked,
      className: (0, _classnames2.default)('absolute o-0', {
        pointer: !disabled
      }),
      disabled: disabled,
      required: required,
      id: id,
      name: name,
      onChange: onChange,
      type: "radio",
      value: value,
      style: {
        height: '1.5rem',
        width: '1.5rem'
      },
      ref: this.radio
    }), _react2.default.createElement("label", {
      style: {
        wordBreak: 'break-word'
      },
      className: (0, _classnames2.default)({
        'c-disabled': disabled
      }, {
        'c-on-base pointer': !disabled
      }, 'flex flex-auto'),
      htmlFor: id
    }, label));
  };

  return Radio;
}(_react.PureComponent);

Radio.defaultProps = {
  checked: false,
  disabled: false,
  required: false
};
Radio.propTypes = {
  /** (Button spec attribute) */
  checked: _propTypes2.default.bool,

  /** (Button spec attribute) */
  disabled: _propTypes2.default.bool,

  /** (Button spec attribute) */
  id: _propTypes2.default.string.isRequired,

  /** Radio label */
  label: _propTypes2.default.node.isRequired,

  /** (Button spec attribute) */
  name: _propTypes2.default.string.isRequired,

  /** onChange event */
  onChange: _propTypes2.default.func.isRequired,

  /** (Button spec attribute) */
  required: _propTypes2.default.bool,

  /** (Button spec attribute) */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};
exports.default = Radio;