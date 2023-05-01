// import '../style.css'
// import amadeusLogo from '/amadeus-logo-icon.png'
// import { setupCounter } from './counter.js'

import { initTabsOnClickEvent } from './tabs.js'
import { initHomePage } from './home/home.js'
import { initOffersPage } from './offers/offers.js'
import { initContactUsPage } from './contact-us/contact-us.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${amadeusLogo}" class="logo amadeus" alt="Amadeus logo" />
//     </a>
//     <h1>Welcome at amadeus!</h1>
//     <div class="booking-button">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

initTabsOnClickEvent();

// home page
initHomePage();

// offers page
initOffersPage();

// contact us page
initContactUsPage();
