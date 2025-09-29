function inittermsmodal() {
    const modal = document.getElementById('termsconditions-modal');
    if (!modal || modal.dataset.bound === 'true') return;

    const closeBtn = document.getElementById('close-termsconditions');
    const hideModal = () => {
        modal.style.display = 'none';
    };
    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href="#terms"]');
        if (link) {
            event.preventDefault();
            modal.style.display = 'block';
        }
    });
    closeBtn?.addEventListener('click', hideModal)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
    modal.dataset.bound = 'true';
}

document.addEventListener('DOMContentLoaded', () => {
    inittermsmodal();
    if (!document.getElementById('termsconditions-modal')) {
        const observer = new MutationObserver(() => {
            const modal = document.getElementById('termsconditions-modal');
            if (modal) {
                inittermsmodal();
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
});