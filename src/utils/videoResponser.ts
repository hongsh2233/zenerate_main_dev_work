export default class VideoResponser {
  options: Object

  constructor(selector) {
    const $video = document.querySelector(selector)
    this.options = {
      selector,
      breakpoints: { default: { src: $video.getAttribute('data-src') } },
    }

    $video.querySelectorAll('[data-src]').forEach(
      (element) =>
        (this.options['breakpoints'][element.getAttribute('data-mw')] = {
          src: element.getAttribute('data-src'),
        })
    )
    $video.innerHTML = ''

    this.responseVideo(this.options)
    this.resizer()
  }

  resizer() {
    window.addEventListener('resize', () => this.responseVideo(this.options))
  }

  responseVideo(options) {
    const { selector, breakpoints } = options
    let $video = document.querySelector(selector)
    const widthNow = $video.getAttribute('data-width-now') || null
    const maxBreakpoint = Math.max.apply(
      null,
      Object.keys(breakpoints)
        .filter((key) => +key <= +document.body.clientWidth)
        .map(Number)
    )
    const nowBreakpoint = isFinite(maxBreakpoint) ? maxBreakpoint : 'default'
    if (widthNow && widthNow == nowBreakpoint) return
    $video.setAttribute('data-width-now', nowBreakpoint)
    $video.src = breakpoints[nowBreakpoint].src
    $video.play()
  }
}
