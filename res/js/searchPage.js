import { fetchHotels } from './api.js';

window.addEventListener('load', async () => {
    /** @type {HTMLParagraphElement} */
    const locationCaption = document.querySelector('.result-infobox p.location-caption');

    const hotels = await fetchHotels();
    locationCaption.innerText = `${hotels.length} hoteis encontrados`;
});