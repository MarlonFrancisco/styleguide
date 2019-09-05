"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsiveModal = require("react-responsive-modal");

var _reactResponsiveModal2 = _interopRequireDefault(_reactResponsiveModal);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _TopBar = require("./TopBar");

var _TopBar2 = _interopRequireDefault(_TopBar);

var _BottomBar = require("./BottomBar");

var _BottomBar2 = _interopRequireDefault(_BottomBar);

var _modal = require("./modal.css");

var _modal2 = _interopRequireDefault(_modal);

require("./modal.global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      _this.setShadowState(event.target);
    });

    _defineProperty(_assertThisInitialized(_this), "setShadowState", function (element) {
      if (!element) return;
      var scrollTop = element.scrollTop,
          scrollHeight = element.scrollHeight,
          clientHeight = element.clientHeight;

      _this.setState({
        shadowTop: scrollTop !== 0
      });

      _this.setState({
        shadowBottom: scrollHeight - scrollTop !== clientHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          centered = _this$props.centered,
          onClose = _this$props.onClose,
          closeOnEsc = _this$props.closeOnEsc,
          closeOnOverlayClick = _this$props.closeOnOverlayClick,
          showCloseIcon = _this$props.showCloseIcon,
          bottomBar = _this$props.bottomBar,
          title = _this$props.title,
          children = _this$props.children,
          responsiveFullScreen = _this$props.responsiveFullScreen,
          showTopBar = _this$props.showTopBar,
          showBottomBarBorder = _this$props.showBottomBarBorder,
          onCloseTransitionFinish = _this$props.onCloseTransitionFinish,
          container = _this$props.container;
      var _this$state = _this.state,
          shadowBottom = _this$state.shadowBottom,
          shadowTop = _this$state.shadowTop;
      return _react2.default.createElement(_reactResponsiveModal2.default, {
        open: isOpen,
        center: centered,
        container: container,
        onClose: onClose,
        onExited: onCloseTransitionFinish,
        closeOnEsc: closeOnEsc,
        closeOnOverlayClick: closeOnOverlayClick,
        showCloseIcon: showTopBar ? false : showCloseIcon,
        classNames: {
          overlay: "vtex-modal__overlay " + (responsiveFullScreen ? 'pa5-ns pa0' : ''),
          modal: "vtex-modal__modal " + (responsiveFullScreen ? 'br2-ns w-100 w-auto-ns h-100 h-auto-ns' : 'br2') + " " + _modal2.default.mh100 + " flex flex-column",
          closeIcon: 'vtex-modal__close-icon'
        },
        styles: {
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 10000
          },
          modal: {
            padding: 0
          },
          closeIcon: {
            top: '8px',
            right: '8px',
            padding: '10px'
          }
        },
        closeIconSize: 18
      }, showTopBar && _react2.default.createElement(_TopBar2.default, {
        title: title,
        onClose: onClose,
        showBottomShadow: shadowTop,
        responsiveFullScreen: responsiveFullScreen,
        showCloseIcon: showCloseIcon
      }), _react2.default.createElement("div", {
        className: (responsiveFullScreen ? 'ph7 ph8-ns' : 'ph6 ph8-ns') + " overflow-auto flex-shrink-1 flex-grow-1 " + (bottomBar ? '' : 'pb8') + " " + (title ? '' : 'pt5 pt6-ns') + " " + _modal2.default.scrollBar,
        ref: _this.contentContainerReference,
        onScroll: _this.handleScroll
      }, children), bottomBar ? _react2.default.createElement(_BottomBar2.default, {
        showTopShadow: shadowBottom,
        showBorder: showBottomBarBorder,
        responsiveFullScreen: responsiveFullScreen
      }, bottomBar) : '');
    });

    _this.contentContainerReference = _react2.default.createRef();
    _this.state = {
      shadowBottom: false,
      shadowTop: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setShadowState(this.contentContainerReference.current);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var scrollTop = (0, _get2.default)(this, 'contentContainerReference.current.scrollTop');
    if (prevProps.isOpen !== this.props.isOpen || scrollTop === 0 && this.state.shadowTop) this.setShadowState(this.contentContainerReference.current);
  };

  return Modal;
}(_react.PureComponent);

Modal.defaultProps = {
  isOpen: false,
  closeOnEsc: true,
  closeOnOverlayClick: true,
  showCloseIcon: true,
  showTopBar: true,
  showBottomBarBorder: true
};
Modal.propTypes = {
  /** Content of the modal */
  children: _propTypes2.default.node.isRequired,

  /** Center the modal (for small content) */
  centered: _propTypes2.default.bool,

  /** Container in which the modal is rendered */
  container: _propTypes2.default.object,

  /** Show or hide the modal */
  isOpen: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired,

  /** Show BottomBar border **/
  showBottomBarBorder: _propTypes2.default.bool,

  /** Close the modal on ESC key press (default true) */
  closeOnEsc: _propTypes2.default.bool,

  /** Close the modal on overlay click (default true) */
  closeOnOverlayClick: _propTypes2.default.bool,

  /** Show the close icon on upper right corner (default true) */
  showCloseIcon: _propTypes2.default.bool,

  /** Node to be displayed as the bottom bar of the modal. */
  bottomBar: _propTypes2.default.node,

  /** Modal title to be displayed in top of the modal. */
  title: _propTypes2.default.node,

  /** If true, the modal will expand to fullscreen in small view ports (e.g. mobile) */
  responsiveFullScreen: _propTypes2.default.bool,

  /** If true, show top bar with title */
  showTopBar: _propTypes2.default.bool,

  /** Event fired when the closing transition is finished */
  onCloseTransitionFinish: _propTypes2.default.func
};
exports.default = Modal;