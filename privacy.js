function initprivacymodal() {
    const modal = document.getElementById('privacypolicy-modal');
    if (!modal || modal.dataset.bound === 'true') return;

    const closeBtn = document.getElementById('close-privacypolicy');
    const hideModal = () => {
        modal.style.display = 'none';
    };
    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href="#privacy"]');
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
    initprivacymodal();
    if (!document.getElementById('privacypolicy-modal')) {
        const observer = new MutationObserver(() => {
            const modal = document.getElementById('privacypolicy-modal');
            if (modal) {
                initprivacymodal();
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
});