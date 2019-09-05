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

var SubjectAtom =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SubjectAtom, _React$Component);

  function SubjectAtom() {
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

  var _proto = SubjectAtom.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        forwardedRef = _this$props.forwardedRef,
        options = _this$props.options,
        statements = _this$props.statements,
        isFullWidth = _this$props.isFullWidth,
        statementIndex = _this$props.statementIndex,
        placeholder = _this$props.placeholder;
    var condition = statements[statementIndex];
    var subjectOptions = Object.keys(options).map(function (choiceKey) {
      return {
        value: choiceKey,
        label: options[choiceKey].label,
        unique: options[choiceKey].unique || false
      };
    });
    var subjectsInUse = statements.map(function (statement) {
      return statement.subject;
    }).filter(function (subject) {
      return subject !== '';
    });
    var uniqueOptions = subjectOptions.filter(function (option) {
      if (!option.unique) {
        return true;
      }

      var alreadyInUse = subjectsInUse.indexOf(option.value) > -1;

      if (!alreadyInUse) {
        return true;
      }

      if (subjectsInUse.indexOf(option.value) === statementIndex) {
        return true;
      }

      return false;
    });
    var valueOption = uniqueOptions.find(function (op) {
      return op.value === condition.subject;
    });
    var valueLabel = valueOption && valueOption.label || condition.subject;
    return _react2.default.createElement("div", {
      className: "mh3 " + (isFullWidth ? 'pb3' : '')
    }, _react2.default.createElement(_EXPERIMENTAL_Select2.default, {
      ref: forwardedRef,
      placeholder: placeholder,
      options: uniqueOptions,
      value: !condition.subject ? null : {
        value: condition.subject,
        label: valueLabel
      },
      onChange: function onChange(option) {
        _this2.handleChangeStatement(option && option.value, 'subject');
      },
      multi: false,
      clearable: false
    }));
  };

  return SubjectAtom;
}(_react2.default.Component);

SubjectAtom.defaultProps = {
  onChangeStatement: function onChangeStatement() {}
};
SubjectAtom.propTypes = {
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

  /** Placeholder for dropdown */
  placeholder: _propTypes2.default.string.isRequired,

  /** Stretch component to 100% of the width */
  isFullWidth: _propTypes2.default.bool,

  /** To which row does this Statement belong to?  */
  statementIndex: _propTypes2.default.number,

  /** Value changed callback */
  onChangeStatement: _propTypes2.default.func
};
exports.default = (0, _withForwardedRef.withForwardedRef)(SubjectAtom);