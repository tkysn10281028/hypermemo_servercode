(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d3b":function(e,t,n){var r=n("d039"),a=n("b622"),s=n("c430"),i=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},3417:function(e,t,n){},3624:function(e,t,n){"use strict";n("3417")},"36cd":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"headerform"}},[n("div",{staticClass:"titles"},[n("img",{attrs:{src:"img/oysterworld_icon.jpg",alt:"icon"},on:{click:function(t){e.showTitle=!e.showTitle}}})]),n("transition",{attrs:{name:"bounce"}},[e.showTitle?n("h1",{staticClass:"header-h1",on:{click:function(t){e.show=!e.show}}},[e._v(" Welcome Hyper Memo ")]):e._e()])],1)},a=[],s={name:"headerform",data:function(){return{flag:!0,show:!1,showTitle:!0}},methods:{},updated:function(){console.log("updated")}},i=s,o=(n("3624"),n("2877")),u=Object(o["a"])(i,r,a,!1,null,"2bda3f9b",null);t["a"]=u.exports},"3b9f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"logoutform"}},[n("div",{staticClass:"form"},[n("a",{attrs:{href:"/hypermemo"}},[n("img",{attrs:{src:"img/oysterworld_icon.jpg",alt:"icon"}})]),n("h3",{staticClass:"header-h3"},[e._v("You Are Successfully Logged Out.")]),n("h3",{staticClass:"header-h3"},[e._v("Thank You For Using Our Website!")])])])}],s=n("d640"),i={mixins:[s["a"]],created:function(){this.axios.get(this.url[2]).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}},o=i,u=(n("a48f"),n("2877")),c=Object(u["a"])(o,r,a,!1,null,"6123bcd5",null);t["default"]=c.exports},"410b":function(e,t,n){},"42cf":function(e,t,n){"use strict";n("957f")},"4dae":function(e,t,n){var r=n("da84"),a=n("23cb"),s=n("07fa"),i=n("8418"),o=r.Array,u=Math.max;e.exports=function(e,t,n){for(var r=s(e),c=a(t,r),l=a(void 0===n?r:n,r),d=o(u(l-c,0)),h=0;c<l;c++,h++)i(d,h,e[c]);return d.length=h,d}},"4e03":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"signup"}},[n("Header"),n("div",{staticClass:"form"},[n("p",{staticClass:"clickhere",on:{click:function(t){e.show=!e.show}}},[e._v("Click Here For Details.")]),n("h1",[e._v("Sign Up")]),n("p",[e._v("Emailaddress")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emailaddress,expression:"emailaddress"}],staticClass:"formdesign",attrs:{type:"text"},domProps:{value:e.emailaddress},on:{input:function(t){t.target.composing||(e.emailaddress=t.target.value)}}}),n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"formdesign",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("p",[e._v("UserName")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"formdesign",attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._m(0),n("transition",{attrs:{name:"slide-fade"}},[e.show?n("div",{staticClass:"details"},[n("p",[e._v("・We Will Send A Validation Code to Your EmailAddress.")]),n("br"),n("p",[e._v(" ・After Submitting Your UserInfos, Check Your Validation Code We Sended. ")]),n("br"),n("p",[e._v(" ・Your Password Should Include At Least One Alphabet And One Number. ")])]):e._e()])],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("button",{staticClass:"btn-flat-border"},[e._v("Submit!")])])}],s=n("36cd"),i={name:"signup",components:{Header:s["a"]},data:function(){return{show:!1,emailaddress:"",password:"",userName:""}}},o=i,u=(n("42cf"),n("2877")),c=Object(u["a"])(o,r,a,!1,null,"03844d7b",null);t["default"]=c.exports},6555:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loginform"}},[n("Header"),n("div",{staticClass:"form"},[n("h1",[e._v("Please Login Here.")]),n("p",[e._v("Emailaddress")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emailaddress,expression:"emailaddress"}],staticClass:"formdesign",attrs:{type:"text"},domProps:{value:e.emailaddress},on:{input:function(t){t.target.composing||(e.emailaddress=t.target.value)}}}),n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"formdesign",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("p",[n("button",{staticClass:"btn-flat-border",on:{click:e.login}},[e._v("Login")])])])],1)},a=[],s=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("d640")),i=n("36cd"),o={components:{Header:i["a"]},mixins:[s["a"]],data:function(){return{emailaddress:"",password:"",show:!0}},methods:{login:function(){var e=new URLSearchParams;e.append("emailaddress",this.emailaddress),e.append("password",this.password),this.axios.post(this.url[0],e,this.serverPass+"login").then((function(e){e.data.userName?window.alert("Welcome! "+e.data.userName):console.log(e.data)})).catch((function(e){window.alert("Failed To Login. Please Check Your Id or Pass."),console.log(e)}))}}},u=o,c=(n("9fc9"),n("2877")),l=Object(c["a"])(u,r,a,!1,null,"8a2f190a",null);t["default"]=l.exports},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,s(0,n)):e[i]=n}},"957f":function(e,t,n){},9861:function(e,t,n){"use strict";n("e260");var r=n("23e7"),a=n("da84"),s=n("d066"),i=n("c65b"),o=n("e330"),u=n("0d3b"),c=n("6eeb"),l=n("e2cc"),d=n("d44e"),h=n("9ed3"),f=n("69f3"),p=n("19aa"),v=n("1626"),m=n("1a2d"),g=n("0366"),w=n("f5df"),b=n("825a"),y=n("861d"),_=n("577e"),k=n("7c73"),x=n("5c6c"),U=n("9a1f"),C=n("35a1"),L=n("d6d6"),R=n("b622"),P=n("addb"),S=R("iterator"),E="URLSearchParams",N=E+"Iterator",A=f.set,O=f.getterFor(E),j=f.getterFor(N),H=s("fetch"),T=s("Request"),I=s("Headers"),Y=T&&T.prototype,F=I&&I.prototype,W=a.RegExp,$=a.TypeError,q=a.decodeURIComponent,J=a.encodeURIComponent,M=o("".charAt),Q=o([].join),z=o([].push),D=o("".replace),V=o([].shift),B=o([].splice),G=o("".split),K=o("".slice),X=/\+/g,Z=Array(4),ee=function(e){return Z[e-1]||(Z[e-1]=W("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return q(e)}catch(t){return e}},ne=function(e){var t=D(e,X," "),n=4;try{return q(t)}catch(r){while(n)t=D(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},se=function(e){return ae[e]},ie=function(e){return D(J(e),re,se)},oe=h((function(e,t){A(this,{type:N,iterator:U(O(e).entries),kind:t})}),"Iterator",(function(){var e=j(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ue=function(e){this.entries=[],this.url=null,void 0!==e&&(y(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===M(e,0)?K(e,1):e:_(e)))};ue.prototype={type:E,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,a,s,o,u,c=C(e);if(c){t=U(e,c),n=t.next;while(!(r=i(n,t)).done){if(a=U(b(r.value)),s=a.next,(o=i(s,a)).done||(u=i(s,a)).done||!i(s,a).done)throw $("Expected sequence with length 2");z(this.entries,{key:_(o.value),value:_(u.value)})}}else for(var l in e)m(e,l)&&z(this.entries,{key:l,value:_(e[l])})},parseQuery:function(e){if(e){var t,n,r=G(e,"&"),a=0;while(a<r.length)t=r[a++],t.length&&(n=G(t,"="),z(this.entries,{key:ne(V(n)),value:ne(Q(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],z(n,ie(e.key)+"="+ie(e.value));return Q(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ce=function(){p(this,le);var e=arguments.length>0?arguments[0]:void 0;A(this,new ue(e))},le=ce.prototype;if(l(le,{append:function(e,t){L(arguments.length,2);var n=O(this);z(n.entries,{key:_(e),value:_(t)}),n.updateURL()},delete:function(e){L(arguments.length,1);var t=O(this),n=t.entries,r=_(e),a=0;while(a<n.length)n[a].key===r?B(n,a,1):a++;t.updateURL()},get:function(e){L(arguments.length,1);for(var t=O(this).entries,n=_(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){L(arguments.length,1);for(var t=O(this).entries,n=_(e),r=[],a=0;a<t.length;a++)t[a].key===n&&z(r,t[a].value);return r},has:function(e){L(arguments.length,1);var t=O(this).entries,n=_(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){L(arguments.length,1);for(var n,r=O(this),a=r.entries,s=!1,i=_(e),o=_(t),u=0;u<a.length;u++)n=a[u],n.key===i&&(s?B(a,u--,1):(s=!0,n.value=o));s||z(a,{key:i,value:o}),r.updateURL()},sort:function(){var e=O(this);P(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=O(this).entries,r=g(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),c(le,S,le.entries,{name:"entries"}),c(le,"toString",(function(){return O(this).serialize()}),{enumerable:!0}),d(ce,E),r({global:!0,forced:!u},{URLSearchParams:ce}),!u&&v(I)){var de=o(F.has),he=o(F.set),fe=function(e){if(y(e)){var t,n=e.body;if(w(n)===E)return t=e.headers?new I(e.headers):new I,de(t,"content-type")||he(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),k(e,{body:x(0,_(n)),headers:x(0,t)})}return e};if(v(H)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return H(e,arguments.length>1?fe(arguments[1]):{})}}),v(T)){var pe=function(e){return p(this,Y),new T(e,arguments.length>1?fe(arguments[1]):{})};Y.constructor=pe,pe.prototype=Y,r({global:!0,forced:!0},{Request:pe})}}e.exports={URLSearchParams:ce,getState:O}},"9fc9":function(e,t,n){"use strict";n("cf30")},a48f:function(e,t,n){"use strict";n("410b")},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,s=function(e,t){var n=e.length,u=a(n/2);return n<8?i(e,t):o(e,s(r(e,0,u),t),s(r(e,u),t),t)},i=function(e,t){var n,r,a=e.length,s=1;while(s<a){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},o=function(e,t,n,r){var a=t.length,s=n.length,i=0,o=0;while(i<a||o<s)e[i+o]=i<a&&o<s?r(t[i],n[o])<=0?t[i++]:n[o++]:i<a?t[i++]:n[o++];return e};e.exports=s},cf30:function(e,t,n){}}]);
//# sourceMappingURL=about.aae19f6f.js.map