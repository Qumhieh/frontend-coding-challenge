import './home.css';

export function initHomePage() {
    document.querySelector('#home').innerHTML = `
        <div class="centered-container">
            <h1>It's summer time!</h1>
            <h4>Get up to 20% off on hotel bookings</h3>
            <div class="see-offers"><a class="btn" href="#offers">See offers</a></div>
        </div>
    `; 
}

