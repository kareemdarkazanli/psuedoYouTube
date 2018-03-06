webpackHotUpdate(4,{

/***/ "./src/store/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/store/actions.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();



var initialState = {
    searchQuery: "hp"
};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* SEARCH_CHANGED */]:
            return _extends({}, state, {
                searchQuery: action.event.target.value
            });
        default:
            return state;
    }
};

var _default = reducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, "initialState", "/Users/kareem_darkazanli/ReactApp/youtube/src/store/reducer.js");
    reactHotLoader.register(reducer, "reducer", "/Users/kareem_darkazanli/ReactApp/youtube/src/store/reducer.js");
    reactHotLoader.register(_default, "default", "/Users/kareem_darkazanli/ReactApp/youtube/src/store/reducer.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.881e52bcfeb9add43536.hot-update.js.map