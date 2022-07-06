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
    this.fetchParameter(["branch_group", "funding_type_group", "funding_level_group", "institutional_budget_group", "research_consultant"]);
    this.fetchSearchResearchById(this.$route.query.id);
  },
  methods: {
    fetchSearchResearchById: function fetchSearchResearchById(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id);
      }
    },
    fetchParameterDATA: function fetchParameterDATA(items, group, key) {
      if (items) {
        return items[group].find(function (e) {
          return e.value == key;
        });
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
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.target = '_blank';
        link.click();
      });
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
                    _c("p", { staticClass: "h3" }, [
                      _vm._v("รายละเอียดงานวิจัย"),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("p", { staticClass: "h3 ml-4" }, [
                _vm._v(_vm._s(_vm.search_research_by_id.research_name_th)),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "h4 ml-4" }, [
                _vm._v(_vm._s(_vm.search_research_by_id.research_name_en)),
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
                                " " +
                                  _vm._s(
                                    _vm.search_research_by_id.university_code ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("รหัสอ้างอิง วช. :")]),
                              _vm._v(
                                " " + _vm._s("-- ไม่ระบุ --") + "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("สถานะการดำเนินงาน :")]),
                              _vm._v(
                                " " + _vm._s("-- ไม่ระบุ --") + "\n            "
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
                                " " + _vm._s("-- ไม่ระบุ --") + "\n            "
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
                  { staticClass: "pa-4 grey  lighten-5 rounded-lg" },
                  [
                    _c(
                      "v-container",
                      [
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 1 ข้อมูลทั่วไป")]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c("v-col", [
                              _c("p", [
                                _c("b", [_vm._v("ข้อมูลทั่วไป ภาษาไทย")]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column" },
                                [
                                  _c("v-col", [
                                    _c("b", [_vm._v("หัวข้อ :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .research_name_th || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("บทคัดย่อ :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s("-- ไม่ระบุ --") +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("คำสำคัญ :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s("-- ไม่ระบุ --") +
                                        "\n                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("p", [
                                _c("b", [_vm._v("ข้อมูลทั่วไป ภาษาอังกฤษ")]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "d-flex flex-column" },
                                [
                                  _c("v-col", [
                                    _c("b", [_vm._v("Title :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.search_research_by_id
                                            .research_name_en || "-- ไม่ระบุ --"
                                        ) +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("Abstract :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s("-- ไม่ระบุ --") +
                                        "\n                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _c("b", [_vm._v("Keyword :")]),
                                    _vm._v(
                                      " " +
                                        _vm._s("-- ไม่ระบุ --") +
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
                                " " +
                                  _vm._s(
                                    _vm.search_research_by_id.research_format ||
                                      "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("ประเภทงานวิจัย :")]),
                              _vm._v(
                                " " +
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
                                _vm._s(
                                  _vm.fetchParameterDATA(
                                    _vm.parameter,
                                    "branch_group",
                                    _vm.search_research_by_id.research_branch
                                  ).value_ref || "-- ไม่ระบุ --"
                                ) + "\n            "
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
                                " " +
                                  _vm._s(
                                    _vm.search_research_by_id
                                      .related_activities || "-- ไม่ระบุ --"
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-col", [
                              _c("b", [_vm._v("Road map :")]),
                              _vm._v(
                                " " +
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 2 นักวิจัย")]),
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
                                      _vm.search_research_by_id.part_2 ||
                                        "ไม่มีข้อมูลนักวิจัย"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 3 ที่ปรึกษางานวิจัย")]),
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
                                      _vm.fetchParameterDATA(
                                        _vm.parameter,
                                        "research_consultant",
                                        _vm.search_research_by_id.part_3
                                      ).value_ref ||
                                        "ไม่มีข้อมูลที่ปรึกษางานวิจัย"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 4 แนวทางการดำเนินงานวิจัย"),
                          ]),
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
                                      _vm.search_research_by_id.part_4 ||
                                        "ไม่มีข้อมูลแนวทางการดำเนินงานวิจัย"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 5 วัตถุประสงค์งานวิจัย")]),
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
                                      _vm.search_research_by_id.part_5 ||
                                        "ไม่มีข้อมูลวัตถุประสงค์งานวิจัย"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ"),
                          ]),
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
                                      _vm.search_research_by_id.part_6 ||
                                        "ไม่มีข้อมูลประโยชน์ที่คาดว่าจะได้รับ"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ"),
                          ]),
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
                                      _vm.search_research_by_id.part_7 ||
                                        "ไม่มีข้อมูลผลสำเร็จที่คาดว่าจะได้รับ"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย")]),
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
                                      _vm.search_research_by_id.part_8 ||
                                        "ไม่มีข้อมูลพื้นที่ดำเนินงานวิจัย"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง"),
                          ]),
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
                                      _vm.search_research_by_id.part_9 ||
                                        "ไม่มีข้อมูลงานวิจัยอื่น ๆ ที่เกี่ยวข้อง"
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย"),
                          ]),
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
                                      _vm.search_research_by_id.part_10 ||
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 11 เอกสารประกอบงานวิจัย")]),
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
                                _vm.search_research_by_id.part_11 == null,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.downloadFile(
                                  _vm.search_research_by_id.id,
                                  _vm.search_research_by_id.part_11
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            ดาวน์โหลดเอกสารประกอบงานวิจัย\n            "
                            ),
                            _c("v-icon", { attrs: { right: "", dark: "" } }, [
                              _vm._v(
                                "\n              mdi-download-outline\n            "
                              ),
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [_vm._v("ส่วนที่ 12 การนำเสนองานวิจัย")]),
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
                                      _vm.search_research_by_id.part_12 ||
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย"),
                          ]),
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
                                      _vm.search_research_by_id.part_13 ||
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์"),
                          ]),
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
                                      _vm.search_research_by_id.part_14 ||
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
                        _c("p", { staticClass: "h4" }, [
                          _c("b", [
                            _vm._v("ส่วนที่ 15 การนำงานวิจัยไปอ้างอิง"),
                          ]),
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
                                      _vm.search_research_by_id.part_15 ||
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
                                    _vm.search_research_by_id.ref_file == null,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.downloadFile(
                                      _vm.search_research_by_id.id,
                                      _vm.search_research_by_id.ref_file
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
                                  [
                                    _vm._v(
                                      "\n                mdi-download-outline\n              "
                                    ),
                                  ]
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