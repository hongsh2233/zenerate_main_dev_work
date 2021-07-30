// @ts-ignore
import 'fullpage.js/vendors/scrolloverflow'
import '/Libraries/fullpage/offsetSections/fullpage.offsetSections.min'
import fullpage from 'fullpage.js/dist/fullpage.extensions.min'

const defaultOption: Partial<FullPageJsOptions> = {
  responsiveWidth: 1280,
  responsiveHeight: 760,
  // scrollOverflow: true,
  scrollOverflowReset: true,
  parallax: true,
  offsetSections: true,
}

export default class FullPage {
  private static readonly licenseKey = 'CE108429-34644C5A-BD3748C3-5A35CACF'
  private _options: FullPageJsOptions & {
    licenseKey: string
    offsetSectionsKey: string
  }
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
      licenseKey: FullPage.licenseKey,
      offsetSectionsKey: 'AC42F439-E9094621-9D793064-0A1F4D1A',
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
