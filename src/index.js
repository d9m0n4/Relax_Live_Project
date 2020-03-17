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


const carouselPartners = new SliderCarousel({
    main: '.slider-wrapper',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
});

carouselPartners.init();


