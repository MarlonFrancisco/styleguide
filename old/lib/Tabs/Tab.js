"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      !_this.props.disabled && _this.props.onClick && _this.props.onClick(e);
    });

    return _this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        fullWidth = _this$props.fullWidth,
        label = _this$props.label,
        disabled = _this$props.disabled;
    var tabStyle = 'c-muted-1 b--transparent hover-c-action-primary pointer vtex-tab__button--inactive';

    if (active && disabled) {
      tabStyle = 'fw5 b--muted-1 c-muted-2';
    } else if (active) {
      tabStyle = 'c-on-muted b--emphasis fw5 vtex-tab__button--active';
    } else if (disabled) {
      tabStyle = 'b--muted-4 c-muted-3';
    }

    return _react2.default.createElement("button", {
      type: "button",
      onClick: this.handleClick,
      className: "vtex-tab__button bt-0 bl-0 br-0 bw1 " + (fullWidth ? 'w-100' : '') + " " + tabStyle + "\n        v-mid relative h-regular ph6 t-body bg-transparent outline-0\n        "
    }, label);
  };

  return Tab;
}(_react.Component);

Tab.defaultProps = {
  disabled: false
};
Tab.propTypes = {
  active: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  label: _propTypes2.default.any.isRequired,
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};
exports.default = Tab;