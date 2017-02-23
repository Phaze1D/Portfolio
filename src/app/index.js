
import { initDrawer } from './drawer.js';
import { initRipple } from './ripple.js';
import { initDialer } from './dialer.js';
import { initHBS } from './hbs_templates.js';

import '../scss/index.scss';
import '../index.html';


document.addEventListener("DOMContentLoaded", (event) => {
  initDrawer();
  initRipple();
  initDialer();
  initHBS();
});
