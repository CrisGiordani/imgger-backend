(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_SignUp_SignUp_jsx"],{

/***/ "./resources/js/pages/SignUp/SignUp.jsx":
/*!**********************************************!*\
  !*** ./resources/js/pages/SignUp/SignUp.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUp": () => (/* binding */ SignUp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpForm */ "./resources/js/pages/SignUp/SignUpForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var parseValidationErrorResponse = function parseValidationErrorResponse(response) {
  var errors = {};

  if (response.email && response.email.Unique) {
    errors.email = 'This email already exists, please try a different email.';
  }

  return errors;
};

var SignUp = function SignUp() {
  var onSubmit = function onSubmit(signUpData) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/signup', signUpData).then(function (response) {
      if (response.status === 200) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/history'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/');
      }
    })["catch"](function (error) {
      if (error.response.status === 422) {// throw new SubmissionError(
        //   parseValidationErrorResponse(error.response.data.messages)
        // )
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SignUpForm__WEBPACK_IMPORTED_MODULE_3__.SignUpForm, {
    onSubmit: onSubmit
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./resources/js/pages/SignUp/SignUpForm.jsx":
/*!**************************************************!*\
  !*** ./resources/js/pages/SignUp/SignUpForm.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpForm": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var validate = function validate() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = {};

  if (!values.first_name) {
    errors.first_name = 'This field is required';
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  return errors;
};

var SignUpForm = function SignUpForm(_ref) {
  var onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    children: function children() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          type: "text",
          name: "first_name",
          labelText: "First Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          type: "text",
          name: "last_name",
          labelText: "Last Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          type: "text",
          name: "email",
          labelText: "Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          type: "password",
          name: "password",
          labelText: "Password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            className: Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            to: "/login",
            children: "Or Login"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "ml-auto",
            type: "submit",
            children: "Sign Up"
          })]
        })]
      });
    }
  });
};

/***/ })

}]);