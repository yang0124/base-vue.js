(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{341:function(t,e,o){"use strict";o.d(e,"a",function(){return l});o(60),o(27),o(28),o(48),o(84),o(14);var n=o(17),r=o(18);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,o)}return e}var l={head:function(){return{title:(this.seo&&this.seo.title?this.seo.title+"_":"")+(this.title?this.title:"礼品代发|采购礼品|专业赠品代发|真实发货|非空包_礼品商城"),meta:[{hid:"keywords",name:"keywords",content:this.seo&&this.seo.keywords?this.seo.keywords:"礼品代发,礼品采购,赠品小礼品"},{hid:"description",name:"description",content:this.seo&&this.seo.description?this.seo.description:"专业礼品代发采购，赠送礼品，百万级采购"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(r.c)(["seo"])),data:function(){return{title:"礼品商城"}},asyncData:function(t){var e=t.$axios,o=t.store,n=(t.req,o.getters.logoInfo?o.getters.logoInfo:""),r=o.getters.seo?o.getters.seo:"",c=!(r.title||r.keywords||r.description),l="";l=n&&n.domainName?n.domainName:"",n&&n.substationId?c?f(e,o,n.substationId):o.dispatch("setSeo",r):n||d(e,o,l).then(function(t){f(e,o,t.substationId)})}},d=function(t,e,o){return new Promise(function(n,r){o&&t.post("/logo/getLogo",{domain:o}).then(function(t){"200"===t.data.code?(e.dispatch("setLogoInfo",t.data.data),n(t.data.data)):r(t)}).catch(function(t){t&&r(t)})})},f=function(t,e,o){t.post("/substation/account/getSubtationSetting",{substationId:o,type:"5"}).then(function(data){if("200"===data.data.code){var t=data.data.data.content,o=t?t.split("&&&"):[],n="";o&&o.length&&3===o.length&&(n={title:o[0],description:o[1],keywords:o[2]}),e.dispatch("setSeo",n)}}).catch(function(t){console.log(t)})}},356:function(t,e,o){var content=o(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("a751c552",content,!0,{sourceMap:!1})},382:function(t,e,o){"use strict";var n=o(356);o.n(n).a},383:function(t,e,o){(t.exports=o(25)(!1)).push([t.i,".loginBase[data-v-1ab0f5e6]{width:100%;height:100%;position:relative;background:#fcfcfc}.loginBase .contBox[data-v-1ab0f5e6]{position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;width:1000px;height:600px;background:#fff;box-shadow:0 2px 38px rgba(241,101,145,.05);display:flex}.loginBase .contBox .leftBox[data-v-1ab0f5e6]{flex:1;padding-left:35px;padding-top:40px}.loginBase .contBox .leftBox>h2[data-v-1ab0f5e6]{font-size:28px;line-height:40px;color:#333;font-weight:700;margin-bottom:10px;cursor:pointer}.loginBase .contBox .leftBox>h3[data-v-1ab0f5e6]{font-size:16px;line-height:20px;color:#333;margin-bottom:20px}.loginBase .contBox .leftBox .line[data-v-1ab0f5e6]{display:flex;margin-bottom:20px}.loginBase .contBox .leftBox .line span[data-v-1ab0f5e6]{width:56px;height:3px;border-radius:4px;background:#ddd;margin-right:6px;cursor:pointer}.loginBase .contBox .leftBox .line .active[data-v-1ab0f5e6]{background:#ff4d70}.loginBase .contBox .rightImg[data-v-1ab0f5e6]{width:444px}.loginBase .contBox .rightImg img[data-v-1ab0f5e6]{width:100%}",""])},391:function(t,e,o){"use strict";o(60),o(27),o(28),o(14),o(48);var n=o(17),r=o(18);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,o)}return e}var l={name:"loginBase",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(r.c)(["logoInfo"])),data:function(){return{loginArr:["login","reg"]}}},d=(o(382),o(13)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loginBase"},[o("div",{staticClass:"contBox"},[o("div",{staticClass:"leftBox"},[o("h2",{on:{click:function(e){return t.$utils.routerTo("index-homeIndex")}}},[t._v("欢迎来到"+t._s(t.logoInfo?t.logoInfo.substationName:"礼品商城"))]),t._v(" "),o("h3",[t._v("我们提供赠品采购、发货、一站式服务。")]),t._v(" "),o("div",{staticClass:"line"},t._l(t.loginArr,function(e,n){return o("span",{key:n,class:{active:e==t.$route.name||"forget"==t.$route.name&&0==n}})}),0),t._v(" "),t._t("box")],2),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rightImg"},[e("img",{attrs:{src:"http://106.14.154.124:8099/images/reg/登录_插图.png",alt:"png"}})])}],!1,null,"1ab0f5e6",null);e.a=component.exports},399:function(t,e,o){var content=o(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("10933d44",content,!0,{sourceMap:!1})},574:function(t,e,o){"use strict";var n=o(399);o.n(n).a},575:function(t,e,o){(t.exports=o(25)(!1)).push([t.i,".loginBox[data-v-8e75000e]{position:absolute;width:100%;height:100%;top:0;left:0}.loginBox .box[data-v-8e75000e]{width:410px}.loginBox .box .form[data-v-8e75000e]{border:1px solid #ddd;border-radius:10px}.loginBox .box .form li[data-v-8e75000e]{height:72px;box-sizing:border-box;padding:20px;display:flex;border-bottom:1px solid #ddd}.loginBox .box .form li[data-v-8e75000e]:last-child{border:none}.loginBox .box .form li span[data-v-8e75000e]{width:20px;margin-right:20px;vertical-align:middle}.loginBox .box .form li input[data-v-8e75000e]{flex:1;border:none;outline:none;-webkit-appearance:none;font-size:20px;background-color:transparent!important}.loginBox .box .form li .admin[data-v-8e75000e]{background:url(http://106.14.154.124:8099/images/mobile/%E4%B8%AA%E4%BA%BA.png) no-repeat;background-size:100%}.loginBox .box .form li .lock[data-v-8e75000e]{background:url(http://106.14.154.124:8099/images/mobile/%E5%AF%86%E7%A0%81.png) no-repeat;background-size:100%}.loginBox .box .operate[data-v-8e75000e]{display:flex;justify-content:space-between;font-size:20px;line-height:28px;color:#333;cursor:pointer;margin-bottom:60px;margin-top:10px}.loginBox .box .operate .forget[data-v-8e75000e],.loginBox .box .operate span[data-v-8e75000e]{font-size:14px;line-height:18px;color:#333}.loginBox .box .footer[data-v-8e75000e]{display:flex;align-items:center;justify-content:space-between}.loginBox .box .footer b[data-v-8e75000e]{width:150px;height:38px;line-height:38px;text-align:center;font-size:16px;letter-spacing:2px;border-radius:2px;cursor:pointer}.loginBox .box .footer .login[data-v-8e75000e]{background:#ff4d70;border:2px solid #ffa1b3;color:#fff}.loginBox .box .footer .toReg[data-v-8e75000e]{background:#fff;border:1px solid #ff97ab;box-shadow:0 0 10px rgba(208,17,38,.17);color:#ff4d70}.loginBox .box .toIndex[data-v-8e75000e]{margin-top:80px;width:100px;display:flex;cursor:pointer;align-items:center}.loginBox .box .toIndex i[data-v-8e75000e]{vertical-align:middle;background:url(http://106.14.154.124:8099/images/icon/%E9%A6%96%E9%A1%B5@2x.png) no-repeat;width:16px;height:16px;background-size:100% 100%}.loginBox .box .toIndex span[data-v-8e75000e]{font-size:15px;margin-left:4px;color:#666}",""])},882:function(t,e,o){"use strict";o.r(e);o(60),o(27),o(28),o(14),o(48),o(179),o(178);var n=o(17),r=o(391),c=o(18),l=o(341),d=o(122),f=o.n(d);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var m={name:"login",mixins:[l.a],components:{LoginBase:r.a},data:function(){return{title:"用户登录",userPhone:"",password:"",codePwd:!1}},computed:h({},Object(c.c)(["userInfo","seo"])),methods:h({goWhere:function(t){"overview"===t&&(this.$route.query.ii||this.$route.query.si||this.$route.query.show)?this.$router.push({name:"showReg",query:this.$route.query}):this.$router.push({name:t,query:this.$route.query})},setCookie:function(t,e){this.$utils.setStorage(t,e,"local")},getCookie:function(t){var e=RegExp(t+"=([^;]+)"),o=document.cookie.match(e);return o?o[1]:""},loginTest:function(){""===this.userPhone?this.$message({message:"请输入用户手机号",type:"warning"}):""===this.password?this.$message({message:"请输入密码",type:"warning"}):this.login()},login:function(){var t=this;this.$axios.post("/seller/account/login",{userName:this.userPhone,password:f()(this.password),domain:window.location.host}).then(function(data){"200"===data.data.code?(t.setUserInfo(data.data.data),t.$message({message:"登录成功!",type:"success",duration:1500,onClose:function(){t.setCookie("__un__",t.userPhone),t.setCookie("__pw__",t.password),t.$router.push({name:"index-homeIndex"})}})):"1019"===data.data.code?t.$message({message:"用户名或密码错误",type:"warning"}):t.$message({message:data.data.message,type:"warning"})})}},Object(c.b)(["setUserInfo"])),mounted:function(){this.$utils.getStorage("__un__","local")&&this.$utils.getStorage("__pw__","local")&&(this.userPhone=this.$utils.getStorage("__un__","local"),this.password=this.$utils.getStorage("__pw__","local"))}},v=(o(574),o(13)),component=Object(v.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loginBox"},[o("loginBase",[o("div",{staticClass:"box",attrs:{slot:"box"},slot:"box"},[o("ul",{staticClass:"form",on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.loginTest(e):null}}},[o("li",{staticClass:"inputLi"},[o("span",{staticClass:"admin"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],attrs:{type:"text",placeholder:"帐号"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}})]),t._v(" "),o("li",{staticClass:"inputLi"},[o("span",{staticClass:"lock"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"operate"},[o("span"),t._v(" "),o("span",{on:{click:function(e){return t.$utils.routerTo("forget")}}},[t._v("忘记密码？")])]),t._v(" "),o("div",{staticClass:"footer"},[o("b",{staticClass:"toReg",on:{click:function(e){return t.$utils.routerTo("reg")}}},[t._v("去注册")]),t._v(" "),o("b",{staticClass:"login",on:{click:t.loginTest}},[t._v("登录")])]),t._v(" "),o("div",{staticClass:"toIndex",on:{click:function(e){return t.$utils.routerTo("index-homeIndex")}}},[o("i"),t._v(" "),o("span",[t._v("返回首页")])])])])],1)},[],!1,null,"8e75000e",null);e.default=component.exports}}]);