"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonWithIcon = require("../ButtonWithIcon");

var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

var _CaretDown = require("../icon/CaretDown");

var _CaretDown2 = _interopRequireDefault(_CaretDown);

var _Menu = require("../Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ActionMenu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ActionMenu, _Component);

  function ActionMenu(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "openMenu", function () {
      if (_this.state.isMenuOpen) return;
      document.addEventListener('mousedown', _this.handleClickOutside);

      _this.setState({
        isMenuOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      if (!_this.state.isMenuOpen) return;
      document.removeEventListener('mousedown', _this.handleClickOutside);

      _this.setState({
        isMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (!_this.state.isMenuOpen) {
        _this.openMenu();
      } else {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isClickOutsideMenu", function (target) {
      return _this.menu && _this.menu.current && !_this.menu.current.contains(target);
    });

    _defineProperty(_assertThisInitialized(_this), "isClickOutsideContainer", function (target) {
      return _this.container && _this.container.current && !_this.container.current.contains(target);
    });

    _defineProperty(_assertThisInitialized(_this), "isClickOutside", function (target) {
      return _this.isClickOutsideContainer(target) && _this.isClickOutsideMenu(target);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.isClickOutside(e.target) && _this.state.isMenuOpen) {
        _this.closeMenu();
      }
    });

    _this.container = _react2.default.createRef();
    _this.menu = _react2.default.createRef();
    _this.state = {
      isMenuOpen: false
    };
    return _this;
  }

  var _proto = ActionMenu.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.isMenuOpen) {
      this.closeMenu();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        icon = _this$props.icon,
        label = _this$props.label,
        options = _this$props.options,
        menuWidth = _this$props.menuWidth,
        align = _this$props.align,
        buttonProps = _this$props.buttonProps,
        hideCaretIcon = _this$props.hideCaretIcon,
        shouldCloseOnClick = _this$props.shouldCloseOnClick,
        isGrouped = _this$props.isGrouped,
        isFirstOfGroup = _this$props.isFirstOfGroup,
        isLastOfGroup = _this$props.isLastOfGroup,
        isActiveOfGroup = _this$props.isActiveOfGroup;
    var isMenuOpen = this.state.isMenuOpen;

    var iconCaret = _react2.default.createElement(_CaretDown2.default, {
      size: 12,
      color: "currentColor"
    });

    return _react2.default.createElement("div", {
      ref: this.container
    }, _react2.default.createElement(_Menu2.default, {
      ref: this.menu,
      open: isMenuOpen,
      align: align,
      width: menuWidth,
      options: options,
      onClose: shouldCloseOnClick ? this.closeMenu : null
    }, _react2.default.createElement(_ButtonWithIcon2.default, _extends({
      icon: icon || (!label && !hideCaretIcon ? iconCaret : _react2.default.createElement(_react2.default.Fragment, null))
    }, buttonProps, {
      isGrouped: isGrouped,
      isFirstOfGroup: isFirstOfGroup,
      isLastOfGroup: isLastOfGroup,
      isActiveOfGroup: isActiveOfGroup,
      onClick: this.handleClick
    }), label && _react2.default.createElement("span", {
      className: "flex align-baseline items-center"
    }, _react2.default.createElement("span", {
      className: "" + (hideCaretIcon ? '' : 'mr3')
    }, label), !hideCaretIcon && _react2.default.createElement("span", null, iconCaret)))));
  };

  return ActionMenu;
}(_react.Component);

ActionMenu.defaultProps = {
  options: [],
  align: 'right',
  hideCaretIcon: false,
  menuWidth: 292,
  shouldCloseOnClick: true,
  isGrouped: false,
  isFirstOfGroup: false,
  isLastOfGroup: false,
  isActiveOfGroup: false
};
ActionMenu.propTypes = {
  /** Menu alignment in relation to the button*/
  align: _propTypes2.default.oneOf(['right', 'left']),

  /** If should close the menu after clicking an option */
  shouldCloseOnClick: _propTypes2.default.bool,

  /** Respecting ButtonWithIcon props contract. For more info, see:
   * https://styleguide.vtex.com/#/Components/Forms/Button
   */
  // TODO: match ButtonWithIcon prop types
  buttonProps: _propTypes2.default.object,

  /** @deprecated Button icon: use buttonProps instead */
  icon: _propTypes2.default.element,

  /** Button text label */
  label: _propTypes2.default.node,

  /** Hide the automatic caret icon */
  hideCaretIcon: _propTypes2.default.bool,

  /** Menu width*/
  menuWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /** Menu options */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.node,
    handleCallback: _propTypes2.default.func,

    /** whether option has inline toggle */
    toggle: _propTypes2.default.shape({
      checked: _propTypes2.default.bool,
      semantic: _propTypes2.default.bool
    })
  })).isRequired,

  /** */
  isGrouped: _propTypes2.default.bool,

  /** */
  isFirstOfGroup: _propTypes2.default.bool,

  /** */
  isLastOfGroup: _propTypes2.default.bool,

  /** */
  isActiveOfGroup: _propTypes2.default.bool
};
exports.default = ActionMenu;