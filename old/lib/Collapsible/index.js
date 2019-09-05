"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CaretDown = require("../icon/CaretDown");

var _CaretDown2 = _interopRequireDefault(_CaretDown);

var _CaretUp = require("../icon/CaretUp");

var _CaretUp2 = _interopRequireDefault(_CaretUp);

var _styles = require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colorMap = {
  base: 'c-on-base',
  primary: 'c-action-primary',
  muted: 'c-muted-3'
};

function handleClick(callback, isOpen) {
  callback && callback({
    target: {
      isOpen: isOpen
    }
  });
}

function mapToCSSClass(color) {
  return colorMap[color];
}

var Collapsible =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapsible, _Component);

  function Collapsible(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function () {
      _this.setState({
        height: _this.props.isOpen ? 'auto' : 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openCard", function () {
      _this.childrenRef.current.style.height = 'auto';
      var childrenHeight = _this.childrenRef.current.offsetHeight;
      _this.childrenRef.current.style.height = 0;
      /** after force setting element height like the line above
       * you have to force layout / reflow so the height value
       * may actually apply. You can do this by requesting
       * element offsetHeight again, like the line below
       */

      _this.childrenRef.current.offsetHeight;

      _this.setState({
        height: childrenHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCard", function () {
      var childrenHeight = _this.childrenRef.current.offsetHeight;

      _this.setState({
        height: childrenHeight
      }, function () {
        window.requestAnimationFrame(function () {
          return _this.setState({
            height: 0
          });
        });
      });
    });

    _this.childrenRef = _react2.default.createRef();
    _this.openTimeout = null;
    _this.closeTimeout = null;
    _this.state = {
      height: 0
    };
    return _this;
  }

  var _proto = Collapsible.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.isOpen) {
      this.setState({
        height: 'auto'
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.openCard();
      } else {
        this.closeCard();
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        children = _this$props.children,
        header = _this$props.header,
        muted = _this$props.muted,
        callback = _this$props.onClick,
        isOpen = _this$props.isOpen;
    var caretColor = this.props.caretColor;
    var height = this.state.height;
    var childrenContainerStyle = {
      height: height,
      overflow: 'hidden',
      transition: 'height 250ms ease-in-out'
    };

    if (muted) {
      caretColor = caretColor || 'muted';
      console.warn("The \"muted\" prop on the \"Collapsible\" component is depreacted and will be removed in a future version. Use \"caretColor='muted'\" instead.");
    }

    var color = caretColor ? mapToCSSClass(caretColor) : 'c-action-primary';
    return _react2.default.createElement("div", {
      className: _styles.jsFocusVisible
    }, _react2.default.createElement("div", {
      className: "flex flex-row items-center pointer",
      tabIndex: 0,
      role: "button",
      onClick: function onClick() {
        return handleClick(callback, !isOpen);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && handleClick(callback, !isOpen);
      },
      "aria-expanded": isOpen
    }, align === 'left' ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("div", {
      className: color + " mr3 self-center"
    }, isOpen ? _react2.default.createElement(_CaretUp2.default, null) : _react2.default.createElement(_CaretDown2.default, null)), _react2.default.createElement("div", {
      className: "flex-grow-1"
    }, header)) : _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("div", {
      className: "flex-grow-1"
    }, header), _react2.default.createElement("div", {
      className: color + " ml3 self-center"
    }, isOpen ? _react2.default.createElement(_CaretUp2.default, null) : _react2.default.createElement(_CaretDown2.default, null)))), _react2.default.createElement("div", {
      ref: this.childrenRef,
      style: childrenContainerStyle,
      role: "region",
      onTransitionEnd: this.handleTransitionEnd
    }, children));
  };

  return Collapsible;
}(_react.Component);

Collapsible.defaultProps = {
  align: 'left',
  isOpen: false,
  muted: false
};
Collapsible.propTypes = {
  /** Caret alignment.
   * Use _right_ alignment only in small width scenarios. */
  align: _propTypes2.default.oneOf(['right', 'left']),

  /** Content of the collapsible */
  children: _propTypes2.default.node.isRequired,

  /** Component to be used as the header of the collapsible. */
  header: _propTypes2.default.node.isRequired,

  /** @deprecated Use the 'muted' option in the caretColor prop instead.
   * To be used only in dense scenarios, or when the affordance is clearly
   * conveyed by the context. */
  muted: _propTypes2.default.bool,

  /** Controls whether the collapsible is open or not. */
  isOpen: _propTypes2.default.bool,

  /** _onClick_ event. */
  onClick: _propTypes2.default.func,

  /** Color or semantic to be applied to the Caret Icon in the Collapsible header.*/
  caretColor: _propTypes2.default.oneOf(Object.keys(colorMap))
};
exports.default = Collapsible;