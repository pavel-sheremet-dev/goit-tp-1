(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closeBtnRef = document.querySelector("[data-menu-close]");
  const backdropRef = document.querySelector('[data-backdrop]');

  menuBtnRef.addEventListener("click", () => {

    menuBtnRef.setAttribute("aria-expanded", "true");

    mobileMenuRef.classList.toggle("is-open");
    backdropRef.classList.toggle("is-hidden");
    backdropRef.classList.toggle("is-close");
    document.body.classList.toggle('is-lock');
  });

  closeBtnRef.addEventListener("click", () => {
    menuBtnRef.setAttribute("aria-expanded", "false");

    mobileMenuRef.classList.toggle("is-open");
    backdropRef.classList.toggle("is-hidden");
    backdropRef.classList.toggle("is-close");
    document.body.classList.toggle('is-lock');
  });

})();