"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Step = require("./Step");

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(ProgressBar, _PureComponent);

  function ProgressBar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.isFirstElement = function isFirstElement(index) {
    return index === 0;
  };

  _proto.isLastElement = function isLastElement(index, array) {
    return index === array.length - 1;
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        steps = _this$props.steps,
        danger = _this$props.danger,
        slim = _this$props.slim;
    var stepsElements = steps.map(function (type, index) {
      var isFirstElement = _this.isFirstElement(index);

      var isLastElement = _this.isLastElement(index, steps);

      var marginRightCSS = isLastElement ? '' : 'mr2';
      return _react2.default.createElement("div", {
        className: "w-100 " + marginRightCSS,
        key: index
      }, _react2.default.createElement(_Step2.default, {
        type: type,
        roundLeft: isFirstElement,
        roundRight: isLastElement,
        danger: danger,
        slim: slim
      }));
    });
    return _react2.default.createElement("div", {
      className: "w-100 mb3 inline-flex flex-row"
    }, stepsElements);
  };

  return ProgressBar;
}(_react.PureComponent);

ProgressBar.propTypes = {
  /** Array of steps, it should be composed of instances of the following strings:'completed', 'inProgress' and 'toDo' */
  steps: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['completed', 'inProgress', 'toDo'])).isRequired,

  /** Boolean representing a dangerous state of the progress (e.g. a late or critical progress), if true this changes the color of the steps */
  danger: _propTypes2.default.bool,

  /** Boolean representing if the progress bar should be slim or not, if true this decreases the height of the bar */
  slim: _propTypes2.default.bool
};
exports.default = ProgressBar;