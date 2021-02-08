(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_LogIn_LogIn_jsx"],{

/***/ "./resources/js/pages/LogIn/LogIn.jsx":
/*!********************************************!*\
  !*** ./resources/js/pages/LogIn/LogIn.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInComponent": () => (/* binding */ LogInComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/session'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogInForm */ "./resources/js/pages/LogIn/LogInForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var LogInComponent = function LogInComponent(props) {
  var attemptLogin = props.attemptLogin;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LogInForm__WEBPACK_IMPORTED_MODULE_4__.default, {
    onSubmit: attemptLogin
  });
};

var parseValidationFromResponse = function parseValidationFromResponse(response) {
  var errors = {};

  if (response.errors === true && response.message === 'Incorrect login details') {
    errors.email = 'Incorrect login details';
  }

  return errors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, function (dispatch) {
  return {
    attemptLogin: function () {
      var _attemptLogin = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(loginDetails, _ref) {
        var setErrors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrors = _ref.setErrors;
                _context.prev = 1;
                _context.next = 4;
                return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/session'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(loginDetails));

              case 4:
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/');
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                setErrors(parseValidationFromResponse(_context.t0.response.data));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      function attemptLogin(_x, _x2) {
        return _attemptLogin.apply(this, arguments);
      }

      return attemptLogin;
    }()
  };
})(LogInComponent));

/***/ }),

/***/ "./resources/js/pages/LogIn/LogInForm.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/LogIn/LogInForm.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var validateLogin = function validateLogin() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = {};

  if (!values.email) {
    errors.email = 'Digite seu e-mail';
  } else if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values.email)) {
    errors.email = 'E-mail inválido';
  }

  if (!values.password) {
    errors.password = 'Digite sua senha';
  }

  return errors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    onSubmit: onSubmit,
    validate: validateLogin,
    initialValues: {
      email: '',
      password: ''
    },
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "text",
          name: "email",
          labelText: "Email",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "password",
          name: "password",
          labelText: "Password",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            to: "/signup",
            children: "Or Signup"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "inline-block px-2",
            children: "|"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            to: "/forgot-password",
            children: "Forgot Password?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "ml-auto",
            type: "submit",
            children: "Log In"
          })]
        })]
      });
    }
  });
});

/***/ })

}]);