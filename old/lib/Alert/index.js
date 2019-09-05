"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Success = require("../icon/Success");

var _Success2 = _interopRequireDefault(_Success);

var _Failure = require("../icon/Failure");

var _Failure2 = _interopRequireDefault(_Failure);

var _Warning = require("../icon/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Alert =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Alert, _Component);

  function Alert() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.autoClose && this.props.onClose) {
      this.timeout = setTimeout(this.props.onClose, this.props.autoClose);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        onClose = _this$props.onClose,
        action = _this$props.action,
        forwardedRef = _this$props.forwardedRef;
    var innerVerticalPadding = 'pv3';
    var classes = 'ph5 pv4 br2 ';
    var showIcon = false;
    var Icon = 'div';
    var color = 'c-on-base';
    var handleActionClick = action && action.onClick || undefined;
    var displayAction = action && action.onClick && action.label;

    switch (type) {
      case 'success':
        {
          showIcon = true;
          classes += 'bg-success--faded ';
          Icon = _Success2.default;
          color = 'c-success';
          break;
        }

      case 'error':
        {
          showIcon = true;
          classes += 'bg-danger--faded ';
          Icon = _Failure2.default;
          color = 'c-danger';
          break;
        }

      default:
      case 'warning':
        {
          showIcon = true;
          classes += 'bg-warning--faded ';
          Icon = _Warning2.default;
          color = 'c-warning';
          break;
        }
    }

    return _react2.default.createElement("div", {
      ref: forwardedRef,
      className: "vtex-alert flex justify-between t-body c-on-base " + classes
    }, _react2.default.createElement("div", {
      className: "flex-ns flex-grow-1 items-start"
    }, _react2.default.createElement("div", {
      className: "flex items-start flex-grow-1 " + innerVerticalPadding
    }, showIcon && _react2.default.createElement("div", {
      className: color
    }, _react2.default.createElement(Icon, {
      block: true,
      color: "currentColor",
      size: 18
    })), _react2.default.createElement("div", {
      className: "" + (showIcon ? 'ph5 flex' : 'pr5')
    }, this.props.children)), displayAction && _react2.default.createElement("div", {
      className: "flex flex-grow-1 justify-end " + innerVerticalPadding
    }, _react2.default.createElement("div", {
      className: "nt4-ns nb4"
    }, _react2.default.createElement(_Button2.default, {
      variation: "tertiary",
      onClick: handleActionClick
    }, action.label)))), onClose && _react2.default.createElement("div", {
      title: "Close",
      className: "vtex-alert__close-icon pointer pv2 c-on-base ph3 " + innerVerticalPadding,
      onClick: onClose,
      tabIndex: 0
    }, _react2.default.createElement(_Close2.default, {
      block: true,
      color: "currentColor",
      size: 16
    })));
  };

  return Alert;
}(_react.Component);

Alert.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Style of the alert */
  type: _propTypes2.default.oneOf(['success', 'error', 'warning']).isRequired,

  /** Content of the alert */
  children: _propTypes2.default.node.isRequired,

  /** If this function is defined, a close icon will appear and this function will be called when alert is closed. */
  onClose: _propTypes2.default.func,

  /** Time in ms to auto close the alert */
  autoClose: _propTypes2.default.number,

  /** If this object is defined, an action button will appear on the right side of the alert. */
  action: _propTypes2.default.shape({
    onClick: _propTypes2.default.func.isRequired,
    label: _propTypes2.default.node.isRequired
  })
};
exports.default = (0, _withForwardedRef.withForwardedRef)(Alert);