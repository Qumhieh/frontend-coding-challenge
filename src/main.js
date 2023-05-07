import { initTabsOnClickEvent } from './tabs.js';
import { initHomePage } from './home/home.js';
import { initOffersPage } from './offers/offers.js';
import { initContactUsPage } from './contact-us/contact-us.js';
import { loadImage } from './unsplsh-image-loader.js';

initTabsOnClickEvent();

// home page
initHomePage();

// offers page
initOffersPage();

// contact us page
initContactUsPage();

// init home page background image
loadImage('photos/random?orientation=landscape&query=beach').then((response) => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.backgroundImage = `url(${response.data.urls.full})`;
});
