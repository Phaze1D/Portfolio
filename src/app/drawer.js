
import Jump from './jump.js'





let toggleDrawer = ( event ) => {
  let drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
}


let initDrawer = () => {
  let burgers = document.getElementsByClassName('burger');

  for (var i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener('click', toggleDrawer);
  }

  if(window.outerWidth > 970) {
    document.getElementById('drawer').classList.add('open');
  }
}

let scrollTo = ( event ) => {
  let sectionID = event.currentTarget.getAttribute('data-id');
  let j = new Jump()
  j.jump(document.getElementsByClassName('content')[0], `#${sectionID}`, {duration: 500})
}

let initMenu = () => {
  let menuItems = document.getElementsByClassName('menu-item');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', scrollTo)
  }
}

exports.initDrawer = initDrawer;
exports.initMenu = initMenu;
