"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withToast = exports.ToastConsumer = exports.ToastProvider = exports.ToastContext = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ToastManager = require("./ToastManager");

var _ToastManager2 = _interopRequireDefault(_ToastManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ToastContext = _react2.default.createContext({
  showToast: function showToast() {},
  hideToast: function hideToast() {},
  toastState: null
});

var ToastProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToastProvider, _Component);

  function ToastProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.toastManager = _react2.default.createRef();
    return _this;
  }

  var _proto = ToastProvider.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        positioning = _this$props.positioning;
    return _react2.default.createElement(_ToastManager2.default, {
      positioning: positioning
    }, function (_ref) {
      var showToast = _ref.showToast,
          hideToast = _ref.hideToast,
          toastState = _ref.state;
      return _react2.default.createElement(ToastContext.Provider, {
        value: {
          showToast: showToast,
          hideToast: hideToast,
          toastState: toastState
        }
      }, children);
    });
  };

  return ToastProvider;
}(_react.Component);

ToastProvider.propTypes = {
  children: _propTypes2.default.node,

  /** Sets the position of the toasts based either on the dimensions of the parent element of the ToastProvider, or window dimensions */
  positioning: _propTypes2.default.oneOf(['parent', 'window'])
};
ToastProvider.defaultProps = {
  positioning: 'parent'
};

var ToastConsumer =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(ToastConsumer, _Component2);

  function ToastConsumer() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = ToastConsumer.prototype;

  _proto2.render = function render() {
    var children = this.props.children;
    return _react2.default.createElement(ToastContext.Consumer, null, function (value) {
      return children(value);
    });
  };

  return ToastConsumer;
}(_react.Component);

ToastConsumer.propTypes = {
  children: _propTypes2.default.func.isRequired // eslint-disable-next-line react/display-name

};

var withToast = function withToast(WrappedComponent) {
  return function (props) {
    return _react2.default.createElement(ToastConsumer, null, function (_ref2) {
      var showToast = _ref2.showToast,
          hideToast = _ref2.hideToast,
          toastState = _ref2.toastState;
      return _react2.default.createElement(WrappedComponent, _extends({
        showToast: showToast,
        hideToast: hideToast,
        toastState: toastState
      }, props));
    });
  };
};

exports.ToastContext = ToastContext;
exports.ToastProvider = ToastProvider;
exports.ToastConsumer = ToastConsumer;
exports.withToast = withToast;