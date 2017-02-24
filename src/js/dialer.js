


/*
  Toggles the FAB dials
  @params: clickEvent
  @returns: null
*/
let toggleDials = ( event ) => {
  let dialer = document.getElementById('share-dialer');
  if(dialer.classList.contains('show')){
    dialer.classList.remove('show');
    dialer.classList.add('hide');
  } else {
    dialer.classList.add('show');
    dialer.classList.remove('hide');
  }
}

/*
  Adds click event listener to FAB Dialer
  @params: null
  @returns: null
*/
let initDialer = () => {
  let dButton = document.getElementById('share-dialer-button');
  dButton.addEventListener('click', toggleDials)
}

exports.initDialer = initDialer
