"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Selector = require("./Selector");

var _Selector2 = _interopRequireDefault(_Selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
var MOVE_EVENT_MAP = {
  mousedown: 'mousemove',
  touchstart: 'touchmove',
  pointerdown: 'pointermove'
  /**
   * Round the value to the nearest step multiple
   */

};

function quantize(value, step) {
  var numSteps = Math.round(value / step);
  var quantizedVal = numSteps * step;
  return quantizedVal;
}
/**
 * Get the event pageX attribute, with support for mobile events
 */


function getPageX(evt) {
  if (evt.targetTouches && evt.targetTouches.length > 0) {
    return evt.targetTouches[0].pageX;
  }

  return evt.pageX;
}
/**
 * Check for the esc key event
 */


function isEscKeyEvent(evt) {
  return evt.key === 'Escape' || evt.keyCode === 27;
}

var Slider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Slider, _Component);

  function Slider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "sliderRef", _react2.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: null,
      translate: {
        left: 0,
        right: 0
      },
      values: {
        left: _this.props.defaultValues && _this.props.defaultValues.length > 0 ? _this.props.defaultValues[0] : _this.props.min,
        right: _this.props.range && _this.props.defaultValues && _this.props.defaultValues.length >= 2 ? _this.props.defaultValues[1] : _this.props.max
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateLayout", function () {
      _this.updatePositionForValue(_this.state.values.left, 'left');

      _this.updatePositionForValue(_this.state.values.right, 'right');
    });

    _defineProperty(_assertThisInitialized(_this), "getValueForPercent", function (percentageComplete, position) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          range = _this$props.range;
      var rawValue = min + percentageComplete * (max - min);
      var value;

      if (rawValue !== min && rawValue !== max) {
        value = quantize(rawValue, step);
      } else {
        value = rawValue;
      }

      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }

      if (!range) {
        return value;
      }

      if (position === 'left' && value >= _this.state.values.right) {
        value = _this.state.values.right - step;
      } else if (position === 'right' && value <= _this.state.values.left) {
        value = _this.state.values.left + step;
      }

      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "getTranslateValueForInputValue", function (value, position) {
      var _this$props2 = _this.props,
          max = _this$props2.max,
          min = _this$props2.min;

      var rect = _this.sliderRef.current.getBoundingClientRect();

      var percentageComplete = (value - min) / (max - min);
      var translatePx = percentageComplete * rect.width;

      if (position === 'right') {
        translatePx = rect.width - translatePx;
      }

      return translatePx;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSliderMouseDown", function (e) {
      var rect = _this.sliderRef.current.getBoundingClientRect();

      var xPos = getPageX(e) - rect.left;
      var leftPos = _this.state.translate.left;
      var rightPos = rect.width - _this.state.translate.right;
      var nearestPoint; // Which one has a absolute value closer to 0

      if (!_this.props.range || Math.abs(leftPos - xPos) < Math.abs(rightPos - xPos)) {
        nearestPoint = 'left';
      } else {
        nearestPoint = 'right';
      }

      _this.handleDragStart(nearestPoint)(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (position) {
      return function (e) {
        e.stopPropagation(); // allow only one handle to be dragged at a time

        if (_this.props.disabled || _this.state.dragging) {
          return;
        }

        _this.setState({
          dragging: position
        });

        _this.valuesBeforeDrag_ = _this.state.values; // https://reactjs.org/docs/events.html#event-pooling

        e.persist();

        var moveHandler = _this.handleDrag(position); // The events bellow are attached to the body because we need
        // to support the dragging event *outside* of the slider bounds


        _this.cancelDragEvent_ = function () {
          _this.valuesBeforeDrag_ = undefined;
          UP_EVENTS.forEach(function (evtName) {
            return document.body.removeEventListener(evtName, handleUpEvent);
          });
          document.body.removeEventListener(MOVE_EVENT_MAP[e.type], moveHandler);
          document.body.removeEventListener('keydown', _this.handleKeyDown);
        };

        var handleUpEvent = function handleUpEvent() {
          _this.cancelDragEvent_();

          _this.handleDragEnd();
        };

        UP_EVENTS.forEach(function (evtName) {
          return document.body.addEventListener(evtName, handleUpEvent);
        });
        document.body.addEventListener(MOVE_EVENT_MAP[e.type], moveHandler);
        document.body.addEventListener('keydown', _this.handleKeyDown);

        _this.updatePositionFromEvent(e, position);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "updatePositionFromEvent", function (e, position) {
      var slider = _this.sliderRef.current;
      var rect = slider.getBoundingClientRect();
      var xPos = getPageX(e) - rect.left;
      var percentageComplete = xPos / rect.width;

      var value = _this.getValueForPercent(percentageComplete, position);

      _this.updatePositionForValue(value, position);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (position) {
      return function (e) {
        e.preventDefault();

        _this.updatePositionFromEvent(e, position);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "updatePositionForValue", function (value, position) {
      var translatePx = _this.getTranslateValueForInputValue(value, position);

      requestAnimationFrame(function () {
        var _extends2, _extends3;

        _this.setState({
          values: _extends({}, _this.state.values, (_extends2 = {}, _extends2[position] = value, _extends2)),
          translate: _extends({}, _this.state.translate, (_extends3 = {}, _extends3[position] = translatePx, _extends3))
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function () {
      _this.setState({
        dragging: null
      });

      _this.cancelDragEvent_ = undefined;

      if (_this.props.range) {
        _this.props.onChange([_this.state.values.left, _this.state.values.right]);
      } else {
        _this.props.onChange([_this.state.values.left]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (!isEscKeyEvent(evt) || !_this.state.dragging) {
        return;
      }

      _this.setState({
        dragging: false,
        values: _this.valuesBeforeDrag_
      });

      _this.cancelDragEvent_();

      _this.cancelDragEvent = undefined;

      _this.updateLayout();
    });

    return _this;
  }

  var _proto = Slider.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.min !== this.props.min || prevProps.max !== this.props.max) {
      this.setState({
        translate: {
          left: 0,
          right: 0
        },
        values: {
          left: this.props.min,
          right: this.props.max
        }
      }, this.updateLayout);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateLayout);

    if (this.props.defaultValues && this.props.defaultValues.length > 0) {
      this.updateLayout();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateLayout);

    if (this.cancelDragEvent_) {
      this.cancelDragEvent_();
      this.cancelDragEvent_ = undefined;
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        disabled = _this$props3.disabled,
        alwaysShowCurrentValue = _this$props3.alwaysShowCurrentValue,
        formatValue = _this$props3.formatValue,
        range = _this$props3.range,
        handleIcon = _this$props3.handleIcon;
    var _this$state$translate = this.state.translate,
        left = _this$state$translate.left,
        right = _this$state$translate.right;
    var lastLeftValue = this.valuesBeforeDrag_ ? this.valuesBeforeDrag_.left : this.state.values.left;
    var lastRightValue = this.valuesBeforeDrag_ ? this.valuesBeforeDrag_.right : this.state.values.right;
    var sliderSelectionStyle = range ? {
      left: left,
      right: right
    } : {
      left: 0,
      width: left
    };
    return _react2.default.createElement("div", {
      className: "vtex-slider-container"
    }, _react2.default.createElement("div", {
      className: "vtex-slider w-100 relative pointer",
      style: {
        height: 24,
        // since we can't include css with the components, the
        // prefixed attributes need to be included
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      },
      onMouseDown: this.handleSliderMouseDown,
      onTouchStart: this.handleSliderMouseDown
    }, _react2.default.createElement("div", {
      ref: this.sliderRef,
      className: "vtex-slider__base w-100 bg-muted-4 absolute br-pill overflow-hidden",
      style: {
        height: '0.25rem',
        top: '0.7rem'
      }
    }, _react2.default.createElement("div", {
      className: (0, _classnames2.default)('absolute h-100', {
        'bg-action-primary': !disabled,
        'bg-muted-4': disabled
      }),
      style: sliderSelectionStyle
    })), _react2.default.createElement(_Selector2.default, {
      offset: left,
      onDragStart: this.handleDragStart,
      position: "left",
      active: this.state.dragging === 'left',
      displayPopup: alwaysShowCurrentValue,
      value: this.state.values.left,
      formatValue: formatValue,
      icon: handleIcon
    }), range && _react2.default.createElement(_Selector2.default, {
      offset: right,
      onDragStart: this.handleDragStart,
      position: "right",
      active: this.state.dragging === 'right',
      displayPopup: alwaysShowCurrentValue,
      value: this.state.values.right,
      formatValue: formatValue,
      icon: handleIcon
    })), _react2.default.createElement("div", {
      className: "flex justify-end"
    }, _react2.default.createElement("label", {
      className: "t-small c-muted-1"
    }, formatValue(lastLeftValue)), range && _react2.default.createElement("label", {
      className: "t-small c-muted-1"
    }, _react2.default.createElement("span", {
      className: "mh2"
    }, "\u2013"), formatValue(lastRightValue))));
  };

  return Slider;
}(_react.Component);

exports.default = Slider;
Slider.defaultProps = {
  min: 0,
  max: 10,
  step: 1,
  onChange: function onChange() {},
  alwaysShowCurrentValue: false,
  formatValue: function formatValue(a) {
    return a;
  },
  range: false,
  handleIcon: null
};
Slider.propTypes = {
  /** Minimum supported value */
  min: _propTypes2.default.number,

  /** Maximum supported value */
  max: _propTypes2.default.number,

  /** onChange event */
  onChange: _propTypes2.default.func,

  /** Step value */
  step: _propTypes2.default.number,

  /** Whether the slider is disabled */
  disabled: _propTypes2.default.bool,

  /** Initial values */
  defaultValues: _propTypes2.default.arrayOf(_propTypes2.default.number),

  /** Whether to always display current value as a popup */
  alwaysShowCurrentValue: _propTypes2.default.bool,

  /** Function to customize the format of the value */
  formatValue: _propTypes2.default.func,

  /** Whether to render as a range input */
  range: _propTypes2.default.bool,

  /** Optional icon to show inside the slider handle */
  handleIcon: _propTypes2.default.node
};