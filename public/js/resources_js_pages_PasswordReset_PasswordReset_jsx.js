(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PasswordReset_PasswordReset_jsx"],{

/***/ "./resources/js/pages/PasswordReset/PasswordReset.jsx":
/*!************************************************************!*\
  !*** ./resources/js/pages/PasswordReset/PasswordReset.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetComponent": () => (/* binding */ PasswordResetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recompose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/flashMessages'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PasswordResetForm */ "./resources/js/pages/PasswordReset/PasswordResetForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var PasswordResetComponent = function PasswordResetComponent(props) {
  var submitPasswordReset = props.submitPasswordReset;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_5__.PasswordResetForm, {
    onSubmit: submitPasswordReset
  });
};

var parseValidationFromResponse = function parseValidationFromResponse(data) {
  var errors = {};

  if (data.errors.password && data.errors.password.includes('The password must be at least 6 characters.')) {
    errors.password = 'The password must be at least 6 characters.';
  }

  return errors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recompose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(react_router__WEBPACK_IMPORTED_MODULE_7__.withRouter, (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, function (dispatch, ownProps) {
  return {
    submitPasswordReset: function () {
      var _submitPasswordReset = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, _ref) {
        var setErrors, match;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrors = _ref.setErrors;
                match = ownProps.match;
                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/reset-password', _objectSpread(_objectSpread({}, values), {}, {
                  token: match.params.resetToken
                }));

              case 5:
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/login');
                dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/flashMessages'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('success', 'Password successfully reset'));
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                setErrors(parseValidationFromResponse(_context.t0.response.data));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function submitPasswordReset(_x, _x2) {
        return _submitPasswordReset.apply(this, arguments);
      }

      return submitPasswordReset;
    }()
  };
}))(PasswordResetComponent));

/***/ }),

/***/ "./resources/js/pages/PasswordReset/PasswordResetForm.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/pages/PasswordReset/PasswordResetForm.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetForm": () => (/* binding */ PasswordResetForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var validate = function validate() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'This field is required';
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "The two passwords don't match";
  }

  return errors;
};

var PasswordResetForm = function PasswordResetForm(_ref) {
  var onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    validate: validate,
    onSubmit: onSubmit,
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "text",
          name: "email",
          labelText: "Enter your Email",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "password",
          name: "password",
          labelText: "Enter a New Password",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "password",
          name: "password_confirmation",
          labelText: "Confirm Your New Password",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "float-right",
          type: "submit",
          children: "Set New Password"
        })]
      });
    }
  });
};

/***/ })

}]);