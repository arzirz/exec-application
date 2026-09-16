// mobile sidebar toggle
const sidebar = document.getElementById('channelSidebar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openSidebar');

if (openBtn) {
  openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  });
}

if (overlay) {
  overlay.addEventListener('click', closeSidebar);
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}