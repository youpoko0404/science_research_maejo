(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_auth_ChangePassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmationPassword: "",
      alert: false,
      colorAlert: "",
      textAlert: ""
    };
  },
  methods: {
    redirect: function redirect(url) {
      window.location.href = url;
    },
    changePassword: function changePassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.confirmationPassword === _this.newPassword)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return axios.post("api/changePassword", {
                  current_password: _this.currentPassword,
                  new_password: _this.newPassword,
                  id: _this.$store.state.data.user.id
                }).then(function (res) {
                  if (res.data.success) {
                    _this.alert = true;
                    _this.colorAlert = "primary";
                    _this.textAlert = res.data.success;

                    _this.redirect("/");
                  } else {
                    _this.alert = true;
                    _this.colorAlert = "error";
                    _this.textAlert = res.data.error;
                  }

                  _this.currentPassword = "";
                  _this.newPassword = "";
                  _this.confirmationPassword = "";
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _this.alert = true;
                _this.colorAlert = "error";
                _this.textAlert = "Password and confirm password does not match";

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/auth/ChangePassword.vue":
/*!**********************************************!*\
  !*** ./resources/js/auth/ChangePassword.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=d31ed878& */ "./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/auth/ChangePassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878&":
/*!*****************************************************************************!*\
  !*** ./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_d31ed878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChangePassword.vue?vue&type=template&id=d31ed878& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/auth/ChangePassword.vue?vue&type=template&id=d31ed878& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _c(
        "v-container",
        {
          staticClass: "pa-md-8 mx-auto",
          staticStyle: { width: "100%" },
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "", "justify-center": "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm10: "", md6: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-12" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { dark: "", color: "primary" } },
                        [
                          _c("v-toolbar-title", [_vm._v("Change Password")]),
                          _vm._v(" "),
                          _c("v-spacer")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                value: _vm.alert,
                                color: _vm.colorAlert,
                                dark: "",
                                border: "top",
                                transition: "scale-transition"
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.textAlert) +
                                  "\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "lock",
                              name: "current-password",
                              label: "Current Password",
                              type: "password",
                              "persistent-placeholder": "",
                              required: ""
                            },
                            model: {
                              value: _vm.currentPassword,
                              callback: function($$v) {
                                _vm.currentPassword = $$v
                              },
                              expression: "currentPassword"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "lock",
                              name: "new-password",
                              label: "New Password",
                              type: "password",
                              "persistent-placeholder": "",
                              required: ""
                            },
                            model: {
                              value: _vm.newPassword,
                              callback: function($$v) {
                                _vm.newPassword = $$v
                              },
                              expression: "newPassword"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "password",
                              "prepend-icon": "lock",
                              name: "new-password_confirmation",
                              label: "New Password Confirmation",
                              type: "password",
                              "persistent-placeholder": "",
                              required: ""
                            },
                            model: {
                              value: _vm.confirmationPassword,
                              callback: function($$v) {
                                _vm.confirmationPassword = $$v
                              },
                              expression: "confirmationPassword"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { "justify-center": "" } },
                        [
                          _c("v-card-actions", { staticClass: "mb-4" }, [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: { click: _vm.changePassword }
                                  },
                                  [_vm._v("SUBMIT")]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);