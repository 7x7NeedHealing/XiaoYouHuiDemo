(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoping-shoppingRelease-shoppingRelease"],{2669:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-2a1f82ba]{width:100%;height:100%;display:flex;justify-content:start;flex-direction:column}.content .cancelRelease[data-v-2a1f82ba]{height:%?80?%;display:flex;justify-content:space-between;border-bottom:%?1?% solid rgba(0,0,0,.1)}.content .cancelRelease .release[data-v-2a1f82ba]{background-color:#fef100}.content .goodsUrl[data-v-2a1f82ba]{width:90%;height:%?60?%;margin:0 auto;margin-top:%?12?%;box-sizing:border-box;border-bottom:%?1?% solid rgba(0,0,0,.3)\r\n  /* bug：右、下的边框消失， */}.content .goodsUrl[data-v-2a1f82ba] :focus{border-bottom:%?1?% solid rgba(0,0,0,.7)}.content .title[data-v-2a1f82ba]{width:90%;height:%?60?%;margin:0 auto;margin-top:%?12?%;border-bottom:%?1?% solid rgba(0,0,0,.3)}.content .title[data-v-2a1f82ba] :focus{border-bottom:%?1?% solid rgba(0,0,0,.7)}.content .goodsInfo[data-v-2a1f82ba]{width:90%;height:%?420?%;margin:0 auto;margin-top:%?12?%;border-bottom:%?1?% solid rgba(0,0,0,.3)}.content .goodsInfo[data-v-2a1f82ba] :focus{border-bottom:%?1?% solid rgba(0,0,0,.7)}.cancelRelease > uni-button[data-v-2a1f82ba]{height:%?60?%;color:#000;margin:%?10?% %?20?%;display:inline-block;width:%?120?%;line-height:%?60?%;font-size:%?30?%}\r\n/* 底部选择框通用样式 */.spaceBetween[data-v-2a1f82ba]{display:flex;justify-content:space-between;font-size:%?32?%;width:90%;height:%?80?%;line-height:%?80?%;margin:0 auto}.spaceBetween[data-v-2a1f82ba]:nth-child(2n){background-color:rgba(0,0,0,.1)}.spaceBetween > uni-view[data-v-2a1f82ba]{width:%?220?%;margin-left:%?20?%}uni-picker[data-v-2a1f82ba]{font-size:%?34?%;color:#333}.pickerItem[data-v-2a1f82ba]{width:%?150?%;text-align:center;margin-right:%?20?%;border-bottom:%?1?% solid rgba(0,0,0,.8)}.priceInput[data-v-2a1f82ba]{display:inline-block;width:%?110?%;height:%?80?%;padding-left:%?10?%;border-bottom:%?1?% solid rgba(0,0,0,.8);vertical-align:bottom;\r\n  /* 文字居中 */text-align:center}',""]),t.exports=e},"896a":function(t,e,o){"use strict";o.r(e);var n=o("f80a"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"8c1d":function(t,e,o){var n=o("2669");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("4f06").default;a("2b4f4382",n,!0,{sourceMap:!1,shadowMode:!1})},aa4d:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit()},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset()}}},[o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"cancelRelease"},[o("v-uni-button",{attrs:{id:"cancel"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pressCancel.apply(void 0,arguments)}}},[t._v("取消")]),o("v-uni-button",{staticClass:"release",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pressRelease.apply(void 0,arguments)}}},[t._v("发布")])],1),o("v-uni-input",{staticClass:"goodsUrl",attrs:{placeholder:"请输入商品网页链接..."},model:{value:t.goodsObj.goodsUrl,callback:function(e){t.$set(t.goodsObj,"goodsUrl",e)},expression:"goodsObj.goodsUrl"}}),o("v-uni-input",{staticClass:"title",attrs:{placeholder:"请输入商品名"},model:{value:t.goodsObj.goodsTitle,callback:function(e){t.$set(t.goodsObj,"goodsTitle",e)},expression:"goodsObj.goodsTitle"}}),o("v-uni-textarea",{staticClass:"goodsInfo",attrs:{placeholder:"请输入商品简介"},model:{value:t.goodsObj.goodsInfo,callback:function(e){t.$set(t.goodsObj,"goodsInfo",e)},expression:"goodsObj.goodsInfo"}}),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("平台")])],1),o("v-uni-picker",{attrs:{range:t.platform,value:t.platformIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerPlatformChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"pickerItem"},[o("v-uni-view",[t._v(t._s(t.platform[t.platformIndex]))])],1)],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("产品分类")])],1),o("v-uni-picker",{attrs:{range:t.sort,value:t.sortIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerSortChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"pickerItem"},[t._v(t._s(t.sort[t.sortIndex]))])],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("单价")])],1),o("v-uni-view",[o("v-uni-input",{staticClass:"priceInput",attrs:{type:"number",placeholder:"请输入"},model:{value:t.goodsObj.goodsPrice,callback:function(e){t.$set(t.goodsObj,"goodsPrice",e)},expression:"goodsObj.goodsPrice"}}),o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("元/件")])],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("拼单限制")])],1),o("v-uni-view",[o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("至少")]),o("v-uni-input",{staticClass:"priceInput",attrs:{type:"number",placeholder:"请输入"},model:{value:t.goodsObj.goodsLimit,callback:function(e){t.$set(t.goodsObj,"goodsLimit",e)},expression:"goodsObj.goodsLimit"}}),o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("件")])],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("个人")])],1),o("v-uni-view",[o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("我拼")]),o("v-uni-input",{staticClass:"priceInput",attrs:{type:"number",placeholder:"请输入"},model:{value:t.goodsObj.goodsPeople,callback:function(e){t.$set(t.goodsObj,"goodsPeople",e)},expression:"goodsObj.goodsPeople"}}),o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("件")])],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("总数")])],1),o("v-uni-view",[o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("共拼")]),o("v-uni-input",{staticClass:"priceInput",attrs:{type:"number",placeholder:"请输入"},model:{value:t.goodsObj.goodsTotal,callback:function(e){t.$set(t.goodsObj,"goodsTotal",e)},expression:"goodsObj.goodsTotal"}}),o("v-uni-text",{staticClass:"priceInputUnit"},[t._v("件")])],1)],1),o("v-uni-view",{staticClass:"spaceBetween"},[o("v-uni-view",[o("v-uni-text",[t._v("有效期")])],1),o("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{"border-bottom":"1rpx solid rgba(0,0,0,.8)"}},[t._v(t._s(t.date))])],1)],1)],1)],1)],1)},i=[]},be21:function(t,e,o){"use strict";o.r(e);var n=o("aa4d"),a=o("896a");for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("dac4");var s,r=o("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2a1f82ba",null,!1,n["a"],s);e["default"]=d.exports},dac4:function(t,e,o){"use strict";var n=o("8c1d"),a=o.n(n);a.a},f80a:function(t,e,o){"use strict";o("99af"),o("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){var t=this.getDate({format:!0});return{goodsObj:{goodsUrl:"",goodsTitle:"",goodsInfo:"",goodsPlatform:"",goodsSort:"",goodsPrice:1,goodsLimit:1,goodsPeople:1,goodsTotal:2,goodsHave:0,goodsTime:t},platform:["淘宝","京东","天猫","拼多多","闲鱼","其它"],sort:["百货","服装","食品","数码","穿戴","其它"],platformIndex:0,sortIndex:0,date:t,time:"12:01"}},methods:{pressCancel:function(){uni.switchTab({url:"/pages/index/index"})},pressRelease:function(){this.goodsObj.goodsHave=this.goodsObj.goodsPeople,console.log(this.goodsObj)},bindPickerPlatformChange:function(t){this.platformIndex=t.detail.value,this.goodsObj.goodsPlatform=this.platform[t.detail.value]},bindPickerSortChange:function(t){this.sortIndex=t.detail.value,this.goodsObj.goodsSort=this.sort[t.detail.value]},bindDateChange:function(t){this.date=t.detail.value,this.goodsObj.goodsTime=this.date},getDate:function(t){var e=new Date,o=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();e.getHours();return"end"===t&&(o+=1),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(o,"-").concat(n,"-").concat(a)}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(t){}};e.default=n}}]);