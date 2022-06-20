"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Research_DetailResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/Loading/Loading */ "./resources/js/Components/Loading/Loading.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      valid: false,
      editedIndex: -1,
      dialog: {
        dialog_researcher: false,
        dialog_part_10: false
      },
      request: {
        research_name: "",
        university_code: "",
        research_period: "",
        research_format: "",
        research_type: "",
        research_branch: "",
        related_activities: "",
        road_map: "",
        research_status: "",
        researcher: [],
        part_10: []
      },
      researcher: {
        researcher_name: "",
        researcher_structure: "",
        researcher_branch: "",
        researcher_position: "",
        researcher_responsibility: ""
      },
      part_10: {
        researcher_name: "",
        researcher_structure: "",
        researcher_branch: "",
        researcher_position: "",
        researcher_responsibility: ""
      },
      rules: {
        required: [function (val) {
          return (val || '').length > 0 || 'This field is required';
        }]
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    loading: function loading(state) {
      return state.parameter.loading;
    },
    parameter: function parameter(state) {
      return state.parameter;
    }
  })), {}, {
    research_id: function research_id() {
      return this.$route.query.id;
    }
  }),
  created: function created() {
    this.fetchParameter(["branch_group"]);
  },
  methods: {
    fetchParameter: function fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },
    onClickResearcher: function onClickResearcher() {
      var researcher = {
        researcher_name: this.researcher.researcher_name,
        researcher_structure: this.researcher.researcher_structure,
        researcher_branch: this.researcher.researcher_branch,
        researcher_position: this.researcher.researcher_position,
        researcher_responsibility: this.researcher.researcher_responsibility
      };

      if (this.editedIndex > -1) {
        Object.assign(this.request.researcher[this.editedIndex], this.researcher);
      } else {
        this.request.researcher.push(researcher);
      }

      this.$refs.form_researcher.reset();
    },
    ManageItemResearcher: function ManageItemResearcher(item, action) {
      this.editedIndex = this.request.researcher.indexOf(item);
      this.researcher = Object.assign({}, item);

      if (action == 'delete') {
        this.request.researcher.splice(this.editedIndex, 1);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Research/DetailResearch.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Research/DetailResearch.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailResearch.vue?vue&type=template&id=488cff85& */ "./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85&");
/* harmony import */ var _DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailResearch.vue?vue&type=script&lang=js& */ "./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Research/DetailResearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailResearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_488cff85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailResearch.vue?vue&type=template&id=488cff85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=template&id=488cff85& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Loading", { attrs: { loading: _vm.loading } }),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-form",
            { ref: "request", attrs: { "lazy-validation": "" } },
            [
              _c(
                "v-row",
                { attrs: { justify: "space-between" } },
                [
                  _vm.research_id == 0
                    ? [
                        _c("v-col", [
                          _c("p", { staticClass: "h3" }, [
                            _vm._v("เพิ่มงานวิจัย"),
                          ]),
                        ]),
                      ]
                    : [
                        _c("v-col", [
                          _c("p", { staticClass: "h3 mt-6" }, [
                            _vm._v("รายละเอียดงานวิจัย"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "10 text-right" } },
                                  [
                                    _c("div", [
                                      _vm._v(
                                        "หากท่านต้องการลบงานวิจัยนี้ออกจากระบบ"
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "\n                  (หากลบงานวิจัยใด ๆ\n                  ออกจากระบบแล้วจะไม่สามารถเรียกข้อมูลงานวิจัยนั้นกลับมาได้อีก)\n                "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "2" } },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { color: "error", dark: "" } },
                                      [_vm._v("ลบงานวิจัยนี้")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                ],
                2
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _vm.research_id == 0
                    ? [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "auto" } },
                              [
                                _c("v-subheader", { staticClass: "mt-2" }, [
                                  _vm._v("ชื่อผลงานวิจัย : "),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "ชื่อผลงานวิจัย",
                                    rules: _vm.rules.required,
                                    required: "",
                                  },
                                  model: {
                                    value: _vm.request.research_name,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_name",
                                        $$v
                                      )
                                    },
                                    expression: "request.research_name",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    : [_c("p", { staticClass: "h3 ml-4" }, [_vm._v("Name")])],
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("รหัสอ้างอิงมหาวิทยาลัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "รหัสอ้างอิงมหาวิทยาลัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("ช่วงเวลาวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "ช่วงเวลาวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("รูปแบบงานวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "รูปแบบงานวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("ประเภทงานวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "ประเภทงานวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("สาขางานวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "สาขางานวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("กิจกรรมที่เกี่ยวข้อง : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "กิจกรรมที่เกี่ยวข้อง",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("Road map : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "Road map",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("สถานะงานวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "สถานะงานวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("ประเภทโครงการวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "ประเภทโครงการวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "auto" } },
                        [
                          _c("v-subheader", { staticClass: "mt-2" }, [
                            _vm._v("ลักษณะโครงการวิจัย : "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.parameter.branch_group,
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "ลักษณะโครงการวิจัย",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c("p", { staticClass: "h3 pa-2 mr-auto" }, [
                        _vm._v("ส่วนที่ 2 นักวิจัย"),
                      ]),
                      _vm._v(" "),
                      _vm.request.researcher.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.researcher = []
                                  },
                                },
                              },
                              [_vm._v(" ล้างค่า ")]
                            ),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "pa-2 primary",
                          on: {
                            click: function () {
                              _vm.editedIndex = -1
                              _vm.dialog.dialog_researcher = true
                            },
                          },
                        },
                        [_vm._v(" นักวิจัย")]
                      ),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.researcher.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(
                                _vm.request.researcher,
                                function (researcher) {
                                  return _c(
                                    "div",
                                    { key: researcher.id },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "d-flex justify-end",
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "pa-2 error mr-2",
                                                  on: {
                                                    click: function () {
                                                      _vm.ManageItemResearcher(
                                                        researcher,
                                                        "delete"
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v(" ลบ")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "pa-2 primary",
                                                  on: {
                                                    click: function () {
                                                      _vm.ManageItemResearcher(
                                                        researcher,
                                                        null
                                                      )
                                                      _vm.dialog.dialog_researcher = true
                                                    },
                                                  },
                                                },
                                                [_vm._v(" แก้ไข")]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  "ชื่อนักวิจัย : " +
                                                    (researcher.researcher_name ||
                                                      "-- ไม่ระบุ --")
                                                )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  "สังกัด : " +
                                                    (researcher.researcher_structure ||
                                                      "-- ไม่ระบุ --")
                                                )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  "สาขา : " +
                                                    (researcher.researcher_branch ||
                                                      "-- ไม่ระบุ --")
                                                )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  "ตำแหน่งงานวิจัย : " +
                                                    (researcher.researcher_position ||
                                                      "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  "ร้อยละความรับผิดชอบ : " +
                                                    (researcher.researcher_responsibility ||
                                                      "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                    ],
                                    1
                                  )
                                }
                              ),
                              0
                            ),
                          ]
                        : [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pa-4 grey lighten-2 rounded-lg text-center",
                              },
                              [
                                _vm._v(
                                  "\n              -- ไม่ระบุ --\n            "
                                ),
                              ]
                            ),
                          ],
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 3 ที่ปรึกษางานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" ที่ปรึกษางานวิจัย "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.parameter.branch_group,
                          "item-text": "value_ref",
                          "item-value": "value",
                          label: "ที่ปรึกษางานวิจัย",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 4 แนวทางการดำเนินงานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" แนวทางการทำวิจัย "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "แนวทางการทำวิจัย" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 5 วัตถุประสงค์งานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" วัตถุประสงค์ "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [_c("v-textarea", { attrs: { label: "วัตถุประสงค์" } })],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" ประโยชน์ที่จะได้รับ "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "ประโยชน์ที่จะได้รับ" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" ผลสำเร็จที่จะได้รับ "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "ผลสำเร็จที่จะได้รับ" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" พื้นที่ดำเนินงานวิจัย "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "พื้นที่ดำเนินงานวิจัย" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c("p", { staticClass: "h3 pa-2 mr-auto" }, [
                        _vm._v("ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { staticClass: "pa-2 primary mr-2" }, [
                        _vm._v(" งานวิจัยหลัก"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { staticClass: "pa-2 primary" }, [
                        _vm._v(" งานวิจัยย่อย "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "งานวิจัยอื่น ๆ ที่เกี่ยวข้อง" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c("p", { staticClass: "h3 pa-2 mr-auto" }, [
                        _vm._v("ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _vm.request.part_10.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.part_10 = []
                                  },
                                },
                              },
                              [_vm._v(" ล้างค่า ")]
                            ),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "pa-2 primary",
                          on: {
                            click: function () {
                              _vm.editedIndex = -1
                              _vm.dialog.dialog_part_10 = true
                            },
                          },
                        },
                        [_vm._v(" เพิ่มแหล่งทุนสนับสนุน")]
                      ),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.part_10.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(_vm.request.part_10, function (part_10) {
                                return _c(
                                  "div",
                                  { key: part_10.id },
                                  [
                                    _c("v-row", [
                                      _c(
                                        "div",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 error mr-2",
                                              on: {
                                                click: function () {
                                                  _vm.ManageItemPart_10(
                                                    part_10,
                                                    "delete"
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v(" ลบ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 primary",
                                              on: {
                                                click: function () {
                                                  _vm.ManageItemPart_10(
                                                    part_10,
                                                    null
                                                  )
                                                  _vm.dialog.dialog_part_10 = true
                                                },
                                              },
                                            },
                                            [_vm._v(" แก้ไข")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("v-divider"),
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                          ]
                        : [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pa-4 grey lighten-2 rounded-lg text-center",
                              },
                              [
                                _vm._v(
                                  "\n              -- ไม่ระบุ --\n            "
                                ),
                              ]
                            ),
                          ],
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 11 เอกสารประกอบงานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เอกสารประกอบ "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-file-input", {
                        attrs: { label: "เอกสารประกอบงานวิจัย" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 12 การนำเสนองานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เพิ่มข้อมูล "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "การนำเสนองานวิจัย" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เพิ่มข้อมูล "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "การตีพิมพ์เผยแพร่งานวิจัย" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เพิ่มข้อมูล "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "การนำงานวิจัยไปใช้ประโยชน์" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เพิ่มข้อมูล "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: { label: "การนำงานวิจัยไปใช้อ้างอิง" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("p", { staticClass: "h3 ml-4" }, [
                        _vm._v("แนบไฟล์เอกสารอ้างอิง"),
                      ]),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { color: "primary" } }, [
                        _vm._v(" เอกสารประกอบ "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [_c("v-file-input", { attrs: { label: "เอกสารอ้างอิง" } })],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", dark: "" },
                          on: {
                            click: function () {
                              if (this$1.$refs.request.validate()) {
                                this$1.$refs.request.reset()
                              } else {
                                this$1.$refs.request.validate()
                                _vm.valid = true
                              }
                            },
                          },
                        },
                        [_vm._v("บันทึกงานวิจัย")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-dialog",
            {
              attrs: { width: "900" },
              model: {
                value: _vm.dialog.dialog_researcher,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "dialog_researcher", $$v)
                },
                expression: "dialog.dialog_researcher",
              },
            },
            [
              _c(
                "v-form",
                { ref: "form_researcher" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [_vm._v(" นักวิจัย ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("ชื่อนักวิจัย : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "ชื่อนักวิจัย",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.researcher.researcher_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_name",
                                          $$v
                                        )
                                      },
                                      expression: "researcher.researcher_name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("สังกัด : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "สังกัด",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.researcher.researcher_structure,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_structure",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "researcher.researcher_structure",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("สาขา : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "สาขา",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.researcher.researcher_branch,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_branch",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "researcher.researcher_branch",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("ตำแหน่งงานวิจัย : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "ตำแหน่งงานวิจัย",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.researcher.researcher_position,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_position",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "researcher.researcher_position",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("ร้อยละความรับผิดชอบ : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "ร้อยละความรับผิดชอบ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.researcher
                                          .researcher_responsibility,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_responsibility",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "researcher.researcher_responsibility",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", text: "" },
                              on: {
                                click: function () {
                                  this$1.$refs.form_researcher.reset()
                                  _vm.dialog.dialog_researcher =
                                    !_vm.dialog.dialog_researcher
                                },
                              },
                            },
                            [_vm._v("\n              ยกเลิก\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", text: "" },
                              on: {
                                click: function () {
                                  this$1.$refs.form_researcher.validate()
                                  if (this$1.$refs.form_researcher.validate()) {
                                    _vm.onClickResearcher()
                                    _vm.dialog.dialog_researcher =
                                      !_vm.dialog.dialog_researcher
                                  }
                                },
                              },
                            },
                            [_vm._v("\n              ยืนยัน\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-dialog",
            {
              attrs: { width: "900" },
              model: {
                value: _vm.dialog.dialog_part_10,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "dialog_part_10", $$v)
                },
                expression: "dialog.dialog_part_10",
              },
            },
            [
              _c(
                "v-form",
                { ref: "form_part_10" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [_vm._v(" แบบฟอร์มจัดการงบประมาณ ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("ชื่อนักวิจัย : "),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "ชื่อนักวิจัย",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.researcher.researcher_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.researcher,
                                          "researcher_name",
                                          $$v
                                        )
                                      },
                                      expression: "researcher.researcher_name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", text: "" },
                              on: {
                                click: function () {
                                  this$1.$refs.form_part_10.reset()
                                  _vm.dialog.dialog_part_10 =
                                    !_vm.dialog.dialog_part_10
                                },
                              },
                            },
                            [_vm._v("\n              ยกเลิก\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", text: "" },
                              on: {
                                click: function () {
                                  this$1.$refs.form_part_10.validate()
                                  if (this$1.$refs.form_part_10.validate()) {
                                    _vm.onClickResearcher()
                                    _vm.dialog.dialog_part_10 =
                                      !_vm.dialog.dialog_part_10
                                  }
                                },
                              },
                            },
                            [_vm._v("\n              ยืนยัน\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-dialog",
            {
              attrs: { width: "300" },
              model: {
                value: _vm.valid,
                callback: function ($$v) {
                  _vm.valid = $$v
                },
                expression: "valid",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "grey lighten-2 mb-2" }, [
                    _vm._v(" แจ้งเตือน "),
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v("\n          กรุณากรอกข้อมูลให้ครบ\n        "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", text: "" },
                          on: {
                            click: function ($event) {
                              _vm.valid = false
                            },
                          },
                        },
                        [_vm._v("\n            ตกลง\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);