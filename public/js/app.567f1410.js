(function(t){function e(e){for(var n,i,c=e[0],u=e[1],o=e[2],p=0,f=[];p<c.length;p++)i=c[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"2ee6":function(t,e,r){},"393b":function(t,e,r){"use strict";var n=r("2ee6"),a=r.n(n);a.a},"45cc":function(t,e,r){"use strict";var n=r("d707"),a=r.n(n);a.a},5329:function(t,e,r){"use strict";var n=r("6bac"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("InvestPlan")},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.createPlanVisible?[t.first?r("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"第一次使用，请先创建第一个定投计划",type:"info",closable:!1}}):t._e(),r("el-form",{attrs:{"label-width":"90px"}},[r("el-form-item",{attrs:{label:"起投日期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),r("el-form-item",{attrs:{label:"每期投入额"}},[r("el-input",{model:{value:t.form.piece,callback:function(e){t.$set(t.form,"piece",e)},expression:"form.piece"}},[r("template",{slot:"prepend"},[t._v("￥")])],2)],1),r("el-form-item",{attrs:{label:"手续费"}},[r("el-input",{model:{value:t.form.rate,callback:function(e){t.$set(t.form,"rate",e)},expression:"form.rate"}},[r("template",{slot:"append"},[t._v("%")])],2)],1),r("el-form-item",[r("el-button",{on:{click:function(e){t.isChangePlanView=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.createPlan}},[t._v("创建计划")])],1)],1)]:r("div",{staticClass:"plan-container"},[r("el-card",{staticClass:"control-panel",attrs:{shadow:"none"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("当前计划")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.changePlan}},[t._v("修改计划")])],1),r("el-form",{attrs:{"label-width":"90px",size:"mini"}},[r("el-form-item",{attrs:{label:"起投日期"}},[t._v(t._s(t._f("day")(t.currentPlan.start)))]),r("el-form-item",{attrs:{label:"每期投入额"}},[t._v("￥"+t._s(t.currentPlan.piece))]),r("el-form-item",{attrs:{label:"手续费"}},[t._v(t._s(t.currentPlan.rate)+"%")])],1)],1),r("el-table",{staticClass:"plan-table",attrs:{data:t.tableData,border:"",stripe:""},on:{"cell-click":t.handleCellClick,"header-click":t.handleHeadClick}},[r("el-table-column",{attrs:{prop:"date",label:"日期",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._v(t._s(t._f("day")(r.date)))]}}])},[r("template",{slot:"header"},[r("TheadDatePicker",{ref:"startSetter",model:{value:t.start,callback:function(e){t.start=e},expression:"start"}},[t._v("日期")])],1)],2),r("el-table-column",{attrs:{prop:"target",label:"目标",width:"80"}}),r("el-table-column",{attrs:{prop:"assets",label:"当前资产",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("SwitchableInput",{attrs:{width:60},on:{change:function(e){return t.saveInvest(n)}},model:{value:n.assets,callback:function(e){t.$set(n,"assets",e)},expression:"row.assets"}})]}}])}),r("el-table-column",{attrs:{prop:"pay",label:"实购金额",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("SwitchableInput",{attrs:{width:60},on:{change:function(e){return t.saveInvest(n)}},model:{value:n.pay,callback:function(e){t.$set(n,"pay",e)},expression:"row.pay"}})]}}])})],1)],1)],2)},c=[],u=(r("3b2b"),r("a481"),r("e814")),o=r.n(u),l=r("bfb3"),p=r.n(l),f=(r("c5f6"),r("96cf"),r("cebc")),h=r("0a0d"),d=r.n(h),m=r("3b8d"),b=r("bc3a"),v=r.n(b),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"switchable-input",style:t.style},["input"===t.state?r("el-input",{ref:"input",attrs:{size:"mini"},on:{blur:function(e){return t.switchTo("text")},change:function(e){return t.$emit("change",t.text)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}):r("span",{staticClass:"text",on:{click:function(e){return t.switchTo("input")}}},[t._v(t._s(t.text))])],1)},x=[],w={props:{value:{type:[String,Number],default:""},width:{type:Number,default:-1}},data:function(){return{state:"text"}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},style:function(){return{width:-1===this.width?"auto":"".concat(this.width,"px")}}},methods:{switchTo:function(t){var e=this;this.state=t,"input"==this.state&&this.$nextTick(function(){e.$refs.input.focus()})}}},y=w,k=(r("393b"),r("2877")),_=Object(k["a"])(y,g,x,!1,null,null,null),P=_.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("span",{on:{click:function(e){return e.stopPropagation(),t.open(e)}}},[t._t("default")],2),r("el-date-picker",{ref:"datepicker",staticStyle:{width:"0",margin:"0",padding:"0",height:"0",position:"relative",left:"-25px"},attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},O=[],j={props:{value:{type:[String,Number],default:""}},data:function(){return{state:"text"}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{open:function(){this.$refs.datepicker.focus()}}},S=j,R=Object(k["a"])(S,$,O,!1,null,null,null),C=R.exports,I="http://localhost:8001/plans/";function D(t){return M.apply(this,arguments)}function M(){return M=Object(m["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("".concat(I,"getInitData"),e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),M.apply(this,arguments)}function E(t){return T.apply(this,arguments)}function T(){return T=Object(m["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("".concat(I,"createPlan"),e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),T.apply(this,arguments)}function V(t){return N.apply(this,arguments)}function N(){return N=Object(m["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("".concat(I,"saveInvest"),e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),N.apply(this,arguments)}var H={components:{SwitchableInput:P,TheadDatePicker:C},data:function(){return{start:"",first:!1,isChangePlanView:!1,form:{start:d()(),piece:400,rate:.15},currentPlan:{start:d()(),piece:400,rate:.15},tableData:[]}},computed:{createPlanVisible:function(){return this.first||this.isChangePlanView}},watch:{start:function(){this.getInitData()},createPlanVisible:{immediate:!0,handler:function(){this.first?this.form={start:d()(),piece:400,rate:.15}:this.isChangePlanView&&(this.form=Object(f["a"])({},this.currentPlan))}}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getInitData();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{handleHeadClick:function(t){"日期"===t.label&&this.$refs.startSetter.open()},handleCellClick:function(t,e,r){var n=r.querySelector(".text");n&&n.click()},saveInvest:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var r,n,a,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=Number(e.pay),!p()(r)){t.next=3;break}return t.abrupt("return",this.$message.error("实购金额必须是数字"));case 3:if(n=Number(e.assets),!p()(n)){t.next=6;break}return t.abrupt("return",this.$message.error("当前资产必须是数字"));case 6:if(a=864e5,!(o()(e.date/a)>o()(d()()/a))){t.next=11;break}return e.assets="",e.pay="",t.abrupt("return",this.$message.error("不能编辑超过今天的数据"));case 11:return t.next=13,V(Object(f["a"])({},e,{pay:r,assets:n}));case 13:s=t.sent,i=s.code,0!==i?this.$message.error("出错了: "+i):""!==e.pay&&""!==e.assets&&this.$message.success("编辑成功");case 16:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createPlan:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.form.start){t.next=2;break}return t.abrupt("return",this.$message.error("必须填写起投日期"));case 2:if(e=Number(this.form.piece),!(p()(e)||e<=0)){t.next=5;break}return t.abrupt("return",this.$message.error("每期投入额必须是大于0的整数"));case 5:if(r=Number(this.form.rate),!(p()(r)||r<0)){t.next=8;break}return t.abrupt("return",this.$message.error("手续费必须是不小于0的数字"));case 8:return n={start:this.form.start,piece:e,rate:r,createTime:d()()},t.next=11,E(n);case 11:if(a=t.sent,s=a.code,0===s){t.next=17;break}this.$message.error("出错了: "+s),t.next=23;break;case 17:return t.next=19,this.getInitData();case 19:this.currentPlan=n,this.first=!1,this.isChangePlanView=!1,this.$message.success("创建计划成功");case 23:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changePlan:function(){this.isChangePlanView=!0},getInitData:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D({start:this.start});case 2:e=t.sent,e.plan?(this.first=!1,this.currentPlan=e.plan,this.tableData=e.history):this.first=!0;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},filters:{day:function(t){return new Date(t).format("yyyy-MM-dd")}}};Date.prototype.format=function(t){var e=["","0","00","000","0000"],r={"Y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(this.getFullYear()).substr(4-RegExp.$1.length))),r)new RegExp("(".concat(n,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[n]:(e[RegExp.$1.length]+r[n]).substr("".concat(r[n]).length)));return t};var Y=H,q=(r("5329"),r("45cc"),Object(k["a"])(Y,i,c,!1,null,"7e1a6590",null)),z=q.exports,F={name:"app",components:{InvestPlan:z}},J=F,A=(r("034f"),Object(k["a"])(J,a,s,!1,null,null,null)),B=A.exports,G=r("5c96"),K=r.n(G);r("0fae");n["default"].use(K.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,e,r){},"6bac":function(t,e,r){},d707:function(t,e,r){}});
//# sourceMappingURL=app.567f1410.js.map