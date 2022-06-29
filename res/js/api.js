const SUGGESTION_API_URL = 'http://localhost:3333/suggestions';
const HOTELS_API_URL = 'http://localhost:3333/hotels';

/**
 * @typedef Suggestion
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} region
 * @property {string} type
 */

/**
 * @typedef Hotel
 * @type {object}
 * @property {string} name
 * @property {string} address
 * @property {number} stars
 * @property {string} image
 * @property {string} description
 */

/**
 * @typedef Price
 * @type {object}
 * @property {string} currency
 * @property {number} amount
 */

/**
 * @typedef RoomType
 * @type {object} 
 * @property {string} name 
 */

/**
 * @typedef CancellationPolicies
 * @type {object}
 * @property {boolean} refundable
 */

/**
 * @typedef Room
 * @type {object}
 * @property {RoomType} roomType
 * @property {Price} price
 * @property {CancellationPolicies} cancellationPolicies
 */

/**
 * @typedef HotelData
 * @type {object}
 * @property {number} id
 * @property {Hotel} hotel
 * @property {Room[]} rooms
 * @property {Price} lowestPrice
 */

/** Usado para buscar sugestões para o autocomplete
 * @param {string} text 
 * @param {number} limit
 * @returns {Promise<Suggestion[]>}
 */
export async function fetchSuggestions(text, limit = 4) {
    const res = await fetch(`${SUGGESTION_API_URL}?name_like=${text}&_limit=${limit}`);
    const suggestions = await res.json();
    return suggestions;
}

/** Busca todos os hotéis disponíveis
 * @returns {Promise<HotelData[]>}
 */
export async function fetchHotels() {
    const res = await fetch(`${HOTELS_API_URL}`);
    const hotels = await res.json();
    return hotels;
}
