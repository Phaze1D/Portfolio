
import { initDrawer, initMenu } from './drawer.js';
import { initRipple } from './ripple.js';
import { initDialer } from './dialer.js';
import { initHBS } from './hbs_templates.js';

import '../scss/index.scss';
import '../index.html';
import '../images/bell169-large.jpg'
import '../images/dev169-large.jpg'
import '../images/es169-large.jpg'
import '../images/ff169-large.jpg'
import '../images/fb169-large.jpg'
import '../images/mo169-large.jpg'
import '../images/rf169-large.jpg'
import '../images/smc169-large.jpg'
import '../images/ud169-large.jpg'
import '../images/vf169-large.jpg'
import '../images/po169-large.jpg'

import '../images/bell169-medium.jpg'
import '../images/dev169-medium.jpg'
import '../images/es169-medium.jpg'
import '../images/ff169-medium.jpg'
import '../images/fb169-medium.jpg'
import '../images/mo169-medium.jpg'
import '../images/rf169-medium.jpg'
import '../images/smc169-medium.jpg'
import '../images/ud169-medium.jpg'
import '../images/vf169-medium.jpg'
import '../images/po169-medium.jpg'

import '../images/bell169-land.jpg'
import '../images/dev169-land.jpg'
import '../images/es169-land.jpg'
import '../images/ff169-land.jpg'
import '../images/fb169-land.jpg'
import '../images/mo169-land.jpg'
import '../images/rf169-land.jpg'
import '../images/smc169-land.jpg'
import '../images/ud169-land.jpg'
import '../images/vf169-land.jpg'
import '../images/po169-land.jpg'



/*
  Initializes all events listeners when dom is finished loaded
*/
document.addEventListener("DOMContentLoaded", (event) => {
  initDrawer();
  initMenu();
  initRipple();
  initDialer();
  initHBS();
});
