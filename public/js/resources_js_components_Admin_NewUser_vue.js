(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_NewUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      file: "",
      status: "teacher",
      username: "",
      name: "",
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        // min: (v) => v.length >= 8 || "Min 8 characters.",
        email: function email(v) {
          return /.+@.+/.test(v) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      this.file = e.target.files[0];
    },
    formSubmit: function formSubmit(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var config, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                config = {
                  headers: {
                    "content-type": "multipart/form-data"
                  }
                };
                formData = new FormData();

                if (_this.status === "teacher") {
                  formData.append("username", _this.username);
                  formData.append("role", _this.status);
                  formData.append("name", _this.name);
                  formData.append("email", _this.email);
                  formData.append("password", _this.password);
                }

                _context.next = 6;
                return axios.post("/api/user/file/upload", formData, config).then(function (response) {
                  if (response.data.success === true) {
                    window.location.href = "/manage-users";
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 6:
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

/***/ "./resources/js/components/Admin/NewUser.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/NewUser.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewUser.vue?vue&type=template&id=08c020d0& */ "./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0&");
/* harmony import */ var _NewUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewUser.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/NewUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUser_vue_vue_type_template_id_08c020d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUser.vue?vue&type=template&id=08c020d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/NewUser.vue?vue&type=template&id=08c020d0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-col",
        { attrs: { cols: "10" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c("h1", [_vm._v("New User")]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "4" } },
                            [_c("v-subheader", [_vm._v(" Status ")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "" },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    attrs: {
                                      label: "Teacher",
                                      value: "teacher"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      this.status === "teacher"
                        ? _c(
                            "div",
                            [
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [_c("v-subheader", [_vm._v(" Username ")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          label: "Username"
                                        },
                                        model: {
                                          value: _vm.username,
                                          callback: function($$v) {
                                            _vm.username = $$v
                                          },
                                          expression: "username"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [_c("v-subheader", [_vm._v(" Name ")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [_vm.rules.required],
                                          label: "Name"
                                        },
                                        model: {
                                          value: _vm.name,
                                          callback: function($$v) {
                                            _vm.name = $$v
                                          },
                                          expression: "name"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [_c("v-subheader", [_vm._v(" E-mail ")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.email
                                          ],
                                          label: "E-mail"
                                        },
                                        model: {
                                          value: _vm.email,
                                          callback: function($$v) {
                                            _vm.email = $$v
                                          },
                                          expression: "email"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [_c("v-subheader", [_vm._v(" Password ")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "input-group--focused",
                                        attrs: {
                                          "append-icon": _vm.showPassword
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [_vm.rules.required],
                                          type: _vm.showPassword
                                            ? "text"
                                            : "password",
                                          label: "Password",
                                          hint: "At least 8 characters",
                                          value: "wqfasds"
                                        },
                                        on: {
                                          "click:append": function($event) {
                                            _vm.showPassword = !_vm.showPassword
                                          }
                                        },
                                        model: {
                                          value: _vm.password,
                                          callback: function($$v) {
                                            _vm.password = $$v
                                          },
                                          expression: "password"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.formSubmit } },
                [_vm._v(" Save ")]
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