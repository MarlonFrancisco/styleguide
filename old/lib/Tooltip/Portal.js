"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react3 = require("../utils/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? _react2.default.useLayoutEffect : _react2.default.useEffect;
var propTypes = {
  /**
   * The children to render into the `container`.
   */
  children: _propTypes2.default.node,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component), _propTypes2.default.instanceOf(typeof Element === 'undefined' ? Object : Element)]),

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: _propTypes2.default.func
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */

};

var Portal = function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      onRendered = props.onRendered;

  var _React$useState = _react2.default.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  useEnhancedEffect(function () {
    setMountNode(getContainer(container) || document.body);
  }, [container]);
  useEnhancedEffect(function () {
    if (mountNode) {
      (0, _react3.setRef)(ref, mountNode);
      return function () {
        (0, _react3.setRef)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode]);
  useEnhancedEffect(function () {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [onRendered, mountNode]);
  return mountNode ? _reactDom2.default.createPortal(children, mountNode) : mountNode;
};

Portal.propTypes = propTypes;
exports.default = _react2.default.forwardRef(Portal);