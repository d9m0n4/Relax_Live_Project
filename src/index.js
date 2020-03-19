import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'fetch-polyfill';
import 'es6-promise';
import 'element-remove';


import showNumTel from './modules/showNumTel';
import mainMenu from './modules/mainMenu';
import srcollFromMenu from './modules/scrollTo';
import popup from './modules/popupRepair';
import maskPhone from './plugins/maskPhone';
import formulaShow from './modules/formula';
import accordeon from './modules/accordeon';
import showTransparency from './modules/showTranspar';
import callBack from './modules/callBack';
import blockProblems from './modules/blockProblems';
import SliderCarousel from './plugins/carouselSlider';
import reviewsSlider from './modules/reviewsSlider';
import schemeTabs from './modules/schemeTabs';
import typesOfRepair from './modules/typesOfRepair';
import translateTabs from './modules/translateTabs';
import sliderPortfolio from './modules/sliderPortfolio';
import showDesign from './modules/designBlock';
import sendFrom from './modules/sendForm';
import repairPopup from './modules/typesOfrepairPopup';

showNumTel();
mainMenu();
srcollFromMenu();
popup();
maskPhone();
formulaShow();
accordeon();
showTransparency();
callBack();
blockProblems();
reviewsSlider();
schemeTabs(translateTabs);
typesOfRepair(translateTabs);
sliderPortfolio();
showDesign(translateTabs);
sendFrom();
repairPopup();


const carouselPartners = new SliderCarousel({
    main: '.slider-wrapper',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
});

carouselPartners.init();



