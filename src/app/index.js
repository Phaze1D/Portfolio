
import { initDrawer } from './drawer.js';
import { initRipple } from './ripple.js'
import { initDialer } from './dialer.js'


document.addEventListener("DOMContentLoaded", (event) => {
    initDrawer();
    initRipple();
    initDialer();
});
