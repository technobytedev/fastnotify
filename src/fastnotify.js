// FastNotify.js - lightweight toast notifications
import './fastnotify.css';

export function notify({ message = '', type = 'info', duration = 3000, position = 'top-right' }) {
  const containerId = `notify-container-${position}`;
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    container.className = `notify-container ${position}`;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `notify-toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}
