// ═══════════════════════════════════════════════════════════
// Settings Page
// ═══════════════════════════════════════════════════════════

const THEMES = [
  { id: 'neon_abyss', label: 'Neon Abyss' },
  { id: 'royal_indigo', label: 'Royal Indigo' },
  { id: 'high_contrast', label: 'High Contrast' },
];

const WEEKEND_OPTIONS = [
  { value: 'saturday', label: 'Saturday Only' },
  { value: 'saturday_sunday', label: 'Saturday & Sunday' },
];

// eslint-disable-next-line no-unused-vars
async function renderSettings(container) {
  const allSettings = await window.frodigy.invoke('settings:get-all');
  const currentTheme = allSettings.theme || 'neon_abyss';
  const startWithWindows = allSettings.start_with_windows === 'true';
  const weekendMode = allSettings.weekend_mode || 'saturday';

  const paletteIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.65 1.5-1.5 0-.39-.15-.74-.39-1.02-.23-.27-.37-.62-.37-1.02C12.76 15.65 13.52 15 14.5 15H16c3.31 0 6-2.69 6-6 0-5.52-4.48-10-10-10z"/></svg>';

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Settings</h1>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">${paletteIcon} APPEARANCE</div>
      <div class="setting-row">
        <div class="setting-info">
          <h4>App Theme</h4>
          <p>Choose the aesthetic that fits your workspace</p>
        </div>
        <div class="radio-group" id="theme-radios">
          ${THEMES.map(t => `
            <div class="radio-option ${t.id === currentTheme ? 'selected' : ''}" data-theme="${t.id}">
              <div class="radio-circle"><div class="radio-circle-inner"></div></div>
              <span>${t.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">GENERAL</div>
      <div class="setting-row">
        <div class="setting-info">
          <h4>Start with Windows</h4>
          <p>Launch Frodigy minimized to tray on startup</p>
        </div>
        <button class="toggle ${startWithWindows ? 'active' : ''}" id="toggle-startup"></button>
      </div>
      <div class="setting-row">
        <div class="setting-info">
          <h4>Weekend Setup</h4>
          <p>Mute calendar days for weekends</p>
        </div>
        <select class="form-select" id="weekend-select" style="width:200px">
          ${WEEKEND_OPTIONS.map(o => `
            <option value="${o.value}" ${o.value === weekendMode ? 'selected' : ''}>${o.label}</option>
          `).join('')}
        </select>
      </div>
    </div>
  `;

  // Theme radio handlers
  container.querySelectorAll('.radio-option').forEach(el => {
    el.addEventListener('click', async () => {
      const theme = el.dataset.theme;
      container.querySelectorAll('.radio-option').forEach(r => r.classList.remove('selected'));
      el.classList.add('selected');
      await window.frodigy.invoke('settings:set', { key: 'theme', value: theme });
      document.documentElement.setAttribute('data-theme', theme);
    });
  });

  // Start with Windows toggle
  const toggle = document.getElementById('toggle-startup');
  toggle.addEventListener('click', async () => {
    const isActive = toggle.classList.toggle('active');
    await window.frodigy.invoke('settings:set', { key: 'start_with_windows', value: String(isActive) });
  });

  // Weekend select
  const weekendSelect = document.getElementById('weekend-select');
  weekendSelect.addEventListener('change', async () => {
    await window.frodigy.invoke('settings:set', { key: 'weekend_mode', value: weekendSelect.value });
  });
}
