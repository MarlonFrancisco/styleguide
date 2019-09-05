"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _modal = require("./modal.css");

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBar = function TopBar(props) {
  var title = props.title,
      onClose = props.onClose,
      showBottomShadow = props.showBottomShadow,
      responsiveFullScreen = props.responsiveFullScreen,
      showCloseIcon = props.showCloseIcon;
  return _react2.default.createElement("div", {
    className: "\n        flex justify-content relative " + (title ? 'pv5 pv6-ns' : '') + "\n        " + (responsiveFullScreen ? 'pl7 pr8 pl8-ns pl8-ns' : 'pl6 pr8 pl8-ns') + "\n        " + _modal2.default.shadowTransition + "\n        " + (showBottomShadow ? 'shadow-4' : '') + "\n      "
  }, _react2.default.createElement("span", {
    className: "f3 c-on-base"
  }, title, showBottomShadow), showCloseIcon && _react2.default.createElement("div", {
    className: 'vtex-modal__close-icon absolute top-0 right-0 pa5 pa6-ns pointer ml-auto items-center flex',
    onClick: onClose
  }, _react2.default.createElement(_Close2.default, {
    size: 18
  })));
};

TopBar.propTypes = {
  title: _propTypes2.default.node,
  onClose: _propTypes2.default.func,
  showBottomShadow: _propTypes2.default.bool,
  responsiveFullScreen: _propTypes2.default.bool,
  showCloseIcon: _propTypes2.default.bool
};
TopBar.defaultProps = {
  showBottomShadow: false,
  responsiveFullScreen: false
};
exports.default = TopBar;