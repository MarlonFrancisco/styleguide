"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../icon/Download/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../icon/Upload/index.js");

var _index4 = _interopRequireDefault(_index3);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _ButtonDensity = require("./ButtonDensity");

var _ButtonDensity2 = _interopRequireDefault(_ButtonDensity);

var _ButtonExtraActions = require("./ButtonExtraActions");

var _ButtonExtraActions2 = _interopRequireDefault(_ButtonExtraActions);

var _ButtonNewLine = require("./ButtonNewLine");

var _ButtonNewLine2 = _interopRequireDefault(_ButtonNewLine);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getButton = function getButton(type, props) {
  switch (type) {
    case 'density':
      {
        return _react2.default.createElement("span", {
          className: "order-1"
        }, _react2.default.createElement(_ButtonDensity2.default, props));
      }

    case 'download':
      {
        return _react2.default.createElement("span", {
          className: "order-2"
        }, _react2.default.createElement(_Button2.default, _extends({
          id: _constants.NAMESPACES.TOOLBAR.BUTTON_DOWNLOAD,
          icon: _react2.default.createElement(_index2.default, {
            size: _constants.ICON_SIZE.HEAVY
          })
        }, props)));
      }

    case 'upload':
      {
        return _react2.default.createElement("span", {
          className: "order-3"
        }, _react2.default.createElement(_Button2.default, _extends({
          id: _constants.NAMESPACES.TOOLBAR.BUTTON_UPLOAD,
          icon: _react2.default.createElement(_index4.default, {
            size: _constants.ICON_SIZE.HEAVY
          })
        }, props)));
      }

    case 'extraActions':
      {
        return _react2.default.createElement("span", {
          className: "order-4"
        }, _react2.default.createElement(_ButtonExtraActions2.default, props));
      }

    case 'newLine':
      {
        return _react2.default.createElement("span", {
          className: "order-5"
        }, _react2.default.createElement(_ButtonNewLine2.default, props));
      }

    default:
      {
        return null;
      }
  }
};

var getComponent = function getComponent(type) {
  return function (props) {
    return getButton(type, props);
  };
};

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    id: _constants.NAMESPACES.TOOLBAR.BUTTON_GROUP,
    className: "order-1 flex flex-row items-center"
  }, children);
};

ButtonGroup.Density = getComponent('density');
ButtonGroup.Download = getComponent('download');
ButtonGroup.Upload = getComponent('upload');
ButtonGroup.ExtraActions = getComponent('extraActions');
ButtonGroup.NewLine = getComponent('newLine');
exports.default = ButtonGroup;