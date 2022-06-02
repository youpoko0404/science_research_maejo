(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_managepropos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      loading: true,
      user: null,
      // เลือก classroom
      select: null,
      items: ["cs000", "cs001", "cs002", "cs003"],
      // เลือก ภาษา
      selectLeg: null,
      itemsleg: ["C", "C++", "java", "phython"],
      //เลือกวันที่
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return axios.get("api/manage/classroom").then(function (response) {
                  if (response.data.success == true) {
                    console.log(response.data);
                    _this.user = response.data.user;
                    _this.select = null;
                  }
                });

              case 3:
                _this.loading = false;

              case 4:
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

/***/ "./resources/js/pages/managepropos.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/managepropos.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managepropos.vue?vue&type=template&id=3fd31215& */ "./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215&");
/* harmony import */ var _managepropos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managepropos.vue?vue&type=script&lang=js& */ "./resources/js/pages/managepropos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _managepropos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__.render,
  _managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/managepropos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/managepropos.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/managepropos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_managepropos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./managepropos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_managepropos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_managepropos_vue_vue_type_template_id_3fd31215___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./managepropos.vue?vue&type=template&id=3fd31215& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/managepropos.vue?vue&type=template&id=3fd31215& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("จัดการโจทย์")]),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "4" } },
                    [_c("v-subheader", [_vm._v(" ห้องเรียน ")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.items,
                          "error-messages": _vm.selectErrors,
                          label: "เลือกห้องเรียน",
                          required: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.$v.select.$touch()
                          },
                          blur: function($event) {
                            return _vm.$v.select.$touch()
                          }
                        },
                        model: {
                          value: _vm.select,
                          callback: function($$v) {
                            _vm.select = $$v
                          },
                          expression: "select"
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
                    [_c("v-subheader", [_vm._v(" ชื่องาน ")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [_c("v-text-field", { attrs: { label: "ใส่ชื่องาน" } })],
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
                    [_c("v-subheader", [_vm._v(" โจทย์ ")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-textarea", {
                        attrs: { counter: "", label: "พิมพ์โจทย์" }
                      }),
                      _vm._v(" "),
                      [
                        _c("v-file-input", {
                          attrs: {
                            multiple: "",
                            label: "แนบไฟล์โจทย์",
                            dense: ""
                          }
                        })
                      ]
                    ],
                    2
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
                    [_c("v-subheader", [_vm._v(" คะแนน ")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [_c("v-text-field", { attrs: { label: "กำหนดคะแนน" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "4" } },
                    [_c("v-subheader", [_vm._v(" ภาษา ")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.itemsleg,
                          "error-messages": _vm.selectErrors,
                          label: "เลือกภาษา",
                          required: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.$v.selectLeg.$touch()
                          },
                          blur: function($event) {
                            return _vm.$v.selectleg.$touch()
                          }
                        },
                        model: {
                          value: _vm.selectleg,
                          callback: function($$v) {
                            _vm.selectleg = $$v
                          },
                          expression: "selectleg"
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
                    { attrs: { cols: "5" } },
                    [
                      _c("v-subheader", [_vm._v(" กำหนดส่ง ")]),
                      _vm._v(" "),
                      _c("v-date-picker", {
                        model: {
                          value: _vm.picker,
                          callback: function($$v) {
                            _vm.picker = $$v
                          },
                          expression: "picker"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "1" } },
                    [_c("v-text", [_vm._v("ถึง")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-date-picker", {
                        model: {
                          value: _vm.picker,
                          callback: function($$v) {
                            _vm.picker = $$v
                          },
                          expression: "picker"
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