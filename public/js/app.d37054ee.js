(function(t){function e(e){for(var r,i,u=e[0],c=e[1],o=e[2],p=0,f=[];p<u.length;p++)i=u[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0115":function(t,e,n){"use strict";var r=n("203b"),a=n.n(r);a.a},"024e":function(t,e,n){"use strict";var r=n("6f8e"),a=n.n(r);a.a},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"203b":function(t,e,n){},"212b":function(t,e,n){"use strict";var r=n("f746"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("76a0"),s=n.n(a),i=(n("aa35"),n("8c4f"));n("3b2b"),n("a481");Date.prototype.format=function(t){var e=["","0","00","000","0000"],n={"Y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(this.getFullYear()).substr(4-RegExp.$1.length))),n)new RegExp("(".concat(r,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:(e[RegExp.$1.length]+n[r]).substr("".concat(n[r]).length)));return t},r["default"].filter("day",function(t){return new Date(t).format("MM-dd")});var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home"},[n("PlanTable"),n("InfoBoard")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plan-table"},[t._m(0),n("table",{staticClass:"tbody"},[n("tbody",t._l(t.list,function(e,r){return n("tr",{key:r},[n("td",{staticClass:"date"},[t._v(t._s(t._f("day")(e.date)))]),n("td",{staticClass:"target"},[t._v(t._s(e.target))]),n("td",{staticClass:"assets link"},[n("ClickableInput",{attrs:{placeholder:"录入"},on:{change:function(n){return t.setInvest(e)}},model:{value:e.assets,callback:function(n){t.$set(e,"assets",n)},expression:"item.assets"}})],1),n("td",{staticClass:"pay link"},[n("ClickableInput",{attrs:{placeholder:"买入"},on:{change:function(n){return t.setInvest(e)}},model:{value:e.pay,callback:function(n){t.$set(e,"pay",n)},expression:"item.pay"}})],1),n("td",{staticClass:"sh1"},[t._v(t._s(e.sh1||"-"))])])}),0)])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"thead"},[n("thead",[n("tr",[n("th",{staticClass:"date"},[t._v("日期")]),n("th",{staticClass:"target"},[t._v("目标")]),n("th",{staticClass:"assets"},[t._v("当前资产")]),n("th",{staticClass:"pay"},[t._v("实购金额")]),n("th",{staticClass:"sh1"},[t._v("上指")])])])])}],p=(n("96cf"),n("3b8d")),f=n("bc3a"),h=n.n(f),d="/plans/";function m(t){return b.apply(this,arguments)}function b(){return b=Object(p["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(d,"saveInvest"),e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),b.apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return g=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(d,"listInvest"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),g.apply(this,arguments)}function x(){return y.apply(this,arguments)}function y(){return y=Object(p["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(d,"getPlan"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function w(t){return _.apply(this,arguments)}function _(){return _=Object(p["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat(d,"setPlan"),e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)})),_.apply(this,arguments)}var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"switchable-input"},["input"===t.state?n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"input",attrs:{type:"number"},domProps:{value:t.text},on:{blur:function(e){return t.switchTo("text")},change:function(e){return t.$emit("change",t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}}):n("span",{on:{click:function(e){return t.switchTo("input")}}},[t.showPlaceholder?n("span",{staticClass:"link"},[t._v(t._s(t.placeholder))]):n("span",{staticClass:"number"},[t._v(t._s(t.text))])])])},$=[],O=(n("c5f6"),{props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:"输入"}},data:function(){return{state:"text"}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},showPlaceholder:function(){return"text"===this.state&&!this.value}},methods:{switchTo:function(t){var e=this;this.state=t,"input"==this.state&&this.$nextTick(function(){e.$refs.input.focus()})}}}),j=O,C=(n("0115"),n("2877")),R=Object(C["a"])(j,k,$,!1,null,"1e53bea0",null),P=R.exports,I={components:{ClickableInput:P},data:function(){return{loading:!1,list:[]}},mounted:function(){this.getInitData()},methods:{getInitData:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:e=t.sent,n=e.code,r=e.data,0===n&&r&&(this.list=r);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setInvest:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:n=t.sent,r=n.code,0===r&&this.$toast({message:"设置成功"});case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},M=I,E=(n("212b"),Object(C["a"])(M,o,l,!1,null,"5e9126e2",null)),S=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.plan?n("div",[n("mt-cell",{attrs:{title:"起投日期",value:t._f("day")(t.plan.start)}}),n("mt-cell",{attrs:{title:"每期投入额",value:t.plan.piece}}),n("mt-cell",{attrs:{title:"手续费",value:t.plan.rate}})],1):t._e(),n("div",{staticClass:"btn-row"},[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.setPlan}},[t._v("修改计划")])],1)])},D=[],H=n("cebc"),N=n("2f62"),B={computed:Object(H["a"])({},Object(N["c"])(["plan"])),methods:Object(H["a"])({},Object(N["b"])(["getPlan"]),{setPlan:function(){this.$router.push("/settings")}}),mounted:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getPlan();case 2:e=t.sent,e||this.$router.push({path:"/settings"});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},Y=B,z=(n("d783"),Object(C["a"])(Y,T,D,!1,null,"601a7f74",null)),F=z.exports,J={components:{PlanTable:S,InfoBoard:F}},q=J,A=Object(C["a"])(q,u,c,!1,null,null,null),G=A.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-settings"},[n("mt-header",{staticClass:"page-header",attrs:{title:"设置计划"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goHome},slot:"left"}),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),n("div",{staticClass:"page-body"},[n("div",{staticClass:"page-part"},[n("mt-field",{attrs:{label:"起投日期",placeholder:"起投日期",type:"date"},model:{value:t.plan.start,callback:function(e){t.$set(t.plan,"start",e)},expression:"plan.start"}}),n("mt-field",{attrs:{label:"每期投入额",placeholder:"每期投入额",type:"number"},model:{value:t.plan.piece,callback:function(e){t.$set(t.plan,"piece",e)},expression:"plan.piece"}}),n("mt-field",{attrs:{label:"手续费",placeholder:"手续费",type:"number"},model:{value:t.plan.rate,callback:function(e){t.$set(t.plan,"rate",e)},expression:"plan.rate"}})],1),n("div",{staticClass:"page-part btn-row"},[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.save}},[t._v("保存")])],1)])],1)},L=[],Q=n("0a0d"),U=n.n(Q),V=n("bfb3"),W=n.n(V),X=(n("6b54"),n("06db"),{data:function(){return{plan:{start:"",piece:"",rate:""}}},mounted:function(){var t=this;this.getPlan().then(function(e){e?t.plan=Object(H["a"])({},e,{start:new Date(e.start).format("yyyy-MM-dd")}):console.log("第一次使用")}).catch(function(e){t.$toast({message:"请求出错:"+e.toString()})})},methods:Object(H["a"])({},Object(N["b"])(["getPlan","setPlan"]),{goHome:function(){this.$router.push("/")},save:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=new Date(this.plan.start).getTime(),!W()(e)){t.next=3;break}return t.abrupt("return",this.$toast("必须填写起投日期"));case 3:if(n=Number(this.plan.piece),!(W()(n)||n<=0)){t.next=6;break}return t.abrupt("return",this.$toast("每期投入额必须是大于0的整数"));case 6:if(console.log(this.plan.rate),r=Number(this.plan.rate),!(W()(r)||r<=0)){t.next=10;break}return t.abrupt("return",this.$toast("手续费必须是大于0的数字"));case 10:return a={start:e,piece:n,rate:r,createTime:U()()},this.$indicator.open(),t.next=14,this.setPlan(a);case 14:s=t.sent,i=s.code,this.$indicator.close(),0!==i?this.$toast("出错了: "+i):(this.$toast({message:"创建计划成功"}),this.goHome());case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})}),Z=X,tt=(n("024e"),Object(C["a"])(Z,K,L,!1,null,"041535b2",null)),et=tt.exports,nt=new i["a"]({routes:[{path:"/",component:G},{path:"/settings",component:et,props:!0}]});r["default"].use(N["a"]);var rt=new N["a"].Store({state:{plan:null},getters:{getRoleIndexById:function(t){return function(e){for(var n=0;n<t.roles.length;n++)if(t.roles[n]._id===e)return n;return-1}}},mutations:{setPlan:function(t,e){t.plan=e}},actions:{getPlan:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,r=n.data,e.commit("setPlan",r),t.abrupt("return",r);case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),setPlan:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",w(n));case 1:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()}}),at=rt,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},it=[],ut={name:"app",methods:{handleClick:function(){this.$toast("Hello world!")}}},ct=ut,ot=(n("034f"),Object(C["a"])(ct,st,it,!1,null,null,null)),lt=ot.exports;r["default"].config.productionTip=!1,r["default"].use(i["a"]),r["default"].use(s.a),new r["default"]({store:at,router:nt,render:function(t){return t(lt)}}).$mount("#app")},"64a9":function(t,e,n){},"6f8e":function(t,e,n){},b1da:function(t,e,n){},d783:function(t,e,n){"use strict";var r=n("b1da"),a=n.n(r);a.a},f746:function(t,e,n){}});
//# sourceMappingURL=app.d37054ee.js.map