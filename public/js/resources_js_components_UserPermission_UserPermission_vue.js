"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UserPermission_UserPermission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      search: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [{
        text: "ลำดับ",
        align: "center",
        sortable: false,
        width: "100px",
        value: "index"
      }, {
        text: "ชื่อ-สกุล",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "",
        align: "center",
        sortable: false,
        width: "200px",
        value: "permission"
      }]
    };
  },
  created: function created() {
    this.fetchUserPermission();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    loading: function loading(state) {
      return state.permission.loading;
    },
    user_permission: function user_permission(state) {
      return state.permission.user_permission || [];
    }
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("snackbar", ["showSnack"])), {}, {
    snackBar: function snackBar() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3500;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Successfully";
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.showSnack({
        text: text,
        color: color,
        timeout: timeout
      });
    },
    fetchUserPermission: function fetchUserPermission() {
      this.$store.dispatch("permission/fetchUserPermission");
    },
    updateUserPermission: function updateUserPermission(item) {
      var _this = this;

      item.is_create = !item.is_create;
      item.is_update = !item.is_update;
      this.$store.dispatch("permission/updateUserPermission", item).then(function (e) {
        if (e.message == "Successfully") {
          _this.snackBar(3500, "Successfully", "success");
        }
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/components/UserPermission/UserPermission.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/UserPermission/UserPermission.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPermission.vue?vue&type=template&id=107a0618& */ "./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618&");
/* harmony import */ var _UserPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPermission.vue?vue&type=script&lang=js& */ "./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserPermission/UserPermission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPermission_vue_vue_type_template_id_107a0618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPermission.vue?vue&type=template&id=107a0618& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserPermission/UserPermission.vue?vue&type=template&id=107a0618& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            {
              staticClass: "d-flex justify-space-between",
              staticStyle: { padding: "0px 0px 20px 0px" },
            },
            [
              _c("div", [
                _c("div", { staticStyle: { "font-size": "30px" } }, [
                  _vm._v("จัดการสิทธิ"),
                ]),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": "",
                },
                model: {
                  value: _vm.search,
                  callback: function ($$v) {
                    _vm.search = $$v
                  },
                  expression: "search",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  search: _vm.search,
                  headers: _vm.headers,
                  items: _vm.user_permission,
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
                      key: "item.permission",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                depressed: "",
                                color:
                                  item.is_create == 0 ? "primary" : "error",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.updateUserPermission(item)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    item.is_create == 0
                                      ? "เพิ่มสิทธิ"
                                      : "ลบสิทธิ"
                                  ) +
                                  "\n          "
                              ),
                            ]
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