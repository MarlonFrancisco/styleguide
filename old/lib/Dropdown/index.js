"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowDownIcon = require("./ArrowDownIcon");

var _ArrowDownIcon2 = _interopRequireDefault(_ArrowDownIcon);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this; // The initial value sent to the dropdown is kept in order to know
    // whether or not to create and keep a first disabled option.
    // If the initial value is invalid/empty, an empty option is kept
    // so the select will have an empty state. Otherwise, the first
    // value would automatically be chosen.
    // However, you can't select a null/undefined option, so nil values
    // are transformed to empty string.

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;
      var value = e.target.value;
      !disabled && onChange && onChange(e, value);
    });

    _defineProperty(_assertThisInitialized(_this), "getOptionFromValue", function (value) {
      var options = _this.props.options;
      var option = options.filter(function (option) {
        return option.value === value;
      })[0];
      if (!option) return null;
      return option;
    });

    _defineProperty(_assertThisInitialized(_this), "getDropdownIdentification", function () {
      var _this$props2 = _this.props,
          label = _this$props2.label,
          id = _this$props2.id,
          options = _this$props2.options;

      if (label) {
        return "Dropdown with the label \"" + label + "\"";
      } else if (id) {
        return "Dropdown #" + id;
      }

      return "Dropdown with the options " + options.map(function (option) {
        return option.label;
      }).join(', ');
    });

    _defineProperty(_assertThisInitialized(_this), "getPlaceholder", function () {
      var _this$props3 = _this.props,
          placeholder = _this$props3.placeholder,
          label = _this$props3.label,
          helpText = _this$props3.helpText;
      var placeholderValue = placeholder || label || helpText || '';

      if (placeholderValue === '' && !_this.sentPlaceholderWarning) {
        var identificationText = _this.getDropdownIdentification();

        console.warn("The following dropdown has a placeholder option, but no placeholder text. Please use at least one of these props: placeholder, label, or helpText. " + identificationText);
        _this.sentPlaceholderWarning = true;
      }

      return placeholderValue;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedOption", function () {
      return _this.getOptionFromValue(_this.props.value);
    });

    _this.initialValue = props.value == null ? '' : props.value;
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.getValueLabel = function getValueLabel() {
    var selectedOption = this.getSelectedOption();
    return selectedOption ? selectedOption.label : this.getPlaceholder();
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.size === 'x-large') {
      console.warn('Dropdown: The value "x-large" for the prop "size" is deprecated. In the next major version, it will be equivalent to "large", and removed altogether in future versions');
    }
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        label = _this$props4.label,
        id = _this$props4.id,
        value = _this$props4.value,
        size = _this$props4.size,
        disabled = _this$props4.disabled,
        options = _this$props4.options,
        error = _this$props4.error,
        errorMessage = _this$props4.errorMessage,
        helpText = _this$props4.helpText,
        placeholder = _this$props4.placeholder,
        preventTruncate = _this$props4.preventTruncate,
        autoFocus = _this$props4.autoFocus,
        form = _this$props4.form,
        name = _this$props4.name,
        required = _this$props4.required,
        variation = _this$props4.variation;
    var hasValidInitialValue = this.getOptionFromValue(this.initialValue) !== null;
    var isPlaceholder = this.getSelectedOption() === null;
    var isInline = variation.toLowerCase() === 'inline';
    var width;
    var iconSize;
    var classes = 'bg-transparent bn w-100 h-100 ';
    var containerClasses = (isInline ? '' : 'bw1') + " br2 relative ";
    var selectClasses = 'o-0 absolute top-0 left-0 h-100 w-100 bottom-00 ';
    var labelClasses = 'vtex-dropdown__label db mb3 w-100 c-on-base ';
    var valueLabel = this.getValueLabel();
    var showCaption = !valueLabel;
    var color = isInline ? 'c-link ' : 'c-on-base ';
    classes += disabled ? '' : 'pointer ';
    selectClasses += disabled ? '' : 'pointer ';
    classes += !disabled && valueLabel ? !isPlaceholder ? color : 'c-muted-2 ' : 'c-disabled ';

    switch (size) {
      case 'small':
        classes += isInline ? 'ph2 ' : 'pl5 pr3 ';
        selectClasses += 't-small ';
        labelClasses += 't-small ';
        containerClasses += (isInline ? 'h-auto' : 'h-small') + " t-small ";
        iconSize = 18;
        break;

      case 'large':
        classes += isInline ? 'ph2 ' : 'ph5 ';
        selectClasses += 't-body ';
        labelClasses += 't-body ';
        containerClasses += (isInline ? 'h-auto' : 'h-large') + " t-body ";
        iconSize = 18;
        break;

      case 'x-large':
        // DEPRECATED
        classes += 't-body pv5 ph5 ';
        selectClasses += 't-body ';
        labelClasses += 't-body ';
        iconSize = 22;
        break;

      default:
        classes += isInline ? 'ph2 ' : 'pl5 pr4 ';
        selectClasses += 't-small ';
        labelClasses += 't-small ';
        containerClasses += (isInline ? 'h-auto' : 'h-regular') + " t-small ";
        iconSize = 18;
        break;
    }

    var containerStyle = {
      width: width
    };

    if (disabled) {
      containerClasses += 'ba b--disabled bw1 bg-disabled ';
    } else if (error || errorMessage) {
      containerClasses += 'ba b--danger hover-b--danger ';
    } else if (isInline) {
      containerClasses += 'fw5 ';
    } else {
      containerClasses += 'bg-base hover-b--muted-3 ba b--muted-4 ';
    }

    return _react2.default.createElement("div", {
      className: "vtex-dropdown " + (isInline ? 'vtex-dropdown--inline dib' : '')
    }, _react2.default.createElement("label", null, label && _react2.default.createElement("span", {
      className: labelClasses
    }, label), _react2.default.createElement("div", {
      className: containerClasses,
      style: containerStyle
    }, _react2.default.createElement("div", {
      id: id,
      className: "vtex-dropdown__button " + classes
    }, _react2.default.createElement("div", {
      className: "flex " + (isInline ? '' : 'h-100')
    }, _react2.default.createElement("div", {
      className: "vtex-dropdown__caption flex-auto tl truncate " + (isInline ? '' : 'h-100')
    }, _react2.default.createElement("div", {
      className: (isInline ? '' : 'h-100') + " flex items-center"
    }, showCaption ? placeholder : valueLabel)), _react2.default.createElement("div", {
      className: "vtex-dropdown__arrow flex-none flex items-center pl2 " + (disabled ? 'c-on-disabled' : 'c-action-primary')
    }, _react2.default.createElement(_ArrowDownIcon2.default, {
      size: iconSize
    })))), _react2.default.createElement("select", {
      disabled: disabled,
      className: selectClasses,
      onChange: this.handleChange,
      ref: this.props.forwardedRef // Check the comment on the constructor regarding nil values
      ,
      value: value == null ? '' : value,
      autoFocus: autoFocus,
      form: form,
      name: name,
      required: required,
      style: {
        // safari select height fix
        WebkitAppearance: 'menulist-button'
      }
    }, preventTruncate && _react2.default.createElement("optgroup", {
      label: label || helpText || ''
    }), (!hasValidInitialValue || placeholder) && _react2.default.createElement("option", {
      disabled: true,
      value: !hasValidInitialValue ? this.initialValue : null
    }, this.getPlaceholder()), options.map(function (option) {
      return _react2.default.createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })))), errorMessage && _react2.default.createElement("div", {
      className: "c-danger t-small mt3 lh-title"
    }, errorMessage), helpText && _react2.default.createElement("div", {
      className: "c-muted-1 t-small mt3 lh-title"
    }, helpText));
  };

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  size: 'regular',
  options: [],
  variation: 'default'
};
Dropdown.propTypes = {
  /** Error highlight */
  error: _propTypes2.default.bool,

  /** Error message */
  errorMessage: _propTypes2.default.node,

  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Help text */
  helpText: _propTypes2.default.node,

  /** Dropdown label */
  label: _propTypes2.default.node,

  /** Dropdown placeholder value */
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /** Dropdown size */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Dropdown options list */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),

  /** Prevent truncating large options texts on some devices/browsers, such as iOS */
  preventTruncate: _propTypes2.default.bool,

  /** Spec attribute */
  id: _propTypes2.default.string,

  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,

  /** Spec attribute */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Spec attribute */
  disabled: _propTypes2.default.bool,

  /** Dropdown variation */
  variation: _propTypes2.default.oneOf(['default', 'inline']),

  /** Spec attribute */
  form: _propTypes2.default.string,

  /** Spec attribute */
  name: _propTypes2.default.string,

  /** Spec attribute */
  required: _propTypes2.default.bool,

  /** onChange event */
  onChange: _propTypes2.default.func,

  /** onClose event */
  onClose: _propTypes2.default.func,

  /** onOpen event */
  onOpen: _propTypes2.default.func
};
exports.default = (0, _withForwardedRef.withForwardedRef)(Dropdown);