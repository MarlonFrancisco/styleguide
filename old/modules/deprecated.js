"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Attempt to get the wrapped component's name
var getComponentName = function getComponentName(target) {
  if (target.displayName && typeof target.displayName === 'string') {
    return target.displayName;
  }

  return target.name || 'Unamed component';
};

var mapNewProps = function mapNewProps(propsMap, props) {
  var newProps = {};
  Object.keys(propsMap).map(function (deprecatedProp) {
    newProps[propsMap[deprecatedProp]] = props[deprecatedProp];
  });
  return _extends({}, props, {}, newProps);
};

function deprecated(_ref) {
  var useNewComponent = _ref.useNewComponent,
      useNewProps = _ref.useNewProps;
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inheritsLoose(Deprecated, _Component);

        function Deprecated() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Deprecated.prototype;

        _proto.componentDidMount = function componentDidMount() {
          var _this = this;

          if (useNewComponent) {
            console.warn("\"" + useNewComponent.old + "\" component is deprecated, you should use \"" + useNewComponent.new + "\" instead");
          }

          if (useNewProps) {
            Object.keys(useNewProps).map(function (deprecatedProp) {
              if (_this.props[deprecatedProp]) {
                console.warn("\"" + getComponentName(WrappedComponent) + "\" prop \"" + deprecatedProp + "\" is deprecated, you should use \"" + useNewProps[deprecatedProp] + "\" instead");
              }
            });
          }
        };

        _proto.render = function render() {
          var newProps = useNewProps ? mapNewProps(useNewProps, this.props) : this.props;
          return _react2.default.createElement(WrappedComponent, newProps);
        };

        return Deprecated;
      }(_react.Component)
    );
  };
}