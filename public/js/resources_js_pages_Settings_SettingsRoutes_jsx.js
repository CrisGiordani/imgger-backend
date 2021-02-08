(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Settings_SettingsRoutes_jsx"],{

/***/ "./resources/js/pages/Settings/Forms/AppSettingsForm.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Settings/Forms/AppSettingsForm.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsForm": () => (/* binding */ AppSettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var AppSettingsForm = function AppSettingsForm() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: "Application Settings Placeholder"
  });
};

/***/ }),

/***/ "./resources/js/pages/Settings/Forms/BillingSettingsForm.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Settings/Forms/BillingSettingsForm.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingSettingsForm": () => (/* binding */ BillingSettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var BillingSettingsForm = function BillingSettingsForm() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: "Billing Settings Placeholder"
  });
};

/***/ }),

/***/ "./resources/js/pages/Settings/Forms/ChangePasswordForm.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Settings/Forms/ChangePasswordForm.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordForm": () => (/* binding */ ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var validate = function validate() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = {};
  var nonEmptyFieldNames = ['old_password', 'new_password', 'new_password_confirmation'];
  nonEmptyFieldNames.forEach(function (fieldName) {
    if (!values[fieldName]) {
      errors[fieldName] = 'This field is required';
    }
  });

  if (values.new_password && values.new_password_confirmation !== values.new_password) {
    errors.new_password_confirmation = 'This password does not match the new password you entered';
  }

  return errors;
};

var ChangePasswordForm = function ChangePasswordForm(_ref) {
  var onSubmit = _ref.onSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: {
      old_password: '',
      new_password: '',
      new_password_confirmation: ''
    },
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "mb-2",
          name: "old_password",
          component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
          labelText: "Enter your old password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-start mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            name: "new_password",
            className: "flex-grow",
            labelText: "New Password",
            component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "flex-grow pl-4",
            component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            name: "new_password_confirmation",
            labelText: "Repeat your new password"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex border-grey-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            type: "submit",
            className: "ml-auto",
            children: "Change Password"
          })
        })]
      });
    }
  });
};

/***/ }),

/***/ "./resources/js/pages/Settings/Forms/UserSettingsForm.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Settings/Forms/UserSettingsForm.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsForm": () => (/* binding */ UserSettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








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
  } else if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'constants/regexes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

var UserSettingsFormComponent = function UserSettingsFormComponent(_ref) {
  var user = _ref.user,
      onSubmit = _ref.onSubmit,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      avatarUploadHandler = _ref.avatarUploadHandler;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: user,
    validateOnChange: false,
    children: function children() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: className,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center my-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            name: "avatar",
            component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            uploadHandler: avatarUploadHandler,
            className: "mr-10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex-grow",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              name: "first_name",
              component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
              labelText: "First Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              name: "last_name",
              component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
              labelText: "Last Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'formik'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              name: "email",
              component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
              labelText: "Email"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex border-grey-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            type: "submit",
            className: "ml-auto",
            children: "Save User Details"
          })
        })]
      });
    }
  });
};

var UserSettingsForm = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  var currentUser = state.session.currentUser;
  return {
    user: state.entities.users[currentUser]
  };
}, null)(UserSettingsFormComponent);

/***/ }),

/***/ "./resources/js/pages/Settings/Forms/index.js":
/*!****************************************************!*\
  !*** ./resources/js/pages/Settings/Forms/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsForm": () => (/* reexport safe */ _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__.UserSettingsForm),
/* harmony export */   "ChangePasswordForm": () => (/* reexport safe */ _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsForm */ "./resources/js/pages/Settings/Forms/UserSettingsForm.jsx");
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePasswordForm */ "./resources/js/pages/Settings/Forms/ChangePasswordForm.jsx");



/***/ }),

/***/ "./resources/js/pages/Settings/SettingsRoutes.jsx":
/*!********************************************************!*\
  !*** ./resources/js/pages/Settings/SettingsRoutes.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutes": () => (/* binding */ SettingsRoutes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _UserSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettings */ "./resources/js/pages/Settings/UserSettings.jsx");
/* harmony import */ var _Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Forms/AppSettingsForm */ "./resources/js/pages/Settings/Forms/AppSettingsForm.jsx");
/* harmony import */ var _Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms/BillingSettingsForm */ "./resources/js/pages/Settings/Forms/BillingSettingsForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var CardLink = function CardLink(_ref) {
  var to = _ref.to,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: to,
    activeClassName: "bg-blue-lightest",
    className: "block border-b border-grey-light p-4 ".concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../constants/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), " ").concat(className),
    children: children
  });
};

var SettingsRoutes = function SettingsRoutes(_ref2) {
  var currentUrl = _ref2.match.url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
      className: "mb-4",
      children: "Settings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex items-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-64",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CardLink, {
          to: "".concat(currentUrl, "/user"),
          children: "Account"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CardLink, {
          to: "".concat(currentUrl, "/app"),
          children: "Application"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CardLink, {
          to: "".concat(currentUrl, "/billing"),
          children: "Billing"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "flex-grow ml-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "".concat(currentUrl, "/user"),
              component: _UserSettings__WEBPACK_IMPORTED_MODULE_2__.UserSettings
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "".concat(currentUrl, "/app"),
              component: _Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_3__.AppSettingsForm
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
              exact: true,
              path: "".concat(currentUrl, "/billing"),
              component: _Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_4__.BillingSettingsForm
            })]
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsRoutes);

/***/ }),

/***/ "./resources/js/pages/Settings/UserSettings.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/Settings/UserSettings.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettings": () => (/* binding */ UserSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./resources/js/store/actions.js");
/* harmony import */ var _store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/action-creators/avatars */ "./resources/js/store/action-creators/avatars/index.js");
/* harmony import */ var _store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action-creators/flashMessages */ "./resources/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var _store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/action-creators/user */ "./resources/js/store/action-creators/user/index.js");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms */ "./resources/js/pages/Settings/Forms/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var UserSettingsComponent = function UserSettingsComponent(_ref) {
  var saveUserSettings = _ref.saveUserSettings,
      avatarUploadHandler = _ref.avatarUploadHandler,
      handleChangePassword = _ref.handleChangePassword;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
      className: "text-grey-darkest font-normal",
      children: "Your Details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Forms__WEBPACK_IMPORTED_MODULE_7__.UserSettingsForm, {
      className: "mb-4",
      onSubmit: saveUserSettings,
      avatarUploadHandler: avatarUploadHandler
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
      className: "text-grey-darkest font-normal",
      children: "Change Your Password"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Forms__WEBPACK_IMPORTED_MODULE_7__.ChangePasswordForm, {
      onSubmit: handleChangePassword
    })]
  });
};

var userValidationFromResponse = function userValidationFromResponse(values) {
  var errors = {};
  return errors;
};

var passwordValidationFromResponse = function passwordValidationFromResponse(values) {
  var errors = {};
  return errors;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.currentUser]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUserSettings: function () {
      var _saveUserSettings = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userData, _ref2) {
        var setErrors, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setErrors = _ref2.setErrors;
                _context.next = 3;
                return dispatch((0,_store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__.saveUser)(userData));

              case 3:
                response = _context.sent;

                if (response.status === 400) {
                  setErrors(userValidationFromResponse(response.data.data));
                }

                dispatch((0,_store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__.flashMessage)('success', 'Successfully saved user info', 4000));
                dispatch({
                  type: _store_actions__WEBPACK_IMPORTED_MODULE_3__.userActions.SET_CURRENT_USER_INFO,
                  users: response.data.data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveUserSettings(_x, _x2) {
        return _saveUserSettings.apply(this, arguments);
      }

      return saveUserSettings;
    }(),
    uploadUserAvatar: function uploadUserAvatar(fileData, userSlug) {
      return dispatch((0,_store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__.uploadUserAvatar)(fileData, userSlug));
    },
    changePassword: function () {
      var _changePassword2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(data, _ref3) {
        var setErrors;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setErrors = _ref3.setErrors;
                _context2.prev = 1;
                _context2.next = 4;
                return dispatch((0,_store_action_creators_user__WEBPACK_IMPORTED_MODULE_6__.changePassword)(data));

              case 4:
                dispatch((0,_store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__.flashMessage)('success', 'Your password was successfully changed', 4000));
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

                if (_context2.t0.response.status === 422) {
                  setErrors(passwordValidationFromResponse(_context2.t0.response.data.data));
                }

                if (_context2.t0.response.status === 400) {
                  setErrors({
                    old_password: 'The current password was incorrect'
                  });
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7]]);
      }));

      function changePassword(_x3, _x4) {
        return _changePassword2.apply(this, arguments);
      }

      return changePassword;
    }()
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, stateProps), dispatchProps), ownProps), {}, {
    avatarUploadHandler: function avatarUploadHandler(fileData) {
      return dispatchProps.uploadUserAvatar(fileData, stateProps.currentUser.slug);
    },
    handleChangePassword: function handleChangePassword(values) {
      var data = _objectSpread({
        slug: stateProps.currentUser.slug
      }, values);

      return dispatchProps.changePassword(data);
    }
  });
};

var UserSettings = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(UserSettingsComponent);

/***/ }),

/***/ "./resources/js/store/action-creators/avatars/avatars.js":
/*!***************************************************************!*\
  !*** ./resources/js/store/action-creators/avatars/avatars.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadUserAvatar": () => (/* binding */ uploadUserAvatar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/requests'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var uploadUserAvatar = function uploadUserAvatar(fileData, userSlug) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/action-creators/requests'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('set-user-avatar', function () {
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/avatars', fileData);
              }));

            case 2:
              response = _context.sent;
              dispatch({
                type: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'store/actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                userSlug: userSlug,
                avatar: response.data.fileUrl
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/js/store/action-creators/avatars/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/store/action-creators/avatars/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadUserAvatar": () => (/* reexport safe */ _avatars__WEBPACK_IMPORTED_MODULE_0__.uploadUserAvatar)
/* harmony export */ });
/* harmony import */ var _avatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatars */ "./resources/js/store/action-creators/avatars/avatars.js");


/***/ }),

/***/ "./resources/js/store/action-creators/flashMessages/flashMessages.js":
/*!***************************************************************************!*\
  !*** ./resources/js/store/action-creators/flashMessages/flashMessages.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flashMessage": () => (/* binding */ flashMessage),
/* harmony export */   "hideMessage": () => (/* binding */ hideMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/async'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var flashMessage = function flashMessage(type, message) {
  var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var uid;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              uid = Date.now();
              dispatch({
                type: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                messageType: type,
                uid: uid,
                message: message
              });
              _context.next = 4;
              return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/async'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(timeOut);

            case 4:
              dispatch({
                type: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                uid: uid
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var hideMessage = function hideMessage(uid) {
  return {
    type: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    uid: uid
  };
};

/***/ }),

/***/ "./resources/js/store/action-creators/flashMessages/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/store/action-creators/flashMessages/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flashMessage": () => (/* reexport safe */ _flashMessages__WEBPACK_IMPORTED_MODULE_0__.flashMessage),
/* harmony export */   "hideMessage": () => (/* reexport safe */ _flashMessages__WEBPACK_IMPORTED_MODULE_0__.hideMessage)
/* harmony export */ });
/* harmony import */ var _flashMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flashMessages */ "./resources/js/store/action-creators/flashMessages/flashMessages.js");


/***/ }),

/***/ "./resources/js/store/action-creators/user/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/store/action-creators/user/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveUser": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.saveUser),
/* harmony export */   "changePassword": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.changePassword)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/js/store/action-creators/user/user.js");


/***/ }),

/***/ "./resources/js/store/action-creators/user/user.js":
/*!*********************************************************!*\
  !*** ./resources/js/store/action-creators/user/user.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveUser": () => (/* binding */ saveUser),
/* harmony export */   "changePassword": () => (/* binding */ changePassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './requests'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var saveUser = function saveUser(userData) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var slug, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = userData.slug;
              _context.next = 3;
              return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module './requests'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('save-user-settings', function () {
                return axios__WEBPACK_IMPORTED_MODULE_1___default().put("/api/users/".concat(slug), userData);
              }));

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var changePassword = function changePassword(data) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      var slug, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              slug = data.slug;
              _context2.next = 3;
              return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module './requests'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('change-user-password', function () {
                return axios__WEBPACK_IMPORTED_MODULE_1___default().put("/api/users/".concat(slug, "/update-password"), data);
              }));

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ })

}]);