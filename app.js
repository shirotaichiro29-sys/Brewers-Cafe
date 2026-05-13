// Brewer's Cafe IMS — shared UI script (non-functional demo)
const NAV = [
  { label: 'Overview', items: [
    { id: 'dashboard', name: 'Dashboard', href: 'index.html', icon: 'grid' },
    { id: 'orders', name: 'Orders', href: 'orders.html', icon: 'clipboard', badge: '12' },
  ]},
  { label: 'Supply Chain', items: [
    { id: 'inventory', name: 'Inventory', href: 'inventory.html', icon: 'box' },
    { id: 'suppliers', name: 'Suppliers', href: 'suppliers.html', icon: 'users' },
    { id: 'products', name: 'Products / Menu', href: 'products.html', icon: 'mug' },
  ]},
  { label: 'CRM', items: [
    { id: 'complaints', name: 'Complaints', href: 'complaints.html', icon: 'chat', badge: '5' },
    { id: 'customers', name: 'Customers', href: 'customers.html', icon: 'people' },
  ]},
  { label: 'Admin', items: [
    { id: 'reports', name: 'Reports & KPIs', href: 'reports.html', icon: 'chart' },
    { id: 'settings', name: 'Settings', href: 'settings.html', icon: 'gear' },
  ]},
];

const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  mug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
};

function renderSidebar(activeId) {
  const sections = NAV.map(sec => `
    <div class="nav-section">
      <p class="nav-label">${sec.label}</p>
      ${sec.items.map(it => `
        <a class="nav-item ${it.id === activeId ? 'active' : ''}" href="${it.href}">
          ${ICONS[it.icon]}
          ${it.name}
          ${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
        </a>
      `).join('')}
    </div>
  `).join('');

  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-icon">☕</div>
        <h1>Brewer's Cafe</h1>
        <p>IMS · Sagay City</p>
      </div>
      ${sections}
      <div class="sidebar-footer">
        <div class="user-pill">
          <div class="avatar">AD</div>
          <div class="user-info">
            <p>Administrator</p>
            <span>admin@brewers.local</span>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderTopbar(title, opts = {}) {
  const ctaLabel = opts.cta || null;
  return `
    <div class="topbar">
      <h2>${title}</h2>
      <div class="search-bar">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search ${title.toLowerCase()}…">
      </div>
      <div class="topbar-actions">
        <div class="notif-btn">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <div class="notif-dot"></div>
        </div>
        ${ctaLabel ? `<button class="btn btn-primary">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          ${ctaLabel}
        </button>` : ''}
      </div>
    </div>
  `;
}

function mountLayout({ active, title, cta }) {
  document.getElementById('sidebar-mount').outerHTML = renderSidebar(active);
  document.getElementById('topbar-mount').outerHTML = renderTopbar(title, { cta });
}

// Tab toggling helper
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (tab && tab.parentElement.classList.contains('tab-row')) {
    tab.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }
  const snav = e.target.closest('.settings-nav-item');
  if (snav) {
    snav.parentElement.querySelectorAll('.settings-nav-item').forEach(t => t.classList.remove('active'));
    snav.classList.add('active');
  }
});
