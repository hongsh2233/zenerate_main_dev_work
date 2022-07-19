import _debounce from 'lodash.debounce'

type OPT_TYPE = {
  initial?: boolean
}

const debounceFunction = (fn: typeof Function, delay = 0, throttle = false) => {
  return _debounce((...args) => fn(...args), delay, {
    leading: throttle,
  })
}

const useDebounce = (fn, delay, opt: OPT_TYPE = {}) => {
  const initial = $ref(opt.initial || false)
  return debounceFunction(fn, delay, initial)
}

export default useDebounce
