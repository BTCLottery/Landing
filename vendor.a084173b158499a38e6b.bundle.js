!function(t){function e(e){for(var n,o,r=e[0],c=e[1],u=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);d.length;)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={1:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([17,2]),i()}({10:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);i(2),i(7),i(9),i(10);var n=i(1);i.n(n).a.particlesJS("particles-js",{particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{value:"#567bc1"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:.5,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#567bc1",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1}})},7:function(t,e,i){(function(t){var e;function i(){$(window).width()<992?($(".main-menu").removeClass("fixed-top").addClass("navbar-absolute"),$(".main-menu .nav-item, .main-menu .dropdown, .main-menu .btn-sign-in").removeClass("animated")):($(".main-menu").addClass("fixed-top").removeClass("navbar-absolute"),$(".main-menu .nav-item, .main-menu .dropdown, .main-menu .btn-sign-in").addClass("animated"))}function n(t){$("body").hasClass("template-intro-video")&&(t?($(".navbar-brand-logo-dark").removeClass("d-none"),$(".navbar-brand-logo").addClass("d-none"),$(".btn-sign-in").removeClass("btn-light").addClass("btn-gradient-blue btn-glow")):($(".navbar-brand-logo-dark").addClass("d-none"),$(".navbar-brand-logo").removeClass("d-none"),$(".btn-sign-in").addClass("btn-light").removeClass("btn-gradient-blue btn-glow")))}function s(){var t=$("#navigation"),e=t.find("#slide-line"),i=t.find(".active");i[0]&&e.css({width:i.width()+16,left:i.parent().position().left+(i.parent().width()-i.width())/2-8})}$(window).on("load",(function(){$("body").css("visibility","visible"),setTimeout((function(){$("body").addClass("loaded"),$("#bm").css("visibility","hidden")}),2500),$(".navbar .dropdown").on("mouseover",(function(){if($(this).find(".dropdown-menu").hasClass("show"))return!1;$(".dropdown-toggle",this).dropdown("toggle")})),$(".navbar .dropdown").on("mouseout",(function(){$(this).find(".dropdown-menu").hasClass("show")&&$(".dropdown-toggle",this).dropdown("toggle")})),$(".navbar .dropdown").on("click",(function(){if($(this).hasClass("show"))return!1}));var e={renderer:"svg",autoplay:!0,setSpeed:"4"};t.loadAnimation({container:document.getElementById("bm"),renderer:"svg",loop:!1,autoplay:!0,setSpeed:"2.4",path:"/svganimation/data.json"}),t.loadAnimation({container:document.getElementById("ecosystem"),defaultState:e,loop:!0,path:"/svganimation/ecosystem.json"}),t.loadAnimation({container:document.getElementById("smartcontract"),defaultState:e,loop:!0,path:"/svganimation/smartcontract.json"}),t.loadAnimation({container:document.getElementById("free"),defaultState:e,loop:!0,path:"/svganimation/free.json"}),t.loadAnimation({container:document.getElementById("atomicswap"),defaultState:e,loop:!0,path:"/svganimation/swap.json"}),t.loadAnimation({container:document.getElementById("cryptobonus"),defaultState:e,loop:!0,path:"/svganimation/cryptobonus.json"}),t.loadAnimation({container:document.getElementById("voting"),defaultState:e,loop:!0,path:"/svganimation/voting.json"});t.loadAnimation({container:document.getElementById("loomNetwork"),defaultState:e,loop:!0,autoplay:!0,path:"/svganimation/ethbtclbnb.json"}),$("#mvpInfo, #mvpInfo2").on("click",(function(){$(".cardMvp").toggleClass("flipped"),$(".frontMvp").toggleClass("flippedOpc")})),$(".downArrowsButton").on("click",(function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},600,(function(){window.location.hash=e}))}}))})),function(t,e,a){"use strict";a("html");var o=a("body");a(o).scrollspy({target:"#navigation"}),s(),a(t).on("activate.bs.scrollspy",(function(t){s()})),a(t).scroll((function(){a(t).scrollTop()>=50?a(t).width()>992&&(a(".navbar").addClass("navbar-fixed navbar-shadow"),a(".navbar #slide-line").removeClass("d-none"),n(!0)):(a(".navbar").removeClass("navbar-fixed navbar-shadow"),a(".navbar #slide-line").addClass("d-none"),n(!1))})),i(),a(t).resize((function(){i()})),a(".main-menu .navbar-toggler").click((function(t){a(".main-menu").toggleClass("open",2e3,"swing")})),a(e).click((function(t){"true"==a(".navbar-toggler").attr("aria-expanded")&&a(".navbar-collapse").removeClass("show")})),a('.main-menu a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);(e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),a("html, body").animate({scrollTop:e.offset().top},500,(function(){var t=a(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()})))}}))}(window,document,jQuery),$(".video-btn").click((function(){e=$(this).data("src")})),$("#ico-modal").on("shown.bs.modal",(function(t){$("#video").attr("src",e+"?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")})),$("#ico-modal, #nll-modal, #demo-modal").on("hide.bs.modal",(function(t){var e=document.getElementById("videoTeaser"),i=document.getElementById("videoTeaser").src;e.src=i;var n=document.getElementById("nllVideoTeaser"),s=document.getElementById("nllVideoTeaser").src;n.src=s;var a=document.getElementById("demoVideoTeaser"),o=document.getElementById("demoVideoTeaser").src;a.src=o})),$(".carousel").on("touchstart",(function(t){var e=t.originalEvent.touches[0].pageX;$(this).one("touchmove",(function(t){var i=t.originalEvent.touches[0].pageX;Math.floor(e-i)>5?$(this).carousel("next"):Math.floor(e-i)<-5&&$(this).carousel("prev")})),$(".carousel").on("touchend",(function(){$(this).off("touchmove")}))}))}).call(this,i(8))},9:function(t,e){
/*! flipclock 2015-08-31 */
var i,n,s=function(){};s.extend=function(t,e){"use strict";var i=s.prototype.extend;s._prototyping=!0;var n=new this;i.call(n,t),n.base=function(){},delete s._prototyping;var a=n.constructor,o=n.constructor=function(){if(!s._prototyping)if(this._constructing||this.constructor==o)this._constructing=!0,a.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||i).call(arguments[0],n)};return o.ancestor=this,o.extend=this.extend,o.forEach=this.forEach,o.implement=this.implement,o.prototype=n,o.toString=this.toString,o.valueOf=function(t){return"object"==t?o:a.valueOf()},i.call(o,e),"function"==typeof o.init&&o.init(),o},s.prototype={extend:function(t,e){if(arguments.length>1){var i=this[t];if(i&&"function"==typeof e&&(!i.valueOf||i.valueOf()!=e.valueOf())&&/\bbase\b/.test(e)){var n=e.valueOf();(e=function(){var t=this.base||s.prototype.base;this.base=i;var e=n.apply(this,arguments);return this.base=t,e}).valueOf=function(t){return"object"==t?e:n},e.toString=s.toString}this[t]=e}else if(t){var a=s.prototype.extend;s._prototyping||"function"==typeof this||(a=this.extend||a);for(var o={toSource:null},r=["constructor","toString","valueOf"],c=s._prototyping?0:1;u=r[c++];)t[u]!=o[u]&&a.call(this,u,t[u]);for(var u in t)o[u]||a.call(this,u,t[u])}return this}},s=s.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(t,e,i){for(var n in t)void 0===this.prototype[n]&&e.call(i,t[n],n,t)},implement:function(){for(var t=0;t<arguments.length;t++)"function"==typeof arguments[t]?arguments[t](this.prototype):this.prototype.extend(arguments[t]);return this},toString:function(){return String(this.valueOf())}}),function(t){"use strict";(i=function(t,e,n){return e instanceof Object&&e instanceof Date==0&&(n=e,e=0),new i.Factory(t,e,n)}).Lang={},i.Base=s.extend({buildDate:"2014-12-12",version:"0.7.7",constructor:function(e,i){"object"!=typeof e&&(e={}),"object"!=typeof i&&(i={}),this.setOptions(t.extend(!0,{},e,i))},callback:function(t){if("function"==typeof t){for(var e=[],i=1;i<=arguments.length;i++)arguments[i]&&e.push(arguments[i]);t.apply(this,e)}},log:function(t){window.console&&console.log&&console.log(t)},getOption:function(t){return!!this[t]&&this[t]},getOptions:function(){return this},setOption:function(t,e){this[t]=e},setOptions:function(t){for(var e in t)void 0!==t[e]&&this.setOption(e,t[e])}})}(jQuery),function(t){"use strict";i.Face=i.Base.extend({autoStart:!0,dividers:[],factory:!1,lists:[],constructor:function(t,e){this.dividers=[],this.lists=[],this.base(e),this.factory=t},build:function(){this.autoStart&&this.start()},createDivider:function(e,i,n){"boolean"!=typeof i&&i||(n=i,i=e);var s=['<span class="'+this.factory.classes.dot+' top"></span>','<span class="'+this.factory.classes.dot+' bottom"></span>'].join("");n&&(s=""),e=this.factory.localize(e);var a=['<span class="'+this.factory.classes.divider+" "+(i||"").toLowerCase()+'">','<span class="'+this.factory.classes.label+'">'+(e||"")+"</span>",s,"</span>"],o=t(a.join(""));return this.dividers.push(o),o},createList:function(t,e){"object"==typeof t&&(e=t,t=0);var n=new i.List(this.factory,t,e);return this.lists.push(n),n},reset:function(){this.factory.time=new i.Time(this.factory,this.factory.original?Math.round(this.factory.original):0,{minimumDigits:this.factory.minimumDigits}),this.flip(this.factory.original,!1)},appendDigitToClock:function(t){t.$el.append(!1)},addDigit:function(t){var e=this.createList(t,{classes:{active:this.factory.classes.active,before:this.factory.classes.before,flip:this.factory.classes.flip}});this.appendDigitToClock(e)},start:function(){},stop:function(){},autoIncrement:function(){this.factory.countdown?this.decrement():this.increment()},increment:function(){this.factory.time.addSecond()},decrement:function(){0==this.factory.time.getTimeSeconds()?this.factory.stop():this.factory.time.subSecond()},flip:function(e,i){var n=this;t.each(e,(function(t,e){var s=n.lists[t];s?(i||e==s.digit||s.play(),s.select(e)):n.addDigit(e)}))}})}(jQuery),function(t){"use strict";i.Factory=i.Base.extend({animationRate:1e3,autoStart:!0,callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},classes:{active:"flip-clock-active",before:"flip-clock-before",divider:"flip-clock-divider",dot:"flip-clock-dot",label:"flip-clock-label",flip:"flip",play:"play",wrapper:"flip-clock-wrapper"},clockFace:"HourlyCounter",countdown:!1,defaultClockFace:"HourlyCounter",defaultLanguage:"english",$el:!1,face:!0,lang:!1,language:"english",minimumDigits:0,original:!1,running:!1,time:!1,timer:!1,$wrapper:!1,constructor:function(e,n,s){s||(s={}),this.lists=[],this.running=!1,this.base(s),this.$el=t(e).addClass(this.classes.wrapper),this.$wrapper=this.$el,this.original=n instanceof Date?n:n?Math.round(n):0,this.time=new i.Time(this,this.original,{minimumDigits:this.minimumDigits,animationRate:this.animationRate}),this.timer=new i.Timer(this,s),this.loadLanguage(this.language),this.loadClockFace(this.clockFace,s),this.autoStart&&this.start()},loadClockFace:function(t,e){var n,s="Face",a=!1;return t=t.ucfirst()+s,this.face.stop&&(this.stop(),a=!0),this.$el.html(""),this.time.minimumDigits=this.minimumDigits,(n=i[t]?new i[t](this,e):new i[this.defaultClockFace+s](this,e)).build(),this.face=n,a&&this.start(),this.face},loadLanguage:function(t){var e;return e=i.Lang[t.ucfirst()]?i.Lang[t.ucfirst()]:i.Lang[t]?i.Lang[t]:i.Lang[this.defaultLanguage],this.lang=e},localize:function(t,e){var i=this.lang;if(!t)return null;var n=t.toLowerCase();return"object"==typeof e&&(i=e),i&&i[n]?i[n]:t},start:function(t){var e=this;e.running||e.countdown&&!(e.countdown&&e.time.time>0)?e.log("Trying to start timer when countdown already at 0"):(e.face.start(e.time),e.timer.start((function(){e.flip(),"function"==typeof t&&t()})))},stop:function(t){for(var e in this.face.stop(),this.timer.stop(t),this.lists)this.lists.hasOwnProperty(e)&&this.lists[e].stop()},reset:function(t){this.timer.reset(t),this.face.reset()},setTime:function(t){this.time.time=t,this.flip(!0)},getTime:function(t){return this.time},setCountdown:function(t){var e=this.running;this.countdown=!!t,e&&(this.stop(),this.start())},flip:function(t){this.face.flip(!1,t)}})}(jQuery),function(t){"use strict";i.List=i.Base.extend({digit:0,classes:{active:"flip-clock-active",before:"flip-clock-before",flip:"flip"},factory:!1,$el:!1,$obj:!1,items:[],lastDigit:0,constructor:function(t,e,i){this.factory=t,this.digit=e,this.lastDigit=e,this.$el=this.createList(),this.$obj=this.$el,e>0&&this.select(e),this.factory.$el.append(this.$el)},select:function(t){if(void 0===t?t=this.digit:this.digit=t,this.digit!=this.lastDigit){var e=this.$el.find("."+this.classes.before).removeClass(this.classes.before);this.$el.find("."+this.classes.active).removeClass(this.classes.active).addClass(this.classes.before),this.appendListItem(this.classes.active,this.digit),e.remove(),this.lastDigit=this.digit}},play:function(){this.$el.addClass(this.factory.classes.play)},stop:function(){var t=this;setTimeout((function(){t.$el.removeClass(t.factory.classes.play)}),this.factory.timer.interval)},createListItem:function(t,e){return['<li class="'+(t||"")+'">','<a href="#">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+(e||"")+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+(e||"")+"</div>","</div>","</a>","</li>"].join("")},appendListItem:function(t,e){var i=this.createListItem(t,e);this.$el.append(i)},createList:function(){var e=this.getPrevDigit()?this.getPrevDigit():this.digit;return t(['<ul class="'+this.classes.flip+" "+(this.factory.running?this.factory.classes.play:"")+'">',this.createListItem(this.classes.before,e),this.createListItem(this.classes.active,this.digit),"</ul>"].join(""))},getNextDigit:function(){return 9==this.digit?0:this.digit+1},getPrevDigit:function(){return 0==this.digit?9:this.digit-1}})}(jQuery),function(t){"use strict";String.prototype.ucfirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1)},t.fn.FlipClock=function(e,n){return new i(t(this),e,n)},t.fn.flipClock=function(e,i){return t.fn.FlipClock(e,i)}}(jQuery),function(t){"use strict";i.Time=i.Base.extend({time:0,factory:!1,minimumDigits:0,constructor:function(t,e,i){"object"!=typeof i&&(i={}),i.minimumDigits||(i.minimumDigits=t.minimumDigits),this.base(i),this.factory=t,e&&(this.time=e)},convertDigitsToArray:function(t){var e=[];t=t.toString();for(var i=0;i<t.length;i++)t[i].match(/^\d*$/g)&&e.push(t[i]);return e},digit:function(t){var e=this.toString(),i=e.length;return!!e[i-t]&&e[i-t]},digitize:function(e){var i=[];if(t.each(e,(function(t,e){1==(e=e.toString()).length&&(e="0"+e);for(var n=0;n<e.length;n++)i.push(e.charAt(n))})),i.length>this.minimumDigits&&(this.minimumDigits=i.length),this.minimumDigits>i.length)for(var n=i.length;n<this.minimumDigits;n++)i.unshift("0");return i},getDateObject:function(){return this.time instanceof Date?this.time:new Date((new Date).getTime()+1e3*this.getTimeSeconds())},getDayCounter:function(t){var e=[this.getDays(),this.getHours(!0),this.getMinutes(!0)];return t&&e.push(this.getSeconds(!0)),this.digitize(e)},getDays:function(t){var e=this.getTimeSeconds()/60/60/24;return t&&(e%=7),Math.floor(e)},getHourCounter:function(){return this.digitize([this.getHours(),this.getMinutes(!0),this.getSeconds(!0)])},getHourly:function(){return this.getHourCounter()},getHours:function(t){var e=this.getTimeSeconds()/60/60;return t&&(e%=24),Math.floor(e)},getMilitaryTime:function(t,e){void 0===e&&(e=!0),t||(t=this.getDateObject());var i=[t.getHours(),t.getMinutes()];return!0===e&&i.push(t.getSeconds()),this.digitize(i)},getMinutes:function(t){var e=this.getTimeSeconds()/60;return t&&(e%=60),Math.floor(e)},getMinuteCounter:function(){return this.digitize([this.getMinutes(),this.getSeconds(!0)])},getTimeSeconds:function(t){return t||(t=new Date),this.time instanceof Date?this.factory.countdown?Math.max(this.time.getTime()/1e3-t.getTime()/1e3,0):t.getTime()/1e3-this.time.getTime()/1e3:this.time},getTime:function(t,e){void 0===e&&(e=!0),t||(t=this.getDateObject()),console.log(t);var i=t.getHours(),n=[i>12?i-12:0===i?12:i,t.getMinutes()];return!0===e&&n.push(t.getSeconds()),this.digitize(n)},getSeconds:function(t){var e=this.getTimeSeconds();return t&&(60==e?e=0:e%=60),Math.ceil(e)},getWeeks:function(t){var e=this.getTimeSeconds()/60/60/24/7;return t&&(e%=52),Math.floor(e)},removeLeadingZeros:function(e,i){var n=0,s=[];return t.each(i,(function(t,a){e>t?n+=parseInt(i[t],10):s.push(i[t])})),0===n?s:i},addSeconds:function(t){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()+t):this.time+=t},addSecond:function(){this.addSeconds(1)},subSeconds:function(t){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()-t):this.time-=t},subSecond:function(){this.subSeconds(1)},toString:function(){return this.getTimeSeconds().toString()}})}(jQuery),function(t){"use strict";i.Timer=i.Base.extend({callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},count:0,factory:!1,interval:1e3,animationRate:1e3,constructor:function(t,e){this.base(e),this.factory=t,this.callback(this.callbacks.init),this.callback(this.callbacks.create)},getElapsed:function(){return this.count*this.interval},getElapsedTime:function(){return new Date(this.time+this.getElapsed())},reset:function(t){clearInterval(this.timer),this.count=0,this._setInterval(t),this.callback(this.callbacks.reset)},start:function(t){this.factory.running=!0,this._createTimer(t),this.callback(this.callbacks.start)},stop:function(t){this.factory.running=!1,this._clearInterval(t),this.callback(this.callbacks.stop),this.callback(t)},_clearInterval:function(){clearInterval(this.timer)},_createTimer:function(t){this._setInterval(t)},_destroyTimer:function(t){this._clearInterval(),this.timer=!1,this.callback(t),this.callback(this.callbacks.destroy)},_interval:function(t){this.callback(this.callbacks.interval),this.callback(t),this.count++},_setInterval:function(t){var e=this;e._interval(t),e.timer=setInterval((function(){e._interval(t)}),this.interval)}})}(jQuery),n=jQuery,i.TwentyFourHourClockFace=i.Face.extend({constructor:function(t,e){this.base(t,e)},build:function(t){var e=this,s=this.factory.$el.find("ul");this.factory.time.time||(this.factory.original=new Date,this.factory.time=new i.Time(this.factory,this.factory.original)),(t=t||this.factory.time.getMilitaryTime(!1,this.showSeconds)).length>s.length&&n.each(t,(function(t,i){e.createList(i)})),this.createDivider(),this.createDivider(),n(this.dividers[0]).insertBefore(this.lists[this.lists.length-2].$el),n(this.dividers[1]).insertBefore(this.lists[this.lists.length-4].$el),this.base()},flip:function(t,e){this.autoIncrement(),t=t||this.factory.time.getMilitaryTime(!1,this.showSeconds),this.base(t,e)}}),function(t){i.CounterFace=i.Face.extend({shouldAutoIncrement:!1,constructor:function(t,e){"object"!=typeof e&&(e={}),t.autoStart=!!e.autoStart,e.autoStart&&(this.shouldAutoIncrement=!0),t.increment=function(){t.countdown=!1,t.setTime(t.getTime().getTimeSeconds()+1)},t.decrement=function(){t.countdown=!0;var e=t.getTime().getTimeSeconds();e>0&&t.setTime(e-1)},t.setValue=function(e){t.setTime(e)},t.setCounter=function(e){t.setTime(e)},this.base(t,e)},build:function(){var e=this,i=this.factory.$el.find("ul"),n=this.factory.getTime().digitize([this.factory.getTime().time]);n.length>i.length&&t.each(n,(function(t,i){e.createList(i).select(i)})),t.each(this.lists,(function(t,e){e.play()})),this.base()},flip:function(t,e){this.shouldAutoIncrement&&this.autoIncrement(),t||(t=this.factory.getTime().digitize([this.factory.getTime().time])),this.base(t,e)},reset:function(){this.factory.time=new i.Time(this.factory,this.factory.original?Math.round(this.factory.original):0),this.flip()}})}(jQuery),function(t){i.DailyCounterFace=i.Face.extend({showSeconds:!0,constructor:function(t,e){this.base(t,e)},build:function(e){var i=this,n=this.factory.$el.find("ul"),s=0;(e=e||this.factory.time.getDayCounter(this.showSeconds)).length>n.length&&t.each(e,(function(t,e){i.createList(e)})),this.showSeconds?t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el):s=2,t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4+s].$el),t(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length-6+s].$el),t(this.createDivider("Days",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(t,e){t||(t=this.factory.time.getDayCounter(this.showSeconds)),this.autoIncrement(),this.base(t,e)}})}(jQuery),function(t){i.HourlyCounterFace=i.Face.extend({constructor:function(t,e){this.base(t,e)},build:function(e,i){var n=this,s=this.factory.$el.find("ul");(i=i||this.factory.time.getHourCounter()).length>s.length&&t.each(i,(function(t,e){n.createList(e)})),t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el),t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4].$el),e||t(this.createDivider("Hours",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(t,e){t||(t=this.factory.time.getHourCounter()),this.autoIncrement(),this.base(t,e)},appendDigitToClock:function(t){this.base(t),this.dividers[0].insertAfter(this.dividers[0].next())}})}(jQuery),jQuery,i.MinuteCounterFace=i.HourlyCounterFace.extend({clearExcessDigits:!1,constructor:function(t,e){this.base(t,e)},build:function(){this.base(!0,this.factory.time.getMinuteCounter())},flip:function(t,e){t||(t=this.factory.time.getMinuteCounter()),this.base(t,e)}}),function(t){i.TwelveHourClockFace=i.TwentyFourHourClockFace.extend({meridium:!1,meridiumText:"AM",build:function(){var e=this.factory.time.getTime(!1,this.showSeconds);this.base(e),this.meridiumText=this.getMeridium(),this.meridium=t(['<ul class="flip-clock-meridium">',"<li>",'<a href="#">'+this.meridiumText+"</a>","</li>","</ul>"].join("")),this.meridium.insertAfter(this.lists[this.lists.length-1].$el)},flip:function(t,e){this.meridiumText!=this.getMeridium()&&(this.meridiumText=this.getMeridium(),this.meridium.find("a").html(this.meridiumText)),this.base(this.factory.time.getTime(!1,this.showSeconds),e)},getMeridium:function(){return(new Date).getHours()>=12?"PM":"AM"},isPM:function(){return"PM"==this.getMeridium()},isAM:function(){return"AM"==this.getMeridium()}})}(jQuery),jQuery,i.Lang.Arabic={years:"سنوات",months:"شهور",days:"أيام",hours:"ساعات",minutes:"دقائق",seconds:"ثواني"},i.Lang.ar=i.Lang.Arabic,i.Lang["ar-ar"]=i.Lang.Arabic,i.Lang.arabic=i.Lang.Arabic,jQuery,i.Lang.Danish={years:"År",months:"Måneder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},i.Lang.da=i.Lang.Danish,i.Lang["da-dk"]=i.Lang.Danish,i.Lang.danish=i.Lang.Danish,jQuery,i.Lang.German={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},i.Lang.de=i.Lang.German,i.Lang["de-de"]=i.Lang.German,i.Lang.german=i.Lang.German,jQuery,i.Lang.English={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},i.Lang.en=i.Lang.English,i.Lang["en-us"]=i.Lang.English,i.Lang.english=i.Lang.English,jQuery,i.Lang.Spanish={years:"Años",months:"Meses",days:"Días",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},i.Lang.es=i.Lang.Spanish,i.Lang["es-es"]=i.Lang.Spanish,i.Lang.spanish=i.Lang.Spanish,jQuery,i.Lang.Finnish={years:"Vuotta",months:"Kuukautta",days:"Päivää",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},i.Lang.fi=i.Lang.Finnish,i.Lang["fi-fi"]=i.Lang.Finnish,i.Lang.finnish=i.Lang.Finnish,jQuery,i.Lang.French={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},i.Lang.fr=i.Lang.French,i.Lang["fr-ca"]=i.Lang.French,i.Lang.french=i.Lang.French,jQuery,i.Lang.Italian={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},i.Lang.it=i.Lang.Italian,i.Lang["it-it"]=i.Lang.Italian,i.Lang.italian=i.Lang.Italian,jQuery,i.Lang.Latvian={years:"Gadi",months:"Mēneši",days:"Dienas",hours:"Stundas",minutes:"Minūtes",seconds:"Sekundes"},i.Lang.lv=i.Lang.Latvian,i.Lang["lv-lv"]=i.Lang.Latvian,i.Lang.latvian=i.Lang.Latvian,jQuery,i.Lang.Dutch={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},i.Lang.nl=i.Lang.Dutch,i.Lang["nl-be"]=i.Lang.Dutch,i.Lang.dutch=i.Lang.Dutch,jQuery,i.Lang.Norwegian={years:"År",months:"Måneder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},i.Lang.no=i.Lang.Norwegian,i.Lang.nb=i.Lang.Norwegian,i.Lang["no-nb"]=i.Lang.Norwegian,i.Lang.norwegian=i.Lang.Norwegian,jQuery,i.Lang.Portuguese={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},i.Lang.pt=i.Lang.Portuguese,i.Lang["pt-br"]=i.Lang.Portuguese,i.Lang.portuguese=i.Lang.Portuguese,jQuery,i.Lang.Russian={years:"лет",months:"месяцев",days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"},i.Lang.ru=i.Lang.Russian,i.Lang["ru-ru"]=i.Lang.Russian,i.Lang.russian=i.Lang.Russian,jQuery,i.Lang.Swedish={years:"År",months:"Månader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},i.Lang.sv=i.Lang.Swedish,i.Lang["sv-se"]=i.Lang.Swedish,i.Lang.swedish=i.Lang.Swedish,jQuery,i.Lang.Chinese={years:"年",months:"月",days:"日",hours:"时",minutes:"分",seconds:"秒"},i.Lang.zh=i.Lang.Chinese,i.Lang["zh-cn"]=i.Lang.Chinese,i.Lang.chinese=i.Lang.Chinese}});