/**
 * Highlights the nav link whose section is currently in view.
 * Offset of 80 px accounts for the fixed header height.
 */
const NAV_OFFSET_PX = 80;

export function initNavScroll(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks  = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]');

  function updateNav(): void {
    let current = '';

    sections.forEach((section: HTMLElement): void => {
      if (window.scrollY >= section.offsetTop - NAV_OFFSET_PX) {
        current = section.id;
      }
    });

    navLinks.forEach((link: HTMLAnchorElement): void => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}
