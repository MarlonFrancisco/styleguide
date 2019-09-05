"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require("../Box/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var PageBlock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PageBlock, _Component);

  function PageBlock() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PageBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        subtitle = _this$props.subtitle,
        variation = _this$props.variation,
        titleAside = _this$props.titleAside;
    var isAnnotated = variation === 'annotated';
    var headerClasses = (0, _classnames2.default)({
      'w-third': isAnnotated,
      'flex flex-row justify-between': !isAnnotated && titleAside,
      'flex flex-column': isAnnotated && titleAside
    });
    var titleClasses = 'styleguide__pageBlock_title t-heading-3 mb3 ml5 ml3-ns ';
    titleClasses += titleAside ? 'mt0' : 'mt4';
    return _react2.default.createElement("div", {
      className: "styleguide__pageBlock flex " + (isAnnotated ? 'flex-row' : 'flex-column')
    }, (title || subtitle) && _react2.default.createElement("div", {
      className: headerClasses
    }, _react2.default.createElement("div", {
      className: "flex-grow-1"
    }, title && _react2.default.createElement("h2", {
      className: titleClasses
    }, title), subtitle && _react2.default.createElement("div", {
      className: "t-body lh-copy c-muted-1 mb7 ml3 " + (!isAnnotated && 'w-two-thirds-ns w-100')
    }, subtitle)), titleAside && !isAnnotated && _react2.default.createElement("div", {
      className: "flex-grow-1"
    }, titleAside)), _react2.default.createElement("div", {
      className: "flex flex-column flex-row-ns " + (isAnnotated && 'w-two-thirds')
    }, variation === 'half' ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("div", {
      className: "w-50-ns w-100 mr3-ns mb0-ns mb5"
    }, _react2.default.createElement(_index2.default, null, this.props.children && this.props.children[0])), _react2.default.createElement("div", {
      className: "w-50-ns w-100 ml3-ns mb5"
    }, _react2.default.createElement(_index2.default, null, this.props.children && this.props.children[1]))) : variation === 'aside' ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("div", {
      className: "w-two-thirds-ns w-100 mr3-ns mb0-ns mb5"
    }, _react2.default.createElement(_index2.default, null, this.props.children && this.props.children[0])), _react2.default.createElement("div", {
      className: "w-third-ns w-100 ml3-ns mb5"
    }, _react2.default.createElement(_index2.default, null, this.props.children && this.props.children[1]))) : _react2.default.createElement("div", {
      className: "w-100 mb5"
    }, _react2.default.createElement(_index2.default, null, this.props.children))));
  };

  return PageBlock;
}(_react.Component);

PageBlock.defaultProps = {
  variation: 'full'
};
PageBlock.propTypes = {
  /** Type of layout grid for the content. */
  variation: _propTypes2.default.oneOf(['full', 'half', 'annotated', 'aside']),

  /** Title for the block. */
  title: _propTypes2.default.string,

  /** Subtitle for the block. */
  subtitle: _propTypes2.default.string,

  /** Content on the right side of the title. */
  titleAside: _propTypes2.default.node,

  /** Contents of the boxes. Can be 1 or 2 nodes depending on the variation chosen. */
  children: function children(props, propName, componentName) {
    _propTypes2.default.checkPropTypes({
      children: _propTypes2.default.node.isRequired
    }, props, 'props', componentName);

    var isAsideOrHalf = ['half', 'aside'].indexOf(props.variation) !== -1;
    var hasRequiredChildren = props[propName] && props[propName].length === 2;

    if (isAsideOrHalf && !hasRequiredChildren) {
      return new Error("Invalid prop `children` supplied to `" + componentName + "` with variation \"" + props.variation + "\", it must have 2 nodes as children. It was passed " + (props.children ? props.children.length ? props.children.length : 'one' : 'nothing') + ".");
    }
  }
};
exports.default = PageBlock;