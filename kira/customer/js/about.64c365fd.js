(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0798":function(t,e,s){"use strict";var i=s("5530"),r=s("ade3"),o=(s("caad"),s("0c18"),s("10d2")),n=s("afdd"),a=s("9d26"),c=s("f2e7"),l=s("7560"),h=s("2b0e"),d=h["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=s("58df"),f=s("d9bd");e["a"]=Object(u["a"])(o["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(r["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},1697:function(t,e,s){},"2af1":function(t,e,s){var i=s("23e7"),r=s("f748");i({target:"Math",stat:!0},{sign:r})},"305f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("showcase-wrapper")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tjtr-item-showcase"},[s("v-container",[s("v-row",[s("v-col",[s("div",{staticClass:"tjtr-showcase-wrapper"},[s("title-with-sharp",{attrs:{title:t.$t("commodity.showcase.item_detail")}})],1)])],1),s("v-row",[s("v-col",[s("v-container",{staticClass:"tjtr-clear-padding"},[s("v-row",[s("v-col",{attrs:{sm:"4"}},[s("div",{staticClass:"tjtr-image-wrapper"},[s("v-img",{attrs:{"aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/cards/kitchen.png"}})],1)]),s("v-col",{attrs:{sm:"5"}},[s("b",{staticClass:"tjtr-showcase-title"},[t._v(" "+t._s(t.item.title)+" ")]),s("br"),s("span",{staticClass:"tjtr-showcase-price"},[s("b",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.$t("commodity.showcase.price"))+": ")]),s("span",{staticClass:"tjtr-counter-showcase"},[t._v(" "+t._s(t.$n(t.item.price,"currency"))+" ")])]),s("br"),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("span",{staticClass:"tjtr-showcase-fr"},[s("b",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.$t("commodity.showcase.from"))+": ")]),s("span",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.item.fr)+" ")])]),s("br"),s("span",{staticClass:"tjtr-showcase-fr"},[s("b",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.$t("commodity.showcase.to"))+": ")]),s("span",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.logistics.to)+" ")])]),s("br"),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("span",{staticClass:"tjtr-showcase-fr"},[s("b",{staticClass:"tjtr-showcase-pricelabel"},[t._v(" "+t._s(t.$t("commodity.showcase.tag"))+": ")]),s("span",[s("v-chip-group",t._l(t.item.tags,(function(e){return s("v-chip",{key:e,attrs:{color:"info"}},[t._v(" "+t._s(e)+" ")])})),1)],1)]),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("v-container",[s("v-row",[s("v-col",{attrs:{sm:"4"}},[s("v-btn",{staticClass:"tjtrtmp1",attrs:{block:"",color:"primary","x-large":""}},[t._v(" "+t._s(t.$t("commodity.showcase.purchase"))+" ")])],1),s("v-col",{attrs:{sm:"4"}},[s("v-btn",{staticClass:"tjtrtmp1",attrs:{block:"",text:"",outlined:"",color:"primary","x-large":""}},[t._v(" "+t._s(t.$t("commodity.showcase.contact"))+" ")])],1),s("v-col",{staticClass:"tjtr-center-align",attrs:{sm:"2"}},[s("labeled-button",{attrs:{icon:"mdi-star-plus",dense:!0,label:t.$t("commodity.showcase.bookmark")}})],1),s("v-col",{staticClass:"tjtr-center-align",attrs:{sm:"2"}},[s("labeled-button",{attrs:{icon:"mdi-alert",dense:!0,label:t.$t("commodity.showcase.report")}})],1)],1)],1)],1),s("v-col",{attrs:{sm:"3"}},[s("showcase-user-detail")],1)],1)],1)],1)],1),s("v-row",[s("v-col",[s("div",{staticClass:"tjtr-showcase-wrapper"},[s("title-with-sharp",{attrs:{title:t.$t("commodity.showcase.item_desc")}})],1)])],1),s("v-row",[s("v-col",[s("div",[t._v(" "+t._s(t.item.desc)+" ")])])],1),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("br"),s("v-row",[s("v-col",[s("div",{staticClass:"tjtr-showcase-wrapper"},[s("title-with-sharp",{attrs:{title:t.$t("commodity.showcase.comment")}})],1)])],1),s("v-row",[s("v-col",[s("showcase-comment")],1)],1),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("br"),s("v-row",[s("v-col",[s("div",{staticClass:"tjtr-showcase-wrapper"},[s("title-with-sharp",{attrs:{title:t.$t("commodity.showcase.related_item")}})],1)])],1),s("v-row",[s("v-col",[s("homepage-recommend-waterfall",{attrs:{itemLim:5}})],1)],1)],1)],1)},n=[],a=s("769f"),c=s("81e4"),l=s("e9ad"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-alert",{attrs:{type:"info",text:""}},[t._v(" "+t._s(t.$t("commodity.showcase.tips.nocomment"))+" ")])],1)},d=[],u={},f=u,p=s("2877"),v=s("6544"),m=s.n(v),w=s("0798"),g=Object(p["a"])(f,h,d,!1,null,null,null),b=g.exports;m()(g,{VAlert:w["a"]});var _=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"tjtr-showcase-user",attrs:{outlined:""}},[s("div",{staticClass:"tjtrtmp1"},[s("v-avatar",{staticClass:"tjtrtmp2",staticStyle:{display:"inline-block","margin-top":"10px"},attrs:{size:"90",color:"grey"}},[s("v-img",{staticClass:"tjtrtmp-img zms-img-demo",attrs:{contain:"","aspect-ratio":"16/9",height:"100px"}})],1),s("br"),s("span",{staticClass:"tjtrtmp3"},[t._v(" Hello World ")]),s("br"),s("span",{staticClass:"tjtrtmp4"},[t._v(" (UID: 12314881) ")])],1),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("div",{staticClass:"tjtrtmp5"},[s("div",[s("b",[t._v(t._s(t.$t("commodity.showcase.user.succtrade")))]),s("br"),s("span",{staticClass:"tjtr-counter-showcase-user"},[t._v(" 14144 ")]),s("v-progress-linear",{attrs:{color:"light-green",height:"10",value:"10",striped:""}})],1),s("div",{staticClass:"tjtrtmp6"},[s("b",[t._v(t._s(t.$t("commodity.showcase.user.violations")))]),s("br"),s("span",{staticClass:"tjtr-counter-showcase-user"},[t._v(" 14144 ")]),s("v-progress-linear",{attrs:{color:"orange",height:"10",value:"10",striped:""}})],1)]),s("v-divider",{staticClass:"tjtr-extend-divider"}),s("v-container",[s("v-row",[s("v-col",[s("labeled-button",{attrs:{icon:"mdi-heart-plus",dense:!0,label:t.$t("commodity.showcase.user.follow")}})],1),s("v-col",[s("labeled-button",{attrs:{icon:"mdi-earth",dense:!0,label:t.$t("commodity.showcase.user.space")}})],1),s("v-col",[s("labeled-button",{attrs:{icon:"mdi-alarm-light",dense:!0,label:t.$t("commodity.showcase.user.credit")}})],1)],1)],1)],1)],1)},C=[],$={components:{LabeledButton:c["a"]}},y=$,x=(s("4dcc"),s("8212")),O=s("b0af"),j=s("62ad"),k=s("a523"),S=s("ce7e"),B=s("adda"),I=s("8e36"),T=s("0fd9"),M=Object(p["a"])(y,_,C,!1,null,"66c8e1ed",null),A=M.exports;m()(M,{VAvatar:x["a"],VCard:O["a"],VCol:j["a"],VContainer:k["a"],VDivider:S["a"],VImg:B["a"],VProgressLinear:I["a"],VRow:T["a"]});var W={components:{TitleWithSharp:l["a"],LabeledButton:c["a"],ShowcaseUserDetail:A,HomepageRecommendWaterfall:a["a"],ShowcaseComment:b},data:function(){return{item:{title:"讲述宪法故事  为携手应对全球性挑战贡献力量",price:"9987909.78",fr:"Hangzhou, Zhejiang Province, China",tags:["Hello","World","TestTag"],desc:"在深入学习贯彻党的十九届六中全会精神之际，我们迎来第八个国家宪法日。宪法是国家的根本法，是治国安邦的总章程。在习近平法治思想指导下，以宪法为统帅的中国特色社会主义法律体系不断完善，法治政府建设稳步推进，司法体制改革持续深化，全社会法治观念明显增强，我国法治现代化水平显著提高。2018年3月，十三届全国人大一次会议审议通过的《中华人民共和国宪法修正案》规定，国家工作人员就职时应当依照法律规定公开进行宪法宣誓。2018年3月17日，新当选的国家主席习近平举起右手，进行宪法宣誓。这是中华人民共和国历史上首次国家领导人宪法宣誓，其政治性和示范性举足轻重。"},logistics:{to:"Jiading District, Shanghai, China"}}}},E=W,V=(s("5592"),s("8336")),P=s("cc20"),D=s("5530"),N=(s("8f5a"),s("7efd")),L=s("a9ad"),z=s("58df"),R=Object(z["a"])(N["a"],L["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(D["a"])(Object(D["a"])({},N["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(D["a"])({},N["a"].options.methods.genData.call(this)))}}}),X=Object(p["a"])(E,o,n,!1,null,"5d469066",null),H=X.exports;m()(X,{VBtn:V["a"],VChip:P["a"],VChipGroup:R,VCol:j["a"],VContainer:k["a"],VDivider:S["a"],VImg:B["a"],VRow:T["a"]});var U={components:{ShowcaseWrapper:H}},F=U,G=Object(p["a"])(F,i,r,!1,null,null,null);e["default"]=G.exports},"4dcc":function(t,e,s){"use strict";s("5c34")},5592:function(t,e,s){"use strict";s("1697")},"5c34":function(t,e,s){},"608c":function(t,e,s){},"7efd":function(t,e,s){"use strict";s.d(e,"a",(function(){return m}));var i=s("b85c"),r=s("5530"),o=(s("2af1"),s("caad"),s("99af"),s("fb6a"),s("608c"),s("9d26")),n=s("0789"),a=s("604c"),c=s("e4cd"),l=s("dc22"),h=s("c3f0"),d=s("58df"),u=s("80d2");function f(t){var e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function p(t,e,s,i){var r=t.clientWidth,o=s?e.content-t.offsetLeft-r:t.offsetLeft;s&&(i=-i);var n=e.wrapper+i,a=r+o,c=.4*r;return o<=i?i=Math.max(o-c,0):n<=a&&(i=Math.min(i-(n-a-c),e.content-e.wrapper)),s?-i:i}function v(t,e,s){var i=t.offsetLeft,r=t.clientWidth;if(s){var o=e.content-i-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var n=i+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,n))}var m=Object(d["a"])(a["a"],c["a"]).extend({name:"base-slide-group",directives:{Resize:l["a"],Touch:h["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(r["a"])(Object(r["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,s=t.wrapper;return e>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){var e=t<=0?f(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+f(this.widths.content-this.widths.wrapper-t):-t;this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,s=Object(i["a"])(Object(u["g"])(t));try{for(s.s();!(e=s.n()).done;){var r,o=e.value,n=Object(i["a"])(this.items);try{for(n.s();!(r=n.n()).done;){var a=r.value;if(a.$el===o)return void(this.scrollOffset=p(a.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(c){n.e(c)}finally{n.f()}}}catch(c){s.e(c)}finally{s.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(o["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(n["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,s,i){var r=s?-1:1,o=r*i+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,s=t.wrapper,i=e.clientWidth-s.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=v(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=p(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,s=e.content,i=e.wrapper;t.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});m.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"8f5a":function(t,e,s){},e4cd:function(t,e,s){"use strict";s("a9e3"),s("caad"),s("b0c0");var i=s("d9bd"),r=s("2b0e");e["a"]=r["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,s=t.width,i=t.name,r=t.mobileBreakpoint;if(r===this.mobileBreakpoint)return e;var o=parseInt(this.mobileBreakpoint,10),n=!isNaN(o);return n?s<o:i===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(i["d"])("mobile-break-point","mobile-breakpoint",this)}})}}]);
//# sourceMappingURL=about.64c365fd.js.map