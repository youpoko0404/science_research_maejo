"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Research_MyResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HttpRequest_httpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../HttpRequest/httpRequest */ "./resources/js/HttpRequest/httpRequest.js");
/* harmony import */ var _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Loading/Loading */ "./resources/js/Components/Loading/Loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var httpRequest = new _HttpRequest_httpRequest__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [{
        text: "ลำดับ",
        align: "center",
        sortable: false,
        value: "index",
        width: "100px"
      }, {
        text: "ชื่อผลงาน",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "แก้ไขงานวิจัย",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px"
      }],
      items: [{
        name: "Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
        id: 1
      }, {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
        id: 2
      }]
    };
  },
  methods: {
    heddleOnClickEdit: function heddleOnClickEdit(id) {
      if (id) {
        this.$router.push({
          path: "detail-research",
          query: {
            id: id
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Research/MyResearch.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Research/MyResearch.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyResearch.vue?vue&type=template&id=00024640& */ "./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640&");
/* harmony import */ var _MyResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyResearch.vue?vue&type=script&lang=js& */ "./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Research/MyResearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyResearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyResearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyResearch_vue_vue_type_template_id_00024640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyResearch.vue?vue&type=template&id=00024640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/MyResearch.vue?vue&type=template&id=00024640& ***!
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
      _c("Loading", { attrs: { loading: _vm.loading } }),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c("p", { staticClass: "h3" }, [_vm._v("งานวิจัย")]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  page: _vm.page,
                  "items-per-page": _vm.itemsPerPage,
                  "hide-default-footer": "",
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
                            "\n          " + _vm._s(index + 1) + "\n        "
                          ),
                        ]
                      },
                    },
                    {
                      key: "item.edit",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "warning", dark: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.heddleOnClickEdit(item.id)
                                },
                              },
                            },
                            [_vm._v("แก้ไข")]
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