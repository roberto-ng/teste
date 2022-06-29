import { fetchHotels } from './api.js';

window.addEventListener('load', async () => {
    const hotels = await fetchHotels();
    console.log(hotels);
});