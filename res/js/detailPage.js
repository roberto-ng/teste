/** Abre o modal com a mensagem de sucesso */
function openSuccessModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
}

window.addEventListener('load', () => {    
    /** @type {NodeListOf<HTMLButtonElement>} */
    const buttons = document.querySelectorAll('.room .button');
    // Adicionar evento a todos os botões
    for (let button of buttons) {
        button.addEventListener('click', openSuccessModal);
    }

});