(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"k",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return d})),r.d(e,"j",(function(){return m})),r.d(e,"b",(function(){return v})),r.d(e,"e",(function(){return h})),r.d(e,"a",(function(){return O})),r.d(e,"d",(function(){return _})),r.d(e,"g",(function(){return w}));var n=r(58),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},O=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},w=function(t,data){return console.log(t,data),Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})}},182:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return m}));var n=r(58),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},f=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},d=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},183:function(t,e,r){var n=r(6),o=r(22),c=r(10),l=r(184),f="["+l+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(h):l[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},184:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},185:function(t,e,r){"use strict";var n=r(4),o=r(18),c=r(21),l=r(117),f=r(60),d=r(10),m=r(44).f,v=r(61).f,h=r(9).f,O=r(183).trim,_=n.Number,w=_,j=_.prototype,C="Number"==c(r(76)(j)),x="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=x?e.trim():O(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(C?d((function(){j.valueOf.call(r)})):"Number"!=c(r))?l(new w(E(e)),r,_):E(e)};for(var P,k=r(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)o(w,P=k[y])&&!o(_,P)&&h(_,P,v(w,P));_.prototype=j,j.constructor=_,r(11)(n,"Number",_)}},186:function(t,e,r){var n=r(6),o=r(187);n(n.S+n.F*(Number.parseInt!=o),"Number",{parseInt:o})},187:function(t,e,r){var n=r(4).parseInt,o=r(183).trim,c=r(184),l=/^[-+]?0[xX]/;t.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},260:function(t,e,r){"use strict";r.r(e);r(75),r(30),r(31),r(13),r(59);var n=r(43),o=(r(185),r(186),r(29),r(3)),c=r(32),l=r(182),f=r(181);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={middleware:"authenticated",name:"UserProfile",data:function(){return{followDisabled:!1}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,c,d,m,v,h,O,_,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.params,e.next=3,Object(l.b)(n.username);case 3:if(o=e.sent,data=o.data,c=data.profile,d=Number.parseInt(r.page||1),m=10,"my_article"!==(v=r.tab||"my_article")){e.next=15;break}return e.next=12,Object(f.i)({limit:m,offset:(d-1)*m,author:n.username});case 12:h=e.sent,e.next=18;break;case 15:return e.next=17,Object(f.i)({limit:m,offset:(d-1)*m,favorited:n.username});case 17:h=e.sent;case 18:return O=h.data,_=O.articles,w=O.articlesCount,_.forEach((function(article){article.favoriteDisabled=!1})),e.abrupt("return",{userProfile:c,articles:_,articlesCount:w,limit:m,page:d,tab:v});case 21:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tab"],computed:m(m({},Object(c.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFollowUser:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(1),e.followDisabled=!0,r.prev=2,r.next=5,Object(l.a)(t.username);case 5:t.following=!0,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(r.t0);case 11:e.followDisabled=!1;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},onUnFollowUser:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(2),e.followDisabled=!0,r.prev=2,r.next=5,Object(l.e)(t.username);case 5:t.following=!1,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(r.t0);case 11:e.followDisabled=!1;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.f)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,t.next=12;break;case 8:return t.next=10,Object(f.c)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:"".concat(this.userProfile.username," - RealWorld")}}},h=r(20),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.userProfile.image}}),t._v(" "),r("h4",[t._v(t._s(t.userProfile.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.userProfile.bio)+"\n          ")]),t._v(" "),t.user.username===t.userProfile.username?[r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:"/settings"}},[r("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\n            ")])]:[t.userProfile.following?r("button",{staticClass:"btn btn-sm action-btn btn-secondary",attrs:{disabled:t.followDisabled},on:{click:function(e){return t.onUnFollowUser(t.userProfile)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n                Unfollow "+t._s(t.userProfile.username)+"\n            ")]):r("button",{staticClass:"btn btn-sm action-btn btn-outline-secondary action-btn",attrs:{disabled:t.followDisabled},on:{click:function(e){return t.onFollowUser(t.userProfile)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n                Follow "+t._s(t.userProfile.username)+"\n            ")])]],2)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my_article"===t.tab},attrs:{exact:"",to:{name:"profile",query:{tab:"my_article"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited_article"===t.tab},attrs:{exact:"",to:{name:"profile",query:{tab:"favorited_article"}}}},[t._v("Favorited articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),t.totalPage>1?r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"profile",query:{tab:t.tab,page:e}}}},[t._v(t._s(e))])],1)})),0)]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);