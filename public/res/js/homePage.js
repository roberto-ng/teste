import { fetchSuggestions } from './api.js';

/**
 * @param {Event} e
 */
export function handleDestinationTextChange(e) {
    if (e.target instanceof HTMLInputElement) {
        const text = e.target.value;
        fetchSuggestions(text)
            .then((suggestions) => {
                console.log(suggestions);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

window.addEventListener('load', () => {  
    document
        .querySelector('.search-bar input.destino')
        .addEventListener('input', handleDestinationTextChange);
})