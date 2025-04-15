import { notify } from '../src/fastnotify.js';

window.trigger = () => {
  notify({
    message: 'This is a success notification!',
    type: 'success',
    duration: 3000,
    position: 'top-right'
  });
};
