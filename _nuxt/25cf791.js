(window.webpackJsonp=window.webpackJsonp||[]).push([[26,3,5,7,9,11,13,14,15,17,18,20,21,23,25],{252:function(t,e,n){"use strict";n.r(e);n(26);var c={props:{channel:{type:Object,default:function(){}}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"flex items-center py-2 pl-6 text-sm font-normal transition duration-75 hover:bg-[#363636] text-white group",attrs:{href:"#"}},[e("img",{staticClass:"w-6 h-6 rounded-full",attrs:{src:t.channel.avatar,alt:"user photo"}}),t._v(" "),e("span",{staticClass:"ml-6 flex-1"},[t._v(t._s(t.channel.name))]),t._v(" "),e("span",{staticClass:"mr-1.5 rounded-full h-1 w-1 bg-sky-500"})])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);n(26);var c={props:{name:{type:String,default:""},icon:{type:String,default:""}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center py-2 pl-6 text-sm font-normal text-white hover:bg-[#363636]",class:"Home"===t.name?"bg-[#363636] font-medium":""},[e(t.icon,{tag:"span"}),t._v(" "),e("span",{staticClass:"ml-6"},[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,n){"use strict";n.r(e);var c={props:{video:{type:Object,default:function(){}}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"w-full",attrs:{src:t.video.thumbnail}}),t._v(" "),e("p",{staticClass:"absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py"},[t._v("\n      "+t._s(t.video.duration)+"\n    ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-3 mt-3"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"rounded-full max-h-10 max-w-10",attrs:{src:t.video.avatar}})]),t._v(" "),e("div",{attrs:{clas:"flex flex-col"}},[e("div",[e("span",{staticClass:"text-base font-medium text-gray-100"},[t._v(t._s(t.video.title))])]),t._v(" "),e("div",{staticClass:"text-sm text-gray-400 hover:text-gray-100"},[t._v("\n        "+t._s(t.video.channel)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-400"},[t._v("\n        "+t._s(t.video.views)+" • "+t._s(t.video.time)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(103).default)("67b5e3ea",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(103).default)("18ede44e",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);n(265);var c=n(43),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex px-6 py-2 h-14 text-white bg-[#202020] justify-between"},[e("div",{staticClass:"flex w-80 py-2"},[e("div",{staticClass:"cursor-pointer"},[e("burger-menu-icon")],1),t._v(" "),e("div",{staticClass:"cursor-pointer"},[e("youtube-icon")],1)]),t._v(" "),e("div",{staticClass:"flex-grow-0 flex-shrink w-[728px] items-center justify-center"},[e("form",{staticClass:"flex relative text-gray-600"},[e("input",{staticClass:"flex-1 h-10 bg-[#181818] p-2 border border-[#3a3a3a] px-2",attrs:{type:"search",name:"search",placeholder:"Search"}}),t._v(" "),e("button",{staticClass:"w-16 flex items-center justify-center bg-[#323232]",attrs:{type:"submit"}},[e("search-icon")],1),t._v(" "),e("button",{staticClass:"ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#131212]"},[e("voice-icon")],1)])]),t._v(" "),e("div",{staticClass:"w-80 flex items-center space-x-6 justify-end"},[e("div",{staticClass:"cursor-pointer"},[e("create-video-icon")],1),t._v(" "),e("div",{staticClass:"cursor-pointer"},[e("notification-icon")],1),t._v(" "),e("div",{staticClass:"cursor-pointer"},[e("profile-image")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BurgerMenuIcon:n(258).default,YoutubeIcon:n(259).default,SearchIcon:n(260).default,VoiceIcon:n(261).default,CreateVideoIcon:n(262).default,NotificationIcon:n(263).default,ProfileImage:n(264).default,Header:n(257).default})},258:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"mr-5 w-6 h-6 fill-white",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{staticClass:"style-scope yt-icon"},[t("path",{staticClass:"style-scope yt-icon",attrs:{d:"M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"}})])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex scale-95"},[e("svg",{staticClass:"w-24 h-6 fill-white",attrs:{viewBox:"0 0 90 20",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{staticClass:"style-scope yt-icon",attrs:{viewBox:"0 0 90 20",preserveAspectRatio:"xMidYMid meet"}},[e("g",{staticClass:"style-scope yt-icon"},[e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z",fill:"#FF0000"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z",fill:"white"}})]),t._v(" "),e("g",{staticClass:"style-scope yt-icon"},[e("g",{staticClass:"style-scope yt-icon",attrs:{id:"youtube-paths"}},[e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"}}),t._v(" "),e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"}})])])])]),t._v(" "),e("span",{staticClass:"text-xs pl-1 -mt-2 text-[#ababab]"},[t._v("IN")])])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"w-5 h-5 fill-white",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{staticClass:"style-scope yt-icon"},[t("path",{staticClass:"style-scope yt-icon",attrs:{d:"M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"}})])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"w-6 h-6 fill-white",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{staticClass:"style-scope yt-icon"},[t("path",{staticClass:"style-scope yt-icon",attrs:{d:"M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"}})])])}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"w-6 h-6 fill-white",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{staticClass:"style-scope yt-icon"},[t("path",{staticClass:"style-scope yt-icon",attrs:{d:"M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"}})])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"w-6 h-6 fill-white",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{staticClass:"style-scope yt-icon"},[t("path",{staticClass:"style-scope yt-icon",attrs:{d:"M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"}})])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var c=n(43),component=Object(c.a)({},(function(){return(0,this._self._c)("img",{staticClass:"rounded-full w-7 h-7",attrs:{src:"https://chaitanya-raj.github.io/static/img/photo.webp"}})}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n(255)},266:function(t,e,n){var c=n(102)((function(i){return i[1]}));c.push([t.i,".fill-white{fill:#fff}",""]),c.locals={},t.exports=c},267:function(t,e,n){"use strict";n(256)},268:function(t,e,n){var c=n(102)((function(i){return i[1]}));c.push([t.i,"*{scrollbar-width:thin;scrollbar-color:#707070 #202020}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:#202020}::-webkit-scrollbar-thumb{background-color:#707070;border-radius:20px;border:3px solid #202020}",""]),c.locals={},t.exports=c},269:function(t,e,n){"use strict";n.r(e);n(26);var c=n(252),o=n(253),r={components:{Subscription:c.default,Tab:o.default},data:function(){return{subscriptions:[{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"},{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"},{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"},{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"},{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"},{name:"Endel",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj"},{name:"Dreamy",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj"},{name:"Your Food Lab",avatar:"https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj"},{name:"The Exploring Series",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj"}],options1:[{name:"Home",icon:"home-icon"},{name:"Explore",icon:"explore-icon"},{name:"Shorts",icon:"shorts-icon"},{name:"Subscriptions",icon:"subscription-icon"}],options2:[{name:"Library",icon:"library-icon"},{name:"History",icon:"history-icon"},{name:"Your Videos",icon:"videos-icon"},{name:"Watch Later",icon:"watch-later-icon"},{name:"Your Clips",icon:"clips-icon"},{name:"See More",icon:"arrow-icon"}]}}},l=(n(267),n(43)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"w-72 h-[calc(100vh-56px)] bg-[#202020] py-3 overflow-y-auto",attrs:{"aria-label":"Sidebar"}},[e("div",t._l(t.options1,(function(option){return e("tab",{key:option.name,attrs:{name:option.name,icon:option.icon}})})),1),t._v(" "),e("div",{staticClass:"pt-4 mt-4 border-t border-[#363636]"},[e("div",t._l(t.options2,(function(option){return e("tab",{key:option.name,attrs:{name:option.name,icon:option.icon}})})),1)]),t._v(" "),e("div",{staticClass:"mt-4 border-t border-[#363636]"},[e("div",{staticClass:"flex items-center pl-6 pt-3 pb-2 text-sm font-medium text-[#8a8a8a] group"},[t._v("\n      SUBSCRIPTIONS\n    ")]),t._v(" "),t._l(t.subscriptions,(function(t){return e("div",{key:t.name},[e("subscription",{attrs:{channel:t}})],1)}))],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Tab:n(253).default,Subscription:n(252).default})},270:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{tags:["All","Music","Live","Gaming","Mixes"]}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center text-white bg-[#202020] border-t border-b border-[#363636] pr-4"},[e("ul",{staticClass:"flex-1 p-3 space-x-3"},t._l(t.tags,(function(n){return e("li",{key:n,staticClass:"inline-flex items-center px-3 py-1 text-sm bg-[#363636] border border-[#484848] rounded-full leading-sm first:text-black first:bg-gray-200"},[t._v("\n      "+t._s(n)+"\n    ")])})),0),t._v(" "),e("div",{staticClass:"flex w-4 h-4"},[e("svg",{staticClass:"style-scope yt-icon fill-[#fafafa]",attrs:{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",focusable:"false"}},[e("g",{staticClass:"style-scope yt-icon",attrs:{"mirror-in-rtl":""}},[e("path",{staticClass:"style-scope yt-icon",attrs:{d:"M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"}})])])])])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);n(26);var c={components:{HomeItem:n(254).default},data:function(){return{videos:[{thumbnail:"https://i.ytimg.com/vi/8Gty8-w2joo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-gksUjeXYTKNkLa3Own2jU86A3w",title:"Dil-E-Nadaan",avatar:"https://yt3.ggpht.com/ytc/AMLnZu-OlsdSUHgAUOTV6bYLAUmL3AQbsFzglQ4J2WrdPw=s68-c-k-c0x00ffffff-no-rj",channel:"Kavita Seth",duration:"6:22",views:"23 lakh views",time:"2 year ago"},{thumbnail:"https://i.ytimg.com/vi/ESbioodSaHQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpdS8B7DqNd9QnqlU07_FHI7jAew",title:"一花一世界 (One flower is a world) | 巫娜 | 古琴",avatar:"https://yt3.ggpht.com/qzZgj0nZR9J4wYsu-d6EJ4UzoRquUAMEfkrEintZKAER5fSU_kcoslpg17OOckxVfwX9Obo8=s68-c-k-c0x00ffffff-no-rj",channel:"Lotus",duration:"57:04",views:"11 lakh views",time:"1 year ago"},{thumbnail:"https://i.ytimg.com/vi/961LpbX4zCU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBryyxozY-olSra93v2enscn-_mOg",title:"Peter Cat Recording Co. - Floated By",avatar:"https://yt3.ggpht.com/ytc/AMLnZu97D06Ji45UQbR7smkFybVGEZkBii00W9ar6ilGQw=s88-c-k-c0x00ffffff-no-rj",channel:"Peter Cat Recording Co.",duration:"4:36",views:"6.6 lakh views",time:"3 year ago"},{thumbnail:"https://i.ytimg.com/vi/hqtzpED1y-I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ_BErOeHpLM23bjIlZj0CZz0exA",title:"How to Stop Wasting Your Life - Carl Jung as Therapist",avatar:"https://yt3.ggpht.com/ytc/AMLnZu-OlsdSUHgAUOTV6bYLAUmL3AQbsFzglQ4J2WrdPw=s68-c-k-c0x00ffffff-no-rj",channel:"Academy of Ideas",duration:"1:15",views:"2.7 lakh views",time:"1 month ago"},{thumbnail:"https://i.ytimg.com/vi/px_sz1GPHXw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANNAe4QasiEh-9wCru1wQDEHAh9Q",title:"LIFAFA लिफाफा - Nikamma निकम्मा",avatar:"https://yt3.ggpht.com/XQWHGAaKhucjZ0CHKzwSx81_DStGKIlwxjcKfa_S799Vst1rfneLXhlfGhG0-3T69dJHbNuzNQA=s48-c-k-c0x00ffffff-no-nd-rj",channel:"LIFAFA",duration:"3:31",views:"19 lakh views",time:"3 year ago"},{thumbnail:"https://i.ytimg.com/vi/IDDmrzzB14M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP0RE7yHrX19Qjci_E2CFpVMfmhg",title:"CS50 2022 - Lecture 0 - Scratch",avatar:"https://yt3.ggpht.com/ytc/AMLnZu_8E2fVaNH2D20xn32ph9axohUCgWaLpXO_tXJ14g=s48-c-k-c0x00ffffff-no-rj",channel:"CS50",duration:"2:45:40",views:"1 lakh views",time:"1 month ago"},{thumbnail:"https://i.ytimg.com/vi/H_IQfxM4oMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApCZMqBpUSHa2uo_kguMswUvFl1g",title:"The Struggles When ADHD Goes Unacknowledged and Under-Discussed",avatar:"https://yt3.ggpht.com/m1WI2xsDLyJUGUnt2ZRSxqsT89gSnRaUQunO5p5WmpU1113oO31EXNl_8w1cuZXmIA0EHOTyJw=s48-c-k-c0x00ffffff-no-rj",channel:"How to ADHD",duration:"14:19",views:"1.1 lakh views",time:"8 day ago"},{thumbnail:"https://i.ytimg.com/vi/XPKpOBGsoOs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW5gEv5H38UiHn0VSagezfxi12kQ",title:"[Playlist] A Collection of Jazz from Haruki Murakami's 'Norwegian Wood'",avatar:"https://yt3.ggpht.com/e8P1A4RdQYbCQdoDBPamz_G_Yl5bSEtdvQquhvWEKy5sYmR1BpIcDinyGxYqB1fQRdO0CB_Q=s48-c-k-c0x00ffffff-no-rj",channel:"JAZZ IS EVERYWHERE",duration:"58:23",views:"9 lakh views",time:"7 month ago"},{thumbnail:"https://i.ytimg.com/vi/KfuKKeshzSw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN1EkwrB3fi7-5J-EEdYXXuFmk2A",title:"intesaab (faiz ahmed faiz)- ammar rashid",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",channel:"Time ho to sun lena",duration:"4:19",views:"22k views",time:"2 year ago"},{thumbnail:"https://i.ytimg.com/vi/T3ztasKf8rY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8v34fhy-X_am7Kzgi7PUtND4Uw",title:"awaraa - zeb bangash and michael winograd (reupload)",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",channel:"Time ho to sun lena",duration:"1:54",views:"12k views",time:"3 year ago"},{thumbnail:"https://i.ytimg.com/vi/rpCRyjUl5iM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMgBROftUecBosQukFCZg3MBru-A",title:"Kya Farak Padega",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",channel:"Time ho to sun lena",duration:"4:45",views:"6.7k views",time:"2 year ago"},{thumbnail:"https://i.ytimg.com/vi/vicEyHkNpAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6APyofjAdFaIqdY2ptW3KshGrTQ",title:"Kya Baat Jo Benaqab Ho - Saby Singh",avatar:"https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",channel:"Time ho to sun lena",duration:"5:28",views:"3k views",time:"3 year ago"}]}}},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-[calc(100vh-110px)] bg-[#181818] pt-5 pb-20 px-20 overflow-y-scroll"},[e("div",{staticClass:"grid grid-cols-12 gap-x-4 gap-y-10"},t._l(t.videos,(function(video){return e("home-item",{key:video.name,attrs:{video:video}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeItem:n(254).default})},272:function(t,e,n){"use strict";n.r(e);var c={name:"IndexPage"},o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-screen overflow-y-hidden"},[e("Header"),t._v(" "),e("div",{staticClass:"flex flex-row w-full h-full"},[e("Sidebar"),t._v(" "),e("div",{staticClass:"flex flex-col w-full h-full"},[e("Tagbar"),t._v(" "),e("Home")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(257).default,Sidebar:n(269).default,Tagbar:n(270).default,Home:n(271).default})}}]);