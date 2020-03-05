(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/admin/pages/roles/index.js":
/*!*************************************************!*\
  !*** ./resources/js/admin/pages/roles/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Layout/DataTable */ "./resources/js/admin/Layout/DataTable.js");


var columns = {
  name: {
    label: "Name"
  }
};
var title = {
  singular: "Role",
  plural: "Roles"
};

var Roles = function Roles() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    columns: columns,
    endpoint: "/api/role",
    title: title,
    editLink: "/role/edit",
    options: {
      order: "asc",
      sort: "created_at"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Roles);

/***/ })

}]);