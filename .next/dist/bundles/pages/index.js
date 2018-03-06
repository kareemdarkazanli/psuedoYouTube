module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_App_js__ = __webpack_require__("./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_store_reducer__ = __webpack_require__("./src/store/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_thunk__);
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/pages/index.js';







var composeEnhancers = __WEBPACK_IMPORTED_MODULE_3_redux__["compose"];

var store = Object(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__src_store_reducer__["a" /* default */], composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_3_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_5_redux_thunk___default.a)));

var indexPage = function indexPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
        { store: store, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_App_js__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["default"] = (indexPage);

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SuggestedVideos_SuggestedVideos__ = __webpack_require__("./src/components/SuggestedVideos/SuggestedVideos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_VideoDetails_VideoDetails__ = __webpack_require__("./src/components/VideoDetails/VideoDetails.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MainVideo_MainVideo__ = __webpack_require__("./src/components/MainVideo/MainVideo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_NavBar_NavBar__ = __webpack_require__("./src/components/NavBar/NavBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CommentSection_CommentSection__ = __webpack_require__("./src/components/CommentSection/CommentSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_youtube_search_api_with_axios__ = __webpack_require__("youtube-search-api-with-axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_youtube_search_api_with_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_youtube_search_api_with_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_WatchHistory_WatchHistory__ = __webpack_require__("./src/components/WatchHistory/WatchHistory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dynamoose__ = __webpack_require__("dynamoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dynamoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_dynamoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_actions__ = __webpack_require__("./src/store/actions.js");
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            videos: [],
            topComments: [],
            videoDetails: {},
            videoId: "",
            watchHistory: []

            /*searchChangedHandler = (event) => {
                  this.searchQuery = event.target.value;
                  
            }*/

        };

        _this.getSearchQuery = function () {
            console.log(_this.props.searchQuery);
            __WEBPACK_IMPORTED_MODULE_7_youtube_search_api_with_axios___default()({ key: "AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4", q: _this.props.searchQuery, maxResults: 21 }, function (vids) {
                console.log(vids);
                _this.setState({
                    videos: vids
                });

                //page is visited first time
                if (_this.state.videoId == "") {
                    _this.videoSelected(vids[1]['id']['videoId'], vids[1]['snippet']['title'], vids[1]['snippet']['channelTitle'], vids[1]['snippet']["thumbnails"]["high"]["url"]);
                }
            });
        };

        _this.videoSelected = function (vidId, title, channelTitle, thumbnailURL) {

            _this.setState({
                videoId: vidId

            });

            _this.saveSelectedVideoToDatabase(vidId, title, channelTitle, thumbnailURL);
            _this.retrieveTopComments(vidId);
            _this.retrieveVideoDetails(vidId);
        };

        _this.saveSelectedVideoToDatabase = function (vidId, title, channelTitle, thumbnailURL) {

            var History = __WEBPACK_IMPORTED_MODULE_10_dynamoose___default.a.model('History', { videoId: String, title: String, channelTitle: String, thumbnailURL: String });

            new History({ videoId: vidId, title: title, channelTitle: channelTitle, thumbnailURL: thumbnailURL }).save(function () {
                //this.props.retrieveWatchHistoryFromDatabase();
                _this.retrieveWatchHistoryFromDatabase();
            });
        };

        _this.retrieveWatchHistoryFromDatabase = function () {

            var History = __WEBPACK_IMPORTED_MODULE_10_dynamoose___default.a.model('History', { videoId: String, title: String, channelTitle: String, thumbnailURL: String });

            History.scan().exec(function (err, watchHistory) {

                _this.setState({
                    watchHistory: watchHistory
                });
            });
        };

        _this.retrieveTopComments = function (vidId) {

            __WEBPACK_IMPORTED_MODULE_9_axios___default.a.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4&part=snippet,replies&videoId=' + vidId).then(function (response) {

                var Comment = function Comment() {
                    this.authorDisplayName = "";
                    this.authorProfileImageUrl = "";
                    this.textDisplay = "";
                };

                var comments = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = response["data"]["items"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        var c = new Comment();
                        c.authorDisplayName = item["snippet"]["topLevelComment"]["snippet"]["authorDisplayName"];
                        c.authorProfileImageUrl = item["snippet"]["topLevelComment"]["snippet"]["authorProfileImageUrl"];
                        c.textDisplay = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"];
                        comments.push(c);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                _this.setState({
                    topComments: comments
                });
            }).catch(function (error) {});
        };

        _this.retrieveVideoDetails = function (vidId) {
            __WEBPACK_IMPORTED_MODULE_9_axios___default.a.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBDylHNn4FIm4ekIMLjbdb4hgUi5jhxaB4&part=snippet,contentDetails,statistics&id=' + vidId).then(function (response) {

                var Details = function Details() {
                    this.channelTitle = "";
                    this.description = "";
                    this.title = "";
                    this.dislikeCount = "";
                    this.likeCount = "";
                    this.viewCount = "";
                };

                var d = new Details();
                d.channelTitle = response["data"]["items"][0]["snippet"]["channelTitle"];
                d.description = response["data"]["items"][0]["snippet"]["description"];
                d.title = response["data"]["items"][0]["snippet"]["title"];
                d.dislikeCount = response["data"]["items"][0]["statistics"]["dislikeCount"];
                d.likeCount = response["data"]["items"][0]["statistics"]["likeCount"];
                d.viewCount = response["data"]["items"][0]["statistics"]["viewCount"];

                _this.setState({
                    videoDetails: d
                });
            }).catch(function (error) {
                console.log(error);
            });
        };

        __WEBPACK_IMPORTED_MODULE_10_dynamoose___default.a.AWS.config.update({
            accessKeyId: 'AKIAJZKTIFNGRZ6SWE6A',
            secretAccessKey: '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',
            region: 'us-west-2'
        });
        //Initialize
        //this.searchQuery = "hp";
        _this.getSearchQuery();

        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-3302569164',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_NavBar_NavBar__["a" /* default */], { click: this.getSearchQuery, changed: this.props.searchChangedHandler, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3302569164' + ' ' + 'row',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 175
                        }
                    },
                    this.state && this.state.videos && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SuggestedVideos_SuggestedVideos__["a" /* default */], { click: this.videoSelected, currentVideoId: this.state.videoId, suggestedVideos: this.state.videos, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177
                        }
                    }),
                    this.state.videoId.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MainVideo_MainVideo__["a" /* default */], { video: this.state.videoId, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 181
                        }
                    }),
                    this.state.videoId.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_VideoDetails_VideoDetails__["a" /* default */], { details: this.state.videoDetails, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        }
                    }),
                    this.state.videoId.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CommentSection_CommentSection__["a" /* default */], { comments: this.state.topComments, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 187
                        }
                    }),
                    this.state.watchHistory.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_WatchHistory_WatchHistory__["a" /* default */], { history: this.state.watchHistory, click: this.videoSelected, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 190
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3302569164',
                    css: '.row.jsx-3302569164{max-width:1140px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01vQixBQUdrQyxpQkFDSCxjQUNsQiIsImZpbGUiOiJzcmMvQXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJlZW1fZGFya2F6YW5saS9SZWFjdEFwcC95b3V0dWJlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWdnZXN0ZWRWaWRlb3MgZnJvbSAnLi9jb21wb25lbnRzL1N1Z2dlc3RlZFZpZGVvcy9TdWdnZXN0ZWRWaWRlb3MnO1xuaW1wb3J0IFZpZGVvRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzL1ZpZGVvRGV0YWlscyc7XG5pbXBvcnQgTWFpblZpZGVvIGZyb20gJy4vY29tcG9uZW50cy9NYWluVmlkZW8vTWFpblZpZGVvJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInXG5pbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uL0NvbW1lbnRTZWN0aW9uJ1xuaW1wb3J0IFNlYXJjaFlvdVR1YmUgZnJvbSAneW91dHViZS1zZWFyY2gtYXBpLXdpdGgtYXhpb3MnO1xuaW1wb3J0IFdhdGNoSGlzdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvV2F0Y2hIaXN0b3J5L1dhdGNoSGlzdG9yeSdcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRHluYW1vREIgZnJvbSAnZHluYW1vb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgXG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIER5bmFtb0RCLkFXUy5jb25maWcudXBkYXRlKHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiAnQUtJQUpaS1RJRk5HUlo2U1dFNkEnLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiAnRTdFbmVTdEpwYmQrV0E5aTFZd2JxanFoREJiL1VxNHpDZURLVW9wcCcsXG4gICAgICAgICAgICByZWdpb246ICd1cy13ZXN0LTInXG4gICAgICAgIH0pO1xuICAgICAgICAvL0luaXRpYWxpemVcbiAgICAgICAgLy90aGlzLnNlYXJjaFF1ZXJ5ID0gXCJocFwiO1xuICAgICAgICB0aGlzLmdldFNlYXJjaFF1ZXJ5KCk7XG5cbiAgICAgIFxuICAgICAgICBcbiAgfVxuICAgIFxuICBzdGF0ZSA9IHtcbiAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgdG9wQ29tbWVudHM6IFtdLFxuICAgICAgICB2aWRlb0RldGFpbHM6IHt9LFxuICAgICAgICB2aWRlb0lkOiBcIlwiLFxuICAgICAgICB3YXRjaEhpc3Rvcnk6IFtdXG4gIH1cbiAgXG5cbiAgLypzZWFyY2hDaGFuZ2VkSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBcbiAgfSovXG4gIFxuICBnZXRTZWFyY2hRdWVyeSA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2VhcmNoUXVlcnkpO1xuICAgICAgU2VhcmNoWW91VHViZSh7a2V5OiBcIkFJemFTeUJEeWxITm40RkltNGVrSU1MamJkYjRoZ1VpNWpoeGFCNFwiLCBxOiB0aGlzLnByb3BzLnNlYXJjaFF1ZXJ5LCBtYXhSZXN1bHRzOiAyMX0sICh2aWRzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codmlkcyk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHZpZGVvczogdmlkc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vcGFnZSBpcyB2aXNpdGVkIGZpcnN0IHRpbWVcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnZpZGVvSWQgPT0gXCJcIil7XG4gICAgICAgICAgICAgIHRoaXMudmlkZW9TZWxlY3RlZCh2aWRzWzFdWydpZCddWyd2aWRlb0lkJ10sIHZpZHNbMV1bJ3NuaXBwZXQnXVsndGl0bGUnXSwgdmlkc1sxXVsnc25pcHBldCddWydjaGFubmVsVGl0bGUnXSwgdmlkc1sxXVsnc25pcHBldCddW1widGh1bWJuYWlsc1wiXVtcImhpZ2hcIl1bXCJ1cmxcIl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgfVxuICBcbiAgdmlkZW9TZWxlY3RlZCA9ICh2aWRJZCwgdGl0bGUsIGNoYW5uZWxUaXRsZSwgdGh1bWJuYWlsVVJMKSA9PiB7XG4gICAgICBcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmlkZW9JZDogdmlkSWQsXG4gICAgICAgICAgIFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuc2F2ZVNlbGVjdGVkVmlkZW9Ub0RhdGFiYXNlKHZpZElkLCB0aXRsZSwgY2hhbm5lbFRpdGxlLCB0aHVtYm5haWxVUkwpO1xuICAgICAgdGhpcy5yZXRyaWV2ZVRvcENvbW1lbnRzKHZpZElkKTtcbiAgICAgIHRoaXMucmV0cmlldmVWaWRlb0RldGFpbHModmlkSWQpO1xuICB9XG4gIFxuICBzYXZlU2VsZWN0ZWRWaWRlb1RvRGF0YWJhc2UgPSAodmlkSWQsIHRpdGxlLCBjaGFubmVsVGl0bGUsIHRodW1ibmFpbFVSTCkgPT4ge1xuICAgICAgXG4gICAgICBcbiAgICAgIHZhciBIaXN0b3J5ID0gRHluYW1vREIubW9kZWwoJ0hpc3RvcnknLCB7IHZpZGVvSWQ6IFN0cmluZywgdGl0bGU6IFN0cmluZywgY2hhbm5lbFRpdGxlOiBTdHJpbmcsIHRodW1ibmFpbFVSTDogU3RyaW5nfSk7XG5cbiAgICAgIG5ldyBIaXN0b3J5KHt2aWRlb0lkOiB2aWRJZCwgdGl0bGU6IHRpdGxlLCBjaGFubmVsVGl0bGU6IGNoYW5uZWxUaXRsZSwgdGh1bWJuYWlsVVJMOiB0aHVtYm5haWxVUkx9KS5zYXZlKCAoKSA9PiB7XG4gICAgICAgICAvL3RoaXMucHJvcHMucmV0cmlldmVXYXRjaEhpc3RvcnlGcm9tRGF0YWJhc2UoKTtcbiAgICAgICAgICB0aGlzLnJldHJpZXZlV2F0Y2hIaXN0b3J5RnJvbURhdGFiYXNlKCk7XG4gICAgICB9KTtcbiAgICAgIFxuICB9XG4gIFxuICByZXRyaWV2ZVdhdGNoSGlzdG9yeUZyb21EYXRhYmFzZSA9ICgpID0+IHtcbiAgICBcbiAgICAgIHZhciBIaXN0b3J5ID0gRHluYW1vREIubW9kZWwoJ0hpc3RvcnknLCB7IHZpZGVvSWQ6IFN0cmluZywgdGl0bGU6IFN0cmluZywgY2hhbm5lbFRpdGxlOiBTdHJpbmcsIHRodW1ibmFpbFVSTDogU3RyaW5nfSk7XG5cbiAgICAgIEhpc3Rvcnkuc2NhbigpLmV4ZWMoIChlcnIsIHdhdGNoSGlzdG9yeSkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdhdGNoSGlzdG9yeTogd2F0Y2hIaXN0b3J5XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICB9KTtcblxuICBcbiAgfVxuICBcbiAgXG4gIFxuICByZXRyaWV2ZVRvcENvbW1lbnRzID0gKHZpZElkKSA9PiB7XG4gICAgICBcbiAgICAgIFxuICAgICAgICBBeGlvcy5nZXQoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudFRocmVhZHM/a2V5PUFJemFTeUJEeWxITm40RkltNGVrSU1MamJkYjRoZ1VpNWpoeGFCNCZwYXJ0PXNuaXBwZXQscmVwbGllcyZ2aWRlb0lkPScgKyB2aWRJZCkudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgQ29tbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yRGlzcGxheU5hbWUgPSAgXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhvclByb2ZpbGVJbWFnZVVybCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb21tZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHJlc3BvbnNlW1wiZGF0YVwiXVtcIml0ZW1zXCJdKXtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBDb21tZW50KCk7XG4gICAgICAgICAgICAgICAgYy5hdXRob3JEaXNwbGF5TmFtZSA9IGl0ZW1bXCJzbmlwcGV0XCJdW1widG9wTGV2ZWxDb21tZW50XCJdW1wic25pcHBldFwiXVtcImF1dGhvckRpc3BsYXlOYW1lXCJdO1xuICAgICAgICAgICAgICAgIGMuYXV0aG9yUHJvZmlsZUltYWdlVXJsID0gaXRlbVtcInNuaXBwZXRcIl1bXCJ0b3BMZXZlbENvbW1lbnRcIl1bXCJzbmlwcGV0XCJdW1wiYXV0aG9yUHJvZmlsZUltYWdlVXJsXCJdO1xuICAgICAgICAgICAgICAgIGMudGV4dERpc3BsYXkgPSBpdGVtW1wic25pcHBldFwiXVtcInRvcExldmVsQ29tbWVudFwiXVtcInNuaXBwZXRcIl1bXCJ0ZXh0RGlzcGxheVwiXTtcbiAgICAgICAgICAgICAgICBjb21tZW50cy5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3BDb21tZW50czogY29tbWVudHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgIFxuICB9XG4gIFxuICByZXRyaWV2ZVZpZGVvRGV0YWlscyA9ICh2aWRJZCkgPT4ge1xuICAgICAgQXhpb3MuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9rZXk9QUl6YVN5QkR5bEhObjRGSW00ZWtJTUxqYmRiNGhnVWk1amh4YUI0JnBhcnQ9c25pcHBldCxjb250ZW50RGV0YWlscyxzdGF0aXN0aWNzJmlkPScrdmlkSWQpLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2YXIgRGV0YWlscyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbFRpdGxlID0gIFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNsaWtlQ291bnQ9XCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmxpa2VDb3VudD1cIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvdW50PVwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIGQgPSBuZXcgRGV0YWlscygpO1xuICAgICAgICAgIGQuY2hhbm5lbFRpdGxlID0gcmVzcG9uc2VbXCJkYXRhXCJdW1wiaXRlbXNcIl1bMF1bXCJzbmlwcGV0XCJdW1wiY2hhbm5lbFRpdGxlXCJdO1xuICAgICAgICAgIGQuZGVzY3JpcHRpb24gPSByZXNwb25zZVtcImRhdGFcIl1bXCJpdGVtc1wiXVswXVtcInNuaXBwZXRcIl1bXCJkZXNjcmlwdGlvblwiXTtcbiAgICAgICAgICBkLnRpdGxlID0gcmVzcG9uc2VbXCJkYXRhXCJdW1wiaXRlbXNcIl1bMF1bXCJzbmlwcGV0XCJdW1widGl0bGVcIl07XG4gICAgICAgICAgZC5kaXNsaWtlQ291bnQgPSByZXNwb25zZVtcImRhdGFcIl1bXCJpdGVtc1wiXVswXVtcInN0YXRpc3RpY3NcIl1bXCJkaXNsaWtlQ291bnRcIl07XG4gICAgICAgICAgZC5saWtlQ291bnQgPSByZXNwb25zZVtcImRhdGFcIl1bXCJpdGVtc1wiXVswXVtcInN0YXRpc3RpY3NcIl1bXCJsaWtlQ291bnRcIl07XG4gICAgICAgICAgZC52aWV3Q291bnQgPSByZXNwb25zZVtcImRhdGFcIl1bXCJpdGVtc1wiXVswXVtcInN0YXRpc3RpY3NcIl1bXCJ2aWV3Q291bnRcIl07XG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aWRlb0RldGFpbHM6IGRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcblxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgXG4gIH1cbiAgXG4gICAgXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIGNsaWNrPXt0aGlzLmdldFNlYXJjaFF1ZXJ5fSBjaGFuZ2VkPXt0aGlzLnByb3BzLnNlYXJjaENoYW5nZWRIYW5kbGVyfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS52aWRlb3MgJiYgPFN1Z2dlc3RlZFZpZGVvcyBjbGljaz17dGhpcy52aWRlb1NlbGVjdGVkfSBjdXJyZW50VmlkZW9JZD17dGhpcy5zdGF0ZS52aWRlb0lkfSBzdWdnZXN0ZWRWaWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfS8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS52aWRlb0lkLmxlbmd0aCA+IDAgJiYgPE1haW5WaWRlbyB2aWRlbz17dGhpcy5zdGF0ZS52aWRlb0lkfS8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLnZpZGVvSWQubGVuZ3RoID4gMCAmJiA8VmlkZW9EZXRhaWxzIGRldGFpbHM9e3RoaXMuc3RhdGUudmlkZW9EZXRhaWxzfS8+IFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZS52aWRlb0lkLmxlbmd0aCA+IDAgJiYgPENvbW1lbnRTZWN0aW9uIGNvbW1lbnRzPXt0aGlzLnN0YXRlLnRvcENvbW1lbnRzfS8+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLndhdGNoSGlzdG9yeS5sZW5ndGggPiAwICYmICA8V2F0Y2hIaXN0b3J5IGhpc3Rvcnk9e3RoaXMuc3RhdGUud2F0Y2hIaXN0b3J5fSBjbGljaz17dGhpcy52aWRlb1NlbGVjdGVkfSAvPlxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoUXVlcnk6IHN0YXRlLnNlYXJjaFF1ZXJ5XG4gICAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlYXJjaENoYW5nZWRIYW5kbGVyOiAoZXZlbnQpID0+IGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSF9DSEFOR0VEXCIsIGV2ZW50OiBldmVudH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuLy9leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=src/App.js */'
                })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        searchQuery: state.searchQuery
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        searchChangedHandler: function searchChangedHandler(event) {
            return dispatch({ type: "SEARCH_CHANGED", event: event });
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App));
//export default App;

/***/ }),

/***/ "./src/components/CommentSection/Comment/Comment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/kareem_darkazanli/ReactApp/youtube/src/components/CommentSection/Comment/Comment.js";



var comment = function comment(props) {

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { width: "100%", display: "inline-block" }, className: "jsx-66115584",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: props.comment["authorProfileImageUrl"], alt: "profilepic", width: "45px", height: "45px", className: "jsx-66115584" + " " + "profile-pic",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: "5px", width: "400px", verticalAlign: "top", display: "inline-block" }, className: "jsx-66115584",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                    className: "jsx-66115584" + " " + "author-name",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                props.comment["authorDisplayName"]
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                    className: "jsx-66115584" + " " + "comment",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                props.comment["textDisplay"]
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "66115584",
            css: ".profile-pic.jsx-66115584{margin-top:5px;border-radius:50%;display:inline-block;}.author-name.jsx-66115584{overflow-wrap:normal;overflow:hidden;width:100%;height:38px;vertical-align:top;margin-top:5px;}.comment.jsx-66115584{overflow-wrap:normal;overflow:hidden;font-weight:lighter;font-size:14px;vertical-align:top;margin-top:-30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uL0NvbW1lbnQvQ29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHZ0MsQUFNRSxBQVNBLGVBZEMsTUFNTixBQVNBLFlBZFMsSUFNZCxBQVNTLFdBUlIsTUFOWixHQWVlLEdBUkksWUFTQSxPQVJKLFlBU0UsR0FSckIsY0FTQSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi9Db21tZW50L0NvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmVlbV9kYXJrYXphbmxpL1JlYWN0QXBwL3lvdXR1YmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBjb21tZW50ID0gKHByb3BzKSA9PiB7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmNvbW1lbnRbXCJhdXRob3JQcm9maWxlSW1hZ2VVcmxcIl19IGFsdD1cInByb2ZpbGVwaWNcIiB3aWR0aD1cIjQ1cHhcIiBoZWlnaHQ9XCI0NXB4XCIgY2xhc3NOYW1lPVwicHJvZmlsZS1waWNcIi8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNXB4XCIsIHdpZHRoOlwiNDAwcHhcIiwgdmVydGljYWxBbGlnbjpcInRvcFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3ItbmFtZVwiPntwcm9wcy5jb21tZW50W1wiYXV0aG9yRGlzcGxheU5hbWVcIl19PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tbWVudFwiPntwcm9wcy5jb21tZW50W1widGV4dERpc3BsYXlcIl19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wcm9maWxlLXBpYyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1lbnQge1xuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnQ7Il19 */\n/*@ sourceURL=src/components/CommentSection/Comment/Comment.js */"
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (comment);

/***/ }),

/***/ "./src/components/CommentSection/CommentSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Comment_Comment__ = __webpack_require__("./src/components/CommentSection/Comment/Comment.js");
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/src/components/CommentSection/CommentSection.js';




var commentSection = function commentSection(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-345297347' + ' ' + 'comment-section',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        props.comments.map(function (comment, index) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Comment_Comment__["a" /* default */], { key: index, comment: comment, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            });
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '345297347',
            css: '.comment-section.jsx-345297347{width:640px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uL0NvbW1lbnRTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUc2QixZQUNJLGdCQUNwQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi9Db21tZW50U2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyZWVtX2RhcmthemFubGkvUmVhY3RBcHAveW91dHViZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQvQ29tbWVudCc7XG5cbmNvbnN0IGNvbW1lbnRTZWN0aW9uID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXNlY3Rpb25cIj5cbiAgICAgICAge1xuICAgICAgICAgIHByb3BzLmNvbW1lbnRzLm1hcChmdW5jdGlvbihjb21tZW50LCBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29tbWVudCBrZXk9e2luZGV4fSBjb21tZW50PXtjb21tZW50fT48L0NvbW1lbnQ+XG4gICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb21tZW50LXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudFNlY3Rpb247Il19 */\n/*@ sourceURL=src/components/CommentSection/CommentSection.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (commentSection);

/***/ }),

/***/ "./src/components/MainVideo/MainVideo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_youtube_player__ = __webpack_require__("react-youtube-player");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_youtube_player__);
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/src/components/MainVideo/MainVideo.js';




var mainVideo = function mainVideo(props) {

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-2540832070' + ' ' + 'main-video',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_youtube_player___default.a, { videoId: props.video, playbackState: 'unstarted', configuration: { showinfo: 1, controls: 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2540832070',
            css: '.main-video.jsx-2540832070{width:640px;height:360px;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL01haW5WaWRlby9NYWluVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCLEFBRzZCLFlBQ0MsYUFDUSxxQkFDekIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvTWFpblZpZGVvL01haW5WaWRlby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyZWVtX2RhcmthemFubGkvUmVhY3RBcHAveW91dHViZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWW91dHViZVBsYXllciBmcm9tICdyZWFjdC15b3V0dWJlLXBsYXllcic7XG5cbmNvbnN0IG1haW5WaWRlbyA9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG4gICAgICAgICAgICA8WW91dHViZVBsYXllciB2aWRlb0lkPXtwcm9wcy52aWRlb30gcGxheWJhY2tTdGF0ZT0ndW5zdGFydGVkJyBjb25maWd1cmF0aW9uPXt7c2hvd2luZm86IDEsIGNvbnRyb2xzOiAzfX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tYWluLXZpZGVvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpblZpZGVvO1xuIl19 */\n/*@ sourceURL=src/components/MainVideo/MainVideo.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (mainVideo);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/kareem_darkazanli/ReactApp/youtube/src/components/NavBar/NavBar.js";



//import searchIcon from '/static/icons8-search_filled.png';

var navBar = function navBar(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
            className: "jsx-2057334529" + " " + "nav-bar",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { backgroundColor: "white", height: "100%", width: "950px" }, className: "jsx-2057334529",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                { style: { marginLeft: "40px", height: "100%", width: "100px", display: "inline-block", marginTop: "10px", verticalAlign: "center" }, className: "jsx-2057334529",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "https://vignette1.wikia.nocookie.net/custombionicle/images/c/c0/YouTube.png/revision/latest?cb=20120916061301", alt: "logo", style: { maxWidth: "80%", maxHeight: "80%" }, className: "jsx-2057334529",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { onChange: props.changed, type: "text", id: "searchquery", placeholder: "Search", className: "jsx-2057334529" + " " + "search-bar",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "button",
                { onClick: props.click, type: "button", className: "jsx-2057334529" + " " + "search-button",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { style: { marginTop: "2px", maxWidth: "80%", maxHeight: "80%" }, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPkSURBVGhD7ZlbiE1RHMZnkMsgtzcjbxIpHuQJ44VE5HY0GE3N/dJMDUJDTcn1wYtQJLmTB5fyqISSSy4hNXgiPHiQcWcYv4/v6IxmMPvsvWeO5qt/68y31vm+/3+ttfdeZ09WN7rRBVFRUTG6rKxsRWlp6WnaRuIt0aKAe0ncIPaVlJQsgxvkr3UNNDQ09CCxxSR4NZl0asB/aYd/T3uE4sdZqvNQXl4+iYRupST3hvYk7XKtTiKR6O2hWYWFhYM1nv419F8hvvo7avcWFxcP9dBYkU0C64gfs037nKgi2b7u/ytYxRF8Z0+KxhPaye6OHsxyTwwPyJz4RgJbqqqqBri7w2AlxqBzSXpofWTVFrkrUmRjeMhFvMV4ofm0oC2I3l7rNqM7113RAJN6mWH0TvvddGhAd0NSP7KbgC/UZkLbKZSVaAO69k6oGOJ+TU1NH/PhQLdYhG/LAKNNpiMBHjkqQl7EWtPhgOTzXcSLgoKC/qYjA6s/y4W8IsJ7cCJ23cIVpiIHk3bBnitMpQffHiXYFPqe/QPwmydfCrpjKj0gtMqFnDQVC/DLwVvHmBY9PE0HB2JnPDNLTcUGfM/aO99UcCDyUGI6O5mKDfiulzex0VRwIPJBYtyCe5mKDUzicnnTHjQVGDqSaEY++O9Yge8c+58yFRwWavafsQLfBfY/ZCo4ENFDqaWoqGigqdjAliqRN+12U8GByE3PykRTsQHPbS5kpangQGR/aGIdBJ435M2RZZqp4EAseee4bCoWkHwuvjppv0n9yRwY+i2N2EfiK9fJcNORA79aTSBx1lT6QOy4RXeZihR1dXX98HoqT1Zmuun0gdh4RLXMn/k8ynRkwGutiiCumwoPFJG86C+EsmfbARM1Fp8mQhM3w3R4qK6uHob4Mxez23So0PWI/iN77DQdPjhOT8Hkk43WQWX/7EkfvqlclDbRqOvEXdEAs6UY6SWEijnakZdy7UHbCa3HLkIh/YS7owMrMx+jH6diErhDO9NdHYLvTnqF+lpaqQGnN5CxFDMBowcpxudp5/zLlmAFchlfS+g1qb6vC/uck29VDGOjf/Oo3/CY6R3wrxnl8ztC/1aoJ4klfJ6tFaQtIrYS1+j7ljL+Hu1U6dEm+LtzihEqKyuHYLiauJuaRHvBOJ0UzpCgHnatbhj0t1WMnl/xFJMExiMx1vlsM+1h2lO0x4gdfK6nzfvb9lPSjOv8YsKAi/n8ezFEVK9ro8N/XwzxKSOLUdJtFUMs8JDMgYpx8t3FdCkoaSffqhiKzPOQzAGJtyqGInQ8ynF3ZsEHV61E5haRhLZTxhfRjcxCVtZ3OcPr+r3ZBoQAAAAASUVORK5CYII=", className: "jsx-2057334529",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                })
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "2057334529",
            css: ".nav-bar.jsx-2057334529{width:100%;height:50px;margin-bottom:30px;box-shadow:0 2px 3px #ccc;}.search-bar.jsx-2057334529{font-size:16px;vertical-align:top;margin-left:40px;height:30px;margin-top:8px;margin-bottom:12px;width:600px;display:inline-block;}.search-button.jsx-2057334529{vertical-align:top;height:36px;margin-top:8px;margin-bottom:6px;width:70px;display:inline-block;}.hamburger-icon.jsx-2057334529{object-fit:cover;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2lCLEFBRzRCLEFBT0ksQUFXSSxBQVNGLFdBMUJMLElBT08sRUFvQkQsRUFUTixJQWpCTyxRQWtCSixHQVhFLENBb0JULE9BMUJrQixDQTJCQyxHQVRULEtBWE4sWUFDRyxDQVdKLElBbEJmLE9BbUJ5QixHQVhGLGtCQVl2QixDQVhnQixZQUNTLHFCQUN6QixNQWdCeUIscUJBQ3pCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmVlbV9kYXJrYXphbmxpL1JlYWN0QXBwL3lvdXR1YmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vL2ltcG9ydCBzZWFyY2hJY29uIGZyb20gJy9zdGF0aWMvaWNvbnM4LXNlYXJjaF9maWxsZWQucG5nJztcblxuY29uc3QgbmF2QmFyID0gKHByb3BzKSA9PiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYmFyXCI+XG4gICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLCBoZWlnaHQ6XCIxMDAlXCIsIHdpZHRoOiBcIjk1MHB4XCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNDBweFwiLCBoZWlnaHQ6XCIxMDAlXCIsIHdpZHRoOiBcIjEwMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpblRvcDpcIjEwcHhcIiwgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWduZXR0ZTEud2lraWEubm9jb29raWUubmV0L2N1c3RvbWJpb25pY2xlL2ltYWdlcy9jL2MwL1lvdVR1YmUucG5nL3JldmlzaW9uL2xhdGVzdD9jYj0yMDEyMDkxNjA2MTMwMVwiIGFsdD1cImxvZ29cIiBzdHlsZT17e21heFdpZHRoOiBcIjgwJVwiLCBtYXhIZWlnaHQ6XCI4MCVcIn19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfSBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaHF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbGlja30gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48aW1nIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjJweFwiLCBtYXhXaWR0aDogXCI4MCVcIiwgbWF4SGVpZ2h0OlwiODAlXCJ9fSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFQa1NVUkJWR2hEN1psYmlFMVJITVpua01zZ3R6Y2pieElwSHVRSjQ0VkU1SFkwR0UzTi9kSk1EVUpEVGNuMXdZdFFKTG1UQjVmeXFJU1NTeTRoTlhnaVBIaVFjV2NZdjQvdjZJeG1NUHZzdldlTzVxdC82OHkzMXZtKy8zK3R0ZmRlWjA5V043clJCVkZSVVRHNnJLeHNSV2xwNlduYVJ1SXQwYUtBZTBuY0lQYVZsSlFzZ3h2a3IzVU5ORFEwOUNDeHhTUjROWmwwYXNCL2FZZC9UM3VFNHNkWnF2TlFYbDQraVlSdXBTVDNodllrN1hLdFRpS1I2TzJoV1lXRmhZTTFudjQxOUY4aHZ2bzdhdmNXRnhjUDlkQllrVTBDNjRnZnMwMzduS2dpMmI3dS95dFl4UkY4WjArS3hoUGF5ZTZPSHN4eVR3d1B5Sno0UmdKYnFxcXFCcmk3dzJBbHhxQnpTWHBvZldUVkZya3JVbVJqZU1oRnZNVjRvZm0wb0MySTNsN3JOcU03MTEzUkFKTjZtV0gwVHZ2ZGRHaEFkME5TUDdLYmdDL1Vaa0xiS1pTVmFBTzY5azZvR09KK1RVMU5IL1BoUUxkWWhHL0xBS05OcGlNQkhqa3FRbDdFV3RQaGdPVHpYY1NMZ29LQy9xWWpBNnMveTRXOElzSjdjQ0oyM2NJVnBpSUhrM2JCbml0TXBRZmZIaVhZRlBxZS9RUHdteWRmQ3JwaktqMGd0TXFGbkRRVkMvREx3VnZIbUJZOVBFMEhCMkpuUEROTFRjVUdmTS9hTzk5VWNDRHlVR0k2TzVtS0RmaXVsemV4MFZSd0lQSkJZdHlDZTVtS0RVemljbm5USGpRVkdEcVNhRVkrK085WWdlOGMrNTh5RlJ3V2F2YWZzUUxmQmZZL1pDbzRFTkZEcWFXb3FHaWdxZGpBbGlxUk4rMTJVOEdCeUUzUHlrUlRzUUhQYlM1a3BhbmdRR1IvYUdJZEJKNDM1TTJSWlpxcDRFQXNlZWU0YkNvV2tId3V2anBwdjBuOXlSd1kraTJOMkVmaUs5ZkpjTk9SQTc5YVRTQngxbFQ2UU95NFJYZVppaFIxZFhYOThIb3FUMVptdXVuMGdkaDRSTFhNbi9rOHluUmt3R3V0aWlDdW13b1BGSkc4NkMrRXNtZmJBUk0xRnA4bVFoTTN3M1I0cUs2dUhvYjRNeGV6MjNTbzBQV0kvaU43N0RRZFBqaE9UOEhrazQzV1FXWC83RWtmdnFsY2xEYlJxT3ZFWGRFQXM2VVk2U1dFaWpuYWtaZHk3VUhiQ2EzSExrSWgvWVM3b3dNck14K2pINmRpRXJoRE85TmRIWUx2VG5xRitscGFxUUduTjVDeEZETUJvd2NweHVkcDUvekxsbUFGY2hsZlMrZzFxYjZ2Qy91Y2syOVZER09qZi9PbzMvQ1k2UjN3cnhubDh6dEMvMWFvSjRrbGZKNnRGYVF0SXJZUzErajdsakwrSHUxVTZkRW0rTHR6aWhFcUt5dUhZTGlhdUp1YVJIdkJPSjBVenBDZ0huYXRiaGowdDFXTW5sL3hGSk1FeGlNeDF2bHNNKzFoMmxPMHg0Z2RmSzZuemZ2YjlsUFNqT3Y4WXNLQWkvbjhlekZFVks5cm84Ti9Yd3p4S1NPTFVkSnRGVU1zOEpETWdZcHg4dDNGZENrb2FTZmZxaGlLelBPUXpBR0p0eXFHSW5ROHluRjNac0VIVjYxRTVoYVJoTFpUeGhmUmpjeENWdFozT2NQcityM1pCb1FBQUFBQVNVVk9SSzVDWUlJPScvPjwvYnV0dG9uPlxuICAgICAgIDwvZGl2PlxuICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2LWJhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICNjY2M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFtYnVyZ2VyLWljb24ge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyOyJdfQ== */\n/*@ sourceURL=src/components/NavBar/NavBar.js */"
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (navBar);

/***/ }),

/***/ "./src/components/SuggestedVideos/SuggestedVideos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Thumbnail_Thumbnail__ = __webpack_require__("./src/components/SuggestedVideos/Thumbnail/Thumbnail.js");
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/src/components/SuggestedVideos/SuggestedVideos.js';




var suggestedVideos = function suggestedVideos(props) {

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-678250976' + ' ' + 'side-panel',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        props.suggestedVideos.map(function (suggestedVideo, index) {
            if (props.currentVideoId != suggestedVideo["id"]["videoId"]) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Thumbnail_Thumbnail__["a" /* default */], { key: index, videoId: suggestedVideo["id"]["videoId"], title: suggestedVideo["snippet"]["title"], channelTitle: suggestedVideo["snippet"]["channelTitle"], thumbnailURL: suggestedVideo["snippet"]["thumbnails"]["high"]["url"], click: props.click, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                });
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '678250976',
            css: '.side-panel.jsx-678250976{float:right;width:400px;margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1N1Z2dlc3RlZFZpZGVvcy9TdWdnZXN0ZWRWaWRlb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdpQyxZQUNBLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL1N1Z2dlc3RlZFZpZGVvcy9TdWdnZXN0ZWRWaWRlb3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcmVlbV9kYXJrYXphbmxpL1JlYWN0QXBwL3lvdXR1YmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tICcuL1RodW1ibmFpbC9UaHVtYm5haWwnO1xuXG5jb25zdCBzdWdnZXN0ZWRWaWRlb3M9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1wYW5lbFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb3BzLnN1Z2dlc3RlZFZpZGVvcy5tYXAoZnVuY3Rpb24oc3VnZ2VzdGVkVmlkZW8sIGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvcHMuY3VycmVudFZpZGVvSWQgIT0gc3VnZ2VzdGVkVmlkZW9bXCJpZFwiXVtcInZpZGVvSWRcIl0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUaHVtYm5haWwga2V5PXtpbmRleH0gdmlkZW9JZD17c3VnZ2VzdGVkVmlkZW9bXCJpZFwiXVtcInZpZGVvSWRcIl19IHRpdGxlPXtzdWdnZXN0ZWRWaWRlb1tcInNuaXBwZXRcIl1bXCJ0aXRsZVwiXX0gY2hhbm5lbFRpdGxlPXtzdWdnZXN0ZWRWaWRlb1tcInNuaXBwZXRcIl1bXCJjaGFubmVsVGl0bGVcIl19IHRodW1ibmFpbFVSTD17c3VnZ2VzdGVkVmlkZW9bXCJzbmlwcGV0XCJdW1widGh1bWJuYWlsc1wiXVtcImhpZ2hcIl1bXCJ1cmxcIl19IGNsaWNrPXtwcm9wcy5jbGlja30+PC9UaHVtYm5haWw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnNpZGUtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgc3VnZ2VzdGVkVmlkZW9zOyJdfQ== */\n/*@ sourceURL=src/components/SuggestedVideos/SuggestedVideos.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (suggestedVideos);

/***/ }),

/***/ "./src/components/SuggestedVideos/Thumbnail/Thumbnail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/kareem_darkazanli/ReactApp/youtube/src/components/SuggestedVideos/Thumbnail/Thumbnail.js",
    _this = this;




var thumbnail = function thumbnail(props) {

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { backgroundColor: "white", height: "115px", width: "100%" }, onClick: props.click.bind(_this, props.videoId, props.title, props.channelTitle, props.thumbnailURL), className: "jsx-3485689308",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: props.thumbnailURL, alt: "thumbnail", height: "100px", width: "160px", className: "jsx-3485689308" + " " + "thumbnail",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { display: "inline-block", width: "225px", height: "100%", marginLeft: "5px", verticalAlign: "top" }, className: "jsx-3485689308",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                    className: "jsx-3485689308" + " " + "video-title",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                props.title
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                {
                    className: "jsx-3485689308" + " " + "channel-title",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                props.channelTitle
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "3485689308",
            css: ".thumbnail.jsx-3485689308{margin-left:5px;object-fit:cover;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;}.video-title.jsx-3485689308{font-size:15px;font-weight:bolder;overflow-wrap:normal;overflow:hidden;width:225px;vertical-align:top;margin-top:10px;}.channel-title.jsx-3485689308{font-size:12px;color:grey;font-weight:lighter;vertical-align:top;margin-top:-10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1N1Z2dlc3RlZFZpZGVvcy9UaHVtYm5haWwvVGh1bWJuYWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QixBQUdxQyxBQVNELEFBVUEsZUFUSSxBQVVSLENBbkJNLFVBb0JHLE9BbkJGLENBU0csWUFXRixLQW5CWCxJQVNRLElBUlcsTUFtQlYsTUFWTCxXQVdoQixDQVZ1QixtQkFDSCxnQkFDcEIsa0NBWHlCLHFCQUN6QiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TdWdnZXN0ZWRWaWRlb3MvVGh1bWJuYWlsL1RodW1ibmFpbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FyZWVtX2RhcmthemFubGkvUmVhY3RBcHAveW91dHViZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHRodW1ibmFpbCA9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjExNXB4XCIsIHdpZHRoOlwiMTAwJVwifX0gb25DbGljaz17cHJvcHMuY2xpY2suYmluZCh0aGlzLCBwcm9wcy52aWRlb0lkLCBwcm9wcy50aXRsZSwgcHJvcHMuY2hhbm5lbFRpdGxlLCBwcm9wcy50aHVtYm5haWxVUkwpfT5cbiAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIiBzcmM9e3Byb3BzLnRodW1ibmFpbFVSTH0gYWx0PVwidGh1bWJuYWlsXCIgaGVpZ2h0PVwiMTAwcHhcIiB3aWR0aD1cIjE2MHB4XCIvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOiBcIjIyNXB4XCIsIGhlaWdodDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6XCI1cHhcIiwgdmVydGljYWxBbGlnbjpcInRvcFwifX0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj57cHJvcHMudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNoYW5uZWwtdGl0bGVcIj57cHJvcHMuY2hhbm5lbFRpdGxlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpZGVvLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY2hhbm5lbC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRodW1ibmFpbDsiXX0= */\n/*@ sourceURL=src/components/SuggestedVideos/Thumbnail/Thumbnail.js */"
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (thumbnail);

/***/ }),

/***/ "./src/components/VideoDetails/VideoDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/kareem_darkazanli/ReactApp/youtube/src/components/VideoDetails/VideoDetails.js";



var videoDetails = function videoDetails(props) {
    var likes = props.details.likeCount;
    var dislikes = props.details.dislikeCount;

    if (likes > 999 && likes < 1000000) {
        likes = Math.floor(likes / 1000) + "K";
    } else if (likes > 999999) {
        likes = Math.floor(likes / 1000000) + "M";
    }

    likes = likes + "";

    if (dislikes > 999 && dislikes < 1000000) {
        dislikes = Math.floor(dislikes / 1000) + "K";
    } else if (likes > 999999) {
        dislikes = Math.floor(dislikes / 1000000) + "M";
    }

    dislikes = dislikes + "";

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
            className: "jsx-2573702773" + " " + "video-details",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { width: "100%", display: "inline-block", borderBottom: "1px solid #aaa" }, className: "jsx-2573702773",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                { style: { fontSize: "20px" }, className: "jsx-2573702773",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                },
                props.details.title
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                { style: { float: "right", width: "250px", height: "40px" }, className: "jsx-2573702773",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { width: "30px", height: "30px", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJcSURBVGhD7Zi9a1NRGMYj+EVFnBQEERwEB0XUxcFJdBAVB41DDcTEfDkE1y6SrZPiIBTq4lDaf6BbN0epICi4OXcSkdIWNKi/8/peiYcTUvsezQmcHzyce3POed/nSXIvNyllMplMJjPJdDqd061Wa7bZbB7VlyaPRqNxnwAbBPmBPhHqnE5NBpieQi81wG8R6rUuSR8Mn8Lwez+E6nu5XN6rS9OFr9I9QqwHAhR6o0vTpFqt7ifAfMD4H2q321d1S3pg7iQm3/qmfRF0UbekBwbLGPzimw7I3bGO6LZ06Ha7+zD33DM7VFw7d3VrOmDqBJ/CashwSKxd0K3pwPVwC3OffbPDRIhN9txhvDIo5i7VarXDWvb/goE6BvqDRo3qU3OhXq8f1BY23FcFXfBFo+O6xH0SZ2n6zTMSRdRdocWuX50MUGhxSIM5XeLuTsv+fEzxxl3WVjtnVBCOD3H81Z+PKeo/FjMWRgVhPB+aj6xZMWNhG0GuheYja0bMWNhGkOuh+ZiixyMxYyGFINwVH4gZCykEcT3EjIUUgrjf9WLGQgJBtnq93m4xY2HcQai/KkasjDsIeiFGrIw7CPUfihEro4JwfNOfiymesy6KESujgjBOh+YjqV+pVA6IEStFEMaPjDOMa3peBLmtTf+FPoiJGBRBkDzvcP7MnQ8EOaPz0UXtJdcjCkUQxjXkQshPWY4liIPjV0XzmOL6iPenRBHE12AQGh7j/F1o3U7l+lLa/suwwD2wUXQ+oGldItB8j3sHef2pt+5v9YQ6NygZL0Qmk8lkMpmJolT6CQoqQyX6k0HFAAAAAElFTkSuQmCC", style: { marginLeft: "25px", display: "inline-block" }, className: "jsx-2573702773",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "p",
                    { style: { lineHeight: "30px", marginLeft: "10px", fontSize: "18px", fontWeight: "heavier", color: "grey", verticalAlign: "top", display: "inline-block", marginTop: "0px" }, className: "jsx-2573702773",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    },
                    likes
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { width: "30px", height: "30px", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIKSURBVGhD7Zm9SwNBFMRTWIgiiI2Cgo2ViLWVKFgqWIjVSSC5fJjaVs6/wEItRGwtBbESLCws7CxS2YqlSArBgCA6KxOJx13yNpzxLewPBnV9uzNjLrkEcx6Px+M25XL5BLpO0BpHflGpVGbxu+PYbK+6gg7NmTy+d0qlUh2HfcaF9W2O/ID1dajZPpeRmmEYrtKmN6RFisXiGNZf4nNZCX7P+Xx+lHb2SIvgL7aZNJel4LlDO3ukRczPSXNZCh6PURQN0NIOTUWM4LNFSzsUFrmnpR3aihjh5XiJtnI0FoHXBW3lKC3ygZf7GVrL0FjECH4HtJahuMir1Q1SaxEjeMpvkMqLyG+QmosYwVd2g3SgiOwGqb0ItcgY6bhQBN5HjJGOI0VuGSMdR4rUGSMdX6S/umOMdFwoAu89xkhHexH4PuDrEGOkIy2CtSA+89dChku8nR9nhM6EYbiADStxYX2KI9/gU9sk1t+TDLsJ+3bbzxZouVAoTNM6exAqioeUCMFOeYQeEGw/HlSgBj5bDPIIPSCYdRlcmhvcrguEsyqDy+ucW/WBgOIyKPIWBMEwt+oDIcVl1F5eLRBSVAaPyhm36AVBJWWeOK4bBO1aplarTXBcNwjbsQzu2CMc1Q8CJ5bBc+SGI+6A4PEyjUz+6fkftMqYR6Jarc5x2U3wNnye33o8nr6Ry30BTz3tmr5vZnsAAAAASUVORK5CYII=", style: { marginLeft: "25px", display: "inline-block" }, className: "jsx-2573702773",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "p",
                    { style: { lineHeight: "30px", marginLeft: "10px", fontSize: "18px", fontWeight: "heavier", color: "grey", verticalAlign: "top", display: "inline-block", marginTop: "0px" }, className: "jsx-2573702773",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    },
                    dislikes
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { height: "150px", overflowY: "auto", borderBottom: "1px solid #aaa" }, className: "jsx-2573702773",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "p",
                { style: { fontSize: "13px", wordBreak: "break-word", textOverflow: "ellipsis", overflow: "scroll" }, className: "jsx-2573702773",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                },
                props.details.description
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "2573702773",
            css: ".video-details.jsx-2573702773{width:641px;display:inline-block;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1ZpZGVvRGV0YWlscy9WaWRlb0RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNvQixBQUc2QixZQUNTLHFCQUNILGtCQUV0QiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9WaWRlb0RldGFpbHMvVmlkZW9EZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXJlZW1fZGFya2F6YW5saS9SZWFjdEFwcC95b3V0dWJlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdmlkZW9EZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGxpa2VzID0gcHJvcHMuZGV0YWlscy5saWtlQ291bnQ7XG4gICAgbGV0IGRpc2xpa2VzID0gcHJvcHMuZGV0YWlscy5kaXNsaWtlQ291bnQ7XG4gICAgXG4gICAgaWYobGlrZXMgPiA5OTkgJiYgbGlrZXMgPCAxMDAwMDAwKXtcbiAgICAgICBsaWtlcyA9IE1hdGguZmxvb3IobGlrZXMvMTAwMCkgKyBcIktcIjtcbiAgICB9XG4gICAgZWxzZSBpZihsaWtlcyA+IDk5OTk5OSl7XG4gICAgICAgbGlrZXMgPSBNYXRoLmZsb29yKGxpa2VzLzEwMDAwMDApICsgXCJNXCI7ICAgXG4gICAgfVxuICAgIFxuICAgIGxpa2VzID0gbGlrZXMgKyBcIlwiO1xuICAgIFxuICAgIFxuICAgIGlmKGRpc2xpa2VzID4gOTk5ICYmIGRpc2xpa2VzIDwgMTAwMDAwMCl7XG4gICAgICAgZGlzbGlrZXMgPSBNYXRoLmZsb29yKGRpc2xpa2VzLzEwMDApICsgXCJLXCI7XG4gICAgfVxuICAgIGVsc2UgaWYobGlrZXMgPiA5OTk5OTkpe1xuICAgICAgIGRpc2xpa2VzID0gTWF0aC5mbG9vcihkaXNsaWtlcy8xMDAwMDAwKSArIFwiTVwiOyAgIFxuICAgIH1cbiAgICBcbiAgICBkaXNsaWtlcyA9IGRpc2xpa2VzICsgXCJcIjtcblxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWRldGFpbHNcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTpcImlubGluZS1ibG9ja1wiLCBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNhYWFcIn19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogXCIyMHB4XCJ9fT57cHJvcHMuZGV0YWlscy50aXRsZX08L3A+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjUwcHhcIiwgaGVpZ2h0OiBcIjQwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzBweFwiIHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQUpjU1VSQlZHaEQ3Wmk5YTFOUkdNWWorRVZGbkJRRUVSd0VCMFhVeGNGSmRCQVZCNDFERGNURWZEa0UxeTZTclpQaUlCVHE0bERhZjZCYk4wZXBJQ2k0T1hjU2tkSVdOS2kvOC9wZWlZY1RVdnNlelFtY0h6eWNlM1BPZWQvblNYSXZOeWxsTXBsTUpqUEpkRHFkMDYxV2E3YlpiQjdWbHlhUFJxTnhud0FiQlBtQlBoSHFuRTVOQnBpZVFpODF3RzhSNnJVdVNSOE1uOEx3ZXorRTZudTVYTjZyUzlPRnI5STlRcXdIQWhSNm8wdlRwRnF0N2lmQWZNRDRIMnEzMjFkMVMzcGc3aVFtMy9xbWZSRjBVYmVrQndiTEdQemltdzdJM2JHTzZMWjA2SGE3K3pEMzNETTdWRnc3ZDNWck9tRHFCSi9DYXNod1NLeGQwSzNwd1BWd0MzT2ZmYlBEUkloTjl0eGh2RElvNWk3VmFyWERXdmIvZ29FNkJ2cURSbzNxVTNPaFhxOGYxQlkyM0ZjRlhmQkZvK082eEgwU1oybjZ6VE1TUmRSZG9jV3VYNTBNVUdoeFNJTTVYZUx1VHN2K2ZFenh4bDNXVmp0blZCQ09EM0g4MVorUEtlby9Gak1XUmdWaFBCK2FqNnhaTVdOaEcwR3VoZVlqYTBiTVdOaEdrT3VoK1ppaXh5TXhZeUdGSU53Vkg0Z1pDeWtFY1QzRWpJVVVncmpmOVdMR1FnSkJ0bnE5M200eFkySGNRYWkvS2thc2pEc0llaUZHckl3N0NQVWZpaEVybzRKd2ZOT2ZpeW1lc3k2S0VTdWpnakJPaCtZanFWK3BWQTZJRVN0RkVNYVBqRE9NYTNwZUJMbXRUZitGUG9pSkdCUkJrRHp2Y1A3TW5ROEVPYVB6MFVYdEpkY2pDa1VReGpYa1FzaFBXWTRsaUlQalYwWHptT0w2aVBlblJCSEUxMkFRR2g3ai9GMW8zVTdsK2xMYS9zdXd3RDJ3VVhRK29HbGRJdEI4ajNzSGVmMnB0KzV2OVlRNk55Z1pMMFFtazhsa01wbUpvbFQ2Q1FvcVF5WDZrMEhGQUFBQUFFbEZUa1N1UW1DQycgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjI1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Lz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIixmb250U2l6ZTpcIjE4cHhcIiwgZm9udFdlaWdodDogXCJoZWF2aWVyXCIsIGNvbG9yOlwiZ3JleVwiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IFwiMHB4XCJ9fT57bGlrZXN9PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzBweFwiIHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUpjRWhaY3dBQURzTUFBQTdEQWNkdnFHUUFBQUlLU1VSQlZHaEQ3Wm05U3dOQkZNUlRXSWdpaUkyQ2dvMlZpTFdWS0ZncVdJalZTU0M1ZkpqYVZzNi93RUl0Ukd3dEJiRVNMQ3dzN0N4UzJZcWxTQXJCZ0NBNkt4T0p4MTN5TnB6eExld1BCblY5dXpOakxya0VjeDZQeCtNMjVYTDVCTHBPMEJwSGZsR3BWR2J4dStQWWJLKzZnZzdObVR5K2QwcWxVaDJIZmNhRjlXMk8vSUQxZGFqWlBwZVJtbUVZcnRLbU42UkZpc1hpR05aZjRuTlpDWDdQK1h4K2xIYjJTSXZnTDdhWk5KZWw0TGxETzN1a1JjelBTWE5aQ2g2UFVSUU4wTklPVFVXTTRMTkZTenNVRnJtbnBSM2FpaGpoNVhpSnRuSTBGb0hYQlczbEtDM3lnWmY3R1ZyTDBGakVDSDRIdEphaHVNaXIxUTFTYXhFamVNcHZrTXFMeUcrUW1vc1l3VmQyZzNTZ2lPd0dxYjBJdGNnWTZiaFFCTjVIakpHT0kwVnVHU01kUjRyVUdTTWRYNlMvdW1PTWRGd29BdTg5eGtoSGV4SDRQdURyRUdPa0l5MkN0U0ErODlkQ2hrdThuUjluaE02RVliaUFEU3R4WVgyS0k5L2dVOXNrMXQrVERMc0orM2Jienhab3VWQW9UTk02ZXhBcWlvZVVDTUZPZVlRZUVHdy9IbFNnQmo1YkRQSUlQU0NZZFJsY21odmNyZ3VFc3lxRHkrdWNXL1dCZ09JeUtQSVdCTUV3dCtvREljVmwxRjVlTFJCU1ZBYVB5aG0zNkFWQkpXV2VPSzRiQk8xYXBsYXJUWEJjTndqYnNRenUyQ01jMVE4Q0o1YkJjK1NHSSs2QTRQRXlqVXorNmZrZnRNcVlSNkphcmM1eDJVM3dObnllMzNvOG5yNlJ5MzBCVHozdG1yNXZabnNBQUFBQVNVVk9SSzVDWUlJPScgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjI1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19Lz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMzBweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIixmb250U2l6ZTpcIjE4cHhcIiwgZm9udFdlaWdodDogXCJoZWF2aWVyXCIsY29sb3I6XCJncmV5XCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpblRvcDogXCIwcHhcIn19PntkaXNsaWtlc308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCIxNTBweFwiLCBvdmVyZmxvd1k6XCJhdXRvXCIsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2FhYVwifX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxM3B4XCIsIHdvcmRCcmVhazogXCJicmVhay13b3JkXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCBvdmVyZmxvdzogXCJzY3JvbGxcIn19Pntwcm9wcy5kZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudmlkZW8tZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0MXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgICBcbiAgICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHZpZGVvRGV0YWlsczsiXX0= */\n/*@ sourceURL=src/components/VideoDetails/VideoDetails.js */"
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (videoDetails);

/***/ }),

/***/ "./src/components/WatchHistory/WatchHistory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SuggestedVideos_Thumbnail_Thumbnail__ = __webpack_require__("./src/components/SuggestedVideos/Thumbnail/Thumbnail.js");
var _jsxFileName = '/Users/kareem_darkazanli/ReactApp/youtube/src/components/WatchHistory/WatchHistory.js';



var watchHistory = function watchHistory(props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { display: "block", float: "right", width: "100%" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            'Watch History'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            props.history.map(function (video, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { margin: "10px", display: "inline-block" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SuggestedVideos_Thumbnail_Thumbnail__["a" /* default */], { key: index, videoId: video["videoId"], title: video["title"], channelTitle: video["channelTitle"], thumbnailURL: video["thumbnailURL"], click: props.click, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    })
                );
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (watchHistory);

/***/ }),

/***/ "./src/store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH_CHANGED; });
var SEARCH_CHANGED = 'SEARCH_CHANGED';

/***/ }),

/***/ "./src/store/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/store/actions.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dynamoose":
/***/ (function(module, exports) {

module.exports = require("dynamoose");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-youtube-player":
/***/ (function(module, exports) {

module.exports = require("react-youtube-player");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "youtube-search-api-with-axios":
/***/ (function(module, exports) {

module.exports = require("youtube-search-api-with-axios");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map