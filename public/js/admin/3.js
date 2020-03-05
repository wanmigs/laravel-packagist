(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/admin/helpers/utilities.js":
/*!*************************************************!*\
  !*** ./resources/js/admin/helpers/utilities.js ***!
  \*************************************************/
/*! exports provided: formSubmit, swalDelete, currencyFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSubmit", function() { return formSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swalDelete", function() { return swalDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormat", function() { return currencyFormat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: function onOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
var formSubmit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var method,
        url,
        payload,
        message,
        redirect,
        errors,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 0 && _args[0] !== undefined ? _args[0] : "post";
            url = _args.length > 1 ? _args[1] : undefined;
            payload = _args.length > 2 ? _args[2] : undefined;
            message = _args.length > 3 ? _args[3] : undefined;
            redirect = _args.length > 4 && _args[4] !== undefined ? _args[4] : "";
            errors = {};

            if (method === "patch") {
              payload.append("_method", "PATCH");
              method = "post";
            }

            _context.prev = 7;
            _context.next = 10;
            return axios[method](url, payload);

          case 10:
            Swal.fire({
              icon: "success",
              title: message,
              text: redirect ? "Redirecting..." : "",
              showConfirmButton: false,
              timer: 2000,
              onClose: function onClose() {
                if (redirect) window.location = redirect;
              }
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](7);
            data = _context.t0.response.data;
            errors = data.errors; // Swal.fire({
            //   title: `An error occured`,
            //   text: `Please fill the required fields`,
            //   icon: `error`
            // })

          case 17:
            return _context.abrupt("return", errors);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 13]]);
  }));

  return function formSubmit() {
    return _ref.apply(this, arguments);
  };
}();
var swalDelete =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, payload, toastTitle) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              swal.fire({
                title: "Are you sure?",
                text: "Selected items will be deleted.",
                icon: "warning",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#b3e19f",
                confirmButtonText: "Yes, remove it!",
                focusConfirm: false,
                showLoaderOnConfirm: true,
                preConfirm: function preConfirm() {
                  return axios["delete"]("".concat(url), {
                    params: {
                      ids: payload
                    }
                  }).then(function (response) {
                    return true;
                  })["catch"](function (error) {
                    toast({
                      icon: "error",
                      title: "Request failed. Please try again."
                    });
                    return false;
                  });
                },
                allowOutsideClick: function allowOutsideClick() {
                  return !Swal.isLoading();
                }
              }).then(function (result) {
                if (result.value) {
                  var subject = payload.length > 1 ? toastTitle.plural : toastTitle.singular;
                  toast.fire({
                    icon: "info",
                    title: "".concat(subject, " successfully deleted.")
                  });
                  resolve(true);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function swalDelete(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var currencyFormat = function currencyFormat(value) {
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: 2
  }).format(value || 0);
};

/***/ }),

/***/ "./resources/js/admin/pages/permission/edit.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/pages/permission/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components */ "./resources/js/admin/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/helpers/utilities */ "./resources/js/admin/helpers/utilities.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ "./resources/js/admin/pages/permission/form.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Edit = function Edit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFetching = _useState6[0],
      setIsFetching = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var form = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/permission/".concat(id));

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                setData(data);
                setIsFetching(true);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(evt) {
      var formData, errors;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evt.preventDefault();
              formData = new FormData(form.current);
              window.loadingStatus = "Saving data...";
              setLoading(true);
              _context2.next = 6;
              return Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_4__["formSubmit"])("patch", "/api/permission/".concat(id), formData, "Permission successfully updated", "/admin/permissions");

            case 6:
              errors = _context2.sent;
              setLoading(false);
              setErrors(errors || {});

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  if (!isFetching) return null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "block border-b font-black mb-4 pb-2 text-blue-900 text-lg w-full"
  }, "Edit Permission"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    ref: form,
    data: data,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    errors: errors,
    formFields: _form__WEBPACK_IMPORTED_MODULE_5__["formFields"],
    data: data
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "items-center lg:flex mb-4 lg:mb-5 mt-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "lg:w-48"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: loading,
    className: "bg-blue-500 hover:bg-blue-700 text-white mr-4"
  }, loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-circle-notch fa-spin mr-2"
  }), " ", "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/permissions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "bg-white border hover:bg-gray-100"
  }, "Cancel")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./resources/js/admin/pages/permission/form.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/pages/permission/form.js ***!
  \*****************************************************/
/*! exports provided: formFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFields", function() { return formFields; });
var formFields = {
  name: {
    label: "Name *"
  }
};

/***/ })

}]);