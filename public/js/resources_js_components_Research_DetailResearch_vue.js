(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Research_DetailResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Research/DetailResearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utili/dayJs */ "./resources/js/components/Utili/dayJs.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Loading/Loading */ "./resources/js/Components/Loading/Loading.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _request;

    return {
      valid: false,
      editedIndex: -1,
      dialog: {
        dialogDelete: false,
        research_seconds: false,
        research_fundings: false,
        research_presentations: false,
        research_publications: false,
        research_benefits: false
      },
      request: (_request = {
        title_name_th: "",
        abstract_name_th: "",
        keyword_name_th: "",
        title_name_en: "",
        abstract_name_en: "",
        keyword_name_en: "",
        ref_code_nr: "",
        ref_code_university: "",
        research_period_start: "",
        research_period_end: "",
        research_model: "",
        research_type: "",
        research_branch: "",
        research_activities: "",
        road_map: "",
        research_status: "",
        research_project_type: "",
        research_nature: "",
        research_main_name: "",
        research_main_group: "",
        research_main_branch: "",
        research_main_position: "",
        research_main_responsible: "",
        research_consultant: "",
        research_operation: "",
        research_objective: "",
        research_benefit: "",
        research_achievements: "",
        research_area: "",
        research_other: "",
        research_papers_path: null,
        research_reference_path: null,
        research_benefits: [],
        research_fundings: [],
        research_presentations: [],
        research_publications: []
      }, _defineProperty(_request, "research_publications", []), _defineProperty(_request, "research_seconds", []), _defineProperty(_request, "research_reference", ""), _request),
      research_seconds: {
        research_second_name: "",
        research_second_group: "",
        research_second_branch: "",
        research_second_position: "",
        research_second_responsible: ""
      },
      research_fundings: {
        type: "",
        other_type: "",
        source_capital: "",
        capital_level: "",
        year: "",
        date1: "",
        date2: "",
        amount: 0,
        description: "",
        delivery_date: ""
      },
      research_presentations: {
        research_presentation_date: "",
        presentation_style: "",
        academic_work: "",
        academic_name: "",
        place_presentation: "",
        presentation_level: "",
        organization_name: ""
      },
      research_publications: {
        reference: "",
        presentation_level: "",
        title_th: "",
        title_en: "",
        publication_date: "",
        no: "",
        page_number: "",
        printing_website: ""
      },
      research_benefits: {
        date_reference: "",
        research_name_reference: "",
        research_name: "",
        url: "",
        reference: ""
      },
      research_reference: {},
      rules: {
        required: [function (val) {
          return !!val || "โปรดกรอกข้อมูลให้ครบถ้วน";
        }],
        requiredDateTime: [function (v) {
          return !!v || "โปรดกรอกข้อมูลให้ครบถ้วน";
        }, function (v) {
          return /^\d{2}\/\d{2}\/\d{4}$/.test(v) || "ข้อมูลไม่ถูกต้อง";
        }],
        requiredNumber: [function (v) {
          return !!v || "โปรดกรอกข้อมูลให้ครบถ้วน";
        }, function (v) {
          return v <= 100 || "โปรดหรอกข้อมูลไม่เกิน 100%";
        }]
      },
      headers_research_fundings: [{
        text: "",
        value: "count"
      }, {
        text: "ประมาณทุนสนับสนุน",
        value: "title"
      }, {
        text: "ปีงบประมาณ",
        value: "year"
      }, {
        text: "จำนวนเงิน/บาท",
        value: "price"
      }, {
        text: "จัดการ",
        value: "actions"
      }],
      headers_research_owner: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "รายชื่อนักวิจัย",
        value: "research_name",
        width: "300px",
        align: "left"
      }, {
        text: "ตำแหน่งนักวิจัย",
        value: "position"
      }, {
        text: "สัดส่วน (%)",
        value: "percent"
      }, {
        text: "จัดการ",
        value: "actions"
      }],
      dateNow_date_1: "",
      datePicker_date1: false,
      dateNow_date_2: "",
      datePicker_date2: false,
      dateNow_date_3: "",
      datePicker_date3: false,
      dateNow_date_4: "",
      datePicker_date4: false,
      dateNow_date_5: "",
      datePicker_date5: false,
      dateNow_date_6: "",
      datePicker_date6: false,
      dateNow_date_7: "",
      datePicker_date7: false,
      dateNow_date_8: "",
      datePicker_date8: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    loading: function loading(state) {
      return state.parameter.loading;
    },
    parameter: function parameter(state) {
      return state.parameter;
    },
    user: function user(state) {
      return state.auth.user;
    },
    loadingUser: function loadingUser(state) {
      return state.auth.loading;
    },
    loadingResearch: function loadingResearch(state) {
      return state.research.loading;
    }
  })), {}, {
    research_id: function research_id() {
      return this.$route.query.id;
    }
  }),
  watch: {
    dateNow_date_1: function dateNow_date_1() {
      this.research_fundings.date1 = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_1);
    },
    dateNow_date_2: function dateNow_date_2() {
      this.research_fundings.date2 = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_2);
    },
    dateNow_date_3: function dateNow_date_3() {
      this.research_fundings.delivery_date = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_3);
    },
    dateNow_date_4: function dateNow_date_4() {
      this.research_presentations.research_presentation_date = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_4);
    },
    dateNow_date_5: function dateNow_date_5() {
      this.research_publications.publication_date = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_5);
    },
    dateNow_date_6: function dateNow_date_6() {
      this.research_benefits.date_reference = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_6);
    },
    dateNow_date_7: function dateNow_date_7() {
      this.request.research_period_start = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_7);
    },
    dateNow_date_8: function dateNow_date_8() {
      this.request.research_period_end = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_8);
    }
  },
  created: function created() {
    this.fetchParameter(["branch_group", "research_other_group", "branch_main_group", "funding_type_group", "external_institution_budget_group", "institutional_budget_group", "personal_budget_group", "funding_level_group", "presentations_type_group", "presentations_academic_type_group", "presentation_level_group"]);
    this.fetchResearchById(this.$route.query.id);
  },
  methods: {
    formatDate: function formatDate(date) {
      return _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(date);
    },
    fetchParameter: function fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
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
    fetchResearchById: function fetchResearchById(id) {
      var _this = this;

      if (id != 0) {
        this.$store.dispatch("research/fetchById", id).then(function (response) {
          if (response.success) {
            for (var _i = 0, _Object$entries = Object.entries(response.payload); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (value) {
                if (key == "research_reference_path" || key == "research_papers_path") {
                  _this.request[key] = new File([""], value);
                } else {
                  _this.request[key] = value;
                }
              }
            }
          }
        });
      }
    },
    deleteItemConfirm: function deleteItemConfirm(id) {
      if (id) {
        this.$store.dispatch("research/delete", id).then(function (response) {
          if (response.success) window.location.href = "/my-research";
        });
      }
    },
    onClickResearchSecond: function onClickResearchSecond() {
      var research_seconds = {};

      for (var _i2 = 0, _Object$entries2 = Object.entries(this.research_seconds); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        research_seconds[key] = value;
      }

      if (this.editedIndex > -1) {
        Object.assign(this.request.research_seconds[this.editedIndex], this.research_seconds);
      } else {
        this.request.research_seconds.push(research_seconds);
      }

      this.$refs.research_seconds.reset();
    },
    onClickManageResearchSecond: function onClickManageResearchSecond(item, action) {
      if (action == "delete") {
        this.editedIndex = this.request.research_seconds.indexOf(item);
        this.request.research_seconds.splice(this.editedIndex, 1);
      } else {
        this.editedIndex = this.request.research_seconds.indexOf(item);
        this.research_seconds = Object.assign({}, item);
      }
    },
    onClickResearchFundings: function onClickResearchFundings() {
      var research_fundings = {};

      for (var _i3 = 0, _Object$entries3 = Object.entries(this.research_fundings); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];

        if (key == "date1" || key == "date2" || key == "delivery_date") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(value);
          research_fundings[key] = value;
        } else {
          research_fundings[key] = value;
        }
      }

      if (this.editedIndex > -1) {
        Object.assign(this.request.research_fundings[this.editedIndex], this.research_fundings);
      } else {
        this.request.research_fundings.push(research_fundings);
      }

      this.$refs.research_fundings.reset();
    },
    onClickManageResearchFunding: function onClickManageResearchFunding(item, action) {
      if (action == "delete") {
        this.editedIndex = this.request.research_fundings.indexOf(item); // this.research_fundings = Object.assign({}, item);

        this.request.research_fundings.splice(this.editedIndex, 1);
      } else {
        for (var _i4 = 0, _Object$entries4 = Object.entries(item); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
              key = _Object$entries4$_i[0],
              value = _Object$entries4$_i[1];

          if (key == "date1" || key == "date2" || key == "delivery_date") {
            value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(value);
            item[key] = value;
          } else {
            item[key] = value;
          }
        }

        this.editedIndex = this.request.research_fundings.indexOf(item);
        this.research_fundings = Object.assign({}, item);
      }
    },
    onClickResearchPresentations: function onClickResearchPresentations() {
      var research_presentations = {};

      for (var _i5 = 0, _Object$entries5 = Object.entries(this.research_presentations); _i5 < _Object$entries5.length; _i5++) {
        var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i5], 2),
            key = _Object$entries5$_i[0],
            value = _Object$entries5$_i[1];

        if (key == "research_presentation_date") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(value);
          research_presentations[key] = value;
        } else {
          research_presentations[key] = value;
        }
      }

      if (this.editedIndex > -1) {
        Object.assign(this.request.research_presentations[this.editedIndex], this.research_presentations);
      } else {
        this.request.research_presentations.push(research_presentations);
      }

      this.$refs.research_presentations.reset();
    },
    onClickManageResearchPresentations: function onClickManageResearchPresentations(item, action) {
      for (var _i6 = 0, _Object$entries6 = Object.entries(item); _i6 < _Object$entries6.length; _i6++) {
        var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i6], 2),
            key = _Object$entries6$_i[0],
            value = _Object$entries6$_i[1];

        if (key == "research_presentation_date") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }

      this.editedIndex = this.request.research_presentations.indexOf(item);
      this.research_presentations = Object.assign({}, item);

      if (action == "delete") {
        this.request.research_presentations.splice(this.editedIndex, 1);
      }
    },
    onClickResearchPublications: function onClickResearchPublications() {
      var research_publications = {};

      for (var _i7 = 0, _Object$entries7 = Object.entries(this.research_publications); _i7 < _Object$entries7.length; _i7++) {
        var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i7], 2),
            key = _Object$entries7$_i[0],
            value = _Object$entries7$_i[1];

        if (key == "publication_date") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(value);
          research_publications[key] = value;
        } else {
          research_publications[key] = value;
        }
      }

      if (this.editedIndex > -1) {
        Object.assign(this.request.research_publications[this.editedIndex], this.research_publications);
      } else {
        this.request.research_publications.push(research_publications);
      }

      this.$refs.research_publications.reset();
    },
    onClickManageResearchPublications: function onClickManageResearchPublications(item, action) {
      for (var _i8 = 0, _Object$entries8 = Object.entries(item); _i8 < _Object$entries8.length; _i8++) {
        var _Object$entries8$_i = _slicedToArray(_Object$entries8[_i8], 2),
            key = _Object$entries8$_i[0],
            value = _Object$entries8$_i[1];

        if (key == "publication_date") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }

      this.editedIndex = this.request.research_publications.indexOf(item);
      this.research_publications = Object.assign({}, item);

      if (action == "delete") {
        this.request.research_publications.splice(this.editedIndex, 1);
      }
    },
    onClickResearchBenefits: function onClickResearchBenefits() {
      var research_benefits = {};

      for (var _i9 = 0, _Object$entries9 = Object.entries(this.research_benefits); _i9 < _Object$entries9.length; _i9++) {
        var _Object$entries9$_i = _slicedToArray(_Object$entries9[_i9], 2),
            key = _Object$entries9$_i[0],
            value = _Object$entries9$_i[1];

        if (key == "date_reference") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(value);
          research_benefits[key] = value;
        } else {
          research_benefits[key] = value;
        }
      }

      if (this.editedIndex > -1) {
        Object.assign(this.request.research_benefits[this.editedIndex], this.research_benefits);
      } else {
        this.request.research_benefits.push(research_benefits);
      }

      this.$refs.research_benefits.reset();
    },
    onClickManageResearchBenefits: function onClickManageResearchBenefits(item, action) {
      for (var _i10 = 0, _Object$entries10 = Object.entries(item); _i10 < _Object$entries10.length; _i10++) {
        var _Object$entries10$_i = _slicedToArray(_Object$entries10[_i10], 2),
            key = _Object$entries10$_i[0],
            value = _Object$entries10$_i[1];

        if (key == "date_reference") {
          value = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }

      this.editedIndex = this.request.research_benefits.indexOf(item);
      this.research_benefits = Object.assign({}, item);

      if (action == "delete") {
        this.request.research_benefits.splice(this.editedIndex, 1);
      }
    },
    onClickSave: function onClickSave() {
      var formData = new FormData();

      for (var _i11 = 0, _Object$entries11 = Object.entries(this.request); _i11 < _Object$entries11.length; _i11++) {
        var _Object$entries11$_i = _slicedToArray(_Object$entries11[_i11], 2),
            key = _Object$entries11$_i[0],
            value = _Object$entries11$_i[1];

        if (key == "research_benefits" || key == "research_fundings" || key == "research_presentations" || key == "research_publications" || key == "research_seconds") {
          if (value) formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }

      if (this.$route.query.id == 0) {
        this.$store.dispatch("research/save", formData).then(function (response) {
          if (response.success) {
            window.location.href = "/detail-research?id=".concat(response.payload);
          }
        });
      } else {
        this.$store.dispatch("research/update", {
          id: this.$route.query.id,
          research: formData
        }).then(function (response) {
          if (response.success) {
            window.location.href = "/detail-research?id=".concat(response.payload);
          }
        });
      }
    },
    downloadFile: function downloadFile(item) {
      var req = {
        id: item.id,
        filename: item.part_11.name
      };
      this.$store.dispatch("research/downloadFile", req).then(function (response) {
        var blob = new Blob([response], {
          type: "application/pdf"
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.target = "_blank";
        link.click();
      });
    },
    filter: function filter(evt) {
      evt = evt ? evt : window.event;
      var expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Utili/dayJs.js":
/*!************************************************!*\
  !*** ./resources/js/components/Utili/dayJs.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_th__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/th */ "./node_modules/dayjs/locale/th.js");
/* harmony import */ var dayjs_locale_th__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_th__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var dayJs = {
  formatDateTH: function formatDateTH(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale("th").add(543, "year").format("DD MMMM YYYY");
  },
  formatDateEN: function formatDateEN(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale("en").format("DD MMMM YYYY");
  },
  formatDate: function formatDate(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("DD/MM/YYYY");
  },
  parseDate: function parseDate(date) {
    if (!date) return null;

    var _date$split = date.split("/"),
        _date$split2 = _slicedToArray(_date$split, 3),
        month = _date$split2[0],
        day = _date$split2[1],
        year = _date$split2[2];

    return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
  },
  toFormatDateShortTH: function toFormatDateShortTH(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(543, "year").format("DD/MM/YYYY");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayJs);

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/locale/th.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/th.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(_,e){ true?module.exports=e(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):0}(this,(function(_){"use strict";function e(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}var t=e(_),d={name:"th",weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"},ordinal:function(_){return _+"."}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ "./resources/js/components/Research/DetailResearch.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Research/DetailResearch.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
      _c("Loading", {
        attrs: {
          loading: _vm.loading || _vm.loadingUser || _vm.loadingResearch,
        },
      }),
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
                          _c("div", { staticStyle: { "font-size": "30px" } }, [
                            _vm._v("สร้างงานวิจัย"),
                          ]),
                        ]),
                      ]
                    : [
                        _c("v-col", [
                          _c("div", { staticStyle: { "font-size": "30px" } }, [
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
                                      {
                                        attrs: { color: "error", dark: "" },
                                        on: {
                                          click: function ($event) {
                                            _vm.dialog.dialogDelete = true
                                          },
                                        },
                                      },
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
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("div", { staticStyle: { "font-size": "20px" } }, [
                            _vm._v("ส่วนที่ 1 ข้อมูลทั่วไปภาษาไทย"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("หัวข้อ : "),
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
                                      label: "หัวข้อ",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.title_name_th,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "title_name_th",
                                          $$v
                                        )
                                      },
                                      expression: "request.title_name_th",
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
                                    _vm._v("บทคัดย่อ : "),
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
                                      label: "บทคัดย่อ",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.abstract_name_th,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "abstract_name_th",
                                          $$v
                                        )
                                      },
                                      expression: "request.abstract_name_th",
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
                                    _vm._v("คำสำคัญ : "),
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
                                      label: "คำสำคัญ1, คำสำคัญ2, คำสำคัญ3",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.keyword_name_th,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "keyword_name_th",
                                          $$v
                                        )
                                      },
                                      expression: "request.keyword_name_th",
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
                        "v-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("div", { staticStyle: { "font-size": "20px" } }, [
                            _vm._v(
                              "\n              ส่วนที่ 1 ข้อมูลทั่วไปภาษาอังกฤษ\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "auto" } },
                                [
                                  _c("v-subheader", { staticClass: "mt-2" }, [
                                    _vm._v("Title : "),
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
                                      label: "Title",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.title_name_en,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "title_name_en",
                                          $$v
                                        )
                                      },
                                      expression: "request.title_name_en",
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
                                    _vm._v("Abstract : "),
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
                                      label: "Abstract",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.abstract_name_en,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "abstract_name_en",
                                          $$v
                                        )
                                      },
                                      expression: "request.abstract_name_en",
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
                                    _vm._v("Keyword : "),
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
                                      label: "Keyword",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.request.keyword_name_en,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.request,
                                          "keyword_name_en",
                                          $$v
                                        )
                                      },
                                      expression: "request.keyword_name_en",
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
                            _vm._v("รหัสอ้างอิง วช. : "),
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
                              label: "รหัสอ้างอิง วช.",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.ref_code_nr,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "ref_code_nr", $$v)
                              },
                              expression: "request.ref_code_nr",
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
                            _vm._v("รหัสอ้างอิงมหาวิทยาลัย : "),
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
                              label: "รหัสอ้างอิงมหาวิทยาลัย",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.ref_code_university,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.request,
                                  "ref_code_university",
                                  $$v
                                )
                              },
                              expression: "request.ref_code_university",
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
                        { attrs: { cols: "3" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                transition: "scale-transition",
                                "offset-y": "",
                                "max-width": "290px",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                color: "green darken-3",
                                                "prepend-icon": "mdi-calendar",
                                                placeholder:
                                                  "วันที่เริ่มการวิจัย",
                                                rules:
                                                  _vm.rules.requiredDateTime,
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.request
                                                    .research_period_start,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.request,
                                                    "research_period_start",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "request.research_period_start",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.datePicker_date7,
                                callback: function ($$v) {
                                  _vm.datePicker_date7 = $$v
                                },
                                expression: "datePicker_date7",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { "no-title": "" },
                                on: {
                                  input: function ($event) {
                                    _vm.datePicker_date7 = false
                                  },
                                },
                                model: {
                                  value: _vm.dateNow_date_7,
                                  callback: function ($$v) {
                                    _vm.dateNow_date_7 = $$v
                                  },
                                  expression: "dateNow_date_7",
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
                        "v-col",
                        { attrs: { cols: "3" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                transition: "scale-transition",
                                "offset-y": "",
                                "max-width": "290px",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                color: "green darken-3",
                                                "prepend-icon": "mdi-calendar",
                                                placeholder:
                                                  "วันสิ้นสุดการวิจัย",
                                                rules:
                                                  _vm.rules.requiredDateTime,
                                                required: "",
                                              },
                                              model: {
                                                value:
                                                  _vm.request
                                                    .research_period_end,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.request,
                                                    "research_period_end",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "request.research_period_end",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.datePicker_date8,
                                callback: function ($$v) {
                                  _vm.datePicker_date8 = $$v
                                },
                                expression: "datePicker_date8",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { "no-title": "" },
                                on: {
                                  input: function ($event) {
                                    _vm.datePicker_date8 = false
                                  },
                                },
                                model: {
                                  value: _vm.dateNow_date_8,
                                  callback: function ($$v) {
                                    _vm.dateNow_date_8 = $$v
                                  },
                                  expression: "dateNow_date_8",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "รูปแบบงานวิจัย",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_model,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "research_model", $$v)
                              },
                              expression: "request.research_model",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "ประเภทงานวิจัย",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_type,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "research_type", $$v)
                              },
                              expression: "request.research_type",
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
                              color: "green darken-3",
                              "item-text": "value_ref",
                              "item-value": "value",
                              label: "สาขางานวิจัย",
                              disabled: _vm.request.branch_main_group == "",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_branch,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "research_branch", $$v)
                              },
                              expression: "request.research_branch",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "กิจกรรมที่เกี่ยวข้อง",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_activities,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.request,
                                  "research_activities",
                                  $$v
                                )
                              },
                              expression: "request.research_activities",
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Road map",
                              color: "green darken-3",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.road_map,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "road_map", $$v)
                              },
                              expression: "request.road_map",
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
                              items: [
                                { text: "กำลังดำเนินการ" },
                                { text: "ดำเนินการเสร็จสมบูรณ์แล้ว" },
                              ],
                              color: "green darken-3",
                              "item-text": "text",
                              "item-value": "text",
                              label: "สถานะงานวิจัย",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_status,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "research_status", $$v)
                              },
                              expression: "request.research_status",
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
                              items: [
                                { text: "โครงการเดี่ยว" },
                                { text: "ชุดโครงการ" },
                              ],
                              color: "green darken-3",
                              "item-text": "text",
                              "item-value": "text",
                              label: "ประเภทโครงการวิจัย",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_project_type,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.request,
                                  "research_project_type",
                                  $$v
                                )
                              },
                              expression: "request.research_project_type",
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
                              items: [
                                { text: "โครงการใหม่" },
                                { text: "โครงการต่อเนื่อง" },
                              ],
                              color: "green darken-3",
                              "item-text": "text",
                              "item-value": "text",
                              label: "ลักษณะโครงการวิจัย",
                              rules: _vm.rules.required,
                              required: "",
                            },
                            model: {
                              value: _vm.request.research_nature,
                              callback: function ($$v) {
                                _vm.$set(_vm.request, "research_nature", $$v)
                              },
                              expression: "request.research_nature",
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
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "pa-4 grey lighten-5 rounded-lg" }, [
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "h3 pa-2 mr-auto",
                      staticStyle: { "font-size": "30px" },
                    },
                    [_vm._v("\n            ส่วนที่ 2 นักวิจัย\n          ")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-col",
                      [
                        _c("div", { staticStyle: { "font-size": "20px" } }, [
                          _vm._v("ผู้วิจัยหลัก"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "auto" } },
                              [
                                _c("v-subheader", { staticClass: "mt-2" }, [
                                  _vm._v("ชื่อผู้วิจัย : "),
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
                                    label: "ชื่อผู้วิจัย",
                                    color: "green darken-3",
                                    rules: _vm.rules.required,
                                    required: "",
                                  },
                                  model: {
                                    value: _vm.request.research_main_name,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_main_name",
                                        $$v
                                      )
                                    },
                                    expression: "request.research_main_name",
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
                                  _vm._v("คณะ : "),
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
                                    label: "คณะ",
                                    color: "green darken-3",
                                    rules: _vm.rules.required,
                                    required: "",
                                  },
                                  model: {
                                    value: _vm.request.research_main_group,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_main_group",
                                        $$v
                                      )
                                    },
                                    expression: "request.research_main_group",
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
                                    color: "green darken-3",
                                    rules: _vm.rules.required,
                                    required: "",
                                  },
                                  model: {
                                    value: _vm.request.research_main_branch,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_main_branch",
                                        $$v
                                      )
                                    },
                                    expression: "request.research_main_branch",
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
                                    color: "green darken-3",
                                    rules: _vm.rules.required,
                                    required: "",
                                  },
                                  model: {
                                    value: _vm.request.research_main_position,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_main_position",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "request.research_main_position",
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
                                    color: "green darken-3",
                                    rules: _vm.rules.requiredNumber,
                                    required: "",
                                    type: "number",
                                  },
                                  on: {
                                    keypress: function ($event) {
                                      return _vm.filter(_vm.event)
                                    },
                                  },
                                  model: {
                                    value:
                                      _vm.request.research_main_responsible,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.request,
                                        "research_main_responsible",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "request.research_main_responsible",
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
                      "v-col",
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex mb-6",
                            attrs: {
                              color: "grey lighten-2",
                              flat: "",
                              tile: "",
                            },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "h3 pa-2 mr-auto",
                                staticStyle: { "font-size": "20px" },
                              },
                              [
                                _vm._v(
                                  "\n                ผู้วิจัยรอง\n              "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.request.research_seconds.length > 0
                              ? [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "pa-2 error mr-2",
                                      on: {
                                        click: function ($event) {
                                          _vm.request.research_seconds = []
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  ล้างค่า\n                "
                                      ),
                                    ]
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
                                    _vm.dialog.research_seconds = true
                                  },
                                },
                              },
                              [_vm._v("\n                เพิ่มผู้วิจัยรอง")]
                            ),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.request.research_seconds.length > 0
                          ? [
                              _c("v-data-table", {
                                attrs: {
                                  headers: _vm.headers_research_owner,
                                  items: _vm.request.research_seconds,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item.count",
                                      fn: function (ref) {
                                        var index = ref.index
                                        return [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(index + 1) +
                                              "\n                "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.research_name",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(item.research_second_name)
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\n                  คณะ " +
                                              _vm._s(
                                                item.research_second_group
                                              ) +
                                              " "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                  สาขา " +
                                              _vm._s(
                                                item.research_second_branch
                                              ) +
                                              " "
                                          ),
                                          _c("br"),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.position",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                item.research_second_position
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.percent",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                item.research_second_responsible +
                                                  "%"
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.actions",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 error mr-2",
                                              on: {
                                                click: function () {
                                                  _vm.onClickManageResearchSecond(
                                                    item,
                                                    "delete"
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v("\n                    ลบ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 primary",
                                              on: {
                                                click: function () {
                                                  _vm.onClickManageResearchSecond(
                                                    item,
                                                    null
                                                  )
                                                  _vm.dialog.research_seconds = true
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                    แก้ไข"
                                              ),
                                            ]
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              }),
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
                                    "\n                -- ไม่ระบุ --\n              "
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
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pa-4 grey lighten-5 rounded-lg" },
                [
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 pa-2 mr-auto",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 3 ที่ปรึกษางานวิจัย\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-select", {
                        attrs: {
                          items: [{ text: "ภายใน" }, { text: "ภายนอก" }],
                          color: "green darken-3",
                          "item-text": "text",
                          "item-value": "text",
                          label: "ที่ปรึกษางานวิจัย",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_consultant,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_consultant", $$v)
                          },
                          expression: "request.research_consultant",
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 ml-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 4 แนวทางการดำเนินงานวิจัย\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "แนวทางการดำเนินงานวิจัย",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_operation,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_operation", $$v)
                          },
                          expression: "request.research_operation",
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 ml-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 5 วัตถุประสงค์งานวิจัย\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "วัตถุประสงค์งานวิจัย",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_objective,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_objective", $$v)
                          },
                          expression: "request.research_objective",
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 ml-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "ประโยชน์ที่คาดว่าจะได้รับ",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_benefit,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_benefit", $$v)
                          },
                          expression: "request.research_benefit",
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 ml-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "ผลสำเร็จที่คาดว่าจะได้รับ",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_achievements,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_achievements", $$v)
                          },
                          expression: "request.research_achievements",
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 pa-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "พื้นที่ดำเนินงานวิจัย",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_area,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_area", $$v)
                          },
                          expression: "request.research_area",
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
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง\n          "
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.parameter.research_other_group,
                          color: "green darken-3",
                          "item-text": "value_ref",
                          "item-value": "value",
                          label: "งานวิจัยอื่น ๆ ที่เกี่ยวข้อง",
                          rules: _vm.rules.required,
                          required: "",
                        },
                        model: {
                          value: _vm.request.research_other,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_other", $$v)
                          },
                          expression: "request.research_other",
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
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.request.research_fundings.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.research_fundings = []
                                  },
                                },
                              },
                              [_vm._v("\n              ล้างค่า\n            ")]
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
                              _vm.dialog.research_fundings = true
                            },
                          },
                        },
                        [_vm._v("\n            เพิ่มแหล่งทุนสนับสนุน")]
                      ),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.research_fundings.length > 0
                        ? [
                            _c(
                              "v-data-table",
                              {
                                attrs: {
                                  headers: _vm.headers_research_fundings,
                                  items: _vm.request.research_fundings,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item.count",
                                      fn: function (ref) {
                                        var index = ref.index
                                        return [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(index + 1) +
                                              "\n              "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.title",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.fetchParameterByGroupKey(
                                                  _vm.parameter,
                                                  "funding_type_group",
                                                  item.type
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.fetchParameterByGroupKey(
                                                  _vm.parameter,
                                                  item.type,
                                                  item.source_capital
                                                )
                                              ) +
                                              "\n                "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.fetchParameterByGroupKey(
                                                  _vm.parameter,
                                                  "funding_level_group",
                                                  item.capital_level
                                                )
                                              ) +
                                              "\n              "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.year",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(item.year) +
                                              " "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.formatDate(item.date1)
                                              ) +
                                              " -\n                " +
                                              _vm._s(
                                                _vm.formatDate(item.date2)
                                              ) +
                                              "\n              "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.price",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(item.amount) +
                                              "\n              "
                                          ),
                                        ]
                                      },
                                    },
                                    {
                                      key: "item.actions",
                                      fn: function (ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 error mr-2",
                                              on: {
                                                click: function () {
                                                  _vm.onClickManageResearchFunding(
                                                    item,
                                                    "delete"
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v("\n                  ลบ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-2 primary",
                                              on: {
                                                click: function () {
                                                  _vm.onClickManageResearchFunding(
                                                    item,
                                                    null
                                                  )
                                                  _vm.dialog.research_fundings = true
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                  แก้ไข"
                                              ),
                                            ]
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  true
                                ),
                              },
                              [
                                _vm._v(" "),
                                _vm._v(" "),
                                _vm._v(" "),
                                _vm._v(" "),
                                _vm._v(" "),
                                _c("template", { slot: "body.append" }, [
                                  _c("tr", [
                                    _c("th"),
                                    _vm._v(" "),
                                    _c("th"),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("รวมทั้งหมดเป็น")]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            _vm.request.research_fundings.reduce(
                                              function (t, n) {
                                                return t + Number(n.amount)
                                              },
                                              0
                                            )
                                          ) +
                                          "\n                  "
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ],
                              2
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
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 11 เอกสารประกอบงานวิจัย\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              return _vm.$refs.research_papers_path.$refs.input.click()
                            },
                          },
                        },
                        [_vm._v("\n            เพิ่มเอกสารประกอบ\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-file-input", {
                        ref: "research_papers_path",
                        attrs: {
                          color: "green darken-3",
                          accept: "application/pdf",
                          label: "เอกสารประกอบงานวิจัย",
                        },
                        model: {
                          value: _vm.request.research_papers_path,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_papers_path", $$v)
                          },
                          expression: "request.research_papers_path",
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
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 12 การนำเสนองานวิจัย\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.request.research_presentations.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.research_presentations = []
                                  },
                                },
                              },
                              [_vm._v("\n              ล้างค่า\n            ")]
                            ),
                          ]
                        : [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 primary",
                                on: {
                                  click: function () {
                                    _vm.editedIndex = -1
                                    _vm.dialog.research_presentations = true
                                  },
                                },
                              },
                              [_vm._v("\n              เพิ่มข้อมูล")]
                            ),
                          ],
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.research_presentations.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(
                                _vm.request.research_presentations,
                                function (research_presentations) {
                                  return _c(
                                    "div",
                                    { key: research_presentations.id },
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
                                                  staticClass: "pa-2 primary",
                                                  on: {
                                                    click: function () {
                                                      _vm.onClickManageResearchPresentations(
                                                        research_presentations,
                                                        null
                                                      )
                                                      _vm.dialog.research_presentations = true
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      แก้ไข"
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "วันที่นำเสนองานวิจัย : " +
                                                    (_vm.formatDate(
                                                      research_presentations.research_presentation_date
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "รูปแบบการนำเสนอ : " +
                                                    (_vm.fetchParameterByGroupKey(
                                                      _vm.parameter,
                                                      "presentations_type_group",
                                                      research_presentations.presentation_style
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ประเภทงานวิชาการ : " +
                                                    (_vm.fetchParameterByGroupKey(
                                                      _vm.parameter,
                                                      "presentations_academic_type_group",
                                                      research_presentations.academic_work
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อวิชาการ : " +
                                                    (research_presentations.academic_name ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "สถานที่นำเสนอ : " +
                                                    (research_presentations.place_presentation ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ระดับการนำเสนอ : " +
                                                    (_vm.fetchParameterByGroupKey(
                                                      _vm.parameter,
                                                      "presentation_level_group",
                                                      research_presentations.presentation_level
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อหน่วยงานที่่จัด : " +
                                                    (research_presentations.organization_name ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
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
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.request.research_publications.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.research_publications = []
                                  },
                                },
                              },
                              [_vm._v("\n              ล้างค่า\n            ")]
                            ),
                          ]
                        : [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 primary",
                                on: {
                                  click: function () {
                                    _vm.editedIndex = -1
                                    _vm.dialog.research_publications = true
                                  },
                                },
                              },
                              [_vm._v("\n              เพิ่มข้อมูล")]
                            ),
                          ],
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.research_publications.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(
                                _vm.request.research_publications,
                                function (research_publications) {
                                  return _c(
                                    "div",
                                    { key: research_publications.id },
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
                                                  staticClass: "pa-2 primary",
                                                  on: {
                                                    click: function () {
                                                      _vm.onClickManageResearchPublications(
                                                        research_publications,
                                                        null
                                                      )
                                                      _vm.dialog.research_publications = true
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      แก้ไข"
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : " +
                                                    (research_publications.reference ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ระดับการนำเสนอ : " +
                                                    (_vm.fetchParameterByGroupKey(
                                                      _vm.parameter,
                                                      "presentation_level_group",
                                                      research_publications.presentation_level
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อบทความภาษาไทย/อังกฤษ : " +
                                                    (research_publications.title_th ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อบทความภาษาอังกฤษ : " +
                                                    (research_publications.title_en ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "วัน เดือน ปี ที่ตีพิมพ์ : " +
                                                    (_vm.formatDate(
                                                      research_publications.publication_date
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ฉบับที่ : " +
                                                    (research_publications.no ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "เลขหน้า : " +
                                                    (research_publications.page_number ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "โรงพิมพ์/เว็บไซต์ : " +
                                                    (research_publications.printing_website ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
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
                    {
                      staticClass: "d-flex mb-6",
                      attrs: { color: "grey lighten-2", flat: "", tile: "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.request.research_benefits.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.research_benefits = []
                                  },
                                },
                              },
                              [_vm._v("\n              ล้างค่า\n            ")]
                            ),
                          ]
                        : [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 primary",
                                on: {
                                  click: function () {
                                    _vm.editedIndex = -1
                                    _vm.dialog.research_benefits = true
                                  },
                                },
                              },
                              [_vm._v("\n              เพิ่มข้อมูล")]
                            ),
                          ],
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _vm.request.research_benefits.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(
                                _vm.request.research_benefits,
                                function (research_benefits) {
                                  return _c(
                                    "div",
                                    { key: research_benefits.id },
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
                                                  staticClass: "pa-2 primary",
                                                  on: {
                                                    click: function () {
                                                      _vm.onClickManageResearchBenefits(
                                                        research_benefits,
                                                        null
                                                      )
                                                      _vm.dialog.research_benefits = true
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      แก้ไข"
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "วันที่ถูกอ้างอิง : " +
                                                    (_vm.formatDate(
                                                      research_benefits.date_reference
                                                    ) || "-- ไม่ระบุ --")
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อผู้วิจัยที่นำไปอ้างอิง : " +
                                                    (research_benefits.research_name_reference ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "ชื่อภาษาไทย/Research Name : " +
                                                    (research_benefits.research_name ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "URL เชื่อมโยง : " +
                                                    (research_benefits.url ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
                                                ) +
                                                "\n                  "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-subheader", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  "การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : " +
                                                    (research_benefits.reference ||
                                                      "-- ไม่ระบุ --") +
                                                    " \n                      "
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
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "h3 ml-4",
                        staticStyle: { "font-size": "30px" },
                      },
                      [
                        _vm._v(
                          "\n            ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง\n          "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-textarea", {
                        attrs: {
                          color: "green darken-3",
                          label: "การนำงานวิจัยไปใช้อ้างอิง",
                        },
                        model: {
                          value: _vm.request.research_reference,
                          callback: function ($$v) {
                            _vm.$set(_vm.request, "research_reference", $$v)
                          },
                          expression: "request.research_reference",
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
                      _c(
                        "div",
                        {
                          staticClass: "h3 pa-2 mr-auto",
                          staticStyle: { "font-size": "30px" },
                        },
                        [
                          _vm._v(
                            "\n            แนบไฟล์เอกสารอ้างอิง\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              return _vm.$refs.research_reference_path.$refs.input.click()
                            },
                          },
                        },
                        [_vm._v("\n            เพิ่มเอกสารประกอบ\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-file-input", {
                        ref: "research_reference_path",
                        attrs: {
                          color: "green darken-3",
                          accept: "application/pdf",
                          label: "เอกสารอ้างอิง",
                        },
                        model: {
                          value: _vm.request.research_reference_path,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.request,
                              "research_reference_path",
                              $$v
                            )
                          },
                          expression: "request.research_reference_path",
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
                                _vm.onClickSave()
                              } else {
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
                value: _vm.dialog.research_fundings,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "research_fundings", $$v)
                },
                expression: "dialog.research_fundings",
              },
            },
            [
              _c(
                "v-form",
                { ref: "research_fundings" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [
                          _vm._v(
                            "\n            แบบฟอร์มจัดการงบประมาณ\n          "
                          ),
                        ]
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items: _vm.parameter.funding_type_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ประเภททุนสนับสนุน",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_fundings.type,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_fundings,
                                          "type",
                                          $$v
                                        )
                                      },
                                      expression: "research_fundings.type",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _vm.research_fundings.type == "other"
                                    ? [
                                        _c("v-text-field", {
                                          attrs: {
                                            color: "green darken-3",
                                            label: "อื่นๆ",
                                            rules: _vm.rules.required,
                                            required: "",
                                          },
                                          model: {
                                            value:
                                              _vm.research_fundings.other_type,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.research_fundings,
                                                "other_type",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "research_fundings.other_type",
                                          },
                                        }),
                                      ]
                                    : [
                                        _c("v-select", {
                                          attrs: {
                                            color: "green darken-3",
                                            items:
                                              _vm.parameter[
                                                _vm.research_fundings.type
                                              ],
                                            "item-text": "value_ref",
                                            "item-value": "value",
                                            rules: _vm.rules.required,
                                            label: "แหล่งทุนสนับสนุน",
                                            required: "",
                                          },
                                          model: {
                                            value:
                                              _vm.research_fundings
                                                .source_capital,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.research_fundings,
                                                "source_capital",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "research_fundings.source_capital",
                                          },
                                        }),
                                      ],
                                ],
                                2
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items: _vm.parameter.funding_level_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ระดับแหล่งทุน",
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_fundings.capital_level,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_fundings,
                                          "capital_level",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_fundings.capital_level",
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
                                { attrs: { cols: "3" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      type: "number",
                                      label: "ปีการศึกษา",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_fundings.year,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_fundings,
                                          "year",
                                          $$v
                                        )
                                      },
                                      expression: "research_fundings.year",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.research_fundings
                                                            .date1,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_fundings,
                                                            "date1",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "research_fundings.date1",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date1,
                                        callback: function ($$v) {
                                          _vm.datePicker_date1 = $$v
                                        },
                                        expression: "datePicker_date1",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date1 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_1,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_1 = $$v
                                          },
                                          expression: "dateNow_date_1",
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
                                "v-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.research_fundings
                                                            .date2,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_fundings,
                                                            "date2",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "research_fundings.date2",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date2,
                                        callback: function ($$v) {
                                          _vm.datePicker_date2 = $$v
                                        },
                                        expression: "datePicker_date2",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date2 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_2,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_2 = $$v
                                          },
                                          expression: "dateNow_date_2",
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
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      type: "number",
                                      label: "จำนวนเงินที่สนับสนุน",
                                      onfocus: "this.select()",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_fundings.amount,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_fundings,
                                          "amount",
                                          $$v
                                        )
                                      },
                                      expression: "research_fundings.amount",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "7" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "คำอธิบายเพิ่มเติม",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_fundings.description,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_fundings,
                                          "description",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_fundings.description",
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
                                { attrs: { cols: "4" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        label:
                                                          "วันที่ส่งมอบงานวิจัย",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.research_fundings
                                                            .delivery_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_fundings,
                                                            "delivery_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "research_fundings.delivery_date",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date3,
                                        callback: function ($$v) {
                                          _vm.datePicker_date3 = $$v
                                        },
                                        expression: "datePicker_date3",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date3 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_3,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_3 = $$v
                                          },
                                          expression: "dateNow_date_3",
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
                                  this$1.$refs.research_fundings.reset()
                                  _vm.dialog.research_fundings =
                                    !_vm.dialog.research_fundings
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
                                  this$1.$refs.research_fundings.validate()
                                  if (
                                    this$1.$refs.research_fundings.validate()
                                  ) {
                                    _vm.onClickResearchFundings()
                                    _vm.dialog.research_fundings =
                                      !_vm.dialog.research_fundings
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
                value: _vm.dialog.research_presentations,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "research_presentations", $$v)
                },
                expression: "dialog.research_presentations",
              },
            },
            [
              _c(
                "v-form",
                { ref: "research_presentations" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [
                          _vm._v(
                            "\n            แบบฟอร์มการจัดการนำเสนองานวิจัย\n          "
                          ),
                        ]
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        label:
                                                          "วันที่นำเสนองานวิจัย",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm
                                                            .research_presentations
                                                            .research_presentation_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_presentations,
                                                            "research_presentation_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "\n                        research_presentations.research_presentation_date\n                      ",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date4,
                                        callback: function ($$v) {
                                          _vm.datePicker_date4 = $$v
                                        },
                                        expression: "datePicker_date4",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date4 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_4,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_4 = $$v
                                          },
                                          expression: "dateNow_date_4",
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
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items:
                                        _vm.parameter.presentations_type_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "รูปแบบการนำเสนอ",
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .presentation_style,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "presentation_style",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.presentation_style",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items:
                                        _vm.parameter
                                          .presentations_academic_type_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ประเภทงานวิชาการ",
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .academic_work,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "academic_work",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.academic_work",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อวิชาการ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .academic_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "academic_name",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.academic_name",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "สถานที่นำเสนอ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .place_presentation,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "place_presentation",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.place_presentation",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items:
                                        _vm.parameter.presentation_level_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ระดับการนำเสนอ",
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .presentation_level,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "presentation_level",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.presentation_level",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อหน่วยงานที่จัด",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_presentations
                                          .organization_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_presentations,
                                          "organization_name",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_presentations.organization_name",
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
                                  this$1.$refs.research_presentations.reset()
                                  _vm.dialog.research_presentations =
                                    !_vm.dialog.research_presentations
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
                                  this$1.$refs.research_presentations.validate()
                                  if (
                                    this$1.$refs.research_presentations.validate()
                                  ) {
                                    _vm.onClickResearchPresentations()
                                    _vm.dialog.research_presentations =
                                      !_vm.dialog.research_presentations
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
                value: _vm.dialog.research_publications,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "research_publications", $$v)
                },
                expression: "dialog.research_publications",
              },
            },
            [
              _c(
                "v-form",
                { ref: "research_publications" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [
                          _vm._v(
                            "\n            แบบฟอร์มการจัดการตีพิมพ์งานวิจัย\n          "
                          ),
                        ]
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label:
                                        "การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_publications.reference,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "reference",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.reference",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      color: "green darken-3",
                                      items:
                                        _vm.parameter.presentation_level_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ระดับการนำเสนอ",
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_publications
                                          .presentation_level,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "presentation_level",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.presentation_level",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อบทความภาษาไทย/อังกฤษ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_publications.title_th,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "title_th",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.title_th",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อบทความภาษาอังกฤษ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_publications.title_en,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "title_en",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.title_en",
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
                                { attrs: { cols: "4" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        label:
                                                          "วัน เดือน ปี ที่ตีพิมพ์",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm
                                                            .research_publications
                                                            .publication_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_publications,
                                                            "publication_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "research_publications.publication_date",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date5,
                                        callback: function ($$v) {
                                          _vm.datePicker_date5 = $$v
                                        },
                                        expression: "datePicker_date5",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date5 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_5,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_5 = $$v
                                          },
                                          expression: "dateNow_date_5",
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
                                "v-col",
                                { attrs: { cols: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ฉบับที่",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_publications.no,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "no",
                                          $$v
                                        )
                                      },
                                      expression: "research_publications.no",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "เลขหน้า",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_publications.page_number,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "page_number",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.page_number",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "โรงพิมพ์/เว็บไซต์",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_publications
                                          .printing_website,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_publications,
                                          "printing_website",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_publications.printing_website",
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
                                  this$1.$refs.research_publications.reset()
                                  _vm.dialog.research_publications =
                                    !_vm.dialog.research_publications
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
                                  this$1.$refs.research_publications.validate()
                                  if (
                                    this$1.$refs.research_publications.validate()
                                  ) {
                                    _vm.onClickResearchPublications()
                                    _vm.dialog.research_publications =
                                      !_vm.dialog.research_publications
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
                value: _vm.dialog.research_benefits,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "research_benefits", $$v)
                },
                expression: "dialog.research_benefits",
              },
            },
            [
              _c(
                "v-form",
                { ref: "research_benefits" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [
                          _vm._v(
                            "\n            แบบฟอร์มการจัดการข้อมูลการถูกอ้างอิงงานวิจัย\n          "
                          ),
                        ]
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
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        transition: "scale-transition",
                                        "offset-y": "",
                                        "max-width": "290px",
                                        "min-width": "auto",
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "green darken-3",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        label:
                                                          "วันที่ถูกอ้างอิง",
                                                        rules:
                                                          _vm.rules
                                                            .requiredDateTime,
                                                        required: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.research_benefits
                                                            .date_reference,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.research_benefits,
                                                            "date_reference",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "research_benefits.date_reference",
                                                      },
                                                    },
                                                    "v-text-field",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
                                              ),
                                            ]
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: _vm.datePicker_date6,
                                        callback: function ($$v) {
                                          _vm.datePicker_date6 = $$v
                                        },
                                        expression: "datePicker_date6",
                                      },
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-date-picker", {
                                        attrs: { "no-title": "" },
                                        on: {
                                          input: function ($event) {
                                            _vm.datePicker_date6 = false
                                          },
                                        },
                                        model: {
                                          value: _vm.dateNow_date_6,
                                          callback: function ($$v) {
                                            _vm.dateNow_date_6 = $$v
                                          },
                                          expression: "dateNow_date_6",
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
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อผู้วิจัยที่นำไปอ้างอิง",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_benefits
                                          .research_name_reference,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_benefits,
                                          "research_name_reference",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_benefits.research_name_reference",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "ชื่อภาษาไทย/Research Name",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_benefits.research_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_benefits,
                                          "research_name",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_benefits.research_name",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label: "URL เชื่อมโยง",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_benefits.url,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_benefits,
                                          "url",
                                          $$v
                                        )
                                      },
                                      expression: "research_benefits.url",
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
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "green darken-3",
                                      label:
                                        "การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.research_benefits.reference,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_benefits,
                                          "reference",
                                          $$v
                                        )
                                      },
                                      expression: "research_benefits.reference",
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
                                  this$1.$refs.research_benefits.reset()
                                  _vm.dialog.research_benefits =
                                    !_vm.dialog.research_benefits
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
                                  this$1.$refs.research_benefits.validate()
                                  if (
                                    this$1.$refs.research_benefits.validate()
                                  ) {
                                    _vm.onClickResearchBenefits()
                                    _vm.dialog.research_benefits =
                                      !_vm.dialog.research_benefits
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
                value: _vm.dialog.research_seconds,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "research_seconds", $$v)
                },
                expression: "dialog.research_seconds",
              },
            },
            [
              _c(
                "v-form",
                { ref: "research_seconds" },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "grey lighten-2 mb-2" },
                        [_vm._v("\n            เพิ่มผู้วิจัยรอง\n          ")]
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
                                    _vm._v("ชื่อผู้วิจัย : "),
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
                                      label: "ชื่อผู้วิจัย",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_seconds
                                          .research_second_name,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_seconds,
                                          "research_second_name",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_seconds.research_second_name",
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
                                    _vm._v("คณะ : "),
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
                                      label: "คณะ",
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_seconds
                                          .research_second_group,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_seconds,
                                          "research_second_group",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_seconds.research_second_group",
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
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_seconds
                                          .research_second_branch,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_seconds,
                                          "research_second_branch",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_seconds.research_second_branch",
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
                                      color: "green darken-3",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value:
                                        _vm.research_seconds
                                          .research_second_position,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_seconds,
                                          "research_second_position",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_seconds.research_second_position",
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
                                      color: "green darken-3",
                                      rules: _vm.rules.requiredNumber,
                                      required: "",
                                      type: "number",
                                    },
                                    on: {
                                      keypress: function ($event) {
                                        return _vm.filter(_vm.event)
                                      },
                                    },
                                    model: {
                                      value:
                                        _vm.research_seconds
                                          .research_second_responsible,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.research_seconds,
                                          "research_second_responsible",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "research_seconds.research_second_responsible",
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
                                  this$1.$refs.research_seconds.reset()
                                  _vm.dialog.research_seconds =
                                    !_vm.dialog.research_seconds
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
                                  this$1.$refs.research_seconds.validate()
                                  if (
                                    this$1.$refs.research_seconds.validate()
                                  ) {
                                    _vm.onClickResearchSecond()
                                    _vm.dialog.research_seconds =
                                      !_vm.dialog.research_seconds
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
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.dialog.dialogDelete,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "dialogDelete", $$v)
                },
                expression: "dialog.dialogDelete",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _vm._v("คุณยืนยันที่จะลบข้อมูลงานวิจัยนี้"),
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
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function ($event) {
                              _vm.dialog.dialogDelete = false
                            },
                          },
                        },
                        [_vm._v("ยกเลิก")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteItemConfirm(_vm.research_id)
                            },
                          },
                        },
                        [_vm._v("ตกลง")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
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
                  _c("v-card-text", [_vm._v(" กรุณากรอกข้อมูลให้ครบ ")]),
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
                        [_vm._v(" ตกลง ")]
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