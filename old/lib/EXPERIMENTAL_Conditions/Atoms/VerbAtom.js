"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _EXPERIMENTAL_Select = require("../../EXPERIMENTAL_Select");

var _EXPERIMENTAL_Select2 = _interopRequireDefault(_EXPERIMENTAL_Select);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withForwardedRef = require("../../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerbAtom =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(VerbAtom, _React$Component);

  function VerbAtom() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChangeStatement", function (newValue, structure) {
      _this.props.onChangeStatement(newValue, structure);
    });

    return _this;
  }

  var _proto = VerbAtom.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        forwardedRef = _this$props.forwardedRef,
        options = _this$props.options,
        isFullWidth = _this$props.isFullWidth,
        statements = _this$props.statements,
        statementIndex = _this$props.statementIndex;
    var condition = statements[statementIndex];
    var myChoice = options[condition.subject];
    var verbs = myChoice && myChoice.verbs || [{
      label: '',
      value: ''
    }];
    return _react2.default.createElement("div", {
      className: "mh3 " + (isFullWidth ? 'pb3' : '') + " flex-grow-1"
    }, _react2.default.createElement(_EXPERIMENTAL_Select2.default, {
      ref: forwardedRef,
      placeholder: "",
      options: verbs,
      value: !condition.subject ? '' : verbs.find(function (verb) {
        return verb.value === condition.verb;
      }) || '',
      onChange: function onChange(value) {
        var verb = value !== null ? value.value : null;

        _this2.handleChangeStatement(verb, 'verb');
      },
      multi: false,
      disabled: !condition.subject
    }));
  };

  return VerbAtom;
}(_react2.default.Component);

VerbAtom.defaultProps = {
  onChangeStatement: function onChangeStatement() {}
};
VerbAtom.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** Current selected options for this Statement */
  statements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    subject: _propTypes2.default.string,
    verb: _propTypes2.default.string,
    object: _propTypes2.default.any,
    error: _propTypes2.default.string
  })),

  /** Possible options and respective data types, verb options */
  options: _propTypes2.default.object.isRequired,

  /** Stretch component to 100% of the width */
  isFullWidth: _propTypes2.default.bool,

  /** To which row does this Statement belong to?  */
  statementIndex: _propTypes2.default.number,

  /** Value changed callback */
  onChangeStatement: _propTypes2.default.func
};
exports.default = (0, _withForwardedRef.withForwardedRef)(VerbAtom);