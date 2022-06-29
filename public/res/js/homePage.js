import { fetchSuggestions } from './api.js';
import { removeAllChildNodes, sanitizeHTML } from './util.js';

/**
 * @param {import('./api').Suggestion[]} suggestions 
 */
function populateSuggestionBox(suggestions) {
    const box = document.querySelector('.suggestion-box');
    removeAllChildNodes(box);
    
    for (const suggestion of suggestions) {
        const div = document.createElement('div');
        div.classList.add('suggestion');

        const layout = `
            <img src="/res/icon/icon.svg" height="13.5px" width="13.5px" />
            <div class="suggestion-data">
                <p class="suggestion-name">
                    ${sanitizeHTML(suggestion.name)}
                </p>
                <p class="suggestion-region">
                    ${sanitizeHTML(suggestion.region)}
                </p>
            </div>
        `;
        div.innerHTML = layout;
        box.appendChild(div);
    }
}

/**
 * @param {Event} e
 */
function handleDestinationTextChange(e) {
    if (e.target instanceof HTMLInputElement) {
        const text = e.target.value;
        fetchSuggestions(text)
            .then((suggestions) => {
                populateSuggestionBox(suggestions);
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