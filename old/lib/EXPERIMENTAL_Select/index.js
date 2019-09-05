"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _v = require("uuid/v4");

var _v2 = _interopRequireDefault(_v);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Creatable = require("react-select/lib/Creatable");

var _Creatable2 = _interopRequireDefault(_Creatable);

var _colors = require("./colors");

var _colors2 = _interopRequireDefault(_colors);

var _ClearIndicator = require("./ClearIndicator");

var _ClearIndicator2 = _interopRequireDefault(_ClearIndicator);

var _DropdownIndicator = require("./DropdownIndicator");

var _DropdownIndicator2 = _interopRequireDefault(_DropdownIndicator);

var _MultiValueRemove = require("./MultiValueRemove");

var _MultiValueRemove2 = _interopRequireDefault(_MultiValueRemove);

var _Placeholder = require("./Placeholder");

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _Control = require("./Control");

var _Control2 = _interopRequireDefault(_Control);

var _styles = require("./styles");

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var getOptionValue = function getOptionValue(option) {
  return JSON.stringify(option.value);
};

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Select, _Component);

  function Select(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      searchTerm: undefined
    };
    _this.inputId = "react-select-input-" + (0, _v2.default)();
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var searchTerm = this.state.searchTerm;
    var prevSearchTerm = prevState.searchTerm;
    var loading = this.props.loading;
    var prevLoading = prevProps.loading;

    if (searchTerm !== prevSearchTerm || loading !== prevLoading) {
      document.getElementById(this.inputId).focus();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        forwardedRef = _this$props.forwardedRef,
        autoFocus = _this$props.autoFocus,
        creatable = _this$props.creatable,
        defaultValue = _this$props.defaultValue,
        disabled = _this$props.disabled,
        errorMessage = _this$props.errorMessage,
        formatCreateLabel = _this$props.formatCreateLabel,
        label = _this$props.label,
        loading = _this$props.loading,
        multi = _this$props.multi,
        noOptionsMessage = _this$props.noOptionsMessage,
        onChange = _this$props.onChange,
        onSearchInputChange = _this$props.onSearchInputChange,
        options = _this$props.options,
        placeholder = _this$props.placeholder,
        size = _this$props.size,
        value = _this$props.value,
        valuesMaxHeight = _this$props.valuesMaxHeight,
        clearable = _this$props.clearable;
    var reactSelectComponentProps = {
      ref: forwardedRef,
      autoFocus: autoFocus,
      className: "pointer b--danger bw1 " + (0, _styles.getFontClassNameFromSize)(size) + " " + (errorMessage ? 'b--danger bw1' : ''),
      components: {
        ClearIndicator: _ClearIndicator2.default,
        Control: function Control(props) {
          return _react2.default.createElement(_Control2.default, _extends({
            errorMessage: errorMessage,
            size: size
          }, props));
        },
        DropdownIndicator: function DropdownIndicator(props) {
          return _react2.default.createElement(_DropdownIndicator2.default, _extends({
            size: size
          }, props));
        },
        IndicatorSeparator: function IndicatorSeparator() {
          return null;
        },
        MultiValueRemove: _MultiValueRemove2.default,
        Placeholder: _Placeholder2.default
      },
      defaultValue: defaultValue,
      formatCreateLabel: formatCreateLabel,
      getOptionValue: getOptionValue,
      isClearable: clearable,
      isDisabled: disabled,
      isLoading: loading,
      isMulti: multi,
      noOptionsMessage: noOptionsMessage,
      inputId: this.inputId,
      onInputChange: function onInputChange(value, _ref) {
        var action = _ref.action;

        _this2.setState({
          searchTerm: value
        });

        if (action === 'input-change' && typeof onSearchInputChange === 'function') {
          onSearchInputChange(value);
        }
      },
      onChange: onChange,
      options: options,
      placeholder: placeholder,
      styles: {
        control: function control(style) {
          var errorStyle = errorMessage ? {
            borderColor: _colors2.default.red
          } : {};
          return _extends({}, style, {}, errorStyle, {
            borderWidth: '.125rem'
          });
        },
        menu: function menu(style) {
          return _extends({}, style, {
            marginTop: 0
          });
        },
        multiValue: function multiValue(style, state) {
          return _extends({}, style, {
            backgroundColor: state.isDisabled ? _colors2.default['muted-4'] : _colors2.default.aliceBlue,
            borderRadius: 100,
            padding: (0, _styles.getTagPaddingFromSize)(size),
            color: state.isDisabled ? _colors2.default.gray : _colors2.default.blue,
            position: 'relative'
          });
        },
        multiValueLabel: function multiValueLabel(style, state) {
          return _extends({}, style, {
            paddingRight: 0,
            fontWeight: 500,
            color: state.isDisabled ? _colors2.default.gray : _colors2.default.blue
          });
        },
        multiValueRemove: function multiValueRemove(style) {
          return _extends({}, style, {
            colors: 'inherit',
            ':hover': {
              backgroundColor: 'transparent',
              color: _colors2.default.red
            }
          });
        },
        option: function option(style) {
          return _extends({}, style, {
            cursor: 'pointer'
          });
        },
        placeholder: function placeholder(style) {
          return _extends({}, style, {
            padding: 10
          });
        },
        valueContainer: function valueContainer(style, state) {
          return _extends({}, style, {
            cursor: 'pointer',
            paddingLeft: '1rem',
            backgroundColor: state.isDisabled ? _colors2.default.lightGray : style.backgroundColor,
            maxHeight: valuesMaxHeight + "px",
            overflowY: 'auto'
          });
        },
        theme: function theme(_theme) {
          return _extends({}, _theme, {
            colors: _extends({}, _theme.colors, {
              primary: _colors2.default.gray,
              primary25: _colors2.default.lightGray
            })
          });
        }
      },
      value: value
    };
    return _react2.default.createElement("div", {
      className: "flex flex-column"
    }, label && _react2.default.createElement("label", {
      className: "dib mb3 w-100 " + (0, _styles.getFontClassNameFromSize)(size)
    }, label), creatable ? _react2.default.createElement(_Creatable2.default, reactSelectComponentProps) : _react2.default.createElement(_reactSelect2.default, reactSelectComponentProps), errorMessage && _react2.default.createElement("span", {
      className: "c-danger f6 mt3 lh-title"
    }, errorMessage));
  };

  return Select;
}(_react.Component);

Select.defaultProps = {
  multi: true,
  placeholder: 'Select...',
  size: 'regular',
  clearable: true
};
Select.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Select auto focus */
  autoFocus: _propTypes2.default.bool,

  /** Should clear button appear */
  clearable: _propTypes2.default.bool,

  /** Creatable options. */
  creatable: _propTypes2.default.bool,

  /** Default value */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

  /** Disables Select */
  disabled: _propTypes2.default.bool,

  /** Error message, e.g., validation error message. */
  errorMessage: _propTypes2.default.string,

  /** Gets the label for the "Create new..." option in the menu. ({inputValue}) => string | null */
  formatCreateLabel: _propTypes2.default.func,

  /** Label text. */
  label: _propTypes2.default.string,

  /** Is the select in a state of loading (async). */
  loading: _propTypes2.default.bool,

  /** Text to display when loading options */
  loadingMessage: _propTypes2.default.string,

  /** Support multiple selected options. */
  multi: _propTypes2.default.bool,

  /** Text to display when there are no options. ({inputValue}) => string | null */
  noOptionsMessage: _propTypes2.default.func,

  /** onChange handler: (option) => void */
  onChange: _propTypes2.default.func.isRequired,

  /** Handle events on search input */
  onSearchInputChange: _propTypes2.default.func,

  /** Array of options. Options have the shape { label, value }. */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /** Text that gets rendered for the option. */
    label: _propTypes2.default.string.isRequired,

    /** Underlying value, e.g., an id. */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
  })),

  /** Text for the select value.  */
  placeholder: _propTypes2.default.string,

  /** Select size */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Value of the select. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
  }), _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
  }))]),

  /** Max height (in _px_) of the selected values container */
  valuesMaxHeight: _propTypes2.default.number
};
exports.default = (0, _withForwardedRef.withForwardedRef)(Select);