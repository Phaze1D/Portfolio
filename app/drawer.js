let initDrawer = () => {
  let burger = document.getElementById('burger');
  burger.addEventListener('click', (event) => {
    let drawer = document.getElementById('drawer');
    drawer.classList.toggle('open');
  });
}

exports.initDrawer = initDrawer;
