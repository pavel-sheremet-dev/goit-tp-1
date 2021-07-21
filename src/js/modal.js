(() => {
  const MenuModalBtnRef = document.querySelector("[data-menu-modal-open]");
  const ModalBtnRef = document.querySelector("[data-modal-open]");
  const closeBtnRef = document.querySelector("[data-modal-close]");
  const modalRef = document.querySelector('[data-modal]');

  MenuModalBtnRef.addEventListener("click", () => {

    MenuModalBtnRef.setAttribute("aria-expanded", "true");

    modalRef.classList.toggle('is-hidden');
    document.body.classList.toggle('is-lock');
  });

  ModalBtnRef.addEventListener("click", () => {

    ModalBtnRef.setAttribute("aria-expanded", "true");

    modalRef.classList.toggle('is-hidden');
    document.body.classList.toggle('is-lock');
  });

  closeBtnRef.addEventListener("click", () => {
    MenuModalBtnRef.setAttribute("aria-expanded", "false");
    ModalBtnRef.setAttribute("aria-expanded", "false");

    modalRef.classList.toggle('is-hidden');
    document.body.classList.toggle('is-lock');
  });

})();