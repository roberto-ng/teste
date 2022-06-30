/** Sanitiza uma string para uso seguro com html
 * @param {string} html
 * @returns {string}
 */
export function sanitizeHTML(html) {
    const decoder = document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
}

/**
 * @param {Node} parent 
 */
export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}