// @ts-ignore
import 'fullpage.js/vendors/scrolloverflow.min'
import '/Libraries/fullpage/scrollOverflowReset/fullpage.scrollOverflowReset.min'
import '/Libraries/fullpage/parallax/fullpage.parallax.min'
import '/Libraries/fullpage/offsetSections/fullpage.offsetSections.min'
import fullpageKeys from '/Config/fullpage'
import fullpage from 'fullpage.js/dist/fullpage.extensions.min'

const defaultOption: Partial<FullPageJsOptions> = {
  responsiveWidth: 1280,
  responsiveHeight: 760,
  // scrollOverflow: true,
  scrollOverflowReset: true,
  parallax: true,
  offsetSections: true,
  ...fullpageKeys,
}

export default class FullPage {
  private _options: FullPageJsOptions
  private _container: string
  public _fp: FullPageJs

  constructor() {
    this._container = undefined
    this._options = undefined
    this._fp = undefined
  }
  get options() {
    return this._options
  }
  get container() {
    return this._container
  }
  public init(container: string, options: FullPageJsOptions) {
    this.destroy()
    this._container = container
    this._options = {
      ...defaultOption,
      ...options,
    }
    console.log(this._options)
    this._fp = fullpage(this._container, this._options)
  }
  public destroy() {
    if (this._fp) {
      this._fp.destroy('all')
    }
  }
  public getSections() {
    return document?.querySelectorAll('.section') || []
  }
}
