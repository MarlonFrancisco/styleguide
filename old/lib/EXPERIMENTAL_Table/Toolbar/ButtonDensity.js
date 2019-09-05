"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../icon/Density/index.js");

var _index2 = _interopRequireDefault(_index);

var _constants = require("../constants");

var _useTableContext2 = require("../hooks/useTableContext");

var _useTableContext3 = _interopRequireDefault(_useTableContext2);

var _index3 = require("./Menu/index");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BOX_HEIGHT = _constants.DENSITY_OPTIONS.length * _constants.FIELDS_BOX_ITEM_HEIGHT;

var ButtonDensity = function ButtonDensity(_ref) {
  var label = _ref.label,
      _handleCallback = _ref.handleCallback,
      disabled = _ref.disabled,
      alignMenu = _ref.alignMenu,
      options = _objectWithoutPropertiesLoose(_ref, ["label", "handleCallback", "disabled", "alignMenu"]);

  var _useTableContext = (0, _useTableContext3.default)(),
      selectedDensity = _useTableContext.selectedDensity,
      setSelectedDensity = _useTableContext.setSelectedDensity;

  return _react2.default.createElement(_index4.default, {
    button: {
      id: _constants.NAMESPACES.TOOLBAR.BUTTON_DENSITY,
      title: label,
      icon: _react2.default.createElement(_index2.default, {
        size: _constants.ICON_SIZE.MEDIUM
      }),
      disabled: disabled
    },
    box: {
      height: BOX_HEIGHT,
      alignMenu: alignMenu
    }
  }, _constants.DENSITY_OPTIONS.map(function (key, index) {
    var isKeySelected = selectedDensity === key;
    return _react2.default.createElement(_index4.default.Item, {
      key: index,
      isSelected: isKeySelected,
      handleCallback: function handleCallback() {
        setSelectedDensity(key);
        _handleCallback && _handleCallback(key);
      },
      closeMenuOnClick: true
    }, options[key + "OptionLabel"]);
  }));
};

exports.default = ButtonDensity;