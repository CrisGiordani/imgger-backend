(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ForgotPassword_ForgotPassword_jsx"],{

/***/ "./resources/js/pages/ForgotPassword/ForgotPassword.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/pages/ForgotPassword/ForgotPassword.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/flashMessages'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ForgotPasswordForm */ "./resources/js/pages/ForgotPassword/ForgotPasswordForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var ForgotPasswordComponent = function ForgotPasswordComponent(props) {
  var submitForgotPassword = props.submitForgotPassword;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordForm, {
    onSubmit: submitForgotPassword
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, function (dispatch) {
  return {
    submitForgotPassword: function () {
      var _submitForgotPassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, _ref) {
        var setErrors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrors = _ref.setErrors;
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/forgot-password', values);

              case 4:
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/login');
                dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/flashMessages'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('success', 'The password reset request has been sent to your Email inbox.'));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                setErrors(_context.t0.response.data);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function submitForgotPassword(_x, _x2) {
        return _submitForgotPassword.apply(this, arguments);
      }

      return submitForgotPassword;
    }()
  };
})(ForgotPasswordComponent));

/***/ }),

/***/ "./resources/js/pages/ForgotPassword/ForgotPasswordForm.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/pages/ForgotPassword/ForgotPasswordForm.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordForm": () => (/* binding */ ForgotPasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var validate = function validate() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

var ForgotPasswordForm = function ForgotPasswordForm(_ref) {
  var onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: {
      email: ''
    },
    children: function children() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "text",
          name: "email",
          labelText: "Enter Your Email Address",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            to: "/login",
            children: "Back to Login"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "ml-auto",
            type: "submit",
            children: "Request"
          })]
        })]
      });
    }
  });
};

/***/ })

}]);