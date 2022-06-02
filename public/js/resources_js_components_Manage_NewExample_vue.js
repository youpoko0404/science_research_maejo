(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Manage_NewExample_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Loading",
  props: ["loading", "color"],
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Navigation.vue */ "./resources/js/components/Navigation/Navigation.vue");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Navigation: _Navigation_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      title: "",
      question: "",
      score: "",
      language: "",
      file: ""
    };
  },
  created: function created() {},
  methods: {
    onFileChange: function onFileChange(e) {
      this.file = e.target.files[0];
    },
    resetForm: function resetForm() {
      this.title = null;
      this.question = "";
      this.score = null;
      this.language = null;
      this.file = 0;
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
                formData.append("title", _this.title);
                formData.append("question", _this.question);
                formData.append("score", _this.score);
                formData.append("language", _this.language);
                formData.append("file", _this.file);
                _context.next = 10;
                return axios.post("/api/problem", formData, config).then(function (response) {
                  console.log(response);
                })["catch"](function (error) {
                  console.log(error);
                });

              case 10:
                _this.resetForm();

              case 11:
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading_Loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading/Loading.vue */ "./resources/js/components/Loading/Loading.vue");


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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navigation",
  components: {
    Loading: _Loading_Loading_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    onClick: Function
  },
  data: function data() {
    return {
      model: 0,
      loading: false,
      dialog: false,
      course_name: ""
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.check_user();

            case 2:
              _context.next = 4;
              return _this.classroom();

            case 4:
              _context.next = 6;
              return _this.onClick(_this.$store.state.data.courses.length > 0 ? _this.$store.state.data.courses[0] : 0);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    check_user: function check_user() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.next = 3;
                return axios.get("/api/user").then(function (response) {
                  if (response.data.success == true) {
                    _this2.$store.commit("data/SET_USER", response.data.user);
                  }
                });

              case 3:
                _this2.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    classroom: function classroom() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.loading = true;
                _context3.next = 3;
                return axios.get("api/classroom", {
                  params: {
                    studentid: _this3.$store.state.data.user.username
                  }
                }).then(function (response) {
                  if (response.data.success == true) {
                    _this3.$store.commit("data/SET_COURSES", response.data.payload);

                    console.log(response.data.payload);
                  }
                });

              case 3:
                _this3.loading = false;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    new_course: function new_course() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading = true;
                _context4.next = 3;
                return axios.post("api/course", {
                  course_name: _this4.course_name
                }).then(function (response) {
                  if (response.data.success == true) {
                    _this4.$store.state.data.courses.push(response.data.payload);
                  }
                });

              case 3:
                _this4.loading = false;
                _this4.dialog = false;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Loading/Loading.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Loading/Loading.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=0bb449a4& */ "./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js& */ "./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loading/Loading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Manage/NewExample.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Manage/NewExample.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewExample.vue?vue&type=template&id=40166dd9& */ "./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9&");
/* harmony import */ var _NewExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewExample.vue?vue&type=script&lang=js& */ "./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Manage/NewExample.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation/Navigation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Navigation/Navigation.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=22b6f834& */ "./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_0bb449a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loading.vue?vue&type=template&id=0bb449a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4&");


/***/ }),

/***/ "./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewExample_vue_vue_type_template_id_40166dd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewExample.vue?vue&type=template&id=40166dd9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9&");


/***/ }),

/***/ "./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_22b6f834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=22b6f834& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Loading/Loading.vue?vue&type=template&id=0bb449a4& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "text-center" }, [
    this.loading
      ? _c(
          "div",
          [
            _c(
              "v-overlay",
              { attrs: { value: this.loading } },
              [
                _c("v-progress-circular", {
                  attrs: {
                    size: 50,
                    indeterminate: "",
                    color: this.color ? this.color : "primary"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Manage/NewExample.vue?vue&type=template&id=40166dd9& ***!
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
    "v-row",
    [
      _c("v-col", { attrs: { cols: "12" } }, [
        !this.$store.state.data.loading
          ? _c(
              "div",
              [
                _c(
                  "v-row",
                  { attrs: { justify: "center" } },
                  [
                    _c("h1", [_vm._v("New Mission")]),
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
                                  [_c("v-subheader", [_vm._v(" Title ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: "Title" },
                                      model: {
                                        value: _vm.title,
                                        callback: function($$v) {
                                          _vm.title = $$v
                                        },
                                        expression: "title"
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
                                  [_c("v-subheader", [_vm._v(" Question ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
                                  [
                                    _c("v-textarea", {
                                      attrs: { counter: "", label: "Question" },
                                      model: {
                                        value: _vm.question,
                                        callback: function($$v) {
                                          _vm.question = $$v
                                        },
                                        expression: "question"
                                      }
                                    }),
                                    _vm._v(" "),
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "file" },
                                        on: { change: _vm.onFileChange }
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
                                  [_c("v-subheader", [_vm._v(" Score ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        type: "number",
                                        onfocus: "this.select()",
                                        label: "Score"
                                      },
                                      model: {
                                        value: _vm.score,
                                        callback: function($$v) {
                                          _vm.score = $$v
                                        },
                                        expression: "score"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "4" } },
                                  [_c("v-subheader", [_vm._v(" Language ")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: "Language" },
                                      model: {
                                        value: _vm.language,
                                        callback: function($$v) {
                                          _vm.language = $$v
                                        },
                                        expression: "language"
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
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.formSubmit }
                      },
                      [_vm._v(" Save ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Navigation/Navigation.vue?vue&type=template&id=22b6f834& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("Loading", { attrs: { loading: this.loading } }),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        { attrs: { absolute: "", permanent: "", left: "" } },
        [
          _c(
            "v-list",
            { attrs: { dense: "", nav: "" } },
            [
              _c(
                "v-list-item-group",
                {
                  attrs: { mandatory: "" },
                  model: {
                    value: _vm.model,
                    callback: function($$v) {
                      _vm.model = $$v
                    },
                    expression: "model"
                  }
                },
                [
                  this.$store.state.data.user.role === "admin" ||
                  this.$store.state.data.user.role === "teacher"
                    ? _c(
                        "div",
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        persistent: "",
                                        "max-width": "600px"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          block: "",
                                                          dark: ""
                                                        }
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                    New Classroom\n                  "
                                                    )
                                                  ]
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        false,
                                        1716546992
                                      ),
                                      model: {
                                        value: _vm.dialog,
                                        callback: function($$v) {
                                          _vm.dialog = $$v
                                        },
                                        expression: "dialog"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        [
                                          _c("v-card-title", [
                                            _c(
                                              "span",
                                              { staticClass: "text-h5" },
                                              [_vm._v("New Classroom")]
                                            )
                                          ]),
                                          _vm._v(" "),
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
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12"
                                                          }
                                                        },
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              label:
                                                                "Room Name",
                                                              required: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.course_name,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.course_name = $$v
                                                              },
                                                              expression:
                                                                "course_name"
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
                                                  on: {
                                                    click: function($event) {
                                                      _vm.dialog = false
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Close\n                    "
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
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.new_course()
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      Save\n                    "
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
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", [
                    this.$store.state.data.user.role === "admin" ||
                    this.$store.state.data.user.role === "teacher"
                      ? _c(
                          "div",
                          _vm._l(this.$store.state.data.courses, function(
                            item
                          ) {
                            return _c(
                              "v-list-item",
                              {
                                key: item.id,
                                attrs: { link: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.onClick(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(_vm._s(item.course_name))
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          1
                        )
                      : _c(
                          "div",
                          _vm._l(
                            this.$store.state.data.courses.filter(function(e) {
                              return (
                                e.role === this$1.$store.state.data.user.role
                              )
                            }),
                            function(item) {
                              return _c(
                                "v-list-item",
                                {
                                  key: item.id,
                                  attrs: { link: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.onClick(item)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v(_vm._s(item.course_name))
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          ),
                          1
                        )
                  ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);