"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nextFrame = function nextFrame(callback) {
  var FRAME_DURATION = 16;
  setTimeout(callback, FRAME_DURATION);
};

var DURATION_BASE = 3000;
var DURATION_INCREMENT = 30;
var DURATION_ACTION_INCREMENT = 2000;
var TRANSITION_DURATION = 160;

var Toast =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toast, _Component);

  function Toast(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "getDefaultDuration", function () {
      return DURATION_BASE + _this.props.message.length * DURATION_INCREMENT + (_this.props.action ? DURATION_ACTION_INCREMENT : 0);
    });

    _defineProperty(_assertThisInitialized(_this), "startAutoClose", function () {
      _this.stopAutoClose();

      var duration = _this.props.duration;

      if (duration <= 0 || duration === Infinity) {
        return;
      }

      _this.autoCloseTimeout = setTimeout(_this.close, _this.props.duration || _this.getDefaultDuration());
    });

    _defineProperty(_assertThisInitialized(_this), "stopAutoClose", function () {
      if (_this.autoCloseTimeout == null) return;
      clearTimeout(_this.autoCloseTimeout);
      _this.autoCloseTimeout = null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function () {
      _this.stopAutoClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseOut", function () {
      _this.startAutoClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseClick", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      if (!_this.state.isOpen) {
        return;
      }

      _this.stopAutoClose();

      setTimeout(function () {
        _this.props.onClose();
      }, TRANSITION_DURATION);

      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionClick", function (e) {
      var isOpen = _this.state.isOpen;
      if (!isOpen) return;
      var action = _this.props.action;
      var actionHandler = action && action.onClick;

      if (actionHandler) {
        actionHandler(e);
      }

      _this.close();
    });

    _this.state = {
      isOpen: false,
      isSingleLine: false
    };
    _this.messageElement = _react2.default.createRef();
    _this.buttonElement = _react2.default.createRef();
    return _this;
  }

  var _proto = Toast.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.visible) {
      // sets the open state on the next frame
      // so the opening transition will run
      nextFrame(function () {
        return _this2.open();
      });
      this.startAutoClose();
    }

    this.updateButtonWrap();
  } // Duration increases along with the length of the message
  ;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.visible && prevProps.visible) {
      this.close();
    } else if (this.props.visible && !prevProps.visible) {
      this.open();
      this.startAutoClose();
    }

    if (this.props.message !== prevProps.message || this.props.visible && !prevProps.visible) {
      this.updateButtonWrap();
    }
  } // Lets the toast to be single line on mobile
  // if the message is short enough
  ;

  _proto.updateButtonWrap = function updateButtonWrap() {
    var _this3 = this;

    this.setState({
      isSingleLine: false
    }, function () {
      var messageWidth = _this3.getElementWidth(_this3.messageElement);

      var buttonWidth = _this3.getElementWidth(_this3.buttonElement);

      var windowWidth = window.innerWidth || 0;
      var threshold = 75;

      if (messageWidth != null && buttonWidth != null) {
        if (messageWidth + buttonWidth <= windowWidth - threshold) {
          _this3.setState({
            isSingleLine: true
          });
        }
      }
    });
  };

  _proto.getElementWidth = function getElementWidth(ref) {
    var element = ref && ref.current;
    var bounds = element && element.getBoundingClientRect && element.getBoundingClientRect();
    return bounds && bounds.width;
  };

  _proto.render = function render() {
    var _this$state = this.state,
        isOpen = _this$state.isOpen,
        isSingleLine = _this$state.isSingleLine;
    var _this$props = this.props,
        action = _this$props.action,
        dismissable = _this$props.dismissable,
        horizontalPosition = _this$props.horizontalPosition,
        message = _this$props.message;
    var hasAction = !!(action && action.label && (action.onClick || action.href));
    return _react2.default.createElement("div", {
      className: "absolute bottom-0 " + horizontalPosition + "-0 z-5 ma7-ns mb0-s w-100 w-auto-ns mw6-m mw-40-l",
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut,
      style: {
        pointerEvents: 'all',
        transition: "transform " + TRANSITION_DURATION + "ms " + (isOpen ? 'ease-out' : 'ease-in'),
        transform: "translate3d(0, " + (isOpen ? 0 : '170%') + ", 0)",
        minWidth: '18rem'
      }
    }, _react2.default.createElement("div", {
      className: "vtex-toast flex justify-between items-start items-center-ns t-body bg-base--inverted c-on-base--inverted pa5 br2-ns shadow-5"
    }, _react2.default.createElement("div", {
      className: (isSingleLine ? 'flex' : 'flex-ns') + " flex-grow-1"
    }, _react2.default.createElement("div", {
      className: "flex items-center flex-grow-1"
    }, _react2.default.createElement("div", {
      className: "pr5 mw6-ns lh-copy",
      ref: this.messageElement
    }, message)), hasAction && _react2.default.createElement("div", {
      className: "flex flex-grow-1 justify-end items-center"
    }, _react2.default.createElement("div", {
      className: (isSingleLine ? 'nt4' : 'nt4-ns') + " nb4"
    }, _react2.default.createElement(_Button2.default, {
      ref: this.buttonElement,
      variation: "inverted-tertiary",
      href: action.href,
      target: action.target,
      rel: action.rel,
      download: action.download,
      onClick: this.handleActionClick
    }, action.label)))), dismissable && _react2.default.createElement("div", {
      className: "pt2 pt0-ns"
    }, _react2.default.createElement("div", {
      className: "vtex-alert__close-icon pointer flex items-center pa3 white nr3 nv3",
      onClick: this.handleCloseClick
    }, _react2.default.createElement(_Close2.default, {
      color: "currentColor",
      size: 16
    })))));
  };

  return Toast;
}(_react.Component);

_defineProperty(Toast, "defaultProps", {
  dismissable: true
});

exports.default = Toast;
Toast.propTypes = {
  onClose: _propTypes2.default.func.isRequired,
  message: _propTypes2.default.string.isRequired,
  horizontalPosition: _propTypes2.default.oneOf(['left', 'right']),
  action: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func,
    href: _propTypes2.default.string,
    target: _propTypes2.default.string,
    rel: _propTypes2.default.string,
    download: _propTypes2.default.string
  }),
  visible: _propTypes2.default.bool,
  duration: _propTypes2.default.number,
  dismissable: _propTypes2.default.bool
};