"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Research_Expertise_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/Loading/Loading */ "./resources/js/Components/Loading/Loading.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      checkResearch: false,
      query_param: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [{
        text: "ลำดับ",
        align: "center",
        sortable: false,
        value: "index",
        width: "5%"
      }, {
        text: "ความเชี่ยวชาญ",
        align: "start",
        value: "type",
        width: "70%"
      }, {
        text: "ชื่อ-สกุล",
        align: "start",
        value: "name",
        width: "25"
      }]
    };
  },
  created: function created() {
    if (this.$route.query.q) {
      this.query_param = this.$route.query.q;
      this.fetchSearchUserExpertise(this.$route.query.q);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    loading: function loading(state) {
      return state.research.loading;
    },
    search_user_expertise: function search_user_expertise(state) {
      return state.research.search_user_expertise || [];
    }
  })),
  methods: {
    heddleOnClickSearch: function heddleOnClickSearch() {
      this.$router.replace({
        query: {
          q: this.query_param
        }
      }, function () {});

      if (this.query_param) {
        this.fetchSearchUserExpertise(this.query_param);
      }
    },
    fetchSearchUserExpertise: function fetchSearchUserExpertise(q) {
      this.$store.dispatch("research/fetchSearchUserExpertise", q);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Research/Expertise.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Research/Expertise.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expertise.vue?vue&type=template&id=3aa005a8& */ "./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8&");
/* harmony import */ var _Expertise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expertise.vue?vue&type=script&lang=js& */ "./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expertise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Research/Expertise.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expertise.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_template_id_3aa005a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expertise.vue?vue&type=template&id=3aa005a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/Expertise.vue?vue&type=template&id=3aa005a8& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("Loading", { attrs: { loading: _vm.loading } }),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c("div", { staticStyle: { "font-size": "30px" } }, [
            _vm._v("ความเชี่ยวชาญ"),
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-text-field", {
                attrs: {
                  label: "ค้นหาข้อมูลจากความเชี่ยวชาญ ชื่อ-สกุล",
                  solo: "",
                },
                on: {
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.heddleOnClickSearch.apply(null, arguments)
                  },
                },
                scopedSlots: _vm._u([
                  {
                    key: "append",
                    fn: function () {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: { click: _vm.heddleOnClickSearch },
                          },
                          [_vm._v(" SEARCH ")]
                        ),
                      ]
                    },
                    proxy: true,
                  },
                ]),
                model: {
                  value: _vm.query_param,
                  callback: function ($$v) {
                    _vm.query_param = $$v
                  },
                  expression: "query_param",
                },
              }),
              _vm._v(" "),
              this.$route.query.q
                ? [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "margin-bottom": "10px",
                        },
                      },
                      [
                        _vm._v(
                          "\n          ผลการค้นหา\n          " +
                            _vm._s(
                              _vm.search_user_expertise
                                ? _vm.search_user_expertise.length
                                : 0
                            ) +
                            "\n          รายการ\n        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.search_user_expertise,
                        page: _vm.page,
                        "items-per-page": _vm.itemsPerPage,
                      },
                      on: {
                        "update:page": function ($event) {
                          _vm.page = $event
                        },
                        "page-count": function ($event) {
                          _vm.pageCount = $event
                        },
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "item.index",
                            fn: function (ref) {
                              var index = ref.index
                              return [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(index + 1) +
                                    "\n          "
                                ),
                              ]
                            },
                          },
                          {
                            key: "item.name",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(
                                      item.user[0].first_name +
                                        " " +
                                        item.user[0].last_name
                                    ) +
                                    "\n          "
                                ),
                              ]
                            },
                          },
                          {
                            key: "no-data",
                            fn: function () {
                              return [_vm._v(" ไม่พบผลการค้นหา ")]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center pt-2" },
                      [
                        _c("v-pagination", {
                          attrs: { length: _vm.pageCount },
                          model: {
                            value: _vm.page,
                            callback: function ($$v) {
                              _vm.page = $$v
                            },
                            expression: "page",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                : _vm._e(),
            ],
            2
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