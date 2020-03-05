(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/admin/pages/login.js":
/*!*******************************************!*\
  !*** ./resources/js/admin/pages/login.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var form = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
      var formData, errors, _ref2, data, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              setLoading(true);
              formData = new FormData(form.current);
              errors = "";
              _context.prev = 4;
              _context.next = 7;
              return axios.post("/api/admin/login", formData);

            case 7:
              _ref2 = _context.sent;
              data = _ref2.data;
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("oToken_admin", data.access_token);
              window.location.href = "/admin";
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              _data = _context.t0.response.data;
              errors = _data.errors;

            case 17:
              setErrors(errors || {});
              setLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 13]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "absolute inset-0 flex justify-center items-center"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "w-full max-w-xs"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "h-10 mb-8 mx-auto w-auto",
    src: "/img/fligno_logo.png"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    ref: form,
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "username"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    name: "email",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(errors.email ? "border-red-500 mb-3" : ""),
    id: "email",
    type: "text",
    placeholder: "Email address"
  }), errors.email && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text-red-500 text-xs italic"
  }, errors.email[0])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "password"
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    name: "password",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(errors.password ? "border-red-500 mb-3" : ""),
    id: "password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), errors.password && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text-red-500 text-xs italic"
  }, errors.password[0])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex items-center justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center",
    type: "submit",
    disabled: loading
  }, loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fa fa-circle-notch fa-spin mr-2"
  }), " ", "Sign In"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
    href: "/password/forget"
  }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text-center text-gray-500 text-xs"
  }, "\xA9", new Date().getFullYear(), " Wanskie Corp. All rights reserved.")));
};

if (document.getElementById("app")) {
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, null), document.getElementById("app"));
}

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('oToken');

if (token) {
  axios.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = "Bearer ".concat(token);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      logout();
    } else {
      return Promise.reject(error);
    }
  });
}

var logout =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('oToken', '');
            _context.next = 3;
            return axios.post('/api/logout');

          case 3:
            window.location = '/login';

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function logout() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ })

}]);