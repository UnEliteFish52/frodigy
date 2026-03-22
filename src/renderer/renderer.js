// ═══════════════════════════════════════════════════════════
// Renderer — Page Router & App Initialization
// ═══════════════════════════════════════════════════════════

const pages = {
  dashboard: renderDashboard,
  calendar: renderCalendar,
  timers: renderTimers,
  completed: renderCompleted,
  summary: renderSummary,
  settings: renderSettings,
};

const pageContent = document.getElementById('page-content');
const navItems = document.querySelectorAll('.nav-item');

async function navigateTo(page) {
  // Update nav active state
  navItems.forEach(item => {
    if (item.dataset.page === page) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Clear and render
  pageContent.innerHTML = '';
  const renderFn = pages[page];
  if (renderFn) {
    await renderFn(pageContent);
  }
}

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  return pages[hash] ? hash : 'dashboard';
}

// Hash change listener
window.addEventListener('hashchange', () => {
  navigateTo(getPageFromHash());
});

// Keyboard shortcuts (Ctrl+1 through Ctrl+6)
const pageKeys = ['dashboard', 'calendar', 'timers', 'completed', 'summary', 'settings'];
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
    e.preventDefault();
    const page = pageKeys[parseInt(e.key, 10) - 1];
    window.location.hash = '#' + page;
  }
});

// Global error catcher for debugging
window.addEventListener('error', (e) => {
  document.body.innerHTML = `<div style="color:red; background:white; padding:20px; z-index:99999; position:absolute; top:0; left:0; right:0; bottom:0;">
    <h2>Renderer Crash:</h2>
    <pre>${e.error ? e.error.stack : e.message}</pre>
  </div>`;
});
window.addEventListener('unhandledrejection', (e) => {
  document.body.innerHTML = `<div style="color:red; background:white; padding:20px; z-index:99999; position:absolute; top:0; left:0; right:0; bottom:0;">
    <h2>Unhandled Promise Rejection:</h2>
    <pre>${e.reason ? e.reason.stack || e.reason : e}</pre>
  </div>`;
});

// Initial load
(async () => {
  try {
    const theme = await window.frodigy.invoke('settings:get', { key: 'theme' }) || 'neon_abyss';
    document.documentElement.setAttribute('data-theme', theme);
    navigateTo(getPageFromHash());
  } catch (err) {
    document.body.innerHTML = `<div style="color:red; background:white; padding:20px; z-index:99999; position:absolute; top:0; left:0; right:0; bottom:0;">
      <h2>Init Crash:</h2>
      <pre>${err.stack || err.message}</pre>
    </div>`;
  }
})();
