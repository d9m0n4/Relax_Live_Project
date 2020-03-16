import showNumTel from './modules/showNumTel';
import mainMenu from './modules/mainMenu';
import srcollFromMenu from './modules/scrollTo';
import popup from './modules/popupRepair';
import maskPhone from './plugins/maskPhone';
import formulaShow from './modules/formula';
import accordeon from './modules/accordeon';
import SliderCarousel from './modules/carouselSlider';
import showTransparency from './modules/showTranspar';

showNumTel();
mainMenu();
srcollFromMenu();
popup();
maskPhone();
formulaShow();
accordeon();
showTransparency();

const options = {
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    next: '#formula-arrow_right',
    prev: '#formula-arrow_left',
    infinity: true,
};

const carouselFormula = new SliderCarousel(options);
carouselFormula.init();




