
import { initDrawer } from './drawer.js';
import { initRipple } from './ripple.js'
import { initDialer } from './dialer.js'
import '../scss/index.scss'

document.addEventListener("DOMContentLoaded", (event) => {
    initDrawer();
    initRipple();
    initDialer();
});
