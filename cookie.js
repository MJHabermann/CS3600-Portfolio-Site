function initCookieModal() {
  const modal = document.getElementById('cookie-modal');
  if (!modal || modal.dataset.bound === 'true') return;

  const closeBtn = document.getElementById('close-cookie');
  const acceptBtn = document.getElementById('accept-cookie');

  const hideModal = () => {
    modal.style.display = 'none';
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href="#cookie"]');
    if (link) {
      event.preventDefault();
      modal.style.display = 'block';
    }
  });

  closeBtn?.addEventListener('click', hideModal);
  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });

  modal.dataset.bound = 'true';
}

document.addEventListener('DOMContentLoaded', () => {
  initCookieModal();

  if (!document.getElementById('cookie-modal')) {
    const observer = new MutationObserver(() => {
      const modal = document.getElementById('cookie-modal');
      if (modal) {
        initCookieModal();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});