
import { initDrawer } from './drawer.js';
import { initRipple } from './ripple.js'
import '../scss/index.scss'

document.addEventListener("DOMContentLoaded", (event) => {
    initDrawer();
    initRipple();
});
