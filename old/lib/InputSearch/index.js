"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require("../Input");

var _Input2 = _interopRequireDefault(_Input);

var _Search = require("../icon/Search");

var _Search2 = _interopRequireDefault(_Search);

var _Deny = require("../icon/Deny");

var _Deny2 = _interopRequireDefault(_Deny);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputSearch =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(InputSearch, _Component);

  function InputSearch() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleClickClear", function (event) {
      _this.props.onChange && _this.props.onChange(_extends({}, event, {
        target: _extends({}, event.target, {
          value: ''
        })
      }));
      _this.props.onClear && _this.props.onClear(event);
    });

    return _this;
  }

  var _proto = InputSearch.prototype;

  _proto.render = function render() {
    var size = this.props.size;
    var iconSize = InputSearch.iconSizes[size] || InputSearch.iconSizes.default;
    return _react2.default.createElement(_Input2.default, _extends({}, this.props, {
      type: "search",
      suffix: _react2.default.createElement("span", {
        className: "pointer"
      }, this.props.value ? _react2.default.createElement("span", {
        tabIndex: 0,
        onClick: this.handleClickClear,
        className: "pointer c-action-primary"
      }, _react2.default.createElement(_Deny2.default, {
        size: iconSize
      })) : _react2.default.createElement("span", {
        className: "c-link"
      }, _react2.default.createElement(_Search2.default, {
        size: iconSize
      })))
    }));
  };

  return InputSearch;
}(_react.Component);

_defineProperty(InputSearch, "iconSizes", {
  small: 14,
  default: 16,
  large: 18,
  'x-large': 22
});

InputSearch.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,
  onChange: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  size: _propTypes2.default.string,
  value: _propTypes2.default.string
};
exports.default = (0, _withForwardedRef.withForwardedRef)(InputSearch);