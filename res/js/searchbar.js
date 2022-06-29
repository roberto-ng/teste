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
        div.addEventListener('click', handleSuggestionClick);
        div.classList.add('suggestion');

        const layout = `
            <img 
                src="res/icon/icon.svg" 
                height="13.5px" 
                width="13.5px" 
                style="pointer-events: none" 
            />
            
            <div class="suggestion-data">
                <p class="suggestion-name">
                    ${sanitizeHTML(suggestion.name.trim())}
                </p>
                <p class="suggestion-region">
                    ${sanitizeHTML(suggestion.region.trim())}
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
    const dropdown = document.querySelector('.suggestion-dropdown');
    if (e.target instanceof HTMLInputElement) {
        const text = e.target.value;
        if (text.trim().length === 0) {
            dropdown.classList.remove('active');
            return;
        }

        fetchSuggestions(text)
            .then((suggestions) => {
                if (suggestions.length === 0) {
                    dropdown.classList.remove('active');
                    return;
                }

                populateSuggestionBox(suggestions);
                dropdown.classList.add('active');
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

/**
 * @param {Event} e
 */
function handleSuggestionClick(e) {
    /** @type {HTMLInputElement} */
    const destinationInput = document.querySelector('.search-bar input.destino');
    const dropdown = document.querySelector('.suggestion-dropdown');
    const suggestionDiv = e.target;

    if (suggestionDiv instanceof HTMLElement) {
        const suggestionNameText = suggestionDiv.querySelector('p.suggestion-name');
        destinationInput.value = suggestionNameText.textContent.trim();

        // Fechar dropdown
        dropdown.classList.remove('active');
    }
}

function handleSearchButtonClick() {
    // ir para a página de pesquisa
    window.location.href = 'search';
}

window.addEventListener('load', () => {  
    document
        .querySelector('.search-bar input.destino')
        .addEventListener('input', handleDestinationTextChange);

    document
        .querySelector('.btn-search')
        .addEventListener('click', handleSearchButtonClick);
})