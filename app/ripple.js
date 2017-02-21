


let rippleChild = () => {
  let rippleMain = document.createElement("div");
  rippleMain.className = "ripple-main";

  let rippleObj = document.createElement("svg");
  rippleObj.className = "ripple-obj";

  let rippleUse = document.createElement("use");
  rippleUse.className = "ripple";

  rippleUse.setAttribute("width", 100);
  rippleUse.setAttribute("height", 100);
  rippleUse.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")
  rippleUse.setAttribute("xlink:href", "#ripple-sym");


  rippleObj.appendChild(rippleUse)
  rippleMain.appendChild(rippleObj)
  return rippleMain
}

let rippleAnimation = (fill, event) => {
  let rio = event.target.getElementsByClassName('ripple-obj')[0]
  rio.style.fill = fill

  let ruse = event.target.getElementsByTagName('use')[0]
  ruse.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px) scale(1)`;

}


let initRipple = () => {
  let rippleParents = document.getElementsByClassName('has-ripple');

  for (var i = 0; i < rippleParents.length; i++) {
    rippleParents[i].appendChild(rippleChild())
    let fill = rippleParents[i].getAttribute('data-ripple-fill')
    rippleParents[i].addEventListener('mousedown', rippleAnimation.bind(this, fill))
  }
}

exports.initRipple = initRipple;


// eoffsetX = if event.offsetX? then event.offsetX else eoffsetX
//     eoffsetY = if event.offsetY? then event.offsetY else eoffsetY
//
//     @mouseD = true
//
//     rio = $(event.target).find('.ripple-obj')
//     rio.css(fill: @data().fill)
//
//     ripple = $(event.target).find('.js-ripple')
//     ripple.velocity 'stop'
//     ripple.velocity(
//       p:
//         translateZ: '0'
//         translateX: eoffsetX
//         translateY: eoffsetY
//         transformOriginX: '1px'
//         transformOriginY: '1px'
//         scale: 0
//         opacity: 0.5
//       o:
//         duration: 0
//
//     ).velocity
//       p:
//         scale: Math.sqrt(Math.pow((event.target.offsetWidth / 2) +
//                Math.abs( (event.target.offsetWidth / 2) - eoffsetX ), 2) +
//                Math.pow((event.target.offsetHeight / 2) +
//                Math.abs( (event.target.offsetHeight / 2) - eoffsetY ), 2))
//       o:
//         duration: 250
//         easing: "linear"
