!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){var e=document.querySelectorAll(".header-contacts__phone-number")[1],t=document.querySelector(".header-contacts__arrow");t.addEventListener("click",(function(){e.style.opacity?(e.style.opacity=0,e.style.marginTop="0",e.removeAttribute("style"),t.style.transform="rotate(0)",t.removeAttribute("style")):(e.style.opacity=1,e.style.marginTop="30px",t.style.transform="rotate(180deg)")}))},r=function(){var e=document.querySelector(".popup-dialog-menu");document.body.addEventListener("click",(function(t){var n=t.target;n.matches(".menu__icon")?e.style.transform="translate3d(0, 0, 0)":(n.matches(".close-menu")||n.matches(".menu-link"))&&(e.style.transform="",e.removeAttribute("style"))}))},o=function(){document.querySelectorAll('a[href*="#"]').forEach((function(e){e.matches(".full-list")||e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))},s=function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelector(".popup-privacy"),n=document.querySelector(".nav-list-popup-repair"),i=function(i,r){r.matches(".full-list")&&(e.style.visibility="initial",n.removeAttribute("style"),document.body.style.overflow="hidden"),r.matches(".link-privacy")&&(t.style.visibility="initial",document.body.style.overflow="hidden"),(r.matches(".close")||r.matches(".popup"))&&(n.style.transition="0s",i.removeAttribute("style"),document.body.style.overflow="",document.body.removeAttribute("style"))};document.body.addEventListener("click",(function(n){var r=n.target;i(t,r),i(e,r)}))},l=function(){var e=document.querySelectorAll("input"),t=!0,n=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;"phone"===s.name&&l("#".concat(s.id))}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7(___)___-__-__",n=document.querySelector(e);function i(e){var n=e.keyCode,i=t,r=i.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,l=i.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||r.charAt(s):e}));-1!==(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}n.addEventListener("input",i),n.addEventListener("focus",i),n.addEventListener("blur",i)}},a=function(){var e=document.querySelector(".wrapper_small"),t=document.querySelectorAll(".formula-item-popup"),n=document.querySelectorAll(".formula-item__icon"),i=document.querySelectorAll(".formula-item__icon-inner"),r=document.querySelectorAll(".formula-item"),o=document.querySelectorAll(".formula-item-popup > .p"),s=document.getElementById("formula"),l=document.querySelectorAll(".formula-slider__slide"),a=document.querySelector(".formula-slider");e.addEventListener("mouseover",(function(e){var s=e.target;n.forEach((function(e,n){s.closest(".formula-item__icon")===e?(t[n].style.visibility="initial",t[n].style.opacity=1,r[n].style.zIndex=1,i[n].style.opacity=1):(t[n].removeAttribute("style"),i[n].removeAttribute("style"),r[n].removeAttribute("style"),o[n].removeAttribute("style")),t[n].clientHeight>e.getBoundingClientRect().top&&(t[n].style.transform="rotate(180deg)",t[n].style.top="100px",r[n].style.zIndex=1,o[n].style.transform="rotate(180deg)")}))}));for(var c=0;c<l.length;c++)if(document.documentElement.clientWidth<769)for(var d=0;d<l.length;d++)l[d].style.flex="0 0 100%",l[0].classList.add("active-item");else if(document.documentElement.clientWidth<1025)for(var u=0;u<l.length;u++)l[u].style.flex="0 0 35%",l[1].classList.add("active-item");a.style.display="flex",a.style.margin="0 0 70px 0",window.addEventListener("resize",(function(){if(document.documentElement.clientWidth<769)for(var e=0;e<l.length;e++)l[e].style.flex="0 0 100%",l[0].classList.add("active-item");else if(document.documentElement.clientWidth<1025)for(var t=0;t<l.length;t++)l[t].classList.remove("active-item"),l[t].style.flex="0 0 35%",l[1].classList.add("active-item")})),s.addEventListener("click",(function(e){var t=e.target;if(t.closest("#formula-arrow_right")){var n=document.querySelectorAll(".formula-slider__slide");a.insertBefore(n[0],n[n.length]);for(var i=0;i<n.length;i++)document.documentElement.clientWidth<769?(l[i].classList.remove("active-item"),n[i].classList.remove("active-item"),n[1].classList.add("active-item")):document.documentElement.clientWidth<1025&&(l[i].classList.remove("active-item"),n[i].classList.remove("active-item"),n[2].classList.add("active-item"))}if(t.closest("#formula-arrow_left")){var r=document.querySelectorAll(".formula-slider__slide");a.insertBefore(r[r.length-1],r[0]);for(var o=0;o<r.length;o++)document.documentElement.clientWidth<769?(l[o].classList.remove("active-item"),r[o].classList.remove("active-item"),r[5].classList.add("active-item")):document.documentElement.clientWidth<1025&&(l[o].classList.remove("active-item"),r[o].classList.remove("active-item"),r[0].classList.add("active-item"))}}))},c=function(){var e=document.getElementById("faq"),t=e.querySelectorAll(".title_block");e.addEventListener("click",(function(e){var n=e.target;t.forEach((function(e){e.classList.contains("msg-active")?e.classList.remove("msg-active"):e===n&&e.classList.toggle("msg-active")}))})),t.forEach((function(e){e.classList.remove("msg-active")}))},d=function(){var e=document.getElementById("transparency"),t=document.querySelector(".popup-transparency"),n=document.querySelectorAll(".transparency-item__img"),i=document.querySelectorAll(".popup-transparency-slider__slide"),r=t.querySelector(".slider-counter-content__current"),o=t.querySelector(".slider-counter-content__total"),s=e.querySelector(".transparency-slider-wrap"),l=e.querySelectorAll(".transparency-item"),a=0;o.textContent=i.length,e.addEventListener("click",(function(e){for(var o=e.target,s=0,l=0;l<n.length;l++)o===n[l]&&(s=l);for(var a=0;a<i.length;a++)a===s?i[s].removeAttribute("style"):i[a].style.display="none";o.closest(".transparency-item__img")&&(t.style.visibility="visible"),r.textContent=s+1,t.addEventListener("click",(function(e){var n=e.target;n.closest("#transparency_right")&&s++,n.closest("#transparency_left")&&s--,s<0&&(s=i.length-1),s>i.length-1&&(s=0);for(var o=0;o<i.length;o++)o===s?i[s].removeAttribute("style"):i[o].style.display="none";document.documentElement.offsetWidth<1091&&c(s),(n.closest(".close")||n.matches(".popup-transparency"))&&t.removeAttribute("style"),r.textContent=s+1}))}));var c=function(e){for(var t=0;t<l.length;t++)l[t].style.display="none";l[e].style.display=""};document.documentElement.offsetWidth<1091&&c(a=0),window.addEventListener("resize",(function(){document.documentElement.offsetWidth>1091?l.forEach((function(e){e.style.display=""})):c(a=0)})),s.addEventListener("click",(function(e){var t=e.target;t.closest("#transparency-arrow_right")&&(++a>l.length-1&&(a=0),c(a)),t.closest("#transparency-arrow_left")&&(--a<0&&(a=l.length-1),c(a))}))},u=function(){var e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(function(t){var n=t.target;n.closest(".button_wide")&&(e.style.visibility="visible"),(n.closest(".close")||n.matches(".popup-consultation"))&&e.removeAttribute("style")}))},m=function(){var e=document.getElementById("problems"),t=document.querySelectorAll(".problems-item__icon"),n=document.querySelectorAll(".problems-item-popup"),i=document.querySelectorAll(".problems-item__icon-inner"),r=document.querySelectorAll(".problem-description");e.addEventListener("mouseover",(function(e){var o=e.target;t.forEach((function(e,t){o.closest(".problems-item__icon")===e?(0===t?n[t].clientHeight>document.documentElement.clientHeight-e.getBoundingClientRect().bottom?(n[t].style.transform="rotate(180deg)",r[t].style.transform="rotate(180deg)",n[t].style.top="-350px"):n[t].clientHeight<document.documentElement.clientHeight-e.getBoundingClientRect().bottom&&(n[t].removeAttribute("style"),r[t].removeAttribute("style")):n[t].clientHeight>e.getBoundingClientRect().top?(n[t].style.transform="rotate(180deg)",r[t].style.transform="rotate(180deg)",n[t].style.top="100px"):n[t].clientHeight<e.getBoundingClientRect().top&&(n[t].removeAttribute("style"),r[t].removeAttribute("style")),n[t].style.visibility="visible",n[t].style.opacity=1,i[t].style.opacity=1):(n[t].removeAttribute("style"),i[t].removeAttribute("style"))}))}));var o=document.querySelectorAll(".problems-slider__slide"),s=0,l=function(e){for(var t=0;t<o.length;t++)o[t].style.display="none",o[t].classList.remove("active-item");o[e].style.display="",o[e].classList.add("active-item")};l(0),window.addEventListener("resize",(function(){document.documentElement.clientWidth<1025&&(s=0)})),e.addEventListener("click",(function(e){var t=e.target;t.closest("#problems-arrow_right")&&(++s>o.length-1&&(s=0),l(s)),t.closest("#problems-arrow_left")&&(--s<0&&(s=o.length-1),l(s))}))};function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){var n=t.main,i=t.wrap,r=t.next,o=t.prev,s=t.position,l=void 0===s?0:s,a=t.slidesToShow,c=void 0===a?3:a,d=t.infinity,u=void 0!==d&&d;t.responsive;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&i||console.warn('slider: Необходимо передать 2 свйства: "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.next=document.querySelector(r),this.prev=document.querySelector(o),this.slidesToShow=c,this.slides=document.querySelector(i).children,this.options={position:l,infinity:u,slideWidth:Math.floor(100/this.slidesToShow)},this.responsive=[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addProClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responseInite&&this.responseInite()}},{key:"addProClass",value:function(){this.main.classList.add("pro-slider"),this.wrap.classList.add("pro-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var i,r=this.slides[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)i.value.classList.add("pro-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n            .pro-slider{\n                overflow: hidden !important;\n            }\n            .pro-slider__wrap{\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .pro-slider__item{\n                display: flex !important;\n                justify-content: center !important;\n                align-items: center !important;\n                flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n                margin: auto 0 !important;\n                max-width: inherit !important;\n            }\n            "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="pro-slider__prev",this.next.className="pro-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .pro-slider__prev,\n            .pro-slider__next {\n                margin: 0 10px;\n                border: 15px solid transparent;\n                background: transparent;\n            }\n            .pro-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .pro-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .pro-slider__prev:hover,\n            .pro-slider__prev:focus,\n            .pro-slider__next:hover,\n            .pro-slider__next:focus{\n                background: transparent;\n                outline: transparent;\n            }\n            ",document.head.appendChild(e)}},{key:"responseInite",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),i=Math.max.apply(Math,p(n)),r=function(){var r=document.documentElement.clientWidth;if(r<i)for(var o=0;o<n.length;o++)r<n[o]&&(e.slidesToShow=e.responsive[o].slidesToShow,e.options.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=t,e.options.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle()};r(),window.addEventListener("resize",r)}}])&&y(t.prototype,n),i&&y(t,i),e}();i(),r(),o(),s(),l(),a(),c(),d(),u(),m(),new v({main:".slider-wrapper",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right",slidesToShow:3}).init()}]);