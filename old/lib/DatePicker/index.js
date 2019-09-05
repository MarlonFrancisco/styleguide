"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _index = require("date-fns/locale/index.js");

var locales = _interopRequireWildcard(_index);

var _Input = require("../Input");

var _Input2 = _interopRequireDefault(_Input);

var _Calendar = require("../icon/Calendar");

var _Calendar2 = _interopRequireDefault(_Calendar);

require("./react-datepicker.global.css");

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleLocaleChange", function (locale) {
      // registerLocale is a function from react-datepicker component that loads
      // an imported locale object from date-fns.
      //
      // For more information visit the link below:
      // https://github.com/Hacker0x01/react-datepicker#localization
      //
      (0, _reactDatepicker.registerLocale)(locale, locales[locale.replace('-', '')]);
    });

    _this.state = {
      active: false
    };

    _this.handleLocaleChange(props.locale);

    return _this;
  }

  var _proto = DatePicker.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.useTime) {
      console.warn('DatePicker: The prop "useTime" of the "DatePicker" component has been deprecated, and will be removed in a future version. Please use the "TimePicker" component instead');
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.locale !== prevProps.locale) {
      this.handleLocaleChange(this.props.locale);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        positionFixed = _this$props.positionFixed,
        useTime = _this$props.useTime,
        useTimeOnly = _this$props.useTimeOnly;

    var popperProps = _extends({}, positionFixed && {
      positionFixed: true
    });

    var format = useTimeOnly ? 'p' : useTime ? 'Pp' : 'P';
    return _react2.default.createElement(_reactDatepicker2.default, {
      ref: this.props.forwardedRef,
      autoFocus: this.props.autoFocus,
      customInput: _react2.default.createElement(_Input2.default, {
        error: this.props.error,
        errorMessage: this.props.errorMessage || this.state.errorMessage,
        helpText: this.props.helpText,
        label: this.props.label,
        prefix: this.props.prefix,
        size: this.props.size
      }),
      dateFormat: format,
      disabled: this.props.disabled,
      disabledKeyboardNavigation: true,
      endDate: this.props.dateRangeEnd,
      excludeDates: this.props.excludeDates,
      excludeTimes: this.props.excludeTimes,
      fixedHeight: this.props.direction === 'up',
      id: this.props.id,
      includeDates: this.props.includeDates,
      includeTimes: this.props.includeTimes,
      locale: this.props.locale,
      maxDate: this.props.maxDate,
      maxTime: this.props.maxTime,
      minDate: this.props.minDate,
      minTime: this.props.minTime,
      name: this.props.name,
      placeholderText: this.props.placeholder,
      popperModifiers: this.popperModifiers,
      popperProps: popperProps,
      readOnly: this.props.readOnly,
      required: this.props.required,
      selected: this.props.value,
      selectsEnd: this.props.isRangeEnd,
      selectsStart: this.props.isRangeStart,
      showDisabledMonthNavigation: this.props.limitMonthNavigation,
      showTimeSelect: useTime || useTimeOnly,
      startDate: this.props.dateRangeStart,
      showTimeSelectOnly: useTimeOnly,
      tabIndex: this.props.tabIndex,
      timeFormat: "p",
      timeIntervals: this.props.timeIntervals,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      onChange: this.props.onChange
    });
  };

  _createClass(DatePicker, [{
    key: "popperModifiers",
    get: function get() {
      var _this$props2 = this.props,
          align = _this$props2.align,
          direction = _this$props2.direction,
          size = _this$props2.size,
          useTime = _this$props2.useTime;
      var BASE_MODIFIERS = {
        hide: {
          enabled: false
        },
        preventOverflow: {
          enabled: false
        }
      };
      var isRightAligned = align === 'right';
      var isUpwards = direction === 'up';

      if (!isRightAligned && !isUpwards) {
        return BASE_MODIFIERS;
      }

      var offsetX = isRightAligned ? (size === 'large' ? -91 : -136) - (useTime ? 130 : 0) : 0;
      var offsetYBySize = {
        large: -448,
        regular: -440,
        small: -432
      };
      var offsetY = isUpwards ? offsetYBySize[size] - (useTime ? 18 : 0) : 0;
      return _extends({}, BASE_MODIFIERS, {
        flip: {
          enabled: !isUpwards
        },
        keepTogether: {
          enabled: false
        },
        offset: {
          offset: offsetX + ", " + offsetY
        }
      });
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.defaultProps = {
  align: 'left',
  autoFocus: false,
  direction: 'down',
  disabled: false,
  error: false,
  label: '',
  limitMonthNavigation: false,
  prefix: _react2.default.createElement(_Calendar2.default, null),
  readOnly: false,
  required: false,
  size: 'regular'
};
DatePicker.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Popper alignment in relation to the input */
  align: _propTypes2.default.oneOf(['left', 'right']),

  /** Spec attribute  */
  autoFocus: _propTypes2.default.bool,

  /** @ignore Date range end date */
  dateRangeEnd: _propTypes2.default.instanceOf(Date),

  /** @ignore Date range start date */
  dateRangeStart: _propTypes2.default.instanceOf(Date),

  /** @ignore Date format */
  dateFormat: _propTypes2.default.string,

  /** Popper position in relation to the input */
  direction: _propTypes2.default.oneOf(['down', 'up']),

  /** Spec attribute  */
  disabled: _propTypes2.default.bool,

  /** Error highlight  */
  error: _propTypes2.default.bool,

  /** Error message  */
  errorMessage: _propTypes2.default.string,

  /** Dates to be excluded  */
  excludeDates: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),

  /** Times to be excluded  */
  excludeTimes: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),

  /** Help text  */
  helpText: _propTypes2.default.node,

  /** Spec attribute  */
  id: _propTypes2.default.string,

  /** Dates to be included  */
  includeDates: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),

  /** Dates to be included  */
  includeTimes: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),

  /** @ignore Indicates that the input represents the end date of a date range */
  isRangeEnd: _propTypes2.default.bool,

  /** @ignore Indicates that the input represents the start date of a date range */
  isRangeStart: _propTypes2.default.bool,

  /** Label  */
  label: _propTypes2.default.string,

  /** Disables out-of-bounds month navigation */
  limitMonthNavigation: _propTypes2.default.bool,

  /** Locale string ('en-US', 'pt-BR', ...)  */
  locale: _propTypes2.default.string.isRequired,

  /** Max possible date  */
  maxDate: _propTypes2.default.instanceOf(Date),

  /** Upper time limit */
  maxTime: _propTypes2.default.instanceOf(Date),

  /** Minimum possible date  */
  minDate: _propTypes2.default.instanceOf(Date),

  /** Lower time limit */
  minTime: _propTypes2.default.instanceOf(Date),

  /** Spec attribute  */
  name: _propTypes2.default.string,

  /** onChange event  */
  onChange: _propTypes2.default.func.isRequired,

  /** onFocus event  */
  onFocus: _propTypes2.default.func,

  /** onBlur event  */
  onBlur: _propTypes2.default.func,

  /** Placeholder text  */
  placeholder: _propTypes2.default.string,

  /** @ignore Prefix component to be used as the prefix of the input */
  prefix: _propTypes2.default.node,

  /** Spec attribute  */
  readOnly: _propTypes2.default.bool,

  /** Spec attribute  */
  required: _propTypes2.default.bool,

  /** DatePicker size  */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Spec attribute  */
  tabIndex: _propTypes2.default.string,

  /** Interval between times (in min)  */
  timeIntervals: _propTypes2.default.number,

  /** Flag used for indicating whether to use time or not  */
  useTime: _propTypes2.default.bool,

  /** @ignore Do not show calendar view */
  useTimeOnly: _propTypes2.default.bool,

  /** Value of the selected date  */
  value: _propTypes2.default.instanceOf(Date).isRequired,

  /** Sets the popper to position fixed. Fixes issues with overflow: hidden. */
  positionFixed: _propTypes2.default.bool
};
exports.default = (0, _withForwardedRef.withForwardedRef)(DatePicker);