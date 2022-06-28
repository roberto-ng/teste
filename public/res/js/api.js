const SUGGESTION_API_URL = 'http://0.0.0.0:3333/suggestions';

/**
 * @typedef Suggestion
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} region
 * @property {string} type
 */

/** Used to fetch autocomplete suggestions
 * @param {string} text 
 * @param {number} limit
 * @returns {Promise<Suggestion[]>}
 */
export async function fetchSuggestions(text, limit = 5) {
    const res = await fetch(`${SUGGESTION_API_URL}?name_like=${text}&_limit=${limit}`);
    return await res.json();
}