"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require("../Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOOP = function NOOP() {};

var ModalDialog =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ModalDialog, _Component);

  function ModalDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleCloseTransitionFinish", function () {
      _this.props.onCloseTransitionFinish && _this.props.onCloseTransitionFinish();
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirmation", function () {
      _this.props.confirmation && _this.props.confirmation.onClick && _this.props.confirmation.onClick();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelation", function () {
      _this.props.cancelation && _this.props.cancelation.onClick && _this.props.cancelation.onClick();
    });

    return _this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        confirmation = _this$props.confirmation,
        cancelation = _this$props.cancelation,
        loading = _this$props.loading,
        onClose = _this$props.onClose;
    return _react2.default.createElement(_Modal2.default, _extends({}, this.props, {
      onClose: loading ? NOOP : onClose,
      onCloseTransitionFinish: this.handleCloseTransitionFinish
    }), this.props.children, _react2.default.createElement("div", {
      className: "vtex-modal__confirmation flex justify-end mt8"
    }, _react2.default.createElement("span", {
      className: "mr4"
    }, _react2.default.createElement(_Button2.default, {
      size: "small",
      variation: "tertiary",
      disabled: loading,
      onClick: this.handleCancelation
    }, cancelation.label)), _react2.default.createElement(_Button2.default, {
      size: "small",
      variation: "primary",
      isLoading: loading,
      onClick: this.handleConfirmation
    }, confirmation.label)));
  };

  return ModalDialog;
}(_react.Component);

ModalDialog.propTypes = {
  children: _propTypes2.default.node,
  confirmation: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }).isRequired,
  cancelation: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }).isRequired,
  onClose: _propTypes2.default.func,
  loading: _propTypes2.default.bool,
  onCloseTransitionFinish: _propTypes2.default.func
};
exports.default = ModalDialog;