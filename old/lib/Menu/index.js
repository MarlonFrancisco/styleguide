"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOverlays = require("react-overlays");

var _Toggle = require("../Toggle");

var _Toggle2 = _interopRequireDefault(_Toggle);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_WIDTH = 292;
var CONTAINER_MARGIN = 6;
var WINDOW_MARGIN = 10;
var DEFAULT_DOCUMENT_ELEMENT = {
  scrollTop: 0,
  scrollLeft: 0,
  clientWidth: 0,
  clientHeight: 0
};

var Menu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Menu, _Component);

  function Menu(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasCalculatedSize: false,
      // hides the menu while calculating its size and position
      isUpwards: false,
      // opens the menu from bottom to top, if it doesn't fit on the screen otherwise
      isVisible: false,
      // triggers the opening animation
      menuHeight: 0,
      containerHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
      return _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuBounds", function () {
      return _this.menuElement.current && _this.menuElement.current.getBoundingClientRect && _this.menuElement.current.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerBounds", function () {
      return _this.containerElement.current && _this.containerElement.current.getBoundingClientRect && _this.containerElement.current.getBoundingClientRect();
    });

    _this.containerElement = _react2.default.createRef();
    _this.menuElement = props.forwardedRef || _react2.default.createRef();
    return _this;
  }

  var _proto = Menu.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (window) window.addEventListener('resize', this.onWindowResize);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (window) window.removeEventListener('resize', this.onWindowResize);
  };

  _proto.updateMenu = function updateMenu() {
    var _this2 = this;

    var menuBounds = this.getMenuBounds();
    var containerBounds = this.getContainerBounds();
    if (!menuBounds || !containerBounds) return;
    var containerHeight = containerBounds.height;
    var initialMenuHeight = menuBounds.height;
    var itemHeight = initialMenuHeight / this.props.options.length;
    var isOutOfBounds = menuBounds.top + initialMenuHeight + containerHeight > window.innerHeight;
    var isUpwards = isOutOfBounds && containerBounds.top > window.innerHeight / 2;
    var maxMenuHeight = isUpwards ? menuBounds.top - CONTAINER_MARGIN - WINDOW_MARGIN - containerHeight : window.innerHeight - menuBounds.top - CONTAINER_MARGIN - WINDOW_MARGIN; // Makes the height of the menu, if it doesn't entirely fit on the screen,
    // fall in the middle of an item, to hint that the menu scrolls

    var visibleItemsNum = Math.round(maxMenuHeight / itemHeight);
    var adjustedMenuHeight = visibleItemsNum * itemHeight - itemHeight / 2;
    var menuHeight = maxMenuHeight < initialMenuHeight ? adjustedMenuHeight : 0;
    this.setState({
      containerHeight: containerHeight,
      menuHeight: menuHeight,
      isUpwards: isUpwards,
      hasCalculatedSize: true
    }, function () {
      // triggers the menu opening animation
      setTimeout(function () {
        _this2.setState({
          isVisible: true
        });
      }, 1);
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.updateMenu();
    }

    if (prevProps.open && !this.props.open) {
      this.setState({
        hasCalculatedSize: false,
        isUpwards: false,
        isVisible: false,
        menuHeight: 0,
        containerHeight: 0
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        options = _this$props.options,
        align = _this$props.align,
        open = _this$props.open,
        onClose = _this$props.onClose,
        children = _this$props.children,
        width = _this$props.width;
    var _this$state = this.state,
        hasCalculatedSize = _this$state.hasCalculatedSize,
        isUpwards = _this$state.isUpwards,
        isVisible = _this$state.isVisible,
        menuHeight = _this$state.menuHeight;
    var isRight = align === 'right';
    return _react2.default.createElement("div", {
      className: "relative"
    }, _react2.default.createElement("div", {
      ref: this.containerElement
    }, children), _react2.default.createElement(_reactOverlays.Overlay, {
      show: open
    }, function () {
      var _ref2;

      var _this3$getContainerBo = _this3.getContainerBounds(),
          top = _this3$getContainerBo.top,
          left = _this3$getContainerBo.left,
          right = _this3$getContainerBo.right,
          height = _this3$getContainerBo.height;

      var _ref = document ? document.documentElement : DEFAULT_DOCUMENT_ELEMENT,
          scrollTop = _ref.scrollTop,
          scrollLeft = _ref.scrollLeft,
          clientWidth = _ref.clientWidth,
          clientHeight = _ref.clientHeight;

      return _react2.default.createElement("div", {
        ref: _this3.menuElement,
        style: (_ref2 = {
          transform: !hasCalculatedSize || isVisible ? 'scale(1)' : 'scale(0.9, 0.6)',
          transformOrigin: (isRight ? '75%' : '25%') + " " + (isUpwards ? '100%' : '0'),
          transition: isVisible ? 'transform 50ms ease-out, opacity 25ms' : 'none'
        }, _ref2[isUpwards ? 'bottom' : 'top'] = isUpwards ? clientHeight - (top + scrollTop - CONTAINER_MARGIN) : top + scrollTop + height + CONTAINER_MARGIN, _ref2[isRight ? 'right' : 'left'] = isRight ? clientWidth - right : left + scrollLeft, _ref2.width = width || DEFAULT_WIDTH, _ref2),
        className: "absolute z-999 ba b--muted-4 br2 shadow-5 " + (isRight ? 'right-0' : 'left-0') + "\n              " + (isVisible ? 'o-100' : 'o-0')
      }, _react2.default.createElement("div", {
        className: "b2 br2 bg-base"
      }, _react2.default.createElement("div", {
        style: {
          height: menuHeight || 'auto'
        },
        className: menuHeight ? 'overflow-auto' : ''
      }, options.map(function (option, index) {
        return _react2.default.createElement("button", {
          key: index,
          className: "flex justify-between items-center t-body ph6 h-regular pointer hover-bg-muted-5 ma0 bg-transparent bn w-100 tl",
          onClick: function onClick() {
            option.onClick(option);

            if (onClose) {
              onClose();
            }
          }
        }, _react2.default.createElement("span", {
          className: (option.toggle ? 'w-70 truncate' : 'w-100 truncate') + " " + (option.isDangerous ? 'c-danger' : '')
        }, option.label), option.toggle && _react2.default.createElement("div", {
          style: {
            pointerEvents: 'none'
          }
        }, _react2.default.createElement(_Toggle2.default, {
          size: "regular",
          semantic: option.toggle.semantic,
          checked: option.toggle.checked
        })));
      }))));
    }));
  };

  return Menu;
}(_react.Component);

Menu.defaultProps = {
  options: [],
  align: 'right',
  open: false
};
Menu.propTypes = {
  /** The element which will open the menu--the menu will
   * be positioned around this element */
  children: _propTypes2.default.node,

  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Menu visibility (default is false) */
  open: _propTypes2.default.bool,

  /** Menu Box width (default is 292px) */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /** Menu options */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.node,
    onClick: _propTypes2.default.func,

    /** whether option has inline toggle */
    toggle: _propTypes2.default.shape({
      checked: _propTypes2.default.bool,
      semantic: _propTypes2.default.bool
    })
  })),

  /** function to close the menu after clicking an option */
  onClose: _propTypes2.default.func,

  /** Menu Box align (default is right) */
  align: _propTypes2.default.oneOf(['right', 'left'])
};
exports.default = (0, _withForwardedRef.withForwardedRef)(Menu);