"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Cell = require("./Cell");

var _Cell2 = _interopRequireDefault(_Cell);

var _constants = require("../constants");

var _useTableContext2 = require("../hooks/useTableContext");

var _useTableContext3 = _interopRequireDefault(_useTableContext2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  var _useTableContext = (0, _useTableContext3.default)(),
      columns = _useTableContext.columns;

  var renderHeader = function renderHeader(headerData, headerIndex) {
    var headerRender = headerData.headerRender,
        title = headerData.title,
        width = headerData.width;
    var content = headerRender ? headerRender({
      headerData: headerData
    }) : title;
    var namespace = "header-" + headerIndex;
    return _react2.default.createElement(_Cell2.default, {
      id: namespace,
      key: namespace,
      width: width,
      isHeader: true
    }, content);
  };

  return _react2.default.createElement("div", {
    key: "header",
    id: _constants.NAMESPACES.HEADER,
    className: "dt-row w-100 h-100 ph4 truncate overflow-x-hidden c-muted-2 f6",
    style: {
      height: _constants.TABLE_HEADER_HEIGHT
    }
  }, columns.map(renderHeader));
};

exports.default = Header;