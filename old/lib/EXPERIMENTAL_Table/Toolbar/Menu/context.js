"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenuContext = exports.MenuProvider = undefined;

var _react = require("react");

var MenuContext = (0, _react.createContext)(null);
var MenuProvider = MenuContext.Provider;

var useMenuContext = function useMenuContext() {
  var context = (0, _react.useContext)(MenuContext);
  return context;
};

exports.default = MenuContext;
exports.MenuProvider = MenuProvider;
exports.useMenuContext = useMenuContext;