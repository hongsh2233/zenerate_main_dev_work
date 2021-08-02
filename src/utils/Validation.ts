const stringValidationFunction = (v: any): boolean => {
  return !!v && typeof v === 'string' && v.length > 0
}

const emailValidationFunction = (v: any): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return !!v && typeof v === 'string' && emailRegex.test(v)
}

export default {
  string: stringValidationFunction,
  email: emailValidationFunction,
}
