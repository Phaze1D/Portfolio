export default class Jump {
  jump(parent, target, options = {}) {
    this.start = parent.scrollTop
    this.parent = parent
    this.options = {
      duration: options.duration,
      offset: options.offset || 0,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    }

    this.distance = typeof target === 'string'
      ? this.options.offset + document.querySelector(target).getBoundingClientRect().top - document.querySelector('header').clientHeight
      : target

    this.duration = typeof this.options.duration === 'function'
      ? this.options.duration(this.distance)
      : this.options.duration


    requestAnimationFrame(time => this._loop(time))
  }

  _loop(time) {
    if(!this.timeStart) {
      this.timeStart = time
    }

    this.timeElapsed = time - this.timeStart
    this.next = this.options.easing(this.timeElapsed, this.start, this.distance, this.duration)

    this.parent.scrollTop = this.next

    this.timeElapsed < this.duration
      ? requestAnimationFrame(time => this._loop(time))
      : this._end()
  }

  _end() {
    this.parent.scrollTop = this.start + this.distance

    typeof this.options.callback === 'function' && this.options.callback()
    this.timeStart = false
  }
}


let easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}
