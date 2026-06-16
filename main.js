const STORAGE_KEYS = {
  USERS: 'chengdu_users',
  ARTICLES: 'chengdu_articles',
  FENGWU: 'chengdu_fengwu',
  TRAVELOGUES: 'chengdu_travelogues',
  PENDING_POSTS: 'chengdu_pending_posts',
  LOCATIONS: 'chengdu_locations',
  CURRENT_USER: 'chengdu_current_user'
};

function getStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function setStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getCurrentUser() {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 1rem 2rem;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    border-radius: 4px;
    z-index: 3000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function initNotificationStyles() {
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

function updateAuthUI() {
  const authButtons = document.getElementById('authButtons');
  if (!authButtons) return;
  
  const user = getCurrentUser();
  if (user) {
    authButtons.innerHTML = `
      <span style="color: var(--accent-color); margin-right: 1rem;">欢迎, ${user.nickname}</span>
      ${user.isAdmin ? '<a href="admin.html" class="btn btn-secondary" style="margin-right: 0.5rem;">管理后台</a>' : ''}
      <button class="btn btn-primary" onclick="logout()">退出</button>
    `;
  } else {
    authButtons.innerHTML = `
      <button class="btn btn-secondary" onclick="showLoginModal()">登录</button>
      <button class="btn btn-primary" onclick="showRegisterModal()">注册</button>
    `;
  }
}

function logout() {
  clearCurrentUser();
  showNotification('已退出登录');
  updateAuthUI();
  
  const currentPage = window.location.pathname;
  if (currentPage.includes('admin.html')) {
    window.location.href = 'index.html';
  }
}

function showLoginModal() {
  document.getElementById('loginModal')?.classList.add('active');
}

function showRegisterModal() {
  document.getElementById('registerModal')?.classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

function checkAdminAccess() {
  const user = getCurrentUser();
  if (!user || !user.isAdmin) {
    alert('需要管理员权限');
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  initNotificationStyles();
  updateAuthUI();
});