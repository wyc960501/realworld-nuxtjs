/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{182:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return m}));var r=n(58),o=function(data){return Object(r.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(r.b)({method:"POST",url:"/api/users",data:data})},l=function(e){return Object(r.b)({method:"GET",url:"/api/profiles/".concat(e)})},d=function(data){return Object(r.b)({method:"PUT",url:"/api/user",data:data})},f=function(e){return Object(r.b)({method:"POST",url:"/api/profiles/".concat(e,"/follow")})},m=function(e){return Object(r.b)({method:"DELETE",url:"/api/profiles/".concat(e,"/follow")})}},188:function(e,t,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var n in t)e[n]=t[n]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=t+"="+n+d}}function l(e,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");n||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=t(l[0]);if(d=(r.read||r)(d,f)||t(d),n)try{d=JSON.parse(d)}catch(e){}if(o[f]=d,e===f)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,n){c(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},259:function(e,t,n){"use strict";n.r(t);n(29);var r=n(3),o=(n(33),n(182)),c=n(188),l={middleware:"notAuthenticated",name:"LoginIndex",computed:{isLogin:function(){return"login"===this.$route.name}},data:function(){return{user:{username:"",email:"",password:""},errors:{},signDisabled:!1}},methods:{onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.signDisabled=!0,t.prev=1,!e.isLogin){t.next=8;break}return t.next=5,Object(o.c)({user:e.user});case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,Object(o.d)({user:e.user});case 10:t.t0=t.sent;case 11:n=t.t0,data=n.data,e.$router.push("/",(function(){e.$store.commit("setUser",data.user),c.set("user",data.user)})),t.next=20;break;case 16:t.prev=16,t.t1=t.catch(1),console.log(t.t1),e.signDisabled=!1;case 20:case"end":return t.stop()}}),t,null,[[1,16]])})))()}},head:function(){return{title:"login/register - RealWorld"}}},d=n(20),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"auth-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[n("h1",{staticClass:"text-xs-center"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")]),e._v(" "),n("p",{staticClass:"text-xs-center"},[e.isLogin?n("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):n("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),n("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,r){return e._l(t,(function(t,o){return n("li",{key:o},[e._v("\n                "+e._s(r)+" "+e._s(t)+"\n              ")])}))}))],2),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.isLogin?e._e():n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.signDisabled,type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.signDisabled,type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{disabled:e.signDisabled,type:"password",placeholder:"Password",required:"",minlength:"8"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:e.signDisabled}},[e._v("\n              "+e._s(e.isLogin?"Sign in":"Sign up")+"\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);