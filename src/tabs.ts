/**
 * Service-panel tab switcher.
 * Reads `data-panel` from each `.svc-tab` and toggles `.visible` on
 * the matching `#panel-<id>` element.
 */
export function initServiceTabs(): void {
  const tabs   = document.querySelectorAll<HTMLElement>('.svc-tab');
  const panels = document.querySelectorAll<HTMLElement>('.svc-panel');

  tabs.forEach((tab: HTMLElement): void => {
    tab.addEventListener('click', function (this: HTMLElement): void {
      const panelId = this.getAttribute('data-panel');

      // Deactivate all tabs and hide all panels
      tabs.forEach((t: HTMLElement): void => t.classList.remove('active'));
      panels.forEach((p: HTMLElement): void => p.classList.remove('visible'));

      // Activate the clicked tab
      this.classList.add('active');

      // Show the corresponding panel
      if (panelId) {
        const panel = document.getElementById(`panel-${panelId}`);
        panel?.classList.add('visible');
      }
    });
  });
}
