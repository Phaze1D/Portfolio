


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
    document.getElementById('drawer').classList.add('open')
  }
}

exports.initDrawer = initDrawer;
