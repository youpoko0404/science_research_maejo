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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      valid: false,
      editedIndex: -1,
      dialog: {
        dialog_part_2: false,
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
        part_2: [],
        part_10: []
      },
      part_2: {
        part_2_name: "",
        part_2_structure: "",
        part_2_branch: "",
        part_2_position: "",
        part_2_responsibility: ""
      },
      part_10: {
        part_10_type: "",
        part_10_source: "",
        part_10_level: "",
        part_10_year: "",
        part_10_start_date: "",
        part_10_end_date: "",
        part_10_amount: "",
        part_10_description: "",
        part_10_send: ""
      },
      rules: {
        required: [function (val) {
          return (val || '').length > 0 || 'This field is required';
        }]
      },
      dateNow_date_1: "",
      datePicker_date1: false,
      dateNow_date_2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      datePicker_date2: false,
      headers_part_10: [{
        text: 'Calories',
        value: 'part_10_type'
      }, {
        text: 'Fat (g)',
        value: 'part_10_source'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
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
    this.fetchParameter(["branch_group", "funding_type_group", "funding_level_group", "institutional_budget_group"]);
  },
  watch: {
    dateNow_date_1: function dateNow_date_1() {
      this.part_10.part_10_start_date = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_1);
    },
    dateNow_date_2: function dateNow_date_2() {
      this.part_10.part_10_end_date = _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].formatDate(this.dateNow_date_2);
    }
  },
  methods: {
    fetchParameter: function fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },
    onClickPart_2: function onClickPart_2() {
      var part_2 = {
        part_2_name: this.part_2.part_2_name,
        part_2_structure: this.part_2.part_2_structure,
        part_2_branch: this.part_2.part_2_branch,
        part_2_position: this.part_2.part_2_position,
        part_2_responsibility: this.part_2.part_2_responsibility
      };

      if (this.editedIndex > -1) {
        Object.assign(this.request.part_2[this.editedIndex], this.part_2);
      } else {
        this.request.part_2.push(part_2);
      }

      this.$refs.form_part_2.reset();
    },
    ManageItemPart_2: function ManageItemPart_2(item, action) {
      this.editedIndex = this.request.part_2.indexOf(item);
      this.part_2 = Object.assign({}, item);

      if (action == 'delete') {
        this.request.part_2.splice(this.editedIndex, 1);
      }
    },
    onClickPart_10: function onClickPart_10() {
      var part_10 = {
        part_10_type: this.part_10.part_10_type,
        part_10_source: this.part_10.part_10_source,
        part_10_level: this.part_10.part_10_level,
        part_10_year: this.part_10.part_10_year,
        part_10_start_date: _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(this.part_10.part_10_start_date),
        part_10_end_date: _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].parseDate(this.part_10.part_10_end_date),
        part_10_amount: this.part_10.part_10_amount,
        part_10_description: this.part_10.part_10_description,
        part_10_send: this.part_10.part_10_send
      };
      console.log(part_10);

      if (this.editedIndex > -1) {
        Object.assign(this.request.part_10[this.editedIndex], this.part_10);
      } else {
        this.request.part_10.push(part_10);
      } // this.$refs.form_part_10.reset()

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
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale('th').add(543, 'year').format('วันที่ DD เดือน MMMM พศ. YYYY');
  },
  formatDateEN: function formatDateEN(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale('en').format('DD MMMM YYYY');
  },
  formatDate: function formatDate(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(543, 'year').format('DD/MM/YYYY');
  },
  parseDate: function parseDate(date) {
    if (!date) return null;

    var _date$split = date.split('/'),
        _date$split2 = _slicedToArray(_date$split, 3),
        month = _date$split2[0],
        day = _date$split2[1],
        year = _date$split2[2];

    return "".concat(year - 543, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
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
                      _vm.request.part_2.length > 0
                        ? [
                            _c(
                              "v-btn",
                              {
                                staticClass: "pa-2 error mr-2",
                                on: {
                                  click: function ($event) {
                                    _vm.request.part_2 = []
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
                              _vm.dialog.dialog_part_2 = true
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
                      _vm.request.part_2.length > 0
                        ? [
                            _c(
                              "div",
                              { staticClass: "pa-4 grey lighten-2 rounded-lg" },
                              _vm._l(_vm.request.part_2, function (part_2) {
                                return _c(
                                  "div",
                                  { key: part_2.id },
                                  [
                                    _c(
                                      "v-row",
                                      [
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
                                                    _vm.ManageItemPart_2(
                                                      part_2,
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
                                                    _vm.ManageItemPart_2(
                                                      part_2,
                                                      null
                                                    )
                                                    _vm.dialog.dialog_part_2 = true
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
                                                  (part_2.part_2_name ||
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
                                                  (part_2.part_2_structure ||
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
                                                  (part_2.part_2_branch ||
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
                                                  (part_2.part_2_position ||
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
                                                  (part_2.part_2_responsibility ||
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
                                    _c(
                                      "v-row",
                                      [
                                        _c("v-data-table", {
                                          attrs: {
                                            headers: _vm.headers_part_10,
                                            items: _vm.request.part_10,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
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
                value: _vm.dialog.dialog_part_2,
                callback: function ($$v) {
                  _vm.$set(_vm.dialog, "dialog_part_2", $$v)
                },
                expression: "dialog.dialog_part_2",
              },
            },
            [
              _c(
                "v-form",
                { ref: "form_part_2" },
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
                                      value: _vm.part_2.part_2_name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.part_2, "part_2_name", $$v)
                                      },
                                      expression: "part_2.part_2_name",
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
                                      value: _vm.part_2.part_2_structure,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_2,
                                          "part_2_structure",
                                          $$v
                                        )
                                      },
                                      expression: "part_2.part_2_structure",
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
                                      value: _vm.part_2.part_2_branch,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_2,
                                          "part_2_branch",
                                          $$v
                                        )
                                      },
                                      expression: "part_2.part_2_branch",
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
                                      value: _vm.part_2.part_2_position,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_2,
                                          "part_2_position",
                                          $$v
                                        )
                                      },
                                      expression: "part_2.part_2_position",
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
                                      value: _vm.part_2.part_2_responsibility,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_2,
                                          "part_2_responsibility",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "part_2.part_2_responsibility",
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
                                  this$1.$refs.form_part_2.reset()
                                  _vm.dialog.dialog_part_2 =
                                    !_vm.dialog.dialog_part_2
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
                                  this$1.$refs.form_part_2.validate()
                                  if (this$1.$refs.form_part_2.validate()) {
                                    _vm.onClickPart_2()
                                    _vm.dialog.dialog_part_2 =
                                      !_vm.dialog.dialog_part_2
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.parameter.funding_type_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ประเภททุนสนับสนุน",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_type,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_type",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_type",
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
                                      items:
                                        _vm.parameter[_vm.part_10.part_10_type],
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "แหล่งทุนสนับสนุน",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_source,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_source",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_source",
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
                                      items: _vm.parameter.funding_level_group,
                                      "item-text": "value_ref",
                                      "item-value": "value",
                                      rules: _vm.rules.required,
                                      label: "ระดับแหล่งทุน",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_level,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_level",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_level",
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
                                      type: "number",
                                      label: "ปีการศึกษา",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_year,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_year",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_year",
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
                                                        label: "Date",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.part_10
                                                            .part_10_start_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.part_10,
                                                            "part_10_start_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "part_10.part_10_start_date",
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
                                                        label: "Date2",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.part_10
                                                            .part_10_end_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.part_10,
                                                            "part_10_end_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "part_10.part_10_end_date",
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
                                      type: "number",
                                      label: "จำนวนเงินที่สนับสนุน",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_amount,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_amount",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_amount",
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
                                      label: "คำอธิบายเพิ่มเติม",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_description,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_description",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_description",
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
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "วันที่ส่งมอบงานวิจัย",
                                      rules: _vm.rules.required,
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.part_10.part_10_send,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.part_10,
                                          "part_10_send",
                                          $$v
                                        )
                                      },
                                      expression: "part_10.part_10_send",
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
                                    _vm.onClickPart_10()
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