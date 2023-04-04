import { Article } from './Article';

const menuSection = document.querySelector("#menuSection");
const articlesSection = document.querySelector("#articlesSection");
const cartSection = document.querySelector("#cartSection");
const custInfoSectionSection = document.querySelector("#custInfoSectionSection");
const cmdFinalizeSection = document.querySelector("#cmdFinalizeSection");

const states = {nav, selecting, purchasing, finalizing, dev}

console.log(`menuSection${menuSection}`)
 switch(states) {
    case nav:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='hidden'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case selecting:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case purchasing:
        menuSection.style.visibility='hidden'
        articlesSection.style.visibility='hidden'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='visible'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case finalizing:
        menuSection.style.visibility='hidden'
        articlesSection.style.visibility='hidden'
        cartSection.style.visibility='hidden'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='visible'
    break;
    case dev:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='visible'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    default:
        console.log(`Sorry, we are out of ${states}.`);

} 