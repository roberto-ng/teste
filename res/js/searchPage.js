import { fetchHotels } from './api.js';
import { sanitizeHTML } from './util.js';

/**
 * @param {import('./api.js').HotelData[]} hotels
 */
function populateHotelCards(hotels) {
    /** @type {HTMLDivElement} */
    const cardsDiv = document.querySelector('.hotel-cards');

    for (let item of hotels) {
        const card = document.createElement('div');
        card.classList.add('hotel-card');
        
        const price = sanitizeHTML(item.lowestPrice.amount.toString());
        const detailURL = `detail?id=${sanitizeHTML(item.id.toString())}`; 

        let stars = '';
        for (let i = 0; i < item.hotel.stars; i++) {
            stars += `
                <img 
                    src="res/icon/star.svg" 
                    width="14.05px" 
                    height="11.89px" 
                    style="pointer-events: none" 
                />
            `;
        }

        card.innerHTML = `
            <div 
                class="hotel-card-image"
                style="background-image: url('${sanitizeHTML(item.hotel.image)}');"
            >
                <p class="price">
                    <span class="price-amount">R$ ${price}</span>
                    <span class="price-nights">/ noite</span>
                </p>
            </div>

            <div class="card-info">
                <p class="hotel-name">${sanitizeHTML(item.hotel.name)}</p>
                <div class="card-info-bottom">
                    <div>${stars}</div>
                    <a href="${detailURL}">Ver mais</a>
                </div>
            </div>
        `;

        cardsDiv.appendChild(card);
    }
}

window.addEventListener('load', async () => {
    /** @type {HTMLParagraphElement} */
    const locationCaption = document.querySelector('.result-infobox p.location-caption');

    const hotels = await fetchHotels();
    // informar quantidade de hoteis
    locationCaption.innerText = `${hotels.length} hoteis encontrados`;
    // preencher o div com cards dos hoteis encontrados
    populateHotelCards(hotels);
});