import './styles/fonts.css';
import './styles/tailwind.css';
import './styles/custom.css';
import { initServiceTabs } from './tabs';
import { initNavScroll } from './nav';

document.addEventListener('DOMContentLoaded', (): void => {
  initServiceTabs();
  initNavScroll();
});
