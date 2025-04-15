import { notify } from '../src/fastnotify.js';

document.addEventListener('DOMContentLoaded', () => {
  const triggerButton = document.querySelector('#trigger');

  if (triggerButton) {
    triggerButton.addEventListener('click', () => {
      notify({
        message: 'This is a success notification!',
        type: 'success',
        duration: 3000,
        position: 'top-right',
      });
    });
  }
});
