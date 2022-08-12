"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_DetailResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    loading: function loading(state) {
      return state.dashboard.loading;
    },
    search_research_by_id: function search_research_by_id(state) {
      return state.dashboard.search_research_by_id || [];
    },
    loadingParameter: function loadingParameter(state) {
      return state.parameter.loading;
    },
    parameter: function parameter(state) {
      return state.parameter || [];
    }
  })),
  created: function created() {
    this.fetchParameter(["bachelor_degree_branch_group", "master_degree_branch_group", "doctor_degree_branch_group", "research_other_group", "branch_main_group", "funding_type_group", "external_institution_budget_group", "institutional_budget_group", "personal_budget_group", "funding_level_group", "presentations_type_group", "presentations_academic_type_group", "presentation_level_group"]);
    this.fetchSearchResearchById(this.$route.query.id);
  },
  methods: {
    fetchSearchResearchById: function fetchSearchResearchById(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id);
      }
    },
    fetchParameterByGroupKey: function fetchParameterByGroupKey(items, group, key) {
      if (items && group && key) {
        var _items$group;

        var param = (_items$group = items[group]) === null || _items$group === void 0 ? void 0 : _items$group.find(function (e) {
          return e.value == key;
        });
        if (param) return param.value_ref;
      }
    },
    fetchParameter: function fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },
    downloadFile: function downloadFile(id, filename) {
      var req = {
        id: id,
        filename: filename || ""
      };
      this.$store.dispatch("dashboard/downloadFile", req).then(function (response) {
        var blob = new Blob([response], {
          type: "application/pdf"
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.target = "_blank";
        link.click();
      });
    },
    showText: function showText(item) {
      if (item) return item.replace(/\n/g, "<br />");
      return "";
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Home/DetailResearch.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Home/DetailResearch.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailResearch.vue?vue&type=template&id=2a57677e& */ "./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e&");
/* harmony import */ var _DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailResearch.vue?vue&type=script&lang=js& */ "./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home/DetailResearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailResearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailResearch_vue_vue_type_template_id_2a57677e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailResearch.vue?vue&type=template&id=2a57677e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=template&id=2a57677e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Loading", {
        attrs: { loading: _vm.loading || _vm.loadingParameter },
      }),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { justify: "space-between" } },
                [
                  _c("v-col", [
                    _c("div", { staticStyle: { "font-size": "30px" } }, [
                      _vm._v("รายละเอียดงานวิจัย"),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("div", { staticStyle: { "font-size": "30px" } }, [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.search_research_by_id.title_name_th) +
                    "\n    "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticStyle: { "font-size": "30px" } }, [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.search_research_by_id.title_name_en) +
                    "\n    "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pa-md-4 mx-lg-auto" }, [
                _c(
                  "div",
                  { staticClass: "pa-4 grey lighten-1 rounded-lg" },
                  [
                    _c(
                      "v-container",
                      [
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c("b", [_vm._v("รหัสอ้างอิงมหาวิทยาลัย : ")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id
                                      .ref_code_university || "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("รหัสอ้างอิง วช. :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.ref_code_nr ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("สถานะการดำเนินงาน :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.research_status ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c("b", [_vm._v("วันที่ดำเนินงาน :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.research_period ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pa-md-4 mx-lg-auto" }, [
                _c(
                  "div",
                  { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                  [
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 1 ข้อมูลทั่วไป"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c(
                                "div",
                                { staticStyle: { "font-size": "20px" } },
                                [_vm._v("ข้อมูลทั่วไป ภาษาไทย")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column" },
                                [
                                  _c("v-col", [
                                    _c("b", [_vm._v("หัวข้อ :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .title_name_th || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("บทคัดย่อ :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .abstract_name_th || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("คำสำคัญ :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .keyword_name_th || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c(
                                "div",
                                { staticStyle: { "font-size": "20px" } },
                                [_vm._v("ข้อมูลทั่วไป ภาษาอังกฤษ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column" },
                                [
                                  _c("v-col", [
                                    _c("b", [_vm._v("Title :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .title_name_en || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("Abstract :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .abstract_name_en || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("Keyword :")]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .keyword_name_en || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c("b", [_vm._v("รูปแบบงานวิจัย :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.research_model ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("ประเภทงานวิจัย :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.research_type ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("สาขางานวิจัย :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.fetchParameterByGroupKey(
                                      _vm.parameter,
                                      "branch_group",
                                      _vm.search_research_by_id
                                        .research_branch_main
                                    ) || "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c("b", [_vm._v("กิจกรรมที่เกี่ยวข้อง :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id
                                      .research_activities || "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("Road map :")]),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.search_research_by_id.road_map ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col"),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 2 นักวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_project_type ||
                                        "-- ไม่ระบุ --"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 3 ที่ปรึกษางานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_consultant || "-- ไม่ระบุ --"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 4 แนวทางการดำเนินงานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.showText(
                                        _vm.search_research_by_id
                                          .research_operation
                                      ) || "ไม่มีข้อมูลแนวทางการดำเนินงานวิจัย"
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 5 วัตถุประสงค์งานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.showText(
                                        _vm.search_research_by_id
                                          .research_objective
                                      ) || "ไม่มีข้อมูลวัตถุประสงค์งานวิจัย"
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.showText(
                                        _vm.search_research_by_id
                                          .research_benefit
                                      ) ||
                                        "ไม่มีข้อมูลประโยชน์ที่คาดว่าจะได้รับ"
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.showText(
                                        _vm.search_research_by_id
                                          .research_achievements
                                      ) ||
                                        "ไม่มีข้อมูลผลสำเร็จที่คาดว่าจะได้รับ"
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.showText(
                                        _vm.search_research_by_id.research_area
                                      ) || "ไม่มีข้อมูลพื้นที่ดำเนินงานวิจัย"
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.fetchParameterByGroupKey(
                                        _vm.parameter,
                                        "research_other_group",
                                        _vm.search_research_by_id.research_other
                                      ) ||
                                        "ไม่มีข้อมูลงานวิจัยอื่น ๆ ที่เกี่ยวข้อง'"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_fundings ||
                                        "ไม่มีข้อมูลแหล่งทุนสนับสนุนงานวิจัย"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 11 เอกสารประกอบงานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "ma-3",
                            attrs: {
                              outlined: "",
                              color: "indigo",
                              disabled:
                                _vm.search_research_by_id
                                  .research_papers_path == null,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.downloadFile(
                                  _vm.search_research_by_id.id,
                                  _vm.search_research_by_id.research_papers_path
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            ดาวน์โหลดเอกสารประกอบงานวิจัย\n            "
                            ),
                            _c("v-icon", { attrs: { right: "", dark: "" } }, [
                              _vm._v(" mdi-download-outline "),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 12 การนำเสนองานวิจัย"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_presentations ||
                                        "ไม่มีข้อมูลการนำเสนองานวิจัย"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_publications ||
                                        "ไม่มีข้อมูลการตีพิมพ์เผยแพร่งานวิจัย"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v(
                            "\n            ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์\n          "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_benefits ||
                                        "ไม่มีข้อมูลการนำงานวิจัยไปใช้ประโยชน์"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      [
                        _c("div", { staticStyle: { "font-size": "30px" } }, [
                          _vm._v("ส่วนที่ 15 การนำงานวิจัยไปอ้างอิง"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "pa-2",
                                attrs: { outlined: "", tile: "" },
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.search_research_by_id
                                        .research_reference ||
                                        "ไม่มีข้อมูลการนำงานวิจัยไปอ้างอิง"
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row-reverse",
                            attrs: { flat: "", tile: "" },
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-3",
                                attrs: {
                                  outlined: "",
                                  color: "indigo",
                                  disabled:
                                    _vm.search_research_by_id
                                      .research_reference_path == null,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.downloadFile(
                                      _vm.search_research_by_id.id,
                                      _vm.search_research_by_id
                                        .research_reference_path
                                    )
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n              ดาวน์โหลดเอกสารอ้างอิง\n              "
                                ),
                                _c(
                                  "v-icon",
                                  { attrs: { right: "", dark: "" } },
                                  [_vm._v(" mdi-download-outline ")]
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
              ]),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);