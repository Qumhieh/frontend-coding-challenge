import './offers.css';

const hotelsMock = [
    {
        name: 'Elissa Lifestyle Resort',
        location: 'Greece, Kallithea Rhodes',
        price: '80'
    },
    {
        name: 'Chrysoula Hotel',
        location: 'Greece, Kefalos',
        price: '300'
    },
    {
        name: 'Syros Atlantis',
        location: 'Greece, Vari',
        price: '99'
    },
    {
        name: 'Nista House',
        location: 'Greece, Agios Nikolaos',
        price: '45'
    },
    {
        name: 'Agios Nikolaos',
        location: 'Greece, Minia',
        price: '50'
    },
    {
        name: 'KAMEO, Antiparos',
        location: 'Greece, Psarou',
        price: '120'
    },
    {
        name: 'Erofili Hotel & Suites',
        location: 'Portaria',
        price: '30'
    },
    {
        name: 'Ammouda Villas',
        location: 'Ormos Panagias',
        price: '60'
    }
];

export function initOffersPage() {
    let hotelsHtml = '';
    hotelsMock.forEach((hotel) => {
        hotelsHtml += buildHotelContainer(hotel);
    });

    document.querySelector('#offers').innerHTML = `
        <div class="offers-wrapper">${hotelsHtml}</div>
        <div class="load-offers"><a class="btn" href="#load-offers">Load more offers</a></div>
    `; 
}

function buildHotelContainer(hotel) {
    return `
        <div class='hotel-container'>
            <div class='hotel-header'> 
            </div>
            <div class='hotel-body'>
                <h4>${hotel.name}<span class="hotel-price">${hotel.price} $</span></h4>
                <h5>${hotel.location}</h5>
            </div>
        </div>         
    `;
}