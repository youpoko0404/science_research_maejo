(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_DetailResearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home/DetailResearch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  name: "DetailResearch",
  components: {
    Loading: _Components_Loading_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers_research_fundings: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "ปีงบประมาณ / วันที่",
        value: "year"
      }, {
        text: "รายละเอียดแหล่งทุน",
        value: "title"
      }, {
        text: "จำนวนเงิน/บาท",
        value: "price",
        align: "end"
      }],
      headers_research_publications: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "วันที่ดำเนินการ",
        value: "publication_date",
        align: "center",
        width: "300px"
      }, {
        text: "รายละเอียด",
        value: "description"
      } // {
      //   text: "น้ำหนักการตีพิมพ์",
      //   value: "wight",
      //   align: "center",
      // },
      ],
      headers_research_presentations: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "วันที่นำเสนองานวิจัย",
        value: "research_presentation_date",
        width: "300px",
        align: "center"
      }, {
        text: "รายละเอียด",
        value: "description"
      }],
      headers_research_benefits: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "วันที่ถูกอ้างอิง",
        value: "date_reference",
        width: "300px",
        align: "center"
      }, {
        text: "รายละเอียด",
        value: "description"
      }],
      headers_research_owner: [{
        text: "",
        value: "count",
        width: "10px"
      }, {
        text: "รายชื่อนักวิจัย",
        value: "research_name",
        align: "left"
      }, {
        text: "ตำแหน่งนักวิจัย",
        value: "position"
      }, {
        text: "สัดส่วน (%)",
        value: "percent"
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
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
    this.fetchParameter(["branch_group", "research_other_group", "branch_main_group", "funding_type_group", "external_institution_budget_group", "institutional_budget_group", "personal_budget_group", "funding_level_group", "presentations_type_group", "presentations_academic_type_group", "presentation_level_group"]);
    this.fetchSearchResearchById(this.$route.query.id);
  },
  methods: {
    fetchSearchResearchById: function fetchSearchResearchById(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id);
      }
    },
    toFormatDateShortTH: function toFormatDateShortTH(date) {
      return _Utili_dayJs__WEBPACK_IMPORTED_MODULE_0__["default"].toFormatDateShortTH(date);
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
    },
    toFixedNumber: function toFixedNumber(item) {
      if (item) return Number(item).toFixed(2);
    },
    research_owner_name: function research_owner_name(search_research_by_id) {
      if (search_research_by_id) {
        var arrayOwner = [];
        var main = {
          research_name: search_research_by_id.research_main_name,
          research_position: search_research_by_id.research_main_position,
          research_responsible: search_research_by_id.research_main_responsible,
          research_group: search_research_by_id.research_main_group,
          research_branch: search_research_by_id.research_main_branch,
          research_type: "ผู้วิจัยหลัก"
        };
        arrayOwner.push(main);
        search_research_by_id.research_seconds.forEach(function (element) {
          var second = {
            research_name: element.research_second_name,
            research_position: element.research_second_position,
            research_responsible: element.research_second_responsible,
            research_group: element.research_second_group,
            research_branch: element.research_second_branch,
            research_type: "ผู้วิจัยรอง"
          };
          arrayOwner.push(second);
        });
        return arrayOwner;
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
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale("th").add(543, "year").format("วันที่ DD เดือน MMMM พศ. YYYY");
  },
  formatDateEN: function formatDateEN(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).locale("en").format("DD MMMM YYYY");
  },
  formatDate: function formatDate(date) {
    if (!date) return null;
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MM/DD/YYYY");
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

/***/ "./resources/js/components/Home/DetailResearch.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Home/DetailResearch.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
                                    _vm.search_research_by_id
                                      .research_period_start +
                                      " ถึง " +
                                      _vm.search_research_by_id
                                        .research_period_end || "-- ไม่ระบุ --"
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
                                      _vm.search_research_by_id.research_branch
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
                            _c("v-data-table", {
                              attrs: {
                                headers: _vm.headers_research_owner,
                                items: _vm.research_owner_name(
                                  _vm.search_research_by_id
                                ),
                                "hide-default-footer": "",
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
                                    key: "item.research_name",
                                    fn: function (ref) {
                                      var item = ref.item
                                      return [
                                        _c("strong", [
                                          _vm._v(_vm._s(item.research_name)),
                                        ]),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(
                                          "\n                คณะ :" +
                                            _vm._s(item.research_group) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                สาขา :" +
                                            _vm._s(item.research_branch) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                ตำแหน่ง :" +
                                            _vm._s(item.research_position) +
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
                                          "\n                " +
                                            _vm._s(item.research_type) +
                                            "\n              "
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
                                          "\n                " +
                                            _vm._s(
                                              item.research_responsible + "%"
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
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
                            _vm.search_research_by_id.research_fundings.length >
                            0
                              ? [
                                  _c(
                                    "v-data-table",
                                    {
                                      attrs: {
                                        headers: _vm.headers_research_fundings,
                                        items:
                                          _vm.search_research_by_id
                                            .research_fundings,
                                        "hide-default-footer": "",
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
                                            key: "item.year",
                                            fn: function (ref) {
                                              var item = ref.item
                                              return [
                                                _vm._v(
                                                  "\n                  ปีงบประมาณ : " +
                                                    _vm._s(item.year) +
                                                    " "
                                                ),
                                                _c("br"),
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.toFormatDateShortTH(
                                                        item.date1
                                                      )
                                                    ) +
                                                    " ถึง\n                  " +
                                                    _vm._s(
                                                      _vm.toFormatDateShortTH(
                                                        item.date2
                                                      )
                                                    ) +
                                                    "\n                "
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
                                                  _vm._v("ประเภทแหล่งทุน :"),
                                                ]),
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.fetchParameterByGroupKey(
                                                        _vm.parameter,
                                                        "funding_type_group",
                                                        item.type
                                                      )
                                                    ) +
                                                    "\n                  "
                                                ),
                                                _c("br"),
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.fetchParameterByGroupKey(
                                                        _vm.parameter,
                                                        item.type,
                                                        item.source_capital
                                                      )
                                                    ) +
                                                    "\n                  "
                                                ),
                                                _c("br"),
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.fetchParameterByGroupKey(
                                                        _vm.parameter,
                                                        "funding_level_group",
                                                        item.capital_level
                                                      )
                                                    ) +
                                                    "\n                "
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
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.toFixedNumber(
                                                        item.amount
                                                      )
                                                    ) +
                                                    "\n                "
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
                                      _c("template", { slot: "body.append" }, [
                                        _c("tr", [
                                          _c("th"),
                                          _vm._v(" "),
                                          _c("th"),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("รวมจำนวนเงิน")]),
                                          _vm._v(" "),
                                          _c("th", [
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(
                                                  _vm.toFixedNumber(
                                                    _vm.search_research_by_id.research_fundings.reduce(
                                                      function (t, n) {
                                                        return (
                                                          t + Number(n.amount)
                                                        )
                                                      },
                                                      0
                                                    )
                                                  )
                                                ) +
                                                "\n                    "
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
                                        "\n                ไม่มีข้อมูลแหล่งทุนสนับสนุนงานวิจัย\n              "
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
                            _vm.search_research_by_id.research_presentations
                              .length > 0
                              ? [
                                  _c("v-data-table", {
                                    attrs: {
                                      headers:
                                        _vm.headers_research_presentations,
                                      items:
                                        _vm.search_research_by_id
                                          .research_presentations,
                                      "hide-default-footer": "",
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
                                          key: "item.research_presentation_date",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(
                                                    _vm.toFormatDateShortTH(
                                                      item.research_presentation_date
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "item.description",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _c(
                                                "v-row",
                                                [
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " รูปแบบการนำเสนอ : "
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.fetchParameterByGroupKey(
                                                          _vm.parameter,
                                                          "presentations_type_group",
                                                          item.presentation_style
                                                        )
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " ประเภทงานวิชาการ : "
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          _vm.fetchParameterByGroupKey(
                                                            _vm.parameter,
                                                            "presentations_academic_type_group",
                                                            item.academic_work
                                                          )
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(" ชื่อวิชาการ : "),
                                                    ]),
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          item.academic_name
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-row",
                                                [
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " สถานที่นำเสนอ : "
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        item.place_presentation
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " ระดับการนำเสนอ : "
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          _vm.fetchParameterByGroupKey(
                                                            _vm.parameter,
                                                            "presentation_level_group",
                                                            item.presentation_level
                                                          )
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " ชื่อหน่วยงานที่่จัด : "
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          item.organization_name
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("br"),
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
                                        "\n                ไม่มีข้อมูลการนำเสนองานวิจัย\n              "
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
                            _vm.search_research_by_id.research_publications
                              .length > 0
                              ? [
                                  _c("v-data-table", {
                                    attrs: {
                                      headers:
                                        _vm.headers_research_publications,
                                      items:
                                        _vm.search_research_by_id
                                          .research_publications,
                                      "hide-default-footer": "",
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
                                          key: "item.publication_date",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(
                                                    _vm.toFormatDateShortTH(
                                                      item.publication_date
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "item.description",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _c("strong", [
                                                _vm._v(
                                                  "\n                    " +
                                                    _vm._s(
                                                      _vm.search_research_by_id
                                                        .title_name_en
                                                    ) +
                                                    "\n                  "
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("strong", [
                                                _vm._v(" วารสารที่ตีพิมพ์ : "),
                                              ]),
                                              _vm._v(
                                                " " +
                                                  _vm._s(item.title_th) +
                                                  "\n                  "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "v-row",
                                                [
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(" ฉบับที่ : "),
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(item.no) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(" หน้า : "),
                                                    ]),
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          item.page_number
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-col", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        " ระดับการนำเสนอ :"
                                                      ),
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.fetchParameterByGroupKey(
                                                          _vm.parameter,
                                                          "presentation_level_group",
                                                          item.presentation_level
                                                        )
                                                      ) +
                                                        "\n                      "
                                                    ),
                                                    _c("br"),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("br"),
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
                                        "\n                ไม่มีข้อมูลการตีพิมพ์เผยแพร่งานวิจัย\n              "
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
                            _vm.search_research_by_id.research_benefits.length >
                            0
                              ? [
                                  _c("v-data-table", {
                                    attrs: {
                                      headers: _vm.headers_research_benefits,
                                      items:
                                        _vm.search_research_by_id
                                          .research_benefits,
                                      "hide-default-footer": "",
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
                                          key: "item.date_reference",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(
                                                    _vm.toFormatDateShortTH(
                                                      item.date_reference
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "item.description",
                                          fn: function (ref) {
                                            var item = ref.item
                                            return [
                                              _c("strong", [
                                                _vm._v(
                                                  " ชื่อผู้วิจัยที่นำไปอ้างอิง : "
                                                ),
                                              ]),
                                              _vm._v(
                                                _vm._s(
                                                  item.research_name_reference
                                                ) + "\n                  "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("strong", [
                                                _vm._v(
                                                  " ชื่อภาษาไทย/Research Name : "
                                                ),
                                              ]),
                                              _vm._v(
                                                _vm._s(item.research_name) +
                                                  "\n                  "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("strong", [
                                                _vm._v(" URL เชื่อมโยง : "),
                                              ]),
                                              _vm._v(
                                                _vm._s(item.url) +
                                                  "\n                  "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("strong", [
                                                _vm._v(
                                                  " การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : "
                                                ),
                                              ]),
                                              _vm._v(
                                                _vm._s(item.reference) +
                                                  "\n                  "
                                              ),
                                              _c("br"),
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
                                        "\n                ไม่มีข้อมูลการนำงานวิจัยไปใช้ประโยชน์\n              "
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