parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H3RA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initAbout=e;var o=60;function t(o,t){return Math.floor(Math.random()*(t-o+1)+o)}function n(){getComputedStyle(document.body);for(var n=1;n<o;n++){var e=t(0,$(window).width()-1),r=t(-1e3,1e3);console.log($(window).width()),r+80<$(window).height()-900&&($(".intro").append('<div class="drop" id="drop'+n+'"></div>'),$("#drop"+n).css("left",e),$("#drop"+n).css("top",r))}}function e(){$(".nameIntroduction").css("display","none"),$(".intro-title-wrapper").on("click",function(o){"none"==$(".nameIntroduction").css("display")?($(".nameIntroduction").css("display","block"),window.scroll(0,$(".selfIntroduction").outerHeight())):($(".nameIntroduction").css("display","none"),window.scroll(0,0))}),n(),$(".drop").hide(),$(".selfIntroduction .intro-title-wrapper").mouseover(function(){$(".drop").toggle()}),$(".selfIntroduction .intro-title-wrapper").mouseout(function(){$(".drop").toggle()}),$(".ripple-wrapper").hide(),$(".nameIntroduction .intro-title-wrapper").mouseover(function(){$(".ripple-wrapper").toggle()}),$(".nameIntroduction .intro-title-wrapper").mouseout(function(){$(".ripple-wrapper").toggle()})}
},{}]},{},["H3RA"], null)
//# sourceMappingURL=/Portfolio/about.78c951ea.js.map