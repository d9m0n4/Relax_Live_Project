!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelectorAll(".header-contacts__phone-number")[1],t=document.querySelector(".header-contacts__arrow");t.addEventListener("click",(function(){e.style.opacity?(e.style.opacity=0,e.style.marginTop="0",e.removeAttribute("style"),t.style.transform="rotate(0)",t.removeAttribute("style")):(e.style.opacity=1,e.style.marginTop="30px",t.style.transform="rotate(180deg)")}))},r=function(){var e=document.querySelector(".popup-dialog-menu");document.body.addEventListener("click",(function(t){var n=t.target;n.matches(".menu__icon")?e.style.transform="translate3d(0, 0, 0)":(n.matches(".close-menu")||n.matches(".menu-link"))&&(e.style.transform="",e.removeAttribute("style"))}))},i=function(){document.querySelectorAll('a[href*="#"]').forEach((function(e){e.matches(".full-list")||e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))},l=function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelector(".popup-privacy"),n=document.querySelector(".nav-list-popup-repair"),o=function(o,r){r.matches(".full-list")&&(e.style.visibility="initial",n.removeAttribute("style"),document.body.style.overflow="hidden"),r.matches(".link-privacy")&&(t.style.visibility="initial",document.body.style.overflow="hidden"),(r.matches(".close")||r.matches(".popup"))&&(n.style.transition="0s",o.removeAttribute("style"),document.body.style.overflow="",document.body.removeAttribute("style"))};document.body.addEventListener("click",(function(n){var r=n.target;o(t,r),o(e,r)}))},s=function(){var e=document.querySelectorAll("input"),t=!0,n=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value;"phone"===l.name&&s("#".concat(l.id))}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7(___)___-__-__",n=document.querySelector(e);function o(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,s=o.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||r.charAt(l):e}));-1!==(l=s.indexOf("_"))&&(s=s.slice(0,l));var c=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")}n.addEventListener("input",o),n.addEventListener("focus",o),n.addEventListener("blur",o)}},c=function(){var e=document.querySelector(".wrapper_small"),t=document.querySelectorAll(".formula-item-popup"),n=document.querySelectorAll(".formula-item__icon"),o=document.querySelectorAll(".formula-item__icon-inner"),r=document.querySelectorAll(".formula-item"),i=document.querySelectorAll(".formula-item-popup > .p"),l=document.getElementById("formula"),s=document.querySelectorAll(".formula-slider__slide"),c=document.querySelector(".formula-slider");e.addEventListener("mouseover",(function(e){var l=e.target;n.forEach((function(e,n){l.closest(".formula-item__icon")===e?(t[n].style.visibility="initial",t[n].style.opacity=1,r[n].style.zIndex=1,o[n].style.opacity=1):(t[n].removeAttribute("style"),o[n].removeAttribute("style"),r[n].removeAttribute("style"),i[n].removeAttribute("style")),t[n].clientHeight>e.getBoundingClientRect().top&&(t[n].style.transform="rotate(180deg)",t[n].style.top="100px",r[n].style.zIndex=1,i[n].style.transform="rotate(180deg)")}))}));for(var a=0;a<s.length;a++)if(document.documentElement.clientWidth<769)for(var d=0;d<s.length;d++)s[d].style.flex="0 0 100%",s[0].classList.add("active-item");else if(document.documentElement.clientWidth<1025)for(var u=0;u<s.length;u++)s[u].style.flex="0 0 35%",s[1].classList.add("active-item");c.style.display="flex",c.style.margin="0 0 70px 0",window.addEventListener("resize",(function(){if(document.documentElement.clientWidth<769)for(var e=0;e<s.length;e++)s[e].style.flex="0 0 100%",s[0].classList.add("active-item");else if(document.documentElement.clientWidth<1025)for(var t=0;t<s.length;t++)s[t].classList.remove("active-item"),s[t].style.flex="0 0 35%",s[1].classList.add("active-item")})),l.addEventListener("click",(function(e){var t=e.target;if(t.closest("#formula-arrow_right")){var n=document.querySelectorAll(".formula-slider__slide");c.insertBefore(n[0],n[n.length]);for(var o=0;o<n.length;o++)document.documentElement.clientWidth<769?(s[o].classList.remove("active-item"),n[o].classList.remove("active-item"),n[1].classList.add("active-item")):document.documentElement.clientWidth<1025&&(s[o].classList.remove("active-item"),n[o].classList.remove("active-item"),n[2].classList.add("active-item"))}if(t.closest("#formula-arrow_left")){var r=document.querySelectorAll(".formula-slider__slide");c.insertBefore(r[r.length-1],r[0]);for(var i=0;i<r.length;i++)document.documentElement.clientWidth<769?(s[i].classList.remove("active-item"),r[i].classList.remove("active-item"),r[5].classList.add("active-item")):document.documentElement.clientWidth<1025&&(s[i].classList.remove("active-item"),r[i].classList.remove("active-item"),r[0].classList.add("active-item"))}}))},a=function(){var e=document.getElementById("faq"),t=e.querySelectorAll(".title_block");e.addEventListener("click",(function(e){var n=e.target;t.forEach((function(e){e.classList.contains("msg-active")?e.classList.remove("msg-active"):e===n&&e.classList.toggle("msg-active")}))})),t.forEach((function(e){e.classList.remove("msg-active")}))},d=function(){var e=document.getElementById("transparency"),t=document.querySelector(".popup-transparency"),n=document.querySelectorAll(".transparency-item__img"),o=document.querySelectorAll(".popup-transparency-slider__slide"),r=t.querySelector(".slider-counter-content__current"),i=t.querySelector(".slider-counter-content__total"),l=e.querySelector(".transparency-slider-wrap"),s=e.querySelectorAll(".transparency-item"),c=0;i.textContent=o.length,e.addEventListener("click",(function(e){for(var i=e.target,l=0,s=0;s<n.length;s++)i===n[s]&&(l=s);for(var c=0;c<o.length;c++)c===l?o[l].removeAttribute("style"):o[c].style.display="none";i.closest(".transparency-item__img")&&(t.style.visibility="visible"),r.textContent=l+1,t.addEventListener("click",(function(e){var n=e.target;n.closest("#transparency_right")&&l++,n.closest("#transparency_left")&&l--,l<0&&(l=o.length-1),l>o.length-1&&(l=0);for(var i=0;i<o.length;i++)i===l?o[l].removeAttribute("style"):o[i].style.display="none";document.documentElement.offsetWidth<1091&&a(l),(n.closest(".close")||n.matches(".popup-transparency"))&&t.removeAttribute("style"),r.textContent=l+1}))}));var a=function(e){for(var t=0;t<s.length;t++)s[t].style.display="none";s[e].style.display=""};document.documentElement.offsetWidth<1091&&a(c=0),window.addEventListener("resize",(function(){document.documentElement.offsetWidth>1091?s.forEach((function(e){e.style.display=""})):a(c=0)})),l.addEventListener("click",(function(e){var t=e.target;t.closest("#transparency-arrow_right")&&(++c>s.length-1&&(c=0),a(c)),t.closest("#transparency-arrow_left")&&(--c<0&&(c=s.length-1),a(c))}))},u=function(){var e=document.querySelector(".popup-consultation");document.body.addEventListener("click",(function(t){var n=t.target;n.closest(".button_wide")&&(e.style.visibility="visible"),(n.closest(".close")||n.matches(".popup-consultation"))&&e.removeAttribute("style")}))},p=function(){var e=document.getElementById("problems"),t=document.querySelectorAll(".problems-item__icon"),n=document.querySelectorAll(".problems-item-popup"),o=document.querySelectorAll(".problems-item__icon-inner"),r=document.querySelectorAll(".problem-description");e.addEventListener("mouseover",(function(e){var i=e.target;t.forEach((function(e,t){i.closest(".problems-item__icon")===e?(0===t?n[t].clientHeight+n[t].clientHeight/2>document.documentElement.clientHeight-e.getBoundingClientRect().bottom?(n[t].style.transform="rotate(180deg)",r[t].style.transform="rotate(180deg)",n[t].style.top="-350px"):n[t].clientHeight+n[t].clientHeight/2<document.documentElement.clientHeight-e.getBoundingClientRect().bottom&&(n[t].removeAttribute("style"),r[t].removeAttribute("style")):n[t].clientHeight>e.getBoundingClientRect().top?(n[t].style.transform="rotate(180deg)",r[t].style.transform="rotate(180deg)",n[t].style.top="100px"):n[t].clientHeight<e.getBoundingClientRect().top&&(n[t].removeAttribute("style"),r[t].removeAttribute("style")),n[t].style.visibility="visible",n[t].style.opacity=1,o[t].style.opacity=1):(n[t].removeAttribute("style"),o[t].removeAttribute("style"))}))}));var i=document.querySelectorAll(".problems-slider__slide"),l=0,s=function(e){for(var t=0;t<i.length;t++)i[t].style.display="none",i[t].classList.remove("active-item");i[e].style.display="",i[e].classList.add("active-item")};s(0),window.addEventListener("resize",(function(){document.documentElement.clientWidth<1025&&(l=0)})),e.addEventListener("click",(function(e){var t=e.target;t.closest("#problems-arrow_right")&&(++l>i.length-1&&(l=0),s(l)),t.closest("#problems-arrow_left")&&(--l<0&&(l=i.length-1),s(l))}))};function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,l=t.position,s=void 0===l?0:l,c=t.slidesToShow,a=void 0===c?3:c,d=t.infinity,u=void 0===d||d;t.responsive;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('slider: Необходимо передать 2 свйства: "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=a,this.slides=document.querySelector(o).children,this.options={position:s,infinity:u,slideWidth:Math.floor(100/this.slidesToShow)},this.responsive=[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addProClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responseInite&&this.responseInite()}},{key:"addProClass",value:function(){this.main.classList.add("pro-slider"),this.wrap.classList.add("pro-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var o,r=this.slides[Symbol.iterator]();!(e=(o=r.next()).done);e=!0)o.value.classList.add("pro-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n            .pro-slider{\n                overflow: hidden !important;\n            }\n            .pro-slider__wrap{\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .pro-slider__item{\n                display: flex !important;\n                justify-content: center !important;\n                align-items: center !important;\n                flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n                margin: auto 0 !important;\n                max-width: inherit !important;\n            }\n            "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="pro-slider__prev",this.next.className="pro-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .pro-slider__prev,\n            .pro-slider__next {\n                margin: 0 10px;\n                border: 15px solid transparent;\n                background: transparent;\n            }\n            .pro-slider__prev {\n                border-right-color: #19b5fe;\n            }\n            .pro-slider__next {\n                border-left-color: #19b5fe;\n            }\n            .pro-slider__prev:hover,\n            .pro-slider__prev:focus,\n            .pro-slider__next:hover,\n            .pro-slider__next:focus{\n                background: transparent;\n                outline: transparent;\n            }\n            ",document.head.appendChild(e)}},{key:"responseInite",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,m(n)),r=function(){var r=document.documentElement.clientWidth;if(r<o)for(var i=0;i<n.length;i++)r<n[i]&&(e.slidesToShow=e.responsive[i].slidesToShow,e.options.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=t,e.options.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle()};r(),window.addEventListener("resize",r)}}])&&y(t.prototype,n),o&&y(t,o),e}(),v=function(){var e=document.querySelectorAll(".reviews-slider__slide"),t=document.getElementById("reviews"),n=0;t.addEventListener("click",(function(t){var o=t.target;o.closest("#reviews-arrow_right")&&n++,o.closest("#reviews-arrow_left")&&n--,n>e.length-1&&(n=0),n<0&&(n=e.length-1),e.forEach((function(e,t){t===n?e.removeAttribute("style"):e.style.display="none"}))}))},h=function(e){var t=document.getElementById("scheme"),n=document.getElementById("scheme-list"),o=document.querySelectorAll(".scheme-nav__item"),r=document.querySelectorAll(".scheme-description-block"),i=document.querySelectorAll(".scheme-slider__slide");e(t,n,70,"#nav-arrow-scheme_left","#nav-arrow-scheme_right",20),t.addEventListener("click",(function(e){var t=e.target;o.forEach((function(e,n){if(o[n].classList.remove("active"),t.closest(".scheme-nav__item")===e){o[n].classList.add("active");for(var l=0;l<i.length;l++)l===n?i[n].removeAttribute("style"):i[l].style.display="none";for(var s=0;s<r.length;s++)s===n?r[s].classList.add("visible-content-block"):r[s].classList.remove("visible-content-block")}}))}))},g=function(e){var t=document.querySelector(".nav-list"),n=document.getElementById("repair-types"),o=document.querySelectorAll(".repair-types-nav__item"),r=function(e){var t=e.querySelectorAll(".repair-types-slider__slide"),n=document.querySelector(".slider-counter-content__total"),o=document.querySelector(".slider-counter-content__current");n.textContent=t.length;var r=0;document.body.addEventListener("click",(function(e){var n=e.target;n.closest("#repair-types-arrow_right")&&r++,n.closest("#repair-types-arrow_left")&&r--,r<0&&(r=0),r>t.length-1&&(r=t.length-1),o.textContent=r+1,t.forEach((function(e,t){e.style.display=t===r?"":"none"}))}))},i=document.querySelector(".types-repair1");r(i),t.addEventListener("click",(function(e){var t=e.target;o.forEach((function(e,n){e.classList.remove("active");var o=document.querySelector(".types-repair"+(n+1));t.closest(".repair-types-nav__item")===e?(r(o),e.classList.add("active"),o.style.display="block"):o.style.display="none",t.closest(".repair-types-nav__item")||(o.style.display="block")}))})),window.addEventListener("resize",(function(){document.documentElement.clientWidth>1025&&(t.style.transform="")})),e(n,t,50,"#nav-arrow-repair-left_base","#nav-arrow-repair-right_base",20)},_=function(e,t,n,o,r,i){var l=0;e.addEventListener("click",(function(e){var s=e.target;document.documentElement.offsetWidth-t.getBoundingClientRect().right<n&&s.closest(r)&&(l-=i,t.style.transform="translateX(".concat(l,"%)")),s.closest(o)&&((l+=i)>0&&(l=0),t.style.transform="translateX(".concat(l,"%)"))}))},b=function(){var e=document.querySelector(".portfolio-slider"),t=document.querySelectorAll(".portfolio-slider__slide"),n=e.querySelectorAll(".portfolio-slider__slide-frame"),o=document.querySelector(".portfolio-slider-mobile").querySelectorAll(".portfolio-slider__slide-frame"),r=document.getElementById("portfolio-arrow_left"),i=document.getElementById("portfolio-arrow_right"),l=document.querySelector(".popup-portfolio"),s=document.querySelectorAll(".popup-portfolio-slider__slide"),c=l.querySelectorAll(".popup-portfolio-text"),a=document.getElementById("popup-portfolio-counter"),d=a.querySelector(".slider-counter-content__current"),u=a.querySelector(".slider-counter-content__total"),p=document.getElementById("popup_portfolio_right"),m=document.getElementById("popup_portfolio_left"),y=document.getElementById("portfolio"),f=document.getElementById("portfolio-arrow-mobile_left"),v=document.getElementById("portfolio-arrow-mobile_right"),h=y.querySelector(".slider-counter-content__current"),g=y.querySelector(".slider-counter-content__total"),_=0,b=function(){document.documentElement.clientWidth<768&&(i.style.display="none",r.style.display="none")};window.addEventListener("resize",b);var S=function(e,t,n,o){e===t.length-1?n.style.display="none":n.style.display="block",0===e||1===t[e]?o.style.display="none":o.style.display="block"};document.body.addEventListener("click",(function(e){var n=e.target;t.forEach((function(e){e.style.transition="transform 0.5s"}));var o=0;if(window.screen.width>1024?o=3:window.screen.width>901?o=2:window.screen.width<901&&(o=1),n.closest("#portfolio-arrow_right")){_++;for(var l=0;l<t.length;l++)t[l].style.transform="translateX(-".concat(t[0].clientWidth*_,"px)")}if(n.closest("#portfolio-arrow_left")){_--;for(var s=0;s<t.length;s++)t[s].style.transform="translateX(-".concat(t[0].clientWidth*_,"px)")}r.style.display=0!==_?"flex":"none",_===t.length-o?i.style.display="none":i.style.display="flex"}));var w=function(e,t){e.forEach((function(e,n){if(t===e){l.style.visibility="initial";for(var o=0;o<c.length;o++)c[o].style.display="none",o===n&&q(n);u.textContent=s.length,d.textContent=n+1,S(n,s,p,m),s.forEach((function(e,t){return e.style.display="none",n===t&&(e.style.display="flex"),x=n}))}}))};f.style.zIndex=30,v.style.zIndex=30;var E=0,x=0,q=function(e){document.documentElement.offsetWidth<1025?(c[e].style.display="flex",c[e].style.justifyContent="space-around",c[e].style.flexDirection="row",c[e].style.flexWrap="wrap"):(c[e].style.display="flex",c[e].style.justifyContent="",c[e].style.flexDirection="",c[e].style.flexWrap="")};f.style.display="none",g.textContent=o.length,document.body.addEventListener("click",(function(e){var t=e.target;if(b(),w(n,t),t.matches(".portfolio-slider__slide-frame")&&w(o,t),t.closest("#popup_portfolio_right")&&(s[x].style.display="none",c[x].style.display="none",x++,s[x].style.display="flex",d.textContent=x+1,q(x),b(),S(x,s,p,m)),t.closest("#popup_portfolio_left")&&(s[x].style.display="none",c[x].style.display="none",x--,s[x].style.display="flex",d.textContent=x+1,q(x),b(),S(x,s,p,m)),(t.closest(".close")||t.matches(".popup-portfolio"))&&(l.removeAttribute("style"),b()),t.closest("#portfolio-arrow-mobile_left")){i.style.display="none",r.style.display="none",E--,S(E,o,v,f);for(var a=0;a<o.length;a++)o[a].style.transform="translateY(-".concat(o[0].clientHeight*E,"px)"),o[a].style.transition="transform 0.5s ease 0s"}if(t.closest("#portfolio-arrow-mobile_right")){i.style.display="none",r.style.display="none",E++,S(E,o,v,f);for(var u=0;u<o.length;u++)o[u].style.transform="translateY(-".concat(o[0].clientHeight*E,"px)"),o[u].style.transition="transform 0.5s ease 0s"}h.textContent=E+1}))},S=function(e){var t=document.getElementById("designs"),n=t.querySelectorAll(".designs-nav__item"),o=t.querySelectorAll(".preview-block"),r=t.querySelector(".designs-slider__style1"),i=document.getElementById("designs-list"),l=document.getElementById("designs-counter"),s=l.querySelector(".slider-counter-content__total"),c=l.querySelector(".slider-counter-content__current"),a=document.querySelector(".popup-design"),d=a.querySelector(".slider-counter-content__total"),u=a.querySelector(".slider-counter-content__current"),p=document.querySelectorAll(".designs-nav__item_popup"),m=document.querySelectorAll(".popup-design-text"),y=document.querySelector(".popup-designs-slider__style1"),f=document.querySelector(".popup-design-slider-wrap"),v=document.getElementById("nav-list-popup-designs");f.style.overflow="hidden",e(t,i,70,"#nav-arrow-designs_left","#nav-arrow-designs_right",20),e(a,v,10,"#nav-arrow-popup-designs_left","#nav-arrow-popup-designs_right",20);var h=function(e,n){var o=0,r=e.querySelectorAll(".designs-slider__style-slide"),i=n.querySelectorAll(".preview-block__item-inner");s.textContent=i.length,e.style.transition="transform 0.5s";for(var l=0;l<i.length;l++)i[l].classList.remove("preview_active"),r[o].style.display="",i[o].classList.add("preview_active");n.addEventListener("click",(function(e){var t=e.target;i.forEach((function(e,n){t===e?(e.classList.add("preview_active"),r[n].style.display="",o=n):(e.classList.remove("preview_active"),r[n].style.display="none")}))})),t.addEventListener("click",(function(t){var n=t.target;n.closest("#design_right")&&(++o>r.length-1&&(o=0),e.style.transform="translateY(-".concat(r[0].clientHeight*o,"px)")),n.closest("#design_left")&&(--o<0&&(o=r.length-1),e.style.transform="translateY(-".concat(r[0].clientHeight*o,"px)")),c.textContent=o+1,n.closest(".designs-nav__item")&&(o=0,c.textContent=1,e.style.transform="translateY(-".concat(r[0].clientHeight*o,"px)"))}))};h(r,o[0]),t.addEventListener("click",(function(e){var r=e.target;r.closest(".designs-nav__item")&&n.forEach((function(e,n){if(r===e){var i=t.querySelector(".designs-slider__style"+(n+1));i.style.display="",o[n].classList.add("visible"),e.classList.add("active"),h(i,o[n])}else t.querySelector(".designs-slider__style"+(n+1)).style.display="none",o[n].classList.remove("visible"),e.classList.remove("active")})),r.closest(".link-list-designs")&&(a.style.visibility="visible")}));var g=function(e){var t=0,n=e.querySelectorAll(".popup-design-slider__style-slide");e.style.transition="transform 0.5s",d.textContent=n.length,a.addEventListener("click",(function(o){var r=o.target;r.closest("#popup_design_right")&&++t>n.length-1&&(t=0),r.closest("#popup_design_left")&&--t<0&&(t=n.length-1),u.textContent=t+1,e.style.transform="translateY(-".concat(n[0].clientHeight*t,"px)"),r.closest(".designs-nav__item_popup")&&(t=0,e.style.transform="translateY(-".concat(n[0].clientHeight*t,"px)"),u.textContent=t+1)}))};g(y),a.addEventListener("click",(function(e){var t=e.target;(t.closest(".close")||t.matches(".popup-design"))&&a.removeAttribute("style"),t.closest(".designs-nav__item_popup")&&p.forEach((function(e,n){if(t===e){var o=document.querySelector(".popup-designs-slider__style"+(n+1));o.style.display="",g(o),e.classList.add("active"),m[n].classList.add("visible-content-block")}else{document.querySelector(".popup-designs-slider__style"+(n+1)).style.display="none",e.classList.remove("active"),m[n].classList.remove("visible-content-block")}}))}))};o(),r(),i(),l(),s(),c(),a(),d(),u(),p(),v(),h(_),g(_),b(),S(_),new f({main:".slider-wrapper",wrap:".partners-slider",prev:"#partners-arrow_left",next:"#partners-arrow_right"}).init()}]);