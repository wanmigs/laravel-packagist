(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/admin/pages/roles-permission/index.js":
/*!************************************************************!*\
  !*** ./resources/js/admin/pages/roles-permission/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pretty-checkbox-react */ "./node_modules/pretty-checkbox-react/dist/pretty-checkbox-react.umd.min.js");
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var RolesPermissions = function RolesPermissions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      roles = _useState2[0],
      setRoles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      permissions = _useState4[0],
      setPermissions = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fetchPermission, fetchRoles, _ref2, _ref3, permissionsData, rolesData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/permission", {
                  params: {
                    all: true
                  }
                });

              case 2:
                fetchPermission = _context.sent;
                _context.next = 5;
                return axios.get("/api/roles-permissions");

              case 5:
                fetchRoles = _context.sent;
                _context.next = 8;
                return Promise.all([fetchPermission, fetchRoles]);

              case 8:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                permissionsData = _ref3[0].data;
                rolesData = _ref3[1].data;
                setRoles(rolesData);
                setPermissions(permissionsData);

              case 14:
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

  var handleRolePermission =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(role, permission, evt) {
      var payload, _ref5, data, newRoles, index;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evt.persist();
              payload = {
                isChecked: evt.target.checked
              };
              _context2.next = 4;
              return axios.post("/api/roles-permissions/".concat(role, "/").concat(permission), payload);

            case 4:
              _ref5 = _context2.sent;
              data = _ref5.data;
              newRoles = roles;
              index = newRoles.findIndex(function (role) {
                return role.id == data.id;
              });
              newRoles[index] = data;
              setRoles(newRoles);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleRolePermission(_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "text-2xl font-bold mb-3"
  }, "Roles Permissions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "overflow-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table-fixed text-left w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "table-head-row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "border-b px-4 py-3 text-sm bg-blue-100 sticky left-0"
  }, "Roles/Permissions"), permissions.map(function (permission) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      key: permission.id,
      className: "border-b bg-gray-100 px-4 py-3 text-sm"
    }, permission.name);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, roles.map(function (role) {
    var rolePermissions = role.permissions.map(function (data) {
      return data.id;
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "border-b bg-white",
      key: role.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "bg-blue-100 text-sm p-4 sticky left-0"
    }, role.name), permissions.map(function (permission) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        key: "permission_".concat(permission.id, "_").concat(role.id),
        className: "text-sm p-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        inputProps: {
          defaultChecked: rolePermissions.indexOf(permission.id) !== -1
        },
        shape: "curve",
        onChange: function onChange(evt) {
          return handleRolePermission(role.id, permission.id, evt);
        },
        color: "success-o"
      }));
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RolesPermissions);

/***/ })

}]);