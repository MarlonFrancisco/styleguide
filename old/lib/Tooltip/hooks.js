"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRect = useRect;
exports.useTooltip = useTooltip;

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _react = require("react");

var _dom = require("./utils/dom");

var _dom2 = _interopRequireDefault(_dom);

var _react2 = require("../utils/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useRect(nodeRef, observe) {
  if (observe === void 0) {
    observe = true;
  }

  var _useState = (0, _react.useState)(null),
      rect = _useState[0],
      setRect = _useState[1];

  var observerRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (!observerRef.current && nodeRef.current) {
      observerRef.current = (0, _dom2.default)(nodeRef.current, setRect);
    }

    if (observerRef.current && observe) {
      observerRef.current.observe();
    }

    return function () {
      return observerRef.current && observerRef.current.unobserve();
    };
  }, [observe, nodeRef.current]);
  return rect;
}

function useTooltip(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      trigger = _ref.trigger;

  var childRef = (0, _react.useRef)();

  var _useState2 = (0, _react.useState)(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleTooltip = function handleTooltip(child) {
    return _extends({
      ref: function ref(node) {
        // Keep your own reference
        if (node) {
          (0, _react2.setRef)(childRef, node);
        } // Call the original ref, if any


        (0, _react2.setRef)(child.ref, node);
      }
    }, trigger === 'hover' ? {
      onMouseEnter: function onMouseEnter() {
        setVisible(true);
        var onMouseEnter = (0, _get2.default)(child, 'props.onMouseEnter');

        if (onMouseEnter) {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return onMouseEnter.call.apply(onMouseEnter, [child.props].concat(args));
        }
      },
      onMouseLeave: function onMouseLeave() {
        setVisible(false);
        var onMouseLeave = (0, _get2.default)(child, 'props.onMouseLeave');

        if (onMouseLeave) {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return onMouseLeave.call.apply(onMouseLeave, [child.props].concat(args));
        }
      }
    } : {}, {}, trigger === 'click' || trigger === 'focus' ? {
      onClick: function onClick() {
        // Firefox and Safari, both on Mac OS, doesn't focus on click, like
        // Google Chrome does, so...
        if (childRef.current) {
          childRef.current.focus();
        }

        var onClick = (0, _get2.default)(child, 'props.onClick');

        if (onClick) {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return onClick.call.apply(onClick, [child.props].concat(args));
        }
      },
      onFocus: function onFocus() {
        setVisible(true);
        var onFocus = (0, _get2.default)(child, 'props.onFocus');

        if (onFocus) {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return onFocus.call.apply(onFocus, [child.props].concat(args));
        }
      },
      onBlur: function onBlur() {
        setVisible(false);
        var onBlur = (0, _get2.default)(child, 'props.onBlur');

        if (onBlur) {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return onBlur.call.apply(onBlur, [child.props].concat(args));
        }
      }
    } : {});
  };

  return [handleTooltip, {
    childRef: childRef,
    visible: visible
  }];
}