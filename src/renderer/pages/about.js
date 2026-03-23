// ═══════════════════════════════════════════════════════════
// About Page
// ═══════════════════════════════════════════════════════════

// eslint-disable-next-line no-unused-vars
async function renderAbout(container) {
  const version = window.frodigy?.version || '1.0.0';
  
  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">About Frodigy</h1>
      <p class="page-subtitle">Version ${version}</p>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">THE APPLICATION</div>
      <div class="setting-row" style="flex-direction: column; align-items: flex-start; gap: 12px; padding-bottom: 20px;">
        <h4 style="color: var(--text-heading); font-size: 1.1rem; margin: 0;">What is Frodigy?</h4>
        <p style="color: var(--text-secondary); line-height: 1.5; margin: 0;">Frodigy is an offline-first desktop productivity application designed to help you organize your daily tasks, notes, and timers without distractions.</p>
        
        <h4 style="color: var(--text-heading); font-size: 1.1rem; margin-top: 16px; margin-bottom: 0;">Who Built It & Why?</h4>
        <p style="color: var(--text-secondary); line-height: 1.5; margin: 0;">It was built by an independent developer who wanted a fully private, fast, and beautiful tool that doesn't rely on cloud syncing or subscriptions. It's for those who want prodigy-level productivity with full control over their data.</p>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">PRIVACY & DATA</div>
      <div class="setting-row" style="flex-direction: column; align-items: flex-start; gap: 12px; padding-bottom: 20px;">
        <h4 style="color: var(--text-heading); font-size: 1.1rem; margin: 0;">Your Data is Yours</h4>
        <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">
          <strong style="color: var(--text-heading);">No Data Collection:</strong> We do not collect, transmit, or sell any of your personal data.<br>
          <strong style="color: var(--text-heading);">No Internet Required:</strong> Frodigy works 100% offline. Everything is saved locally on your machine.<br>
          <strong style="color: var(--text-heading);">Open Source:</strong> This is an open-source application. You have full visibility into the code and complete control over your experience.
        </p>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">FAQ & SUPPORT</div>
      <div class="setting-row" style="flex-direction: column; align-items: flex-start; gap: 12px; padding-bottom: 20px;">
        <h4 style="color: var(--text-heading); font-size: 1.1rem; margin: 0;">Why this app and not others?</h4>
        <p style="color: var(--text-secondary); line-height: 1.5; margin: 0;">Many productivity apps lock your data behind subscriptions and require constant internet connectivity. Frodigy gives you premium features with absolute privacy and lifetime access.</p>
        
        <h4 style="color: var(--text-heading); font-size: 1.1rem; margin-top: 16px; margin-bottom: 0;">Contact Support</h4>
        <p style="color: var(--text-secondary); line-height: 1.5; margin: 0;">If you need help or want to report an issue, please visit our <a href="https://github.com/UnEliteFish52/frodigy" style="color: var(--accent-primary); text-decoration: none;">GitHub Repository</a> or reach out through the community channels.</p>
      </div>
    </div>
  `;
}
