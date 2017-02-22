

let rippleAnimation = (color, event) => {
	let posX = event.currentTarget.offsetTop;
	let posY = event.currentTarget.offsetLeft;
	let	buttonWidth = event.currentTarget.clientWidth;
	let	buttonHeight = event.currentTarget.clientHeight;

	
  let child = event.currentTarget.getElementsByClassName('ripple')[0];
  if(child) event.currentTarget.removeChild( child );

  let span = document.createElement("span");
  span.className = "ripple";
	event.currentTarget.prepend(span);

	if (buttonWidth >= buttonHeight) {
		buttonHeight = buttonWidth;
	} else {
		buttonWidth = buttonHeight;
	}

	let x = event.offsetX - buttonWidth / 2;
	let y = event.offsetY - buttonHeight / 2;

	span.style.width = `${buttonWidth}px`;
	span.style.height = `${buttonHeight}px`;
	span.style.top = `${y}px`;
	span.style.left = `${x}px`;
  span.style.backgroundColor = color;
  span.className = "ripple rippleEffect"
}

let rippleWrapper = () => {
  let wrapper = document.createElement("div");
  wrapper.className = "ripple-wrapper";
  return wrapper;
}

let initRipple = () => {
	let rippleParents = document.getElementsByClassName('has-ripple');

	for (var i = 0; i < rippleParents.length; i++) {
		let color = rippleParents[i].getAttribute('data-ripple-color')
    rippleParents[i].prepend(rippleWrapper())
		rippleParents[i].addEventListener('click', rippleAnimation.bind(this, color))
	}
}

exports.initRipple = initRipple;
