"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var useOutsideClick = function useOutsideClick(ref, handlerFn, listenTrigger) {
  var handle = function handle(e) {
    return ref && ref.current && e.target instanceof Node && !ref.current.contains(e.target) && handlerFn(e);
  };

  (0, _react.useLayoutEffect)(function () {
    listenTrigger && document.addEventListener('mousedown', handle);
    return function () {
      return document.removeEventListener('mousedown', handle);
    };
  }, [listenTrigger]);
};

exports.default = useOutsideClick;