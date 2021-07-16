(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobileMenu.classList.toggle('is-open');
    refs.mobileMenu.classList.toggle('is-close');
    refs.backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('is-lock');
  }
})();