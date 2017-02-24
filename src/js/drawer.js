
import Jump from './jump.js'


/*
  Toggles the drawer
  @params: clickEvent
  @returns: null
*/
let toggleDrawer = ( event ) => {
  let drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
}

/*
  Scrolls to corresponding section
  @params: clickEvent
  @returns: null
*/
let scrollTo = ( event ) => {
  let sectionID = event.currentTarget.getAttribute('data-section-id');
  let j = new Jump()
  j.jump(document.getElementsByClassName('content')[0], `#${sectionID}`, {duration: 500})
}

/*
  Adds click event listener to all menu items
  @params: null
  @returns: null
*/
let initMenu = () => {
  let menuItems = document.getElementsByClassName('menu-item');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', scrollTo)
  }
}

/*
  Adds click event listener to the burger button
  @params: null
  @returns: null
*/
let initDrawer = () => {
  let burgers = document.getElementsByClassName('burger');

  for (var i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener('click', toggleDrawer);
  }
}

exports.initDrawer = initDrawer;
exports.initMenu = initMenu;
