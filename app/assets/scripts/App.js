import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
//import HideTitle from './modules/HideTitle';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Article from './modules/Article';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
//new HideTitle($(".feature-item"), "85%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var article = new Article();
