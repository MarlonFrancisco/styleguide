"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toast = require("./Toast");

var _Toast2 = _interopRequireDefault(_Toast);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToastManager =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ToastManager, _Component);

  function ToastManager(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentToast: null,
      nextToast: null,
      isToastVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "showToast", function (args) {
      if ((0, _isString2.default)(args)) {
        args = {
          message: args
        };
      }

      var _args = args,
          _args$message = _args.message,
          message = _args$message === void 0 ? '' : _args$message,
          action = _args.action,
          dismissable = _args.dismissable,
          duration = _args.duration,
          _args$horizontalPosit = _args.horizontalPosition,
          horizontalPosition = _args$horizontalPosit === void 0 ? 'left' : _args$horizontalPosit;

      if (_this.state.currentToast) {
        // If there is a toast present already, queue up the next toast
        // It will be displayed when the current toast is closed, on handleToastClose
        _this.setState({
          nextToast: {
            message: message,
            action: action,
            dismissable: dismissable,
            duration: duration,
            horizontalPosition: horizontalPosition
          }
        });

        _this.hideToast();
      } else {
        _this.setState({
          currentToast: {
            message: message,
            action: action,
            dismissable: dismissable,
            duration: duration,
            horizontalPosition: horizontalPosition
          },
          isToastVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideToast", function () {
      _this.setState({
        isToastVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToastClose", function () {
      _this.setState(function (state) {
        return {
          // If there is a toast queued up, shows it.
          // Otherwise, nextToast will be null, and state.toast will be cleared up
          currentToast: state.nextToast,
          isToastVisible: !!state.nextToast,
          nextToast: null,
          state: state.horizontalPosition
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getParentBounds", function () {
      var parentContainer = _this.container.current && _this.container.current.parentNode;
      return parentContainer && parentContainer.getBoundingClientRect && parentContainer.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "updateContainerBounds", function () {
      var windowBounds = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: window.innerHeight
      };
      var bounds = _this.props.positioning === 'parent' && _this.getParentBounds() || windowBounds;

      if (_this.container.current) {
        _this.container.current.style.left = bounds.left + "px";
        _this.container.current.style.right = window.innerWidth - bounds.right + "px";
        _this.container.current.style.top = bounds.top + "px";
        _this.container.current.style.bottom = Math.max(0, window.innerHeight - bounds.bottom) + "px";
      }
    });

    _this.container = _react2.default.createRef();
    return _this;
  }

  var _proto = ToastManager.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.updateContainerBounds();
  };

  _proto.render = function render() {
    var children = this.props.children;
    var currentToast = this.state.currentToast;
    return _react2.default.createElement(_react.Fragment, null, children({
      showToast: this.showToast,
      hideToast: this.hideToast,
      state: this.state
    }), _react2.default.createElement("div", {
      className: "fixed z-max overflow-hidden",
      ref: this.container,
      style: {
        pointerEvents: 'none'
      }
    }, currentToast && _react2.default.createElement(_Toast2.default, {
      message: currentToast.message,
      action: currentToast.action,
      duration: currentToast.duration,
      dismissable: currentToast.dismissable,
      visible: this.state.isToastVisible,
      onClose: this.handleToastClose,
      horizontalPosition: currentToast.horizontalPosition
    })));
  };

  return ToastManager;
}(_react.Component);

exports.default = ToastManager;
ToastManager.propTypes = {
  positioning: _propTypes2.default.oneOf(['parent', 'window']),
  children: _propTypes2.default.func.isRequired
};