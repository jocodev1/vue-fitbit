webpackJsonp([1],{19:function(t,e,i){"use strict";var n=i(2),a=i(89),s=i(82),o=i.n(s),r=i(83),u=i.n(r),c=i(84),l=i.n(c);n.a.use(a.a),e.a=new a.a({beforeEach:function(t,e,i){"/login"===t.path||void 0!==n.a.prototype.$fitbit.token&&null!==n.a.prototype.$fitbit.token||i("/login"),i()},routes:[{path:"/",name:"Home",component:o.a},{path:"/oauth-callback/:token/:expiresIn/:accountUserId",name:"OAuth Callback Token",component:l.a},{path:"/login",name:"Login",component:u.a}]})},20:function(t,e,i){"use strict";var n=i(2),a=i(91);n.a.use(a.a),e.a=new a.a.Store({state:{fitbit:{user:{}}},getters:{fitbit:function(t){return t.fitbit}},mutations:{setFitbitUser:function(t,e){t.fitbit.user=e}},actions:{fetchProfile:function(t,e){var i=t.commit;n.a.prototype.$axios({url:"https://api.fitbit.com/1/user/"+e.accountUserId+"/profile.json",method:"GET"}).then(function(t){i("setFitbitUser",t.data.user)}).catch(function(t){console.log(t.response)})}}})},21:function(t,e){},22:function(t,e){},25:function(t,e,i){function n(t){i(76)}var a=i(1)(i(45),i(85),n,null,null);t.exports=a.exports},26:function(t,e,i){"use strict";e.a={fitbitClientId:"228PJ6"}},44:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),a=i(25),s=i.n(a),o=i(9),r=(i.n(o),i(19)),u=i(20),c=i(18),l=i.n(c),d=i(21),f=(i.n(d),i(22)),p=(i.n(f),i(24)),h=(i.n(p),i(23));i.n(h);n.a.config.productionTip=!1,n.a.prototype.$fitbit={token:window.localStorage.getItem("fitbitOauthToken"),expiresIn:window.localStorage.getItem("fitbitOauthExpiresIn"),accountUserId:window.localStorage.getItem("fitbitOauthAccountUserId"),isLoggedIn:void 0!==window.localStorage.getItem("fitbitOauthToken")},n.a.prototype.$axios=l.a,void 0!==n.a.prototype.$fitbit.token&&(n.a.prototype.$axios.defaults.headers.common={Authorization:"Bearer "+n.a.prototype.$fitbit.token}),new n.a({el:"#app",router:r.a,store:u.a,template:"<App/>",components:{App:s.a}})},45:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{fitbitClientId:"229S7D"}}}},46:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(49),a=i.n(n);e.default={name:"home",data:function(){return{show:!1}},computed:{user:function(){return this.$store.getters.fitbit.user}},created:function(){if(this.show=a()(this.user).length>0,!this.show){var t=this;this.$axios.all([t.$store.dispatch("fetchProfile",this.$fitbit)])}},watch:{user:function(t){var e=this;a()(t).length>0&&setTimeout(function(){e.show=!0},1e3)}}}},47:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(26);e.default={name:"login",data:function(){return{fitbitClientId:n.a.fitbitClientId}},methods:{login:function(){window.location.href="https://www.fitbit.com/oauth2/authorize?client_id="+this.fitbitClientId+"&response_type=token&scope=activity%20profile&expires_in=2592000"}}}},48:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"oauth-callback",created:function(){this.setOauthInStorage(),this.setOauthInVue(),this.$router.push("/")},methods:{setOauthInStorage:function(){localStorage.setItem("fitbitOauthToken",this.$route.params.token),localStorage.setItem("fitbitOauthExpiresIn",this.$route.params.expiresIn),localStorage.setItem("fitbitOauthAccountUserId",this.$route.params.accountUserId)},setOauthInVue:function(){this.$fitbit.token=this.$route.params.token,this.$fitbit.expiresIn=this.$route.params.expiresIn,this.$fitbit.accountUserId=this.$route.params.accountUserId,this.$fitbit.isLoggedIn=void 0!==this.$fitbit.token,this.$axios.defaults.headers.common={Authorization:"Bearer "+this.$fitbit.token}}}}},76:function(t,e){},77:function(t,e){},78:function(t,e){},79:function(t,e){},82:function(t,e,i){function n(t){i(78)}var a=i(1)(i(46),i(87),n,"data-v-31a18608",null);t.exports=a.exports},83:function(t,e,i){function n(t){i(77)}var a=i(1)(i(47),i(86),n,"data-v-20742190",null);t.exports=a.exports},84:function(t,e,i){function n(t){i(79)}var a=i(1)(i(48),i(88),n,"data-v-76f281c3",null);t.exports=a.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":"","uk-sticky":""}},[i("div",{staticClass:"uk-navbar-left"},[i("div",{staticClass:"uk-navbar-nav"},[i("li",[i("router-link",{attrs:{to:"/"}})],1)])]),t._v(" "),i("div",{staticClass:"uk-navbar-right"},[i("ul",{staticClass:"uk-navbar-nav"},[i("li",{staticClass:"uk-visible@s"},[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),i("li",{staticClass:"uk-visible@s"},[i("router-link",{attrs:{to:"/login",href:"#"}},[t._v("Login")])],1),t._v(" "),t._m(0)])])]),t._v(" "),i("div",{staticClass:"uk-container uk-container-center",attrs:{id:"content-container"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"uk-hidden@s"},[i("a",{staticClass:"uk-navbar-toggle",attrs:{"uk-navbar-toggle-icon":"","uk-toggle":"#offcanvas-push"}})])}]}},86:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login uk-text-center"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("div",{staticClass:"login-options"},[i("button",{staticClass:"uk-button uk-button-primary uk-button-large",on:{click:t.login}},[t._v("Login with Fitbit")])])])],1)},staticRenderFns:[]}},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.show?i("section",{staticClass:"user"},[i("div",{staticClass:"uk-child-width-expand@s uk-text-center",attrs:{"uk-grid":""}},[i("div",[i("div",{staticClass:"uk-card-body"},[i("div",{staticClass:"uk-grid-small uk-child-width-expand@s uk-text-center",attrs:{"uk-grid":""}},[i("div",[i("img",{staticClass:"profile",attrs:{src:t.user.avatar150,alt:"profile"}}),t._v(" "),i("p",[t._v("\n                  "+t._s(t.user.fullName)+"\n                  "),i("br"),t._v(" "),i("span",{staticStyle:{opacity:"0.7","font-size":"0.8em"}},[t._v("member since: "+t._s(t.user.memberSince))])])]),t._v(" "),i("div",[i("p",[t._v("Gender: "+t._s(t.user.gender))]),t._v(" "),i("p",[t._v("Age: "+t._s(t.user.age))]),t._v(" "),i("p",[t._v("Stride Length (running): "+t._s(t.user.strideLengthRunning))]),t._v(" "),i("p",[t._v("Stride Length (walking): "+t._s(t.user.strideLengthWalking))])])])])])]),t._v(" "),i("hr",{staticClass:"uk-divider-icon"}),t._v(" "),i("div",{staticClass:"badges"},[i("div",{staticClass:"uk-child-width-expand@s uk-text-center",attrs:{"uk-grid":""}},t._l(t.user.topBadges,function(e,n){return i("div",[i("img",{attrs:{src:e.image125px,alt:"badge-"+n}}),t._v(" "),i("h5",[t._v(t._s(e.shortName))]),t._v(" "),i("p",[t._v(t._s(e.marketingDescription))])])}))])]):i("div",[i("div",{staticClass:"uk-text-center"},[i("div",{staticClass:"uk-padding"},[i("p",[i("i",{staticClass:"fa fa-refresh fa-spin fa-5x"})]),t._v(" "),i("h3",{staticStyle:{opacity:"0.7"}},[t._v("Loading fitbit user...")])])])])])],1)},staticRenderFns:[]}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"oauth-callback"},[t._v("\n  "+t._s(t.$route.params)+"\n")])},staticRenderFns:[]}}},[44]);
//# sourceMappingURL=app.29ca10d1e3e0dda396a1.js.map