(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_ManageUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Snackbar_Snackbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Snackbar/Snackbar.vue */ "./resources/js/components/Snackbar/Snackbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Snackbar: _Snackbar_Snackbar_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      loader: null,
      loading: false,
      status: "all",
      search: "",
      resetPassword: "",
      headers: [{
        text: "Username",
        value: "username"
      }, {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Action",
        value: "action"
      }],
      dialog: false,
      dialogDelete: false,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        email: "",
        name: "",
        username: ""
      },
      defaultItem: {
        id: 0,
        email: "",
        name: "",
        username: ""
      }
    };
  },
  created: function created() {
    this.getUser();
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    loader: function loader() {
      var _this = this;

      var l = this.loader;
      this[l] = !this[l];
      setTimeout(function () {
        _this[l] = false;
        _this.resetPassword = _this.editedItem.username;

        _this.updateUser();
      }, 1000);
      this.loader = null;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("snackbar", ["showSnack"])), {}, {
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
    getUser: function getUser() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.next = 3;
                return axios.get("/api/manage/user").then(function (response) {
                  if (response.data.success == true) {
                    _this2.desserts = response.data.payload;
                  }
                })["catch"](function (error) {
                  _this2.snackBar(3500, error, "error");
                });

              case 3:
                _this2.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateUser: function updateUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.loading = true;
                _context2.next = 3;
                return axios.put("/api/manage/user", {
                  id: _this3.editedItem.id,
                  resetPassword: _this3.resetPassword ? _this3.resetPassword : "",
                  name: _this3.editedItem.name
                }).then(function () {
                  _this3.snackBar();
                })["catch"](function (error) {
                  _this3.snackBar(3500, error, "error");
                });

              case 3:
                _this3.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this5 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.updateUser();
        this.resetPassword = "";
      }

      this.close();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
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
  created: function created() {
    var _this = this;

    this.$store.subscribe(function (mutation, state) {
      if (mutation.type === "snackbar/SHOW_MESSAGE") {
        _this.text = state.snackbar.text;
        _this.color = state.snackbar.color;
        _this.timeout = state.snackbar.timeout;
        _this.show = true;
      }
    });
  },
  data: function data() {
    return {
      show: false,
      color: "",
      text: "",
      timeout: 0
    };
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/ManageUsers.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Admin/ManageUsers.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageUsers.vue?vue&type=template&id=4134d468& */ "./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468&");
/* harmony import */ var _ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__.render,
  _ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ManageUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Snackbar/Snackbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Snackbar/Snackbar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=template&id=37e7d894& */ "./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894&");
/* harmony import */ var _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__.render,
  _Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Snackbar/Snackbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Snackbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4134d468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ManageUsers.vue?vue&type=template&id=4134d468& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468&");


/***/ }),

/***/ "./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_37e7d894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Snackbar.vue?vue&type=template&id=37e7d894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/ManageUsers.vue?vue&type=template&id=4134d468& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var this$1 = this
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
          _c("Snackbar"),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              search: _vm.search,
              items: _vm.desserts.filter(function(e) {
                if (this$1.status === "student") {
                  if (e.role_student === 1) {
                    return e
                  }
                } else if (this$1.status === "ta") {
                  if (e.role_ta === 1) {
                    return e
                  }
                } else if (this$1.status === "teacher") {
                  if (e.role_teacher === 1) {
                    return e
                  }
                } else if (this$1.status === "all") {
                  return e
                }
              }),
              "sort-by": "calories"
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c("v-toolbar-title", [_vm._v("Manage Users")]),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4",
                            attrs: { inset: "", vertical: "" }
                          }),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            staticClass: "mr-5",
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "800px" },
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-container",
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Username",
                                                      disabled: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.username,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "username",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.username"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Name" },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.name"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "9" } },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Email",
                                                      disabled: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem.email,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "email",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.email"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "3" } },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "ma-2",
                                                      attrs: {
                                                        loading: _vm.loading,
                                                        disabled: _vm.loading,
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: function() {
                                                          _vm.loader = "loading"
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        Reset password\n                      "
                                                      )
                                                    ]
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
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.close }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Cancel\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.save }
                                        },
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
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.action",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        },
                        [_vm._v("\n          mdi-pencil\n        ")]
                      )
                    ]
                  }
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Snackbar/Snackbar.vue?vue&type=template&id=37e7d894& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "v-snackbar",
    {
      attrs: { color: _vm.color, timeout: _vm.timeout },
      scopedSlots: _vm._u([
        {
          key: "action",
          fn: function(ref) {
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._b(
                  {
                    attrs: { dark: "", text: "" },
                    on: {
                      click: function($event) {
                        _vm.show = false
                      }
                    }
                  },
                  "v-btn",
                  attrs,
                  false
                ),
                [_vm._v(" Close ")]
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.show,
        callback: function($$v) {
          _vm.show = $$v
        },
        expression: "show"
      }
    },
    [_vm._v("\n  " + _vm._s(_vm.text) + "\n\n  ")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);