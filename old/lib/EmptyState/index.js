"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var EmptyState =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(EmptyState, _PureComponent);

  function EmptyState() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = EmptyState.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children;
    return _react2.default.createElement("div", {
      className: "br3 flex c-muted-2 justify-center pv9 ph6 ph9-l tc"
    }, _react2.default.createElement("div", {
      className: "w-80 w-50-l"
    }, title && _react2.default.createElement("span", {
      className: "t-heading-3 mt0 mt0"
    }, title), children && _react2.default.createElement("div", {
      className: "t-body lh-copy"
    }, children)));
  };

  return EmptyState;
}(_react.PureComponent);

EmptyState.propTypes = {
  /** Title of the component (String) */
  title: function title(props, propName, componentName) {
    if (!props.title && !props.children) {
      return new Error("Prop 'title' or 'children' was not specified in '" + componentName + "'.");
    }
  },

  /** node */
  children: function children(props, propName, componentName) {
    if (!props.title && !props.children) {
      return new Error("Prop 'title' or 'children' was not specified in '" + componentName + "'.");
    }
  }
};
exports.default = EmptyState;