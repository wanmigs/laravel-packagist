(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/admin/Layout/DataTable.js":
/*!************************************************!*\
  !*** ./resources/js/admin/Layout/DataTable.js ***!
  \************************************************/
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
/* harmony import */ var _pages_resource_rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/pages/resource/rows */ "./resources/js/admin/pages/resource/rows/index.js");
/* harmony import */ var _pages_resource_rows__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_resource_rows__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/helpers/utilities */ "./resources/js/admin/helpers/utilities.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var columns = {
  name: {
    label: "Name"
  }
};

var DataTable = function DataTable(_ref) {
  var columns = _ref.columns,
      endpoint = _ref.endpoint,
      title = _ref.title,
      editLink = _ref.editLink,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$baseLink = _ref.baseLink,
      baseLink = _ref$baseLink === void 0 ? "" : _ref$baseLink,
      _ref$row = _ref.row,
      row = _ref$row === void 0 ? "" : _ref$row;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      keyword = _useState2[0],
      setKeyword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tableData = _useState4[0],
      setTableData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      checked = _useState8[0],
      setChecked = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      toggleFetch = _useState10[0],
      setToggleFetch = _useState10[1];

  var TableRow = _pages_resource_rows__WEBPACK_IMPORTED_MODULE_3___default.a.hasOwnProperty(row) ? _pages_resource_rows__WEBPACK_IMPORTED_MODULE_3___default.a[row] : _components__WEBPACK_IMPORTED_MODULE_2__["Row"];
  var handleSearch = debounce(function (keyword) {
    setKeyword(keyword);
  }, 800);

  var handleSelectAll = function handleSelectAll() {
    var ids = tableData.map(function (data) {
      return data.id;
    });
    if (!checked) setSelected(Array.from(new Set([].concat(_toConsumableArray(selected || []), _toConsumableArray(ids)))));else setSelected([]);
    setChecked(!checked);
  };

  var handleSelected = function handleSelected(id) {
    var row = _toConsumableArray(selected);

    var index = row.indexOf(id);
    index !== -1 ? row.splice(index, 1) : row.push(id);
    setSelected(row);
  };

  var handleDelete =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (selected.length) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              Object(_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["swalDelete"])(endpoint, selected, {
                singular: title.singular,
                plural: title.plural
              }).then(function () {
                setSelected([]);
                setToggleFetch(!toggleFetch);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "text-2xl font-bold mb-3"
  }, title.plural), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-between mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "relative w-64"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "absolute flex inset-y-0 items-center left-0 pl-2 text-gray-600 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "block w-full rounded-lg border border-gray-400 outline-none pl-10 pr-4 py-1 text-gray-900",
    placeholder: "Search",
    onChange: function onChange(e) {
      return handleSearch(e.target.value);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center"
  }, !selected.length || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-sm text-gray-600 hidden lg:block"
  }, selected.length, " item(s) selected"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-grey-darker mr-4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    to: "".concat(baseLink, "/").concat(title.singular.toLowerCase(), "/create")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "bg-blue-500 hover:bg-blue-700 text-white"
  }, "Create ", title.singular)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "text-white bg-red-500 hover:bg-red-700",
    onClick: handleDelete,
    disabled: !selected.length
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-trash"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    url: endpoint,
    toggleFetch: toggleFetch,
    keyword: keyword,
    getData: setTableData,
    order: options.order || "",
    sort: options.sort || "",
    queryParams: options.queryParams || "",
    header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      onSelect: handleSelectAll,
      checked: checked,
      columns: columns
    }),
    content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableRow, {
      columns: columns,
      data: tableData,
      onSelect: handleSelected,
      selected: selected,
      link: editLink
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(DataTable));

/***/ }),

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

/***/ "./resources/js/admin/pages/resource/rows sync .*\\.(js)$":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/pages/resource/rows sync nonrecursive .*\.(js)$ ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./User.js": "./resources/js/admin/pages/resource/rows/User.js",
	"./index.js": "./resources/js/admin/pages/resource/rows/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/admin/pages/resource/rows sync .*\\.(js)$";

/***/ }),

/***/ "./resources/js/admin/pages/resource/rows/User.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/pages/resource/rows/User.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-checkbox-react */ "./node_modules/pretty-checkbox-react/dist/pretty-checkbox-react.umd.min.js");
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components */ "./resources/js/admin/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var TableContent = function TableContent(_ref) {
  var data = _ref.data,
      onSelect = _ref.onSelect,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? {} : _ref$columns,
      selected = _ref.selected,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? "" : _ref$link;
  var length = Object.keys(columns).length;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var handleClick = function handleClick(id, e) {
    e.persist();

    if (e.target.type !== "checkbox" && e.target.tagName == "TD") {
      history.push("".concat(link, "/").concat(id));
    }
  };

  var handleActivation =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt, id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.post("/api/user-activation/".concat(id), {
                isChecked: evt.target.checked
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleActivation(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, data.map(function (row, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: i,
      className: "cursor-pointer border-b bg-white",
      onClick: function onClick(e) {
        return handleClick(row.id, e);
      }
    }, Object.keys(columns).map(function (data, index) {
      if (!data || data.includes(":")) {
        return null;
      }

      if (index === 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "".concat(length > 1 ? "bg-blue-100" : "bg-white", " p-4 sticky left-0"),
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "flex items-baseline"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          className: "mr-3",
          checked: selected.indexOf(row.id) !== -1,
          shape: "curve",
          onChange: function onChange() {
            return onSelect(row.id);
          },
          color: "success-o"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "font-semibold text-sm"
        }, row[data])));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        key: index,
        className: "text-sm p-4"
      }, row[data] ? row[data] : "-");
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "flex p-4 w-full"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "flex items-center cursor-pointer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "relative"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      className: "hidden",
      defaultChecked: row.deactivated_at ? true : false,
      onClick: function onClick(evt) {
        return handleActivation(evt, row.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Action")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableContent);

/***/ }),

/***/ "./resources/js/admin/pages/resource/rows/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/admin/pages/resource/rows/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireContext = __webpack_require__("./resources/js/admin/pages/resource/rows sync .*\\.(js)$");

var components = {};
requireContext.keys().forEach(function (fileName) {
  if (fileName === "./index.js") return;
  var name = fileName.replace(/(\.\/|\.js)/g, "");
  components[name] = requireContext(fileName)["default"];
});
module.exports = components;

/***/ })

}]);