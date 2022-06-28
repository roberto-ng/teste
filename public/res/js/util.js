/** Does basic sanitization on a string
 * @param {string} html
 * @returns {string}
 */
function sanitizeHTML(html) {
    const decoder = document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
}