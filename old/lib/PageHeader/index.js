"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowBack = require("../icon/ArrowBack");

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageHeader =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(PageHeader, _PureComponent);

  function PageHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _this.props.onLinkClick && _this.props.onLinkClick(e);
    });

    return _this;
  }

  var _proto = PageHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        linkLabel = _this$props.linkLabel,
        children = _this$props.children,
        subtitle = _this$props.subtitle;
    return _react2.default.createElement("div", {
      className: "vtex-pageHeader__container pa5 pa7-ns"
    }, linkLabel && _react2.default.createElement("div", {
      className: "vtex-pageHeader-link__container"
    }, _react2.default.createElement(_Button2.default, {
      size: "small",
      variation: "tertiary",
      neutral: true,
      onClick: this.handleClick
    }, _react2.default.createElement("span", {
      className: "flex align-baseline relative",
      style: {
        marginLeft: '-16px'
      }
    }, _react2.default.createElement("span", {
      className: "mr3"
    }, _react2.default.createElement(_ArrowBack2.default, {
      color: "currentColor"
    })), linkLabel))), _react2.default.createElement("div", {
      className: "c-on-base flex flex-wrap flex-row justify-between\n            " + (linkLabel ? 'mt0' : 'mt7')
    }, _react2.default.createElement("div", {
      className: "vtex-pageHeader__title t-heading-2 order-0 flex-grow-1"
    }, this.props.title), children && _react2.default.createElement("div", {
      className: "vtex-pageHeader__children order-2 order-0-ns " + (subtitle ? 'mt5' : '') + " mt0-ns"
    }, children), _react2.default.createElement("div", {
      className: "w-100",
      style: {
        height: 0
      }
    }), _react2.default.createElement("div", {
      className: "vtex-pageHeader__subtitle t-body lh-copy c-muted-1 mv5 order-1 order-0-ns"
    }, subtitle)));
  };

  return PageHeader;
}(_react.PureComponent);

PageHeader.propTypes = {
  /** Title for the header */
  title: _propTypes2.default.node.isRequired,

  /** Subtitle for the header */
  subtitle: _propTypes2.default.node,

  /** Label for the back button */
  linkLabel: _propTypes2.default.node,
  onLinkClick: _propTypes2.default.func,
  children: _propTypes2.default.node
};
exports.default = PageHeader;